const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
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
        primary: {
          400: "#0084ff",
          DEFAULT: "#007aff"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
