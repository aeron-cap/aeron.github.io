import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

export default function ProjectsSection({ kind, text }: { kind: "project" | "contribution"; text?: string }) {
  const projects = DATA.projects.filter((project) => project.kind === kind);

  return (
    <div>
      {text && <p className="section-description">{text}</p>}
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            href={project.href}
            key={project.title}
            title={project.title}
            description={project.description}
            dates={project.dates}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            cover={"cover" in project ? project.cover : undefined}
            featured={"featured" in project && project.featured}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}
