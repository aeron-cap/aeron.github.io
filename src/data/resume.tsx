import { Icons } from "@/components/icons";
import { Activity, ChartNoAxesCombined, Database, FileText, GitBranch, House, Server, TestTube2, Workflow } from "lucide-react";
import { CV } from "@/data/cv";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { PHP } from "@/components/ui/svgs/php";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { HTML5 } from "@/components/ui/svgs/html";
import { CSS3 } from "@/components/ui/svgs/cssLogo";
import { SQL } from "@/components/ui/svgs/sql";
import { YAML } from "@/components/ui/svgs/yaml";
import { Bash } from "@/components/ui/svgs/bash";
import { Vercel } from "@/components/ui/svgs/vercel";
import { NetlifyLogo } from "@/components/ui/svgs/netlify";
import { Laravel } from "@/components/ui/svgs/laravel";
import { AngularJS } from "@/components/ui/svgs/angularjs";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import { MySQL } from "@/components/ui/svgs/mysql";
import { DBeaver } from "@/components/ui/svgs/dbeaver";
import { Linux } from "@/components/ui/svgs/linux";
import type { ReactNode } from "react";

interface Photo {
  src: string;
  alt: string;
}

interface Hackathon {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  links?: { title: string; href: string; icon: ReactNode }[];
}

