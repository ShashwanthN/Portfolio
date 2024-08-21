/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'rounded-full',
    'for-reverse',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], 
        mono: ["Roboto Mono", "Fira Code", "Courier New", "monospace"], 
        handwriting: ['Indie Flower', 'cursive'],
        classic: ['"DM Serif Text"', 'serif'],
      },
      colors: {
        text: "#07070c",
        background: "#f4f4fa",
        teal: "#0077b6",
        primary: "#e2e4dd",
        secondary: "#242628",
        accent: "#ff6101",
        softCoral: "#ffad90",
      mutedOlive: "#8d977a",
      warmBeige: "#d1c4b6",
      coolMint: "#b2d8d8",
      deepBurgundy: "#5b2c2c",
        'gray': '#404040',
      'gray-1': '#1a1a1c',
      'gray-5': '#242426',
      'gray-2': '#808080',
      'gray-3': '#e7e7e7',
      'gray-4': '#bfbfbf',
      'error' : "#e23636",
      'success': "#68E534",
        error: "#e23636",
        success: "#68E534",
      },
    },
  },
  plugins: [],
});
