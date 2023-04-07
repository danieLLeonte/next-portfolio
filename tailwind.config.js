/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0252CD",
        secondary: "#F6F6F6",
        textPrimary: "#151E2C",
        textSecondary: "#9D9D9D",
      },
      fontFamily: {
        serif: ["var(--font-montserrat)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
