/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#06b6d4",
        
        
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "5rem",
        },
      },
    },
  },
  plugins: [],
};
