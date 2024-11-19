/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,svelte,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", //white
        secondary: "#b2b8c5", //grey
        tertiary: "#7aaca9", //the dark, graphics min
        background: "#48706d", //the dark background mint
        highlight: "#8fd6d2", //the KC color
        text: "#8fd6d2", //mint text
        alert: "#e77965", //the orange tint
      },
    },
  },
  plugins: [],
};
