/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#dad7cd",
        "dark-green": "#344e41",
        "light-green": "#a3b18a",
        "mid-green": "#588157",
        jetBlack: "#2a2b2e",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        NotoSerif: ["Noto Serif", "serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
