"use client";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center md:items-end w-screen px-4 md:px-32 pb-4 pt-32">
      <p className="text-xs opacity-60 hover:opacity-100 text-center md:text-right">
        Designed in Figma, programmed using VSCode with Next.js (React)
        TypeScript and Tailwind CSS.
      </p>
    </div>
  );
};

export default Footer;
