import { Icons } from "@/components/icons";
import { House } from "lucide-react";
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

export const DATA = {
  name: "Aeron Caponpon - Fullstack Developer",
  initials: "AC",
  url: "https://aeron.is-a.dev",
  location: "Batangas, PH",
  locationLink: "",
  description:
    "A fullstack dev from the Philippines, likes backend stuff, and can tolerate frontend.",
  summary:
    "A dev with almost 2 years of professional experience and 6 years of programming experience. I build things myself if the available ones does not suit my needs. From my [personal finance mobile application](/#projects), [load testers](/#projects) to test my locally hosted APIs, to experiementing with local AI agents.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: {
      order: 2,
      enabled: true,
      heading: "Work Experience",
      presentLabel: "Present",
    },
    skills: { order: 3, enabled: true, heading: "Languages I ship with" },
    tools: {
      order: 4,
      enabled: true,
      heading: "Tools / Toolkits I use in production",
    },
    projects: {
      order: 5,
      enabled: true,
      label: "Project Index",
      heading: "",
      text: "Stuff that I made myself and/or contributed to.",
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
  },
  photos: [],
  skills: [
    { name: "PHP", icon: PHP },
    { name: "Typescript", icon: Typescript },
    { name: "Javascript", icon: JavaScript },
    { name: "Go", icon: Golang },
    { name: "Python", icon: Python },
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
    { name: "Angular", icon: AngularJS },
    { name: "React", icon: ReactLight },
    { name: "TailwindCSS", icon: Tailwind },
    { name: "Docker", icon: Docker },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL", icon: MySQL },
    { name: "DBeaver", icon: DBeaver },
    { name: "Linux", icon: Linux },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    // { href: "/blog", icon: Library, label: "Blog" },
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
      company: "Accur8 Enterprise Solutions Inc.",
      href: "",
      badges: [],
      location: "Manila, PH",
      title: "Junior Fullstack Developer",
      logoUrl: "https://aesiph.com/images/logo.png",
      start: "September 2024",
      end: undefined,
      description:
        "Improved the company's SaaS product and catered customer feature requests using Laravel and Angular. Improved performance of heavy report queries by 95% in Laravel and SQL used by accountants. Currently assigned as Lead dev to an Android Project to be offered by the company as an additional SaaS product.",
    },
    {
      company: "Accur8 Enterprise Solutions Inc",
      href: "",
      badges: [],
      location: "Manila, PH",
      title: "Web Developer Intern",
      logoUrl: "https://aesiph.com/images/logo.png",
      start: "February 2024",
      end: "May 2024",
      description:
        "Initialized an internal Billing application using React, MongoDB and Docker. Created documentation and ERD for the project.",
    },
  ],
  projects: [
    {
      title: "Montra",
      href: "",
      dates: "Ongoing",
      active: true,
      description:
        "A fullstack personlized finance tracking application used personally. Will be avaialble for public once I finalized stuff.",
      technologies: [
        "TypeScript",
        "NestJS",
        "Kotlin",
        "PostgreSQL",
        "Docker",
        "Android",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aeron-cap/montra",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-previews/montra-git.png",
      video: "",
    },
    {
      title: "SALN Tracker",
      href: "",
      dates: "Ongoing",
      active: true,
      description: "Contributed to the Saln Tracker - Bettergov in creating the resources page and updating the SALN records of the officials.",
      technologies: ["React", "Typescript", "Firestore"],
      links: [
        {
          type: "Website",
          href: "https://saln.bettergov.ph/resources",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JHNLWHD/saln-tracker-ph",
          icon: <Icons.github className="size-3"/>
        }
      ],
      image: "",
      video: "/project-previews/Saln-tracker.mp4",
    },
    {
      title: "Montra CLI",
      href: "",
      dates: "Ongoing",
      active: true,
      description:
        "The same finance tracking but taken to the CLI with BubbleTea TUI framework for Golang. The sole purpose of this projects is for me to learn Golang",
      technologies: ["Golang", "BubbleTea"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aeron-cap/montra-cli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-previews/montra-cli.png",
      video: "",
    },
    {
      title: "Load Tester",
      href: "",
      dates: "Ongoing",
      active: true,
      description:
        "A simple loadtester written in Python to test API endpoints under heave load.",
      technologies: ["Python"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aeron-cap/load-tester",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-previews/load-tester-git.png",
      video: "",
    },
  ],
  education: [
    {
      school: "Batangas State Uninversity - Alangilan",
      href: "https://batstateu.edu.ph/",
      degree: "Bachelor of Science in Computer Engineering",
      logoUrl: "/batstateu.png",
      start: "2020",
      end: "2024",
    },
  ],
  hackathons: [
    // {
    //   title: "StormHacks 2021",
    //   dates: "April 24th - 25th, 2021",
    //   location: "Burnaby, BC (Remote)",
    //   description: "Built a multiplayer browser game where players collaboratively debug a shared codebase before a timer runs out.",
    //   image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/bugout",
    //     },
    //   ],
    // },
  ],
} as const;
