/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#2baaff",
      },
    },
    screens: {
      xs: "470px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      mono: ["monospace", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
