import { type CSSProperties, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { DATA } from "@/data/resume";
import { ModeToggle } from "@/components/mode-toggle";
import { SectionAudio } from "@/lib/section-audio";

const LABEL_IDLE_MS = 1400;
const MINOR_LINES_PER_SECTION = 6;
const DETENTS_PER_SECTION = MINOR_LINES_PER_SECTION + 1;
const minorSteps = Array.from({ length: MINOR_LINES_PER_SECTION }, (_, index) => index + 1);
const RATCHET_STEP_PX = 48;
const SOUND_PREFERENCE_KEY = "portfolio-interface-sounds";

function saveSoundPreference(enabled: boolean) {
  try {
    localStorage.setItem(SOUND_PREFERENCE_KEY, enabled ? "on" : "off");
  } catch {
    // Sound still works for this page when browser storage is unavailable.
  }
}
const sectionLabels: Record<string, string> = {
  about: "About",
  work: "Experience",
  skills: "Languages",
  tools: "Tools",
  projects: "Projects",
  education: "Education",
  hackathons: "Hackathons",
  photos: "Photos",
  contact: "Contact",
  cv: "Resume",
};

const homeSections = [
  { id: "hero", label: "Intro" },
  ...Object.entries(DATA.sections)
    .filter(([, section]) => section.enabled)
    .sort(([, first], [, second]) => first.order - second.order)
    .map(([id, section]) => ({ id, label: sectionLabels[id] ?? section.heading })),
];

export default function Navbar({ pathname }: { pathname: string }) {
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState("hero");
  const [detent, setDetent] = useState(0);
  const [labelsVisible, setLabelsVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [soundSupported, setSoundSupported] = useState(true);
  const [soundPending, setSoundPending] = useState(false);
  const audio = useRef<SectionAudio | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const selection = useRef<{ id: string; expires: number } | null>(null);

  function revealLabels() {
    setLabelsVisible(true);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setLabelsVisible(false), LABEL_IDLE_MS);
  }

  useEffect(() => {
    setReady(true);
    const supported = typeof window.AudioContext === "function";
    setSoundSupported(supported);
    if (supported) {
      try {
        if (localStorage.getItem(SOUND_PREFERENCE_KEY) === "on") {
          audio.current = new SectionAudio();
          audio.current.restore();
          setSoundEnabled(true);
        }
      } catch {
        // A fresh page remains muted if storage/audio initialization is blocked.
        audio.current?.dispose();
        audio.current = null;
      }
    }
    const unlockAudio = () => audio.current?.unlock();
    window.addEventListener("pointerdown", unlockAudio, { capture: true, passive: true });
    window.addEventListener("keydown", unlockAudio, true);
    return () => {
      window.removeEventListener("pointerdown", unlockAudio, true);
      window.removeEventListener("keydown", unlockAudio, true);
      audio.current?.dispose();
      audio.current = null;
    };
  }, []);

  useEffect(() => {
    if (!isHome) return;
    revealLabels();

    let frame = 0;
    let scrollChanged = false;
    let previousY = window.scrollY;
    let ratchetDistance = 0;
    let previousDirection = 0;

    function update() {
      frame = 0;
      const y = window.scrollY;
      const delta = y - previousY;
      const distance = Math.abs(delta);
      const moved = scrollChanged && distance > 0;
      scrollChanged = false;
      previousY = y;
      const sections = homeSections.flatMap((section) => {
        const element = document.getElementById(section.id);
        return element ? [{ ...section, top: element.getBoundingClientRect().top + y }] : [];
      });
      if (!sections.length) return;

      const probe = y + window.innerHeight * 0.3;
      let index = 0;
      for (let candidate = 1; candidate < sections.length; candidate++) {
        if (sections[candidate].top <= probe) index = candidate;
      }
      // The final section must remain reachable even if it's shorter than the viewport.
      const pageEnd = document.documentElement.scrollHeight - window.innerHeight;
      if (pageEnd > 0 && y >= pageEnd - 2) index = sections.length - 1;

      // Native anchor scrolling may clamp near the footer. Keep the selected
      // section active rather than incorrectly highlighting the next short one.
      const navigating = selection.current && performance.now() < selection.current.expires;
      if (navigating) {
        const selectedIndex = sections.findIndex((section) => section.id === selection.current?.id);
        if (selectedIndex !== -1) index = selectedIndex;
      }

      const current = sections[index];
      const next = sections[index + 1];
      const progress = next ? Math.max(0, Math.min(0.999, (probe - current.top) / Math.max(1, next.top - current.top))) : 0;
      const nextDetent = index * DETENTS_PER_SECTION + Math.floor(progress * DETENTS_PER_SECTION);
      if (moved) {
        const direction = Math.sign(delta);
        if (direction !== previousDirection) ratchetDistance = 0;
        previousDirection = direction;
        ratchetDistance += distance;
        if (ratchetDistance >= RATCHET_STEP_PX) {
          audio.current?.play();
          // One impulse per distance step: slow travel = spaced clicks, fast
          // travel = rapid clicks. Cap at one per frame, never queue a backlog.
          ratchetDistance %= RATCHET_STEP_PX;
        }
      }
      if (selection.current && !navigating) selection.current = null;
      setActiveId(current.id);
      setDetent(nextDetent);
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    function onScroll() {
      scrollChanged = true;
      revealLabels();
      schedule();
    }

    function cancelSelection() {
      selection.current = null;
      schedule();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) cancelSelection();
    }

    function onVisibilityChange() {
      if (document.hidden) {
        ratchetDistance = 0;
        scrollChanged = false;
        previousY = window.scrollY;
        if (idleTimer.current) clearTimeout(idleTimer.current);
        setLabelsVisible(false);
      } else {
        previousY = window.scrollY;
        schedule();
      }
    }

    update();
    const observer = new ResizeObserver(schedule);
    const content = document.getElementById("main-content");
    if (content) observer.observe(content);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("wheel", cancelSelection, { passive: true });
    window.addEventListener("touchstart", cancelSelection, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("wheel", cancelSelection);
      window.removeEventListener("touchstart", cancelSelection);
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [isHome]);

  async function toggleSound() {
    if (soundEnabled) {
      audio.current?.mute();
      setSoundEnabled(false);
      saveSoundPreference(false);
      return;
    }
    setSoundPending(true);
    try {
      audio.current ??= new SectionAudio();
      await audio.current.enable();
      setSoundEnabled(true);
      saveSoundPreference(true);
      audio.current.play();
    } catch {
      audio.current?.dispose();
      audio.current = null;
      setSoundSupported(false);
    } finally {
      setSoundPending(false);
    }
  }

  return (
    <>
      <header className="site-header site-width">
        <nav className="site-nav" aria-label="Page links">
          <a href="/" className="site-brand" aria-label={`${DATA.name} — home`}>
            <img src="/favicon.svg" alt="" className="brand-mark" width={32} height={32} />
          </a>
          <div className="nav-links">
            <a href="/" className="nav-link" aria-current={isHome ? "page" : undefined}>Home</a>
            <a href="/cv" className="nav-link" aria-current={pathname.replace(/\/$/, "") === "/cv" ? "page" : undefined}>Resume</a>
            <ModeToggle onToggle={() => audio.current?.playPenClick()} />
          </div>
        </nav>
      </header>
      <button type="button" className="sound-toggle amb-button" onClick={toggleSound} disabled={!ready || !soundSupported || soundPending} aria-pressed={soundEnabled} aria-label={soundEnabled ? "Mute interface sounds" : "Enable interface sounds"} title={soundSupported ? "Opt-in scroll, section, and theme-toggle sounds" : "Interface audio is unavailable in this browser"}>
        {soundEnabled ? <Volume2 size={14} aria-hidden="true" /> : <VolumeX size={14} aria-hidden="true" />}
        <span>Sound {soundEnabled ? "on" : "off"}</span>
      </button>
      {isHome && (
        <nav className="section-rail" aria-label="Home sections" data-expanded={labelsVisible} data-ready={ready} style={{ "--rail-minor-lines": MINOR_LINES_PER_SECTION } as CSSProperties}>
          <ol className="section-rail-list">
            {homeSections.map((section, index) => (
              <li key={section.id}>
                <a className="section-rail-link" href={`#${section.id}`} aria-label={section.label} aria-current={activeId === section.id ? "location" : undefined} onClick={(event) => {
                  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                  revealLabels();
                  selection.current = { id: section.id, expires: performance.now() + 2000 };
                  setActiveId(section.id);
                  setDetent(index * DETENTS_PER_SECTION);
                  audio.current?.play();
                }}>
                  <span className="section-rail-line" aria-hidden="true" />
                  <span className="section-rail-label">{section.label}</span>
                </a>
                {index < homeSections.length - 1 && (
                  <div className="section-rail-detents" aria-hidden="true">
                    {minorSteps.map((step) => <span key={step} data-current={detent === index * DETENTS_PER_SECTION + step} />)}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </>
  );
}
