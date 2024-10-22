import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Você pode remover a extensão .jsx, pois não é necessária
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Criação da raiz da aplicação
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderização da aplicação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
