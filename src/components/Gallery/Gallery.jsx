import React from "react";

const Gallery = ({ images, onClose }) => {
  const [active, setActive] = React.useState(images[0].imgelink);

  return (
    <div className="relative mt-3 grid gap-4">
      {/* Botão de Fechar */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 bg-sky-700 text-white py-2 px-4 rounded-full z-10"
      >
        Fechar
      </button>
      
      {/* Imagem Ativa */}
      <div className="relative">
        <img
          className="w-full h-auto max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="Featured"
        />
        {/* Descrição sobre a imagem */}
        <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white text-center py-2 rounded-b-lg">
          {/* Exemplo de descrição; adicione a legenda se necessário */}
          <p>Descrição da imagem</p>
        </div>
      </div>
      
      {/* Miniaturas */}
      <div className="grid grid-cols-5 gap-4 mt-4">
        {images.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 w-full cursor-pointer rounded-lg object-cover object-center"
              alt={`gallery-image-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
