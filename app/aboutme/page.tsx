"use client";
import React from "react";
import AboutMe from "../components/AboutMe";
import { TypeAnimation } from "react-type-animation";
import Resume from "../components/Resume";

const Me = () => {
  return (
    <main className="grid h-auto w-screen justify-items-center pt-10">
      <div className="flex flex-col justify-center">
        <div>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              "Hi, I am Aeron Caponpon", // initially rendered starting point
              1000,
              "Hi, I am a Computer Engineer",
              1000,
              "Hi, I am a Software Developer",
              1000,
            ]}
            speed={25}
            style={{ fontSize: "3rem", fontWeight: "bold" }}
            repeat={Infinity}
          />
        </div>
        <p className="text-center">from Batangas, Philippines.</p>
      </div>
      <br></br>
      <AboutMe />
      <br></br>
      <Resume />
      <br></br>
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
