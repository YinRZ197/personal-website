/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#5D7C69",
        darkMain: "#1C1F24",
        lightMain: "#F3F4F6"
      }
    },
  },
  plugins: [],
}
