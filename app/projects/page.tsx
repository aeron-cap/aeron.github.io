"use-client";
import React from "react";
import ProjectCards from "../components/ProjectCards";

const Projects = () => {
  return (
    <main id="projects" className="flex flex-col h-auto w-screen px-40">
      <div className="pt-16 pl-24">
        <p className="text-6xl text-left font-bold">Projects</p>
      </div>
      <div className="grid grid-cols-2 gap-8 pt-8 pl-24">
        <ProjectCards />
      </div>
    </main>
  );
};

export default Projects;
