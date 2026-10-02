import { DATA } from "@/data/resume";

export default function WorkSection() {
  return (
    <div className="experience-list">
      {DATA.work.map((work) => (
        <article key={`${work.company}-${work.title}`}>
          <div className="entry-heading">
            <h3>{work.title}</h3>
            <span className="entry-date">{work.start} — {work.end ?? DATA.sections.work.presentLabel}</span>
          </div>
          <p className="entry-subtitle">{work.company} · {work.location}</p>
          <p className="entry-description">{work.description}</p>
        </article>
      ))}
    </div>
  );
}
