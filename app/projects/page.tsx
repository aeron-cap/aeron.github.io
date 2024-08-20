"use-client";
import React from "react";
import ProjectCards from "../components/ProjectCards";

const Projects = () => {
  return (
    <main id="projects" className="flex flex-col h-auto w-screen pl-64 pr-32">
      <p className="text-6xl text-left font-bold">Projects</p>
      <br></br>
      <div className="grid grid-cols-2 gap-4">
        <ProjectCards />
      </div>
    </main>
  );
};

export default Projects;
