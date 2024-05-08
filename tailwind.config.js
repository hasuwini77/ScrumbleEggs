/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      linearGradientColors: (theme) => ({
        "dark-purple": [
          theme("colors.dark-purple.DEFAULT"),
          theme("colors.dark-purple.primary.900"),
        ],
      }),
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
