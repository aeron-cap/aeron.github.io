import { Fragment } from "react";
import { seededRandom } from "@/lib/topo";

interface Props {
  title: string;
  steps: readonly string[];
  flow?: boolean;
}

const WIDTH = 400;
const HEIGHT = 225;


function contourPaths(seed: string) {
  const rand = seededRandom(seed);
  const peaks = Array.from({ length: 2 }, (_, i) => ({
    x: WIDTH * (i === 0 ? 0.55 + rand() * 0.3 : 0.05 + rand() * 0.25),
    y: HEIGHT * (0.15 + rand() * 0.6),
    rings: i === 0 ? 16 : 7,
    spacing: i === 0 ? 15 : 11,
    warp: [1 + Math.floor(rand() * 3), 2 + Math.floor(rand() * 3)],
    phase: [rand() * Math.PI * 2, rand() * Math.PI * 2],
    amp: [0.12 + rand() * 0.1, 0.05 + rand() * 0.06],
  }));

  return peaks.flatMap((peak) =>
    Array.from({ length: peak.rings }, (_, ring) => {
      const radius = (ring + 1) * peak.spacing;
      const points = Array.from({ length: 73 }, (_, step) => {
        const angle = (step / 72) * Math.PI * 2;
        const r =
          radius *
          (1 +
            peak.amp[0] * Math.sin(peak.warp[0] * angle + peak.phase[0] + ring * 0.08) +
            peak.amp[1] * Math.sin(peak.warp[1] * angle + peak.phase[1]));
        return `${(peak.x + Math.cos(angle) * r * 1.35).toFixed(1)},${(peak.y + Math.sin(angle) * r).toFixed(1)}`;
      });
      return { d: `M${points.join("L")}Z`, major: ring % 4 === 3 };
    }),
  );
}

// Generated cover for projects without a screenshot: a contour map plus a one-line summary of how it works.
export function ProjectCover({ title, steps, flow }: Props) {
  return (
    <div className="project-cover" aria-hidden="true">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="xMidYMid slice">
        {contourPaths(title).map((path, i) => (
          <path key={i} d={path.d} className={path.major ? "contour contour-major" : "contour"} />
        ))}
      </svg>
      <div className="project-cover-steps">
        {steps.map((step, i) => (
          <Fragment key={step}>
            {i > 0 && <span className="project-cover-sep">{flow ? "→" : "·"}</span>}
            <span className="project-cover-step">{step}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
