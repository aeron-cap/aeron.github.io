"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    const experienceSection = document.getElementById("experience");

    const stickNavbar = () => {
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        const windowHeight = window.scrollY;

        // Check if the experience section is in the viewport
        if (rect.top <= 0 && windowHeight > 500) {
          setStickyClass("fixed top-0 left-0 z-50");
        } else {
          setStickyClass("relative");
        }
      }
    };

    // Only add the scroll listener if the experience section exists
    if (experienceSection) {
      window.addEventListener("scroll", stickNavbar);
    }

    return () => {
      // Remove the scroll listener when the component unmounts
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  return <div className={`h-16 w-full bg-gray-200 ${stickyClass}`}>Navbar</div>;
};

export default Navbar;
