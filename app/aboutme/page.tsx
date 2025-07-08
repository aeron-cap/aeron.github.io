"use client";
import React, { useState, useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Resume from "../components/Resume";
import Image from "next/image";

const Me = () => {
  return (
    <div className="w-full min-h-screen bg-black text-green-400 font-mono px-4 py-6 md:py-10">
      <div className="max-w-4xl mx-auto mb-6">
        <div className="bg-gray-800 rounded-t-lg p-2 flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-300 text-sm ml-4">aeron@portfolio:~</span>
        </div>
        <div className="bg-black border-2 border-gray-800 rounded-b-lg p-4 md:p-6">
          <div className="space-y-4 md:space-y-6">
            <div>
              <p className="text-green-500">$ whoami</p>
              <p><a className="text-blue-500">Aeron Caponpon</a></p>
            </div>

            <div className="">
              <Image
                src="/assets/memoji.png"
                alt="Aeron Caponpon"
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
            </div>

            <div>
              <p className="text-green-500">$ cat profession.txt</p>
              <p><a className="text-blue-500">Web & Software Developer</a> | <a className="text-red-500">Computer Engineering</a> Graduate</p>
            </div>

            <div>
              <p className="text-green-500">$ pwd</p>
              <p>/home/aeron/portfolio</p>
            </div>

            <div>
              <p className="text-green-500">$ location</p>
              <p>Batangas, Philippines</p>
            </div>

            <div>
              <p className="text-green-500">$ ./about-me --verbose</p>
              <div className="pl-4 border-l border-green-400 mt-2">
                <AboutMe />
              </div>
            </div>

            <div>
              <p className="text-green-500">$ ./resume --download</p>
              <div className="pl-4 border-l border-green-400 mt-2">
                <Resume />
              </div>
            </div>

            <div>
              <p className="text-green-500">$ ls -la contacts/</p>
              <div className="pl-4 space-y-1 mt-2">
                <a
                  href="https://github.com/aeron-cap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white hover:text-white underline"
                >
                  → github.com/aeron-cap
                </a>
                <a
                  href="mailto:aeroncaponpon.01@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-red-400 hover:text-white underline"
                >
                  → aeroncaponpon.01@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/aeron-caponpon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-white underline"
                >
                  → linkedin.com/in/aeron-caponpon
                </a>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <p className="text-green-500">$ help</p>
              <p className="pl-4">Available commands:</p>
              <div className="pl-4 space-y-1">
                <a href="#experience" className="block hover:text-white">
                  cd experience/     # View work experience
                </a>
                <a href="#projects" className="block hover:text-white">
                  cd projects/       # Browse project portfolio
                </a>
                <p>exit               # Thanks for visiting!</p>
              </div>
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

export default Me;
