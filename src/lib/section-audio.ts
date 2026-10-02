const MASTER_VOLUME = 0.08;

function createMechanicalSound(context: AudioContext) {
  const duration = 0.018;
  const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * duration), context.sampleRate);
  const samples = buffer.getChannelData(0);
  // One pawl impact per tooth; a double impact sounds like a fast mini-burst
  // even when the wheel is turning slowly.
  const impacts = [[0, 1]];
  let seed = 1729;
  let previousNoise = 0;
  let peak = 0;

  for (let index = 0; index < samples.length; index++) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const noise = seed / 0xffffffff * 2 - 1;
    const sharpNoise = (noise - previousNoise) * 0.5;
    previousNoise = noise;
    const time = index / context.sampleRate;
    let sample = 0;

    for (const [offset, strength] of impacts) {
      const elapsed = time - offset;
      if (elapsed < 0) continue;
      const attack = Math.min(1, elapsed / 0.00012);
      const impact = sharpNoise * 0.78 * Math.exp(-elapsed / 0.0018);
      // Short, inharmonic resonances give the impact a metal-and-spring body.
      const metal = Math.sin(2 * Math.PI * 2350 * elapsed) * 0.3 * Math.exp(-elapsed / 0.004)
        + Math.sin(2 * Math.PI * 4870 * elapsed) * 0.18 * Math.exp(-elapsed / 0.006)
        + Math.sin(2 * Math.PI * 7930 * elapsed) * 0.1 * Math.exp(-elapsed / 0.0025);
      const body = Math.sin(2 * Math.PI * 920 * elapsed)
        * 0.16 * Math.exp(-elapsed / 0.006);
      sample += strength * attack * (impact + metal + body);
    }

    samples[index] = sample;
    peak = Math.max(peak, Math.abs(sample));
  }

  // Normalize the transients instead of burying them behind a quiet bandpass.
  // Leave headroom, and taper the end so stopping the buffer creates no extra pop.
  const level = 0.86 / Math.max(peak, 0.001);
  for (let index = 0; index < samples.length; index++) {
    const tail = Math.min(1, (samples.length - index - 1) / (context.sampleRate * 0.003));
    samples[index] *= level * tail;
  }
  return buffer;
}

function createPenClick(context: AudioContext) {
  const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * 0.065), context.sampleRate);
  const samples = buffer.getChannelData(0);
  // A light plastic button press followed by the sharper spring-latch snap.
  const impacts = [[0, 0.55], [0.018, 1], [0.027, 0.12]];
  let seed = 431;
  let previousNoise = 0;
  let peak = 0;

  for (let index = 0; index < samples.length; index++) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const noise = seed / 0xffffffff * 2 - 1;
    const sharpNoise = (noise - previousNoise) * 0.5;
    previousNoise = noise;
    const time = index / context.sampleRate;
    let sample = 0;

    for (const [offset, strength] of impacts) {
      const elapsed = time - offset;
      if (elapsed < 0) continue;
      const attack = Math.min(1, elapsed / 0.0002);
      const snap = sharpNoise * 0.9 * Math.exp(-elapsed / 0.0022);
      const plastic = Math.sin(2 * Math.PI * 1540 * elapsed) * 0.28 * Math.exp(-elapsed / 0.0035)
        + Math.sin(2 * Math.PI * 3120 * elapsed) * 0.14 * Math.exp(-elapsed / 0.002);
      const spring = Math.sin(2 * Math.PI * 4260 * elapsed) * 0.08 * Math.exp(-elapsed / 0.006);
      sample += strength * attack * (snap + plastic + spring);
    }

    samples[index] = sample;
    peak = Math.max(peak, Math.abs(sample));
  }

  const level = 0.86 / Math.max(peak, 0.001);
  for (let index = 0; index < samples.length; index++) {
    const tail = Math.min(1, (samples.length - index - 1) / (context.sampleRate * 0.003));
    samples[index] *= level * tail;
  }
  return buffer;
}

export class SectionAudio {
  private context: AudioContext | null = null;
  private output: GainNode | null = null;
  private sound: AudioBuffer | null = null;
  private penClick: AudioBuffer | null = null;
  private enabled = false;
  private lastSound = 0;
  private lastPenClick = 0;

  private prepare() {
    if (!this.context) {
      this.context = new AudioContext();
      this.output = this.context.createGain();
      this.output.gain.value = MASTER_VOLUME;
      this.output.connect(this.context.destination);

      this.sound = createMechanicalSound(this.context);
      this.penClick = createPenClick(this.context);
    }
    return this.context;
  }

  restore() {
    this.prepare();
    this.enabled = true;
    this.unlock();
  }

  unlock() {
    if (this.enabled && this.context?.state === "suspended") {
      // Saved opt-in is not always enough to satisfy browser autoplay rules.
      // Try again from a trusted pointer/key gesture without blocking the UI.
      void this.context.resume().catch(() => {});
    }
  }

  async enable() {
    const context = this.prepare();
    await context.resume();
    if (this.context !== context) throw new Error("Audio was disposed before starting.");
    this.enabled = context.state === "running";
    if (!this.enabled) throw new Error("Audio could not be started.");
    this.output!.gain.value = MASTER_VOLUME;
  }

  mute() {
    this.enabled = false;
    if (this.context && this.output) {
      this.output.gain.value = 0;
    }
  }

  play() {
    // Distance-based detents can arrive quickly during a fling. Never queue a burst.
    const now = performance.now();
    if (now - this.lastSound < 16) return;
    if (this.playBuffer(this.sound)) this.lastSound = now;
  }

  playPenClick() {
    const now = performance.now();
    if (now - this.lastPenClick < 90) return;
    // A deliberate theme click takes priority over a recent scroll tick.
    if (this.playBuffer(this.penClick, true)) {
      this.lastPenClick = now;
      this.lastSound = now;
    }
  }

  private playBuffer(buffer: AudioBuffer | null, resumeOnGesture = false) {
    const context = this.context;
    const output = this.output;
    if (!this.enabled || !context || !output || !buffer || document.hidden) return false;
    if (context.state !== "running") {
      if (!resumeOnGesture || context.state !== "suspended") return false;
      const requestedAt = performance.now();
      void context.resume().then(() => {
        // Never leave a delayed click waiting for a later, unrelated gesture.
        if (this.context === context && performance.now() - requestedAt < 250) this.playBuffer(buffer);
      }).catch(() => {});
      return true;
    }

    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(output);
    source.start();
    source.onended = () => {
      source.disconnect();
    };
    return true;
  }

  dispose() {
    this.mute();
    void this.context?.close().catch(() => {});
    this.context = null;
    this.output = null;
    this.sound = null;
    this.penClick = null;
  }
}
