/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        velka: "#C55A11",
        syke: "#ff5f5f",
        primary: "#14213D",   // 14213D
        secondary: "#FCA311", // FCA311
        card: "#E5E5E5",      // E5E5E5w
        card2: "#1b2843",     // 1b2843

        ilmoPrimaryColor: "#464646", // Dark Gray
        ilmoSecondaryColor: "#BFA28E", // Beige
        ilmoBackgroundColor: "#EFEFEF", // Light Gray Background
        ilmoCardColor: "#FFFFFF", // White Card
        ilmoPrimaryTextColor: "#333333", // Dark Text
        ilmoSecondaryTextColor: "rgba(229, 229, 229, 1)", // Gray Text
      },
      fontFamily: {
        primary: ["Crimson Pro"],
        raleway: ["Raleway"],
        lora: ["Lora"],
        oxanium: ["Oxanium"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
