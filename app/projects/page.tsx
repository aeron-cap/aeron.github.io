"use-client";
import React from "react";
import ProjectCards from "../components/ProjectCards";

const Projects = () => {
  return (
    <main id="experience" className="flex flex-col h-auto w-auto px-40">
      <div className="pt-16 pl-24">
        <p className="text-8xl text-left font-bold">Projects</p>
      </div>
      <div className="grid grid-cols-2 pt-8 pl-24 gap-4">
        <ProjectCards />
      </div>
    </main>
  );
};

export default Projects;
