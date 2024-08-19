"use-client";
import React from "react";

const projectData = [
  {
    id: 1,
    date: "2024",
    image: "/assets/gmail-logo.png",

    type: "BS Computer Engineering",
    title: "THESIS",
    link: "https://www.aesiph.com/",
    description:
      "Created a website that displays all parameters gathered by the sensors along with an AI feature, specifically fuzzy logic to automatically adjust and control motors, valves, and other components inside the hydroponic system.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "BootStrap",
      "SQL",
      "MySQL",
      "Figma",
      "Python",
    ],
  },
  {
    id: 1,
    date: "2024",
    image: "/assets/gmail-logo.png",

    type: "BS Computer Engineering",
    title: "THESIS",
    link: "https://www.aesiph.com/",
    description:
      "Created a website that displays all parameters gathered by the sensors along with an AI feature, specifically fuzzy logic to automatically adjust and control motors, valves, and other components inside the hydroponic system.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "BootStrap",
      "SQL",
      "MySQL",
      "Figma",
      "Python",
    ],
  },
];

const ProjectCards = () => {
  return projectData.map((x) => {
    return (
      <div className="pb-2">
        <div className="flex flex-col rounded-lg w-full transition ease-in-out delay-150 bg-black/40 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-200">
          <div className="flex flex-col justify-start p-6 ">
            <a className="text-m text-neutral-500 dark:text-neutral-300">
              {x.type}
            </a>
            <a className="text-xs">{x.date}</a>
            <a
              className="after:content-['_↗'] mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50"
              href={x.link}
              target="_blank"
            >
              {x.title}
            </a>
            <article className=" mb-4 text-neutral-600 dark:text-neutral-200">
              {x.description}
            </article>
            <div>
              {x.tags.map((key, index) => {
                return (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {x.tags[index]}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default ProjectCards;
