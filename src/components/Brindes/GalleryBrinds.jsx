import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa"; // Ícones para navegação e fechar

export function GalleryBrinds({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Define o índice inicial da galeria
  const [caption, setCaption] = useState(images[0].caption); // Define a legenda inicial

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCaption(images[newIndex].caption); // Atualiza a legenda
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCaption(images[newIndex].caption); // Atualiza a legenda
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index); // Atualiza o índice da imagem principal ao clicar na miniatura
    setCaption(images[index].caption); // Atualiza a legenda
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80">
      {/* Botão de fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl"
      >
        <FaTimes />
      </button>

      <div className="relative max-w-5xl w-full flex justify-center items-center mb-4">
        {/* Botão para imagem anterior */}
        <button
          className="absolute left-4 text-white text-3xl p-2 hover:bg-gray-700 rounded-full transition"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>

        {/* Exibição da imagem ativa centralizada */}
        <div className="relative">
          <img
            src={images[currentIndex].imgelink}
            alt={`Imagem ${currentIndex}`}
            className="max-w-full max-h-[80vh] rounded-lg object-contain"
          />
          {caption && (
            <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white text-center py-2 rounded-b-lg">
              {caption}
            </div>
          )}
        </div>

        {/* Botão para próxima imagem */}
        <button
          className="absolute right-4 text-white text-3xl p-2 hover:bg-gray-700 rounded-full transition"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Miniaturas abaixo da imagem principal */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {images.map(({ imgelink, caption }, index) => (
          <div key={index} className="cursor-pointer">
            <img
              src={imgelink}
              alt={`Miniatura ${index}`}
              onClick={() => handleThumbnailClick(index)}
              className={`w-20 h-20 object-cover rounded-lg transition-transform ${
                currentIndex === index ? "border-2 border-white" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
