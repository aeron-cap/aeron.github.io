"use client";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-green-400 font-mono px-4 py-6 md:py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-t-lg p-2 flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-300 text-sm ml-4">aeron@portfolio:~</span>
        </div>
        <div className="bg-black border-2 border-gray-800 rounded-b-lg p-4 md:p-6">
          <div className="space-y-4">
            <div>
              <p className="text-green-500">$ cat <a className="text-white">.metadata</a></p>
              <p className="text-white text-sm">
                Designed in Figma, programmed using VSCode with Next.js (React) TypeScript and Tailwind CSS.
              </p>
            </div>
            <div>
              <p className="text-green-500">$ echo <a className="text-white">"Thanks for visiting!"</a></p>
              <p className="text-white">Thanks for visiting!</p>
            </div>
            <div>
              <p className="text-green-500">$ exit</p>
              <p className="text-white">Session ended. Have a great day!</p>
            </div>
            <div className="flex items-center">
              <span className="text-green-500">$ </span>
              <span className="animate-pulse ml-1">█</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