export const DATA = {
  name: "Aeron Caponpon",
  workStatus: "Open to work",
  openToWork: true,
  initials: "",
  url: "https://aeron.is-a.dev",
  location: "Batangas, PH",
  locationLink: "",
  timezone: "GMT+8",
  description: "A full-stack developer from the Philippines, focused on backend systems, database performance, and DevOps.",
  summary: "A dev more than 2 years of professional experience and 6 years of programming experience. I build things myself if the available ones does not suit my needs. Constantly learning and upskilling everyday. Currently learning Golang and Software Infrastructure.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    skills: { order: 2, enabled: true, heading: "Languages I ship with" },
    tools: {
      order: 3,
      enabled: true,
      heading: "Tools / Toolkits I use in production",
    },
    work: {
      order: 4,
      enabled: true,
      heading: "Work Experience",
      presentLabel: "Present",
    },
    projects: {
      order: 5,
      enabled: true,
      label: "Project Index",
      heading: "Projects",
      text: "Personal projects and open-source contributions.",
    },
    education: { order: 6, enabled: true, heading: "Education" },
    hackathons: {
      order: 7,
      enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "",
    },
    photos: {
      order: 8,
      enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 9,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "You can contact me through my LinkedIn, Email, or Discord.",
    },
    cv: {
      order: 10,
      enabled: false,
      label: "CV",
      heading: "Resume",
      text: "Download my resume.",
    },
  },
   photos: [] as Photo[],
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "Go", icon: Golang },
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: JavaScript },
    { name: "PHP", icon: PHP },
    { name: "HTML", icon: HTML5 },
    { name: "CSS", icon: CSS3 },
    { name: "SQL", icon: SQL },
    { name: "Yaml", icon: YAML },
    { name: "Bash", icon: Bash },
  ],
  tools: [
    { name: "Vercel", icon: Vercel },
    { name: "Netlify", icon: NetlifyLogo },
    { name: "Laravel", icon: Laravel },
    { name: "Node.js", icon: Nodejs },
    { name: "NestJS", icon: Nodejs },
    { name: "React", icon: ReactLight },
    { name: "Angular", icon: AngularJS },
    { name: "TailwindCSS", icon: Tailwind },
    { name: "Docker", icon: Docker },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: MySQL },
    { name: "SQLite", icon: Database },
    { name: "DBeaver", icon: DBeaver },
    { name: "Linux", icon: Linux },
    { name: "Git", icon: GitBranch },
    { name: "CI/CD", icon: Workflow },
    { name: "Nginx", icon: Server },
    { name: "Prometheus", icon: Activity },
    { name: "Grafana", icon: ChartNoAxesCombined },
    { name: "Playwright", icon: TestTube2 },
  ],
  practices: ["Query optimization", "Unit testing", "End-to-end testing"],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/cv", icon: FileText, label: "Resume" },
  ],
  contact: {
    email: "aeroncaponpon.01@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aeron-cap",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aeron-caponpon",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:aeroncaponpon.01@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      discord: {
        name: "Discord",
        url: "https://discord.com/users/605926960077471765",
        icon: Icons.discord,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: CV.work[0].company,
      href: "",
      badges: [],
      location: CV.work[0].location,
      title: CV.work[0].roles[0].title,
      logoUrl: "https://aesiph.com/images/logo.png",
      start: "September 2024",
      end: undefined,
      description: "Build and maintain Laravel/Angular SaaS features for 8+ enterprise clients. Improved query performance by up to 95%, cut large Excel exports to under 10 seconds, and lead development for one client.",
    },
    {
      company: CV.work[0].company,
      href: "",
      badges: [],
      location: CV.work[0].location,
      title: CV.work[0].roles[1].title,
      logoUrl: "https://aesiph.com/images/logo.png",
      start: "February 2024",
      end: "May 2024",
      description: "Designed the backend and relational database for an internal billing app, and built a React prototype to kick-start MVP development.",
    },
  ],
  projects: [
    {
      title: CV.projects[0].title,
      href: "",
      dates: "Ongoing",
      active: true,
      description: "A self-hosted Go news aggregator with Python NLP scoring, turning RSS and Atom feeds into a daily digest of 5–10 relevant articles.",
      technologies: ["Go", "Python", "SQLite", "gofeed", "WordNet"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aeron-cap/news-aggregate-go",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: CV.projects[1].title,
      href: "",
      dates: CV.projects[1].dates,
      active: true,
      description: "A local AI assistant running a 3B model within 8 GB RAM, with persistent memory and sandboxed tools built in Go.",
      technologies: ["Go", "SQLite", "Linux", "LLM tool calling"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Boidfetch",
      href: "",
      dates: "Ongoing",
      active: true,
      description: "A Go system-information display inspired by fastfetch, with a boids simulation.",
      technologies: ["Go"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aeron-cap/boidfetch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-previews/boids-sim.gif",
      video: "",
    },
    // {
    //   title: "Load Tester",
    //   href: "",
    //   dates: "Ongoing",
    //   active: true,
    //   description: "A simple loadtester written in Python to test API endpoints under heavy load.",
    //   technologies: ["Python"],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/aeron-cap/load-tester",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "",
    // },
    {
      title: CV.contributions[0].title,
      href: "",
      dates: "Ongoing",
      active: true,
      description: "Contributed a sortable resources page to BetterGov PH’s SALN Tracker, delivered through a reviewed and merged 28-file pull request.",
      technologies: ["React", "TypeScript", "JSON"],
      links: [
        {
          type: "Website",
          href: "https://saln.bettergov.ph/resources",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JHNLWHD/saln-tracker-ph",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/project-previews/Saln-tracker.mp4",
    },
    {
      title: CV.contributions[1].title,
      href: "",
      dates: CV.contributions[1].dates,
      active: true,
      description: "Added Windows Git Credential Manager support to Hibi’s built-in Git add-on, including platform-specific configuration and docs.",
      technologies: ["Electron", "TypeScript", "Git", "Windows"],
      links: [],
      image: "",
      video: "",
    },
  ],
  education: [
    {
      school: CV.education.school,
      href: "https://batstateu.edu.ph/",
      degree: `${CV.education.degree} · GWA: ${CV.education.gwa}`,
      location: CV.education.location,
      coursework: CV.education.coursework,
      logoUrl: "/batstateu.png",
      start: "2020",
      end: CV.education.year,
    },
  ],
   hackathons: [] as Hackathon[],
} as const;
