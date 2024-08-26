import React from "react";

export function GalleryUniformes({ images, onClose }) {
  // Definindo o estado inicial com a primeira imagem e legenda
  const [active, setActive] = React.useState(images[0].imgelink);
  const [caption, setCaption] = React.useState(images[0].caption);

  return (
    <div className="relative mt-3">
      {/* Botão de fechar a galeria */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-blue-700 text-white py-2 px-4 rounded-full z-50"
      >
        Fechar
      </button>

      {/* Exibição da imagem em destaque */}
      <div className="relative">
        <img
          className="w-full max-w-[80%] max-h-[400px] rounded-lg object-contain mx-auto"
          src={active}
          alt="Imagem em destaque"
        />
        {caption && (
          <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white text-center py-2 rounded-b-lg">
            {caption}
          </div>
        )}
      </div>

      {/* Miniaturas das imagens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mt-4">
        {images.map(({ imgelink, caption }, index) => (
          <div key={index} className="relative">
            <img
              onClick={() => {
                setActive(imgelink);
                setCaption(caption); // Atualiza a legenda ao clicar
              }}
              src={imgelink}
              className="w-full h-auto max-w-[100px] cursor-pointer rounded-lg object-contain mx-auto"
              alt={`imagem-galeria-${index}`}
            />
            {caption && (
              <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white text-center py-1 rounded-b-lg text-xs">
                {caption}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
