import React from "react";
import AboutMe from "../components/AboutMe";

const Me = () => {
  return (
    <main className="grid h-auto w-screen justify-items-center pt-10">
      <div className="flex flex-col justify-center">
        <p className="text-6xl text-center font-bold drop-shadow-2xl py-2">
          Hi, I am Aeron
        </p>
        <p className="text-center font-inter">
          An aspiring <span className="font-bold">Computer Engineer</span>
        </p>
        <p className="text-center">from Batangas, Philippines.</p>
      </div>
      <div className="py-4">
        <AboutMe />
      </div>
      <div className="flex flex-row items-center gap-6">
        <a href="https://github.com/aeron-cap" target="_blank">
          <img
            src="/assets/github-logo.png"
            className="size-10 grayscale invert transition-opacity hover:opacity-100 opacity-60"
          />
        </a>
        <a href="mailto:aeroncaponpon.01@gmail.com" target="_blank">
          <img
            src="/assets/gmail-logo.png"
            className="size-10 grayscale transition-opacity hover:opacity-100 opacity-60"
          />
        </a>
        <a href="https://www.linkedin.com/in/aeron-caponpon/" target="_blank">
          <img
            src="/assets/linkedin-logo.png"
            className="size-10 saturate-0 transition-opacity hover:opacity-100 opacity-60"
          />
        </a>
      </div>
    </main>
  );
};

export default Me;
