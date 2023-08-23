/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#000000",
        h1: "#ffffff",
        h2: "#ffffff",
        p: "#ffffff",
        elemBackground: "#000000",
      },
    },
  },
  plugins: [],
};
