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
      description: "Created a website that displays all parameters gathered by the sensors along with an AI feature, specifically fuzzy logic to automatically adjust and control motors, valves, and other components inside the hydroponic system.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "BootStrap", "MySQL", "Python"],
    },
    {
      id: 2,
      date: "2023",
      type: "Software Design Course",
      title: "University Shop",
      link: "https://github.com/aeron-cap/University_Shop",
      target: "_blank",
      description: "Developed a local host uniform and book ordering system for the University. Along with a Log-in system, a full-fledged UI and an Admin page. Mainly assigned as the backend developer.",
      tags: ["Java", "Swing", "MySQL", "Xammp", "Figma"],
    },
    {
      id: 3,
      date: "2023",
      type: "Deep Learning Course",
      title: "Cataract Detection",
      link: "/",
      target: "_self",
      description: "Generated a model of 94.6% confidence level to detect cataract in patients. And manually annotated hundreds of pupils for training.",
      tags: ["Python", "Tensorflow", "Jupyter", "GoogleColab"],
    },
    {
      id: 4,
      date: "2023",
      type: "CISCO",
      title: "Network for a 5 storey building inside campus",
      link: "/",
      target: "_self",
      description: "Created an addressing table for the whole building complete with IPv4, subnetting, DHCP, VLAN, security, End points, and most of the fundamentals.",
      tags: ["Packet Tracer", "Networking Fundamentals", "Network Security"],
    },
  ];

  const getTagColor = (tag: string): string => {
    const colorMap: Record<string, string> = {
      Laravel: "text-red-400",
      PHP: "text-purple-400",
      "Node.js": "text-green-400",
      Node: "text-green-400",
      Express: "text-yellow-400",
      MongoDB: "text-green-500",
      MySQL: "text-blue-400",
      SQL: "text-blue-400",
      Python: "text-yellow-500",
      Java: "text-orange-500",
      Angular: "text-red-500",
      React: "text-cyan-400",
      JavaScript: "text-yellow-300",
      Tailwind: "text-cyan-500",
      HTML: "text-orange-500",
      CSS: "text-blue-500",
      BootStrap: "text-purple-800",
      AWS: "text-orange-400",
      Docker: "text-blue-500",
      Git: "text-orange-500",
      GitHub: "text-white",
      BitBucket: "text-blue-600",
      Postman: "text-orange-400",
      DBeaver: "text-blue-300",
      WAMP: "text-purple-500",
      Xammp: "text-orange-500",
      Asana: "text-orange-400",
      Cypress: "text-green-500",
      Figma: "text-purple-400",
      "Next.js": "text-gray-500",
    };

    return colorMap[tag] || "text-green-300";
  };

  return (
    <div className="space-y-6 text-sm md:text-base font-mono text-green-400">
      <p className="text-green-500">$ find ./projects -type f -name "*.project"</p>
      <div className="space-y-8">
        {projectData.map((project) => (
          <div key={project.id} className="pl-4 border-l border-green-400 space-y-2">
            <p className="text-green-500">$ cat <a className="text-white">{project.title.toLowerCase().replace(/\s+/g, '_')}.project</a></p>
            <div className="pl-4 space-y-1">
              <p>
                <span className="text-green-300">name:</span> <a className="text-white"> "{project.title}"  </a>
              </p>
              <p>
                <span className="text-green-300">year:</span> <a className="text-white"> {project.date}   </a>
              </p>
              <p>
                <span className="text-green-300">type:</span> <a className="text-white"> "{project.type}"  </a>
              </p>
              <p>
                <span className="text-green-300">description:</span> <a className="text-white"> "{project.description}" </a>
              </p>
              <p>
                <span className="text-green-300">technologies:</span> [{project.tags.map((tag, i) => (
                  <span key={tag} className={getTagColor(tag)}>
                    "{tag}"{i < project.tags.length - 1 ? ", " : ""}
                  </span>
                ))}]
              </p>
              <p>
                <span className="text-green-300">link:</span>{" "}
                <a
                  href={project.link}
                  target={project.target}
                  className="underline text-white hover:text-green-400"
                >
                  {project.link}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="inline-block">
        $ <span className="animate-pulse">_</span>
      </p>
    </div>
  );
};

export default ProjectCards;
