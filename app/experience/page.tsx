"use client";
import React from "react";
import ExperienceCards from "../components/ExperienceCards";

const Experience = () => {
  return (
    <div id="experience" className="w-full min-h-screen bg-black text-green-400 font-mono px-4 py-6 md:py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-t-lg p-2 flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-300 text-sm ml-4">aeron@portfolio:~/experience</span>
        </div>
        <div className="bg-black border-2 border-gray-800 rounded-b-lg p-4 md:p-6">
          <div className="space-y-4 md:space-y-6">
            <div>
              <p className="text-green-500">$ cd experience/</p>
              <p className="text-green-300">Changed directory to experience</p>
            </div>

            <ExperienceCards />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;


