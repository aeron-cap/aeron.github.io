import { DATA } from "@/data/resume";
import { TechLogos } from "@/components/tech-logos";

export default function WorkSection() {
  return (
    <div className="experience-list">
      {DATA.work.map((work) => (
        <article key={`${work.company}-${work.title}`} className="work-entry">
          <div className="entry-heading">
            <div className="entry-title">
              <h3>{work.title}</h3>
              {work.technologies.length > 0 && <TechLogos items={work.technologies} label={`${work.title} technologies`} />}
            </div>
            <span className="entry-date">{work.start} — {work.end ?? DATA.sections.work.presentLabel}</span>
          </div>
          <p className="entry-subtitle">{work.company} · {work.location}</p>
          <p className="entry-description">{work.description}</p>
        </article>
      ))}
    </div>
  );
}
