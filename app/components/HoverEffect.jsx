import React from "react";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
export const CardHoverEffect = () => {
  const data = {
    id: 4,
    title: "Yet another beautiful Card",
    description: `This is a description of the card. It's a beautiful card, and it's got a nice hover effect. Hover over me to reveal things.`,
    icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  };

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="group rounded-2xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-8 relative max-w-sm"
    >
      <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="relative z-10">
        <span>{data.icon}</span>
        <h3 className="mt-6 font-semibold text-gray-900 tracking-wide leading-6 antialiased dark:text-slate-100">
          {data.title}
        </h3>
        <p className="mt-2 text-gray-700 tracking-wide leading-6 antialiased dark:text-slate-100">
          {data.description}
        </p>
      </div>
    </div>
  );
};

function Effect({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
    </div>
  );
}
