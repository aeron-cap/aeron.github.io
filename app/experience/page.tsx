"use client";
import React from "react";
import ExperienceCards from "../components/ExperienceCards";

const Experience = () => {
  return (
    <main
      id="experience"
      className="flex flex-col justify-center items-center h-screen w-screen"
    >
      <div className="pt-8 w-full max-w-screen-lg px-6 sm:px-20 text-center sm:text-left">
        <p className="text-5xl px-4 font-bold sm:text-6xl mb-8">Experience</p>
        <ExperienceCards />
      </div>
    </main>
  );
};

export default Experience;
