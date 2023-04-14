/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    flexBasis: {
      "1/7": "14.2857143%",
      "2/7": "28.5714286%",
      "3/7": "42.8571429%",
      "4/7": "57.1428571%",
      "5/7": "71.4285714%",
      "6/7": "85.7142857%",
    },
    colors: {
      colors,
      transparent: "transparent",

      gray2: "#18181b",
      gray3: "#27272a",

      midnight: "#121063",
      white: "#ffff",
      blue: "#0ea5e9",
      blue1: "#0369a1",
      gray1: "#52525b",
      purple: "#7e5bef",
      "gray-dark": "#273444",
      "gray-light": "#d3dce6",
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
      },
    },
    plugins: [
      require("tailwindcss")("./src/tailwind.config.js"),
      require("autoprefixer"),
      require("@headlessui/tailwindcss"),
    ],
  },
};
