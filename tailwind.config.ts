import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // cursor: {
    //   fancy: "url(hand.cur), pointer",
    // },
    // keyframes: {
    //   refine: {
    //     "0%": {
    //       left: "0%",
    //     },
    //     "50%": {
    //       left: "50%",
    //     },
    //     "100%": {
    //       left: "100%",
    //     },
    //   },
    // },
    // animation: {
    //   "refine-slide": "refine 5s ",
    // },
  },
  plugins: [],
};
export default config;
