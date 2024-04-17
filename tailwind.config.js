/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#52B69A",
        secondary: "#168AAD",
        
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
