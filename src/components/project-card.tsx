import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Play } from "lucide-react";
import { ProjectCover } from "@/components/project-cover";
import { TechLogos } from "@/components/tech-logos";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  /** Heavy animated image (e.g. a GIF). `image` is shown as its still poster; the animation loads on click. */
  animation?: string;
  cover?: { flow: boolean; steps: readonly string[] };
  featured?: boolean;
  links?: readonly {
    icon: ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({ title, href, description, dates, tags, image, video, animation, cover, featured, links, className }: Props) {
  return (
    <article className={cn("project-card amb-sheet", featured && "project-card-featured", className)}>
      <div className="project-media">
        {video ? (
          // No controls: clicking the video plays or pauses it (wired up in index.astro).
          <button type="button" className="project-video" data-video-toggle aria-label={`Play ${title} demo`}>
            <video src={video} muted playsInline preload="metadata" />
            <span className="project-video-play" aria-hidden="true"><Play size={18} fill="currentColor" /></span>
          </button>
        ) : animation && image ? (
          // Still poster first; clicking loads and plays the animation, clicking again returns to the poster.
          <button type="button" className="project-video" data-animation-toggle data-animation={animation} aria-label={`Play ${title} demo`}>
            <img src={image} alt={`${title} preview`} loading="lazy" decoding="async" />
            <span className="project-video-play" aria-hidden="true"><Play size={18} fill="currentColor" /></span>
          </button>
        ) : image ? (
          <img src={image} alt={`${title} preview`} loading="lazy" decoding="async" />
        ) : (
          <ProjectCover title={title} steps={cover?.steps ?? tags} flow={cover?.flow} />
        )}
      </div>
      <div className="project-body">
        <div className="entry-title">
          <h3 className="project-title">{title}</h3>
          <TechLogos items={tags} label={`${title} technologies`} />
        </div>
        <p className="entry-description">{description}</p>
        <div className="project-footer">
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
          <span className="entry-date">{dates}</span>
        </div>
      </div>
    </article>
  );
}
