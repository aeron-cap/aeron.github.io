import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div>
      <p className="section-description">{DATA.sections.contact.text}</p>
      <div className="contact-links">
        {Object.entries(DATA.contact.social).filter(([, social]) => social.navbar).map(([key, social]) => (
          <a key={key} className="text-link" href={social.url} target={social.url.startsWith("http") ? "_blank" : undefined} rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}>
            {social.name} <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}

