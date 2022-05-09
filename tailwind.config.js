const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        primary: "#007aff"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
