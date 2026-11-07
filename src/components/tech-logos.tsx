import type { ComponentType, CSSProperties, SVGProps } from "react";
import { AWS } from "@/components/ui/svgs/aws";
import { Electron } from "@/components/ui/svgs/electron";
import { Playwright } from "@/components/ui/svgs/playwright";
import { SQLite } from "@/components/ui/svgs/sqlite";
import { AngularJS } from "@/components/ui/svgs/angularjs";
import { Bash } from "@/components/ui/svgs/bash";
import { Docker } from "@/components/ui/svgs/docker";
import { Golang } from "@/components/ui/svgs/golang";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Linux } from "@/components/ui/svgs/linux";
import { MySQL } from "@/components/ui/svgs/mysql";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { PHP } from "@/components/ui/svgs/php";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { SQL } from "@/components/ui/svgs/sql";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import { Typescript } from "@/components/ui/svgs/typescript";

type Logo = ComponentType<SVGProps<SVGSVGElement>>;

// Brand logos for the main languages, frameworks and tools. Libraries don't belong here.
// Colours that depend on the theme (Go's blue, the AWS wordmark) are set in CSS via data-name.
export const LOGOS: Record<string, Logo> = {
  Go: Golang,
  TypeScript: Typescript,
  JavaScript: JavaScript,
  Python: Python,
  PHP: PHP,
  SQL: SQL,
  Bash: Bash,
  Laravel: Laravel,
  Angular: AngularJS,
  React: ReactLight,
  "Node.js": Nodejs,
  "Tailwind CSS": Tailwind,
  Docker: Docker,
  Linux: Linux,
  MySQL: MySQL,
  PostgreSQL: Postgresql,
  SQLite: SQLite,
  Electron: Electron,
  Playwright: Playwright,
  AWS: AWS,
};

/** Symbol id for a logo in /tech-logos.svg, e.g. "Node.js" -> "node-js".
 *  "+" and "#" are spelled out so "C", "C++" and "C#" don't all collapse to "c". */
export const logoId = (name: string) =>
  name.toLowerCase().replace(/\+/g, "plus").replace(/#/g, "sharp").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Published path of the logo sprite (built by src/pages/tech-logos.svg.ts). */
export const LOGO_SPRITE = "/tech-logos.svg";

// Each logo is drawn from one shared, cached sprite file instead of being inlined in the page,
// so a logo used in several cards costs its SVG once.
export function TechLogos({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="tech-logos" aria-label={label}>
      {items.map((name, index) => (
        <li key={name} className="tech-logo" data-name={name} tabIndex={0} aria-label={name} style={{ "--i": index } as CSSProperties}>
          {LOGOS[name] ? (
            <svg aria-hidden="true"><use href={`${LOGO_SPRITE}#${logoId(name)}`} /></svg>
          ) : (
            <span className="tech-logo-text" aria-hidden="true">{name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
