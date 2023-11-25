/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#D91A2A",
          "primary-content": "#F2F2F2",
          "secondary": "#F2B705",
          "accent": "#e76800",
          "neutral": "#10222b",
          "base-100": "#F2F2F2",
          "info": "#0090af",
          "success": "#00a200",
          "warning": "#ffb400",
          "error": "#e12156",
        },
      },
    ],
  },
}

