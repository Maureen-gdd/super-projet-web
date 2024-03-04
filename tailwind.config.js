/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "c_background": "#F7F3E7",
        "c_font": "#A69074",
      },
    },
  },
  plugins: [],
}
