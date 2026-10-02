import { useEffect, useState } from "react";
import { DATA } from "@/data/resume";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(window.location.pathname.replace(/\/$/, "") || "/");
  }, []);

  return (
    <header className="site-header site-width">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="/" className="site-brand" aria-label={`${DATA.name} — home`}>
          <img src="/favicon.svg" alt="" className="brand-mark" width={32} height={32} />
          {/*<span className="brand-mark amb-sheet">{DATA.initials}</span>*/}
          {/*<span>{DATA.name}</span>*/}
        </a>
        <div className="nav-links">
          {DATA.navbar.map((item) => {
            const isExternal = item.href.startsWith("http");
            return (
              <a
                key={item.href}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="nav-link"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
