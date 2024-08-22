"use client";
import React from "react";
import ExperienceCards from "../components/ExperienceCards";

const Experience = () => {
  return (
    <main
      id="projects"
      className="flex flex-col justify-center items-center h-screen w-screen"
    >
      <div className="pt-8 w-full max-w-screen-lg text-center sm:text-left">
        <p className="text-5xl font-bold sm:text-6xl mb-8">Experience</p>
        <ExperienceCards />
      </div>
    </main>
  );
};

export default Experience;
