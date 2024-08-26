"use client";
import React from "react";
import ExperienceCards from "../components/ExperienceCards";

const Experience = () => {
  return (
    <main
      id="projects"
      className="flex flex-col justify-start items-center h-fit w-screen"
    >
      <div className="w-full max-w-screen-lg text-center px-6 sm:text-left lg:px-0">
        <p className="text-5xl font-bold sm:text-6xl mb-8">Experience</p>
        <ExperienceCards />
      </div>
    </main>
  );
};

export default Experience;
