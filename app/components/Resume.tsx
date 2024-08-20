import React from "react";

const Resume = () => {
  const downloadFile = () => {
    window.location.href = "/assets/CAPONPON_AERON-RESUME.pdf";
  };
  return (
    <div>
      <button
        onClick={downloadFile}
        id="Resume"
        className=" after:content-['_↗'] block text-white hover:bg-blue-800 font-medium rounded-lg text-xs px-2 py-1 text-center "
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
