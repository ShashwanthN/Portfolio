/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    'rounded-full',
    'for-reverse',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
     
        
      fontFamily: {
        sans: ["Roboto", "sans-serif"], 
        mono: ["Roboto Mono", "Fira Code", "Courier New", "monospace"], 
        handwriting: ['Indie Flower', 'cursive'],
        classic: ['"DM Serif Text"', 'serif'],
      },
      animation: {
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
      },
      keyframes: {
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
      colors: {
        darkBorder: "#3a3a3c",
        text: "#07070c",
        bg: "#1c1c1e",
        background: "#f4f4fa",
        teal: "#0077b6",
        primary: "#e2e4dd",
        secondary: "#242628",
        accent: "#ff6101",
        softCoral: "#ffad90",
        mutedOlive: "#8d977a",
        warmBeige: "#d1c4b6",
        coolMint: "#b2d8d8",
        midnight: "#121212",
        burntSienna: "#e76f51",
        deepMoss: "#556b2f",
        ashGray: "#b2beb5",
        paleCyan: "#c1e1dc",
        charcoal: "#333333",
     
        shade1: "#1F2022",
        shade2: "#2A2C2F",
        shade3: "#3A3C3F",
        shade4: "#33363A",
        shade5: "#292B2E",
        
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
}
