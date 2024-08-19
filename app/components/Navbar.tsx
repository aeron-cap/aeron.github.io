import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="grid">
      <div className="bg-gradient-to-r backdrop-blur-3xl grid fixed gap-14 w-fit h-screen content-center pl-16 pr-11">
        <div className="flex flex-row gap-3">
          <Link className="pointer-events-auto" href={"#aboutme"}>
            About
          </Link>
        </div>
        <div className="flex flex-row gap-3">
          <Link className="pointer-events-auto" href={"#experience"}>
            Experience
          </Link>
        </div>
        <div className="flex flex-row gap-3">
          <Link className="pointer-events-auto" href={"#projects"}>
            Projects
          </Link>
        </div>
        <div className="flex flex-row gap-3">
          <Link className="pointer-events-auto" href={"#skills"}>
            Skills
          </Link>
        </div>
        <div className="flex flex-row gap-3">
          <Link className="pointer-events-auto" href={"#resume"}>
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
