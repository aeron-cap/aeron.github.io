"use-client";
import React from "react";

const ExperienceCards = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col rounded-lg bg-white dark:bg-black/40 backdrop-blur-2xl md:max-w-6xl md:flex-row">
        <div className="flex flex-col justify-start p-6 w-screen">
          <i className="text-m text-neutral-500 dark:text-neutral-300">
            Web Developer Intern
          </i>
          <a className="text-xs w-fit">February 2024 - May 2024</a>
          <a
            className="after:content-['_↗'] mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50"
            href="https://www.aesiph.com/"
            target="_blank"
          >
            Accur8 Enterprise Solutions Inc.
          </a>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Developed a Billing Generation web – application that the company
            will use to send billing information to its clients. Specifically
            assigned as one of the back-end developers to the project by using
            JavaScript, Postman, Docker, and MongoDB to verify API
            functionality, while following the Clean Architecture technique.
            Worked on creating the documentation for the Back-end, and for the
            Front-end to use as a reference.
          </p>
          <div>
            <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
              MongoDb
            </span>
            <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Express
            </span>
            <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
              React
            </span>
            <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Node
            </span>
            <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Git
            </span>
            <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
              GitHub
            </span>
            <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Postman
            </span>
            <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Docker
            </span>
            <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Cypress
            </span>
            <span className="w-fit bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Figma
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCards;
