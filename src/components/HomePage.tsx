import type { ReactNode } from "react";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import PhotosSection from "@/components/section/photos-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const sectionComponents: Record<string, ReactNode> = {
  about: <div className="prose prose-sm max-w-none text-muted-foreground dark:prose-invert"><Markdown>{DATA.summary}</Markdown></div>,
  work: <WorkSection />,
  education: (
    <div className="experience-list">
      {DATA.education.map((education) => (
        <article key={education.school}>
          <div className="entry-heading">
            <h3>{education.school}</h3>
            <span className="entry-date">{education.start} — {education.end}</span>
          </div>
          <p className="entry-subtitle">{education.degree}</p>
          <a className="text-link mt-3" href={education.href} target="_blank" rel="noopener noreferrer">
            University <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </article>
      ))}
    </div>
  ),
  skills: (
    <ul className="skill-list" aria-label="Programming languages">
      {DATA.skills.map((skill) => <li key={skill.name} className="skill-tag">{skill.name}</li>)}
    </ul>
  ),
  tools: (
    <ul className="skill-list" aria-label="Tools and frameworks">
      {DATA.tools.map((tool) => <li key={tool.name} className="skill-tag">{tool.name}</li>)}
    </ul>
  ),
  projects: <ProjectsSection />,
  hackathons: <HackathonsSection />,
  photos: <PhotosSection />,
  contact: <ContactSection />,
  cv: (
    <div>
      <p className="section-description">{DATA.sections.cv.text}</p>
      <a href="/cv" className="text-link">View Resume <ArrowUpRight size={13} aria-hidden="true" /></a>
    </div>
  ),
};

export default function HomePage() {
  const orderedSections = Object.entries(DATA.sections)
    .filter(([, s]) => s.enabled)
    .sort(([, a], [, b]) => a.order - b.order)
    .filter(([key]) => sectionComponents[key]);

  return (
    <main>
      <section id="hero" className="hero" aria-labelledby="intro-heading">
        <div className="hero-intro">
          <div>
            <p className="eyebrow">Personal portfolio / Fullstack developer</p>
            <div className="hero-title">
              <h1 id="intro-heading">{DATA.name}<span className="text-primary">.</span></h1>
              <div className="hero-photo">
                <img src={DATA.avatarUrl} alt={DATA.name} width={80} height={80} />
              </div>
            </div>
            <p className="hero-description">{DATA.description}</p>
          </div>
        </div>
        <div className="hero-actions">
          <a href="/cv" className="amb-button action-link action-primary">View Resume <ArrowUpRight size={14} aria-hidden="true" /></a>
          {DATA.sections.projects.enabled && <a href="#projects" className="amb-button action-link">Explore projects <ArrowDown size={14} aria-hidden="true" /></a>}
        </div>
        <dl className="profile-strip amb-panel">
          <div>
            <dt className="eyebrow">Status</dt>
            <dd className="work-status">
              {DATA.openToWork && <span className="work-status-indicator" aria-hidden="true" />}
              {DATA.workStatus}
            </dd>
          </div>
          <div><dt className="eyebrow">Based in</dt><dd>{DATA.location}</dd></div>
          <div><dt className="eyebrow">Timezone</dt><dd>{DATA.timezone}</dd></div>
          <div><dt className="eyebrow">Interests</dt><dd>Backend systems &amp; DevOps</dd></div>
          <div><dt className="eyebrow">Currently Working On</dt><dd>News Aggregator</dd></div>
          {/*<div><dt className="eyebrow">Elsewhere</dt><dd><a className="text-link" href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={12} aria-hidden="true" /></a></dd></div>*/}
        </dl>
        <nav className="section-index" aria-label="On this page">
          {orderedSections.map(([key, section]) => <a key={key} href={`#${key}`}>{section.heading || key}</a>)}
        </nav>
      </section>

      {orderedSections.map(([key, section], index) => (
        <section id={key} key={key} className="info-section" aria-labelledby={`${key}-heading`}>
          <div className="section-label">
            <span className="section-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <h2 id={`${key}-heading`}>{section.heading || key}</h2>
          </div>
          <div className="section-body">{sectionComponents[key]}</div>
        </section>
      ))}
    </main>
  );
}
