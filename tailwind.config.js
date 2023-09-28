/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#4169E1",
          secondary: "#EEF2FF",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],
          primary: "#4169E1",
          secondary: "#EEF2FF",
        },
      },
      // "dark",
      "night",
      "black",
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
