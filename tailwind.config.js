const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        MAIN_COLOR: "#492D28",
        MAIN_LIGHT_COLOR: "#816F6B",
        MAIN_GRAY: "#F2F3F6",
        MAIN_IVORY: "#F4F6F1",
        COMMONN_BORDER_GRAY: "#DDDDDD",
        ERROR: "#C2574F",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
