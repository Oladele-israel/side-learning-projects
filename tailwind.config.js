/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: [ "Roboto",],
        Madimi: ["Madimi One"],
      },
      height: {
        view: '85vh'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}