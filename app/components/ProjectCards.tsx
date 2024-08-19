"use-client";
import React from "react";

const projectData = [
  {
    id: 1,
    date: "February 2024 - May 2024",
    image: "/assets/gmail-logo.png",
    position: "Web Developer Intern",

    company: "Accur8 Enterprise Solutions Inc.",
    link: "https://www.aesiph.com/",
    description: "",
    tags: ["MongoDB", "Express"],
  },
  {
    id: 1,
    date: "February 2024 - May 2024",
    image: "HTML-logo.png",
    position: "Web Developer Intern",

    company: "Accur8 Enterprise Solutions Inc.",
    link: "https://www.aesiph.com/",
    description: "",
    tags: ["MongoDB", "Express"],
  },
];

const ProjectCards = () => {
  return projectData.map((x) => {
    return (
      <div className="pb-8">
        <div className="flex flex-col rounded-lg w-full bg-white dark:bg-black/40 backdrop-blur-2xl md:max-w-6xl md:flex-row">
          <div className="flex flex-col justify-start p-6 ">
            <i className="text-m text-neutral-500 dark:text-neutral-300">
              {x.position}
            </i>
            <a className="text-xs w-fit">{x.date}</a>
            <a
              className="after:content-['_↗'] mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50"
              href={x.link}
              target="_blank"
            >
              {x.company}
            </a>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {x.description}
            </p>
            <div>
              {x.tags.map((key, index) => {
                return (
                  <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
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
