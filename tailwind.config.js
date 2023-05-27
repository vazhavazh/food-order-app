
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['caveat-regular-400', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        tomato: "#ff0f0f",
        marigold: "#ff990b",

      }
    },
  },
  plugins: [],
}
