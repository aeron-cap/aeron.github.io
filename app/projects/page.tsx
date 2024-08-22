"use-client";
import React from "react";
import ProjectCards from "../components/ProjectCards";

const Projects = () => {
  return (
    <main
      id="projects"
      className="flex flex-col items-center w-screen px-6 sm:px-12 pt-8 pb-16"
    >
      <div className="max-w-screen-lg mx-auto">
        <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center sm:text-left">
          Projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCards />
        </div>
      </div>
    </main>
  );
};

export default Projects;
