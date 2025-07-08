import React from "react";

const Resume = () => {
  const downloadFile = () => {
    window.location.href = "/assets/CAPONPON_AERON-RESUME.pdf";
  };

  return (
    <div className="pl-4 border-l border-green-400 space-y-1 text-sm md:text-base">
      <p className="text-green-500">$ download resume.pdf</p>
      <button
        onClick={downloadFile}
        className="underline text-green-400 hover:text-white transition"
      >
        → Click here to download resume
      </button>
    </div>
  );
};

export default Resume;

