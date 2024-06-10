import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxl: "1920px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "black-base": "#15191E",
      },
      boxShadow: {
        "gray-rgba": "0 14px 20px 0px rgba(42, 51, 83, 0.8)",
      },
      dropShadow: {
        "purple-small": "drop-shadow(0px 4px 30px rgba(118, 61, 176, 1))",
      },
    },
  },
  plugins: [],
};
export default config;

