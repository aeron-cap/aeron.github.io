import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="grid">
      <div className="grid fixed gap-14 w-10 h-screen content-center p-16">
        <div className="flex flex-row gap-3">
          <button className="pointer-events-auto">About</button>
        </div>
        <div className="flex flex-row gap-3">
          <button className="pointer-events-auto">Experience</button>
        </div>
        <div className="flex flex-row gap-3">
          <button className="pointer-events-auto">Projects</button>
        </div>
        <div className="flex flex-row gap-3">
          <button className="pointer-events-auto">Skills</button>
        </div>
        <div className="flex flex-row gap-3">
          <button className="pointer-events-auto">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
