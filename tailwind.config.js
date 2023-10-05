/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0252CD",
        secondary: "#F6F6F6",
        highlight: "#FFBE62",
        textPrimary: "#151E2C",
        textSecondary: "#858585",
      },
      screens: {
        xsm: "375px",
        laptop: "1170px",
      },
      fontFamily: {
        serif: ["var(--font-montserrat)", ...fontFamily.serif],
      },
      height: {
        "screen-navbar": "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
