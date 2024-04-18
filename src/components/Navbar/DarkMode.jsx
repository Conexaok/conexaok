import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  // Estado para controlar o tema
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Elemento HTML raiz
  const element = document.documentElement;

  // Efeito para mudar o tema com base no estado
  React.useEffect(() => {
    if (theme === "dark") {
      // Adiciona a classe "dark" ao elemento HTML se o tema for escuro
      element.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Salva o tema no armazenamento local
    } else {
      // Remove a classe "dark" do elemento HTML se o tema for claro
      element.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Salva o tema no armazenamento local
    }
  }, [theme]);

  return (
    <div className="relative">
      {/* Botão para ativar o modo claro */}
      <img
        src={LightButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
      />
      {/* Botão para ativar o modo escuro */}
      <img
        src={DarkButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
