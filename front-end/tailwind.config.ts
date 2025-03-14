import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xxl: "1920px",
        xl: "1440px",
      },

      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "thing-offer": "url('/front-end/public/cta-banner.png')",
      },
      backgroundColor: {
        "pink-color": "linear-gradient(180deg, #FF3EA5 46.5%, rgba(255, 62, 165, 0.00) 100%)",
      },
      colors: {
        "black-base": "#15191E",
        "primary-pink": "#FF3EA5",
        "gradient-from": "#D600FF",
        "gradient-to": "#FFEA28",
      },
      boxShadow: {
        "gray-rgba": "0 14px 20px 0px rgba(42, 51, 83, 0.8)",
        "purple-rgba": "26px 26px 0px 0px rgba(214, 0, 255, 0.4)",
      },
      dropShadow: {
        "purple-small": "drop-shadow(0px 4px 30px rgba(118, 61, 176, 1))",
      },
    },
  },
};

export default config;
