import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#F7C8AE",
      secondary: "#353535",
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      playfair: ["var(--font-playfair)"],
      opensans: ["var(--font-opensans)"],
    },
    boxShadow: {
      black: "2px 3px 4px 0px #1E1E1E",
      gray: "1px 1px 4px 0px #353535",
    },
  },
  plugins: [],
};
export default config;
