import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'; // Ícones para navegação e fechar
import NavbarDesktop from '../Navbar/NavbarDesktop'; // Atualize o caminho conforme necessário
import NavbarMobile from '../Navbar/NavbarMobile';   // Atualize o caminho conforme necessário
import NavbarTablet from '../Navbar/NavbarTablet';   // Atualize o caminho conforme necessário

const Gallery = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Define o índice inicial da galeria
  const [showNavbar, setShowNavbar] = useState(true); // Estado para controlar a exibição do Navbar

  // Função para ocultar o Navbar ao entrar na galeria
  useEffect(() => {
    setShowNavbar(false); // Oculta o Navbar ao carregar a galeria
    return () => setShowNavbar(true); // Mostra o Navbar novamente ao sair da galeria
  }, []);

  // Função para exibir a imagem anterior
  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Função para exibir a próxima imagem
  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Função para alterar a imagem principal ao clicar na miniatura
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index); // Atualiza o índice da imagem principal ao clicar na miniatura
  };

  // Caso não haja imagens disponíveis
  if (!images || images.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <p className="text-white text-xl">Nenhuma imagem disponível.</p>
        <button
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={onClose}
        >
          <FaTimes />
        </button>
      </div>
    );
  }

  return (
    <div className="relative bg-white dark:bg-gray-900 dark:text-white">
      {/* Renderiza o Navbar apenas se o estado showNavbar for true */}
      {showNavbar && (
        <>
          <NavbarDesktop />
          <NavbarMobile />
          <NavbarTablet />
        </>
      )}

      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80">
        {/* Botão de fechar */}
        <button
          onClick={onClose} // Função de fechar a galeria
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
              src={images[currentIndex]}
              alt={`Imagem ${currentIndex}`}
              className="max-w-full max-h-[80vh] rounded-lg object-contain"
            />
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
          {images.map((imgLink, index) => (
            <div key={index} className="cursor-pointer">
              <img
                src={imgLink}
                alt={`Miniatura ${index}`}
                onClick={() => handleThumbnailClick(index)}
                className={`w-20 h-20 object-cover rounded-lg transition-transform ${
                  currentIndex === index ? 'border-2 border-white' : ''
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
