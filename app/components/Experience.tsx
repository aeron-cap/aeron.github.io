"use client";
import React from "react";
import ExperienceCards from "./ExperienceCards";

const Experience = () => {
  return (
    <main className="flex flex-col h-screen w-screen px-40">
      <div className="pt-16 pl-24">
        <p className="text-8xl text-left font-bold">Experience</p>
      </div>
      <div className="pt-8 pl-24">
        <ExperienceCards />
      </div>
    </main>
  );
};

export default Experience;
