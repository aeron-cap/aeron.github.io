import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({ title, href, description, dates, tags, image, video, links, className }: Props) {
  return (
    <article className={cn("project-card amb-sheet", className)}>
      <div className="entry-heading">
        <h3 className="project-title">{title}</h3>
        <span className="entry-date">{dates}</span>
      </div>
      <p className="entry-description">{description}</p>
      <ul className="project-tags" aria-label={`${title} technologies`}>
        {tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <div className="project-meta">
        {links?.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`${title}: ${link.type}`}>
            {link.type} <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        ))}
        {href && !links?.some((link) => link.href === href) && (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-link">Visit project <ArrowUpRight size={13} aria-hidden="true" /></a>
        )}
      </div>
      {(image || video) && (
        <details className="project-preview">
          <summary>Preview {title}</summary>
          {video ? <video src={video} controls playsInline preload="none" aria-label={`${title} demonstration`} /> : <img src={image} alt={`${title} preview`} loading="lazy" />}
        </details>
      )}
    </article>
  );
}
