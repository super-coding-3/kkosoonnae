const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "main-color": "rgb(73, 45, 40)",
        "main-light-color": "rgb(129, 111, 107)",
        "main-gray": "rgb(242, 243, 246)",
        "main-ivory": "rgb(244, 246, 241)",
        "common-border-gray": "rgb(136, 136, 136)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
