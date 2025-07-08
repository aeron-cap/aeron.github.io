"use client";
import React from "react";

const experienceData = [
  {
    id: 0,
    position: "Web Developer",
    duration: "September 2024 - Present",
    company: "Accur8 Enterprise Solutions Inc.",
    link: "https://www.aesiph.com/",
    description:
      "Creating and Maintaining Web Apps for the company's clients.",
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
      "Developed a Billing Generation web app to send billing info to clients. Assigned to backend using JavaScript, Postman, Docker, MongoDB, and Clean Architecture. Also wrote backend and frontend documentation.",
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
  const experienceData = [
    {
      id: 0,
      position: "Web Developer",
      duration: "September 2024 - Present",
      company: "Accur8 Enterprise Solutions Inc.",
      link: "https://www.aesiph.com/",
      description: "Creating and Maintaining Web Apps for the company's clients.",
      tags: ["Laravel", "Angular", "MySQL", "SQL", "PHP", "JavaScript", "Node.js", "AWS", "Git", "BitBucket", "DBeaver", "WAMP", "Asana"],
    },
    {
      id: 1,
      position: "Web Developer Intern",
      duration: "February 2024 - May 2024",
      company: "Accur8 Enterprise Solutions Inc.",
      link: "https://www.aesiph.com/",
      description: "Developed a Billing Generation web app to send billing info to clients. Assigned to backend using JavaScript, Postman, Docker, MongoDB, and Clean Architecture. Also wrote backend and frontend documentation.",
      tags: ["MongoDB", "Express", "React", "Node", "Git", "GitHub", "Postman", "Docker", "Cypress", "Figma"],
    },
  ];

  const getTagColor = (tag: string): string => {
    const colorMap: Record<string, string> = {
      "Laravel": "text-red-400",
      "PHP": "text-purple-400",
      "Node.js": "text-green-400",
      "Node": "text-green-400",
      "Express": "text-yellow-400",
      "MongoDB": "text-green-500",
      "MySQL": "text-blue-400",
      "SQL": "text-blue-400",

      "Angular": "text-red-500",
      "React": "text-cyan-400",
      "JavaScript": "text-yellow-300",

      "AWS": "text-orange-400",
      "Docker": "text-blue-500",

      "Git": "text-orange-500",
      "GitHub": "text-white",
      "BitBucket": "text-blue-600",

      "Postman": "text-orange-400",
      "DBeaver": "text-blue-300",
      "WAMP": "text-purple-500",
      "Asana": "text-orange-400",
      "Cypress": "text-green-500",
      "Figma": "text-purple-400",
    };

    return colorMap[tag] || "text-green-300";
  };

  return (
    <div className="space-y-6 text-sm md:text-base font-mono text-green-400">
      <p className="text-green-500">$ cat experience.json</p>
      <pre className="whitespace-pre-wrap">{`[\n`}</pre>
      {experienceData.map((x, index) => (
        <div key={x.id} className="pl-4 border-l border-green-400 space-y-2">
          <p>{`  {`}</p>
          <p>
            &nbsp;&nbsp;"position": <span className="text-green-300">"{x.position}",</span>
          </p>
          <p>
            &nbsp;&nbsp;"company":{" "}
            <a
              href={x.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-400 hover:text-white"
            >
              "{x.company}"
            </a>
            ,
          </p>
          <p>
            &nbsp;&nbsp;"duration": <span className="text-green-300">"{x.duration}",</span>
          </p>
          <p>
            &nbsp;&nbsp;"description": <span className="text-green-300">"{x.description}",</span>
          </p>
          <p>&nbsp;&nbsp;"technologies": [</p>
          <ul className="list-none pl-8">
            {x.tags.map((tag, i) => (
              <li key={tag} className={getTagColor(tag)}>
                &nbsp;&nbsp;&nbsp;&nbsp;"{tag}"{i < x.tags.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
          <p>&nbsp;&nbsp;]</p>
          <p>{`  }${index < experienceData.length - 1 ? "," : ""}`}</p>
        </div>
      ))}
      <pre className="whitespace-pre-wrap">{`]`}</pre>
      <p className="inline-block">
        $ <span className="animate-pulse">_</span>
      </p>
    </div>
  );
};

export default ExperienceCards;
