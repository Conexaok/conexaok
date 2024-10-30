/* @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Poppins como fonte principal
      },
      colors: {
        primary: "#168AAD",
        secondary: "#168AAD",
        customGreen: "#27ea67", // Adicionando a cor 27ea67 como customGreen
      },
      backgroundImage: {
        'site-background': "url('/src/assets/website/Camada.png')", // Caminho ajustado para a imagem de fundo
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
