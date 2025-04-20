"use-client";
import React from "react";

const experienceData = [
  {
    id: 0,
    position: "Web Developer",
    duration: "September 2024 - Present",
    company: "Accur8 Enterprise Solutions Inc.",
    link: "https://www.aesiph.com/",
    description: "Creating and Maintaning Web Apps for the company's clients.",
    tags: [
      "Laravel",
      "Angular",
      "MySQL",
      "SQL",
      "PHP",
      "JavaScript",
      "Node.js",
      "AWS",
      "Git",
      "BitBucket",
      "DBeaver",
      "WAMP",
      "Asana",
    ],
  },
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
  return (
    <div className="max-w-screen-lg mx-auto">
      {experienceData.map((x) => (
        <div className="pb-8" key={x.id}>
          <div className="flex flex-col rounded-lg h-auto bg-whitebackdrop-blur-2xl transition ease-in-out delay-150 bg-black/40 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl duration-200">
            <div className="flex flex-col justify-stretch p-6 md:p-8">
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-md text-slate-50">{x.position}</p>
                <a className="text-xs md:text-sm text-slate-50">{x.duration}</a>
              </div>
              <a
                className="after:content-['_↗'] mb-2 text-lg md:text-xl font-medium text-cyan-100"
                target="_blank"
              >
                {x.company}
              </a>
              <p className="mb-4 text-sm md:text-base text-slate-50">
                {x.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {x.tags.map((tag) => (
                  <span
                    key={tag}
                    className="w-fit bg-blue-900 text-blue-200 text-xs md:text-sm font-medium px-2.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCards;
