"use-client";
import React from "react";

const projectData = [
  {
    id: 0,
    date: "2024",
    type: "Portfolio",
    title: "Aeron Caponpon",
    link: "/",
    target: "_self",
    description: "Created a portfolio to learn Next.js",
    tags: ["Next.js", "Tailwind", "Figma"],
  },
  {
    id: 1,
    date: "2024",
    type: "BS Computer Engineering",
    title: "THESIS",
    link: "https://github.com/aeron-cap/farmcup-website",
    target: "_blank",
    description:
      "Created a website that displays all parameters gathered by the sensors along with an AI feature, specifically fuzzy logic to automatically adjust and control motors, valves, and other components inside the hydroponic system.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "BootStrap", "MySQL", "Python"],
  },
  {
    id: 2,
    date: "2023",
    type: "Software Design Course",
    title: "University Shop",
    link: "https://github.com/aeron-cap/University_Shop",
    target: "_blank",
    description:
      "Developed a local host uniform and book ordering system for the University. Along with a Log-in system, a full-fledged UI and an Admin page. Mainly assigned as the backend developer.",
    tags: ["Java", "Swing", "MySQL", "Xammp", "Figma"],
  },
  {
    id: 3,
    date: "2023",
    type: "Deep Learning Course",
    title: "Cataract Detection",
    link: "/",
    target: "_self",
    description:
      "Generated a model of 94.6% confidence level to detect cataract in patients. And manually annotated hundreds of pupils for training.",
    tags: ["Python", "Tensorflow", "Jupyter", "GoogleColab"],
  },
  {
    id: 4,
    date: "2023",
    type: "CISCO",
    title: "Network for a 5 storey building inside campus",
    link: "/",
    target: "_self",
    description:
      "Created an addressing table for the whole building complete with IPv4, subnetting, DHCP, VLAN, security, End points, and most of the fundamentals.",
    tags: ["Packet Tracer", "Networking Fundamentals", "Network Security"],
  },
];

const ProjectCards = () => {
  return (
    <>
      {projectData.map((x) => (
        <div
          className="flex flex-col bg-black/40 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl transition-transform duration-300 rounded-lg p-4 sm:p-6 text-neutral-800 dark:text-neutral-50"
          key={x.id}
        >
          <a className="text-xs text-neutral-500 dark:text-neutral-300">
            {x.type}
          </a>
          <a className="text-xs">{x.date}</a>
          <a
            className="text-lg sm:text-xl font-medium mb-2"
            href={x.link}
            target={x.target}
          >
            {x.title}
          </a>
          <article className="mb-4 text-neutral-600 dark:text-neutral-200 text-sm sm:text-base">
            {x.description}
          </article>
          <div className="flex flex-wrap gap-2">
            {x.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCards;
