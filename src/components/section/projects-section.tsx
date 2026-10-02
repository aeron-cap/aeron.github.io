import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

export default function ProjectsSection() {
  return (
    <div>
      <p className="section-description">{DATA.sections.projects.text}</p>
      <div className="project-list">
        {DATA.projects.map((project) => (
          <ProjectCard
            href={project.href}
            key={project.title}
            title={project.title}
            description={project.description}
            dates={project.dates}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}
