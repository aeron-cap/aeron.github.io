"use-client";
import React from "react";

const experienceData = [
  {
    id: 1,
    position: "Web Developer Intern",
    duration: "February 2024 - May 2024",
    company: "Accur8 Enterprise Solutions Inc.",
    link: "https://www.aesiph.com/",
    description:
      "Developed a Billing Generation web application that the company will use to send billing information to its clients. Specifically assigned as one of the back-end developers to the project by using JavaScript, Postman, Docker, and MongoDB to verify API functionality, while following the Clean Architecture technique. Worked on creating the documentation for the Back-end, and for the Front-end to use as a reference.",
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "Cypress",
      "Figma",
    ],
  },
];

const ExperienceCards = () => {
  return experienceData.map((x) => (
    <div className="pb-8" key={x.id}>
      <div className="flex flex-col rounded-lg h-auto bg-white dark:bg-black/40 backdrop-blur-2xl transition ease-in-out delay-150 bg-black/40 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-200">
        <div className="flex flex-col justify-stretch p-6">
          <p className="text-m text-neutral-500 dark:text-neutral-300">
            {x.position}
          </p>
          <a className="text-xs w-fit">{x.duration}</a>
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
          <div className="flex flex-wrap gap-2">
            {x.tags.map((tag) => (
              <span
                key={tag} // Use tag as the key, assuming tags are unique
                className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ExperienceCards;
