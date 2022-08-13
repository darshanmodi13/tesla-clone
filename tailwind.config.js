/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
  content: [
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {},
    colors: {
      primary: "green", //"#0070f3",
      secondary: "#fafafa",
      white: "#fff",
      grey: "#9ca3af",
      black: "#000",
      transparent : 'transparent',
      "btn-bg": "#171A20cc",
      offwhite: "#f5f5f5",
      blue: "#3d69e1",
      nav: {
        light: "#393c41",
        dark: "black",
      },
    },
    screens: {
      "max-2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "max-xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "max-lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "max-md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "max-sm": { max: "639px" },
    },
  },
  plugins: [],
};
