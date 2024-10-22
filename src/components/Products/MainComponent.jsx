import React, { useState } from "react";
import Gallery from "../Gallery/Gallery"; // Importe a galeria

const MainComponent = () => {
  // Estado para controlar a visibilidade da galeria
  const [showGallery, setShowGallery] = useState(false);

  // Função para abrir a galeria
  const openGallery = () => {
    setShowGallery(true);
  };

  // Função para fechar a galeria
  const closeGallery = () => {
    setShowGallery(false);
  };

  return (
    <div>
      {/* Botão ou link que abre a galeria (por exemplo, na seção Portfólio) */}
      <button onClick={openGallery}>Abrir Portfólio</button>

      {/* Renderize a galeria apenas se showGallery for true */}
      {showGallery && <Gallery onClose={closeGallery} />}
    </div>
  );
};

export default MainComponent;
