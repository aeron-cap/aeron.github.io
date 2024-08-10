import React from "react";
import AboutMe from "./AboutMe";

const Me = () => {
  return (
    <main className="grid h-screen w-screen justify-items-center">
      <div className="flex flex-col justify-center pt-16">
        <p className="text-6xl text-center font-thin pb-6">Hi, I am</p>
        <p className="text-9xl text-center font-bold drop-shadow-2xl">AERON</p>
        <br></br>
        <p className="text-center font-inter">
          An aspiring <span className="font-bold">Computer Engineer</span>
        </p>
        <p className="text-center">from Batangas, Philippines.</p>
      </div>

      <div className="self-center">
        <AboutMe />
      </div>

      <div className="flex flex-row items-center gap-6">
        <button>
          <img
            src="/assets/github-logo.png"
            className="size-10 grayscale invert"
          />
        </button>
        <button>
          <img src="/assets/gmail-logo.png" className="size-10 grayscale" />
        </button>
        <button>
          <img src="/assets/linkedin-logo.png" className="size-10 saturate-0" />
        </button>
      </div>
    </main>
  );
};

export default Me;
