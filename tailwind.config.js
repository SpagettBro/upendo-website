/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgreen: "#002626", // Hoofdkleur achtergrond
        white: "#ffffff", // Hoofdkleur achtergrond
        offwhite: "fefff8",
        green: "#a8ff1a", // Achtergrondkleur van de knop
        teal: "#003a47", // Kleur van de knoptekst
        lime: "#eaffbd", // Kleur van de koptekst
        pink: "#f4c5ff", // Kleur van de subtekst
      },
      fontFamily: {
        heading: ["Area Normal", "sans-serif"],
        subtext: ["Inter", "sans-serif"],
        button: ["Martian Mono", "monospace"],
      },
      fontSize: {
        heading: "60px", // Aangepaste fontgrootte voor heading
        body: "16px", // Aangepaste fontgrootte voor subtext
        subtext: "30px", // Aangepaste fontgrootte voor subtext
        button: "18px", // Aangepaste fontgrootte voor button
      },
      height: {
        main: "500px",
      },
    },
  },
  plugins: [],
};
