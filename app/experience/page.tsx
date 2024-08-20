"use client";
import React from "react";
import ExperienceCards from "../components/ExperienceCards";

const Experience = () => {
  return (
    <main id="experience" className="flex flex-col h-auto w-screen px-40">
      <div className="pt-16 pl-24">
        <p className="text-6xl text-left font-bold">Experience</p>
      </div>
      <div className="pt-8 pl-24">
        <ExperienceCards />
      </div>
    </main>
  );
};

export default Experience;
