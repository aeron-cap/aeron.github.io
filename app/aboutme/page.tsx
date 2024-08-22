"use client";
import React from "react";
import AboutMe from "../components/AboutMe";
import { TypeAnimation } from "react-type-animation";
import Resume from "../components/Resume";

const Me = () => {
  return (
    <main className="grid w-screen pt-10 justify-items-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="h-24 md:h-16 flex items-center justify-center overflow-hidden">
          <div className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Hi, I am Aeron Caponpon",
                1000,
                "Hi, I am a Computer Engineer",
                1000,
                "Hi, I am a Software Developer",
                1000,
              ]}
              speed={25}
              repeat={Infinity}
            />
          </div>
        </div>
        <p className="text-center">from Batangas, Philippines.</p>
      </div>
      <AboutMe />
      <Resume />
      <div className="flex flex-row items-center gap-6 mt-6">
        <a
          href="https://github.com/aeron-cap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/github-logo.png"
            className="size-10 grayscale invert transition-opacity hover:opacity-100 opacity-60"
            alt="GitHub"
          />
        </a>
        <a
          href="mailto:aeroncaponpon.01@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/gmail-logo.png"
            className="size-10 grayscale transition-opacity hover:opacity-100 opacity-60"
            alt="Gmail"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/aeron-caponpon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/linkedin-logo.png"
            className="size-10 saturate-0 transition-opacity hover:opacity-100 opacity-60"
            alt="LinkedIn"
          />
        </a>
      </div>
    </main>
  );
};

export default Me;
