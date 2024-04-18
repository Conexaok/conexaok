import React, { useState } from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import Img4 from "../../assets/shirt/shirt4.png";
import { FaStar, FaWhatsapp } from "react-icons/fa"; // Importar o ícone do WhatsApp

// Dados dos produtos
const ProductsData = [
  {
    id: 1,
    title: "Galpôes",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [Img1, Img1, Img1], // Repetindo a mesma imagem para fins de exemplo
  },
  {
    id: 2,
    title: "Montagens de Stands",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [Img2, Img2, Img2], // Repetindo a mesma imagem para fins de exemplo
  },
  {
    id: 3,
    title: "Móveis em Geral",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [Img3, Img3, Img3], // Repetindo a mesma imagem para fins de exemplo
  },
  {
    id: 4,
    title: "Eletrônicos",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [Img4, Img4, Img4], // Repetindo a mesma imagem para fins de exemplo
  },
];

// Componente principal dos produtos
const TopProducts = ({ handleOrderPopup }) => {
  // Estado para controlar a exibição da imagem maximizada
  const [showMaximizedImage, setShowMaximizedImage] = useState(false);
  // Estado para controlar o índice do produto selecionado
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  // Estado para controlar o índice da imagem selecionada no carrossel
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Função para avançar para a próxima imagem no carrossel
  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === ProductsData[selectedProductIndex].images.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  // Função para retroceder para a imagem anterior no carrossel
  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0
        ? ProductsData[selectedProductIndex].images.length - 1
        : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto mt-8">
      {/* Seção de cabeçalho */}
      <div className="text-center mb-24">
        <p className="text-sm text-primary">Top Rated Products for you</p>
        <h1 className="text-3xl font-bold">
          Locações de Móveis e Estruturas Para Eventos
        </h1>
        <p className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>
      {/* Seção do corpo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5">
        {/* Mapeamento dos produtos */}
        {ProductsData.map((data, index) => (
          <div
            key={data.id}
            className="relative rounded-2xl bg-white dark:bg-gray-800 hover:bg-gradient-to-b from-primary to-secondary dark:hover:bg-primary hover:text-white shadow-xl duration-300 group max-w-[300px] mb-8"
            style={{ cursor: "pointer" }} // Adiciona estilo de cursor pointer
            onClick={() => {
              setShowMaximizedImage(true);
              setSelectedProductIndex(index);
              setSelectedImageIndex(0); // Ao clicar em um novo produto, reinicia o índice da imagem
            }}
          >
            {/* Seção de imagem */}
            <div className="h-[200px] relative">
              <img
                src={data.images[0]} // Mostra apenas a primeira imagem do produto
                alt=""
                className="w-full h-full object-cover"
                onClick={(e) => {
                  e.stopPropagation(); // Impede a propagação do evento de clique para o contêiner pai
                  setShowMaximizedImage(true);
                  setSelectedProductIndex(index);
                  setSelectedImageIndex(0);
                }}
              />
            </div>
            {/* Seção de detalhes */}
            <div className="p-4 text-center">
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {data.description}
              </p>
              {/* Botão com ícone do WhatsApp */}
              <button
                className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full group-hover:bg-white group-hover:text-primary flex items-center justify-center mt-4"
                onClick={handleOrderPopup}
              >
                <FaWhatsapp className="mr-2" /> {/* Ícone do WhatsApp */}
                Clique Aqui
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Carrossel de imagem maximizada */}
      {showMaximizedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setShowMaximizedImage(false)} // Fecha a visualização maximizada ao clicar fora da imagem
        >
          <div className="relative max-w-3xl">
            {/* Imagem */}
            <img
              src={
                ProductsData[selectedProductIndex].images[selectedImageIndex]
              }
              alt=""
              className="max-h-full mx-auto"
              onClick={(e) => e.stopPropagation()} // Impede a propagação do evento de clique para fechar a visualização maximizada
            />
            {/* Botão anterior */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation(); // Impede a propagação do evento de clique para fechar a visualização maximizada
                handlePrevImage();
              }}
            >
              {"<"}
            </button>
            {/* Botão próximo */}
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation(); // Impede a propagação do evento de clique para fechar a visualização maximizada
                handleNextImage();
              }}
            >
              {">"}
            </button>
            {/* Botão de fechar */}
            <button
              className="absolute top-2 right-2 text-white"
              onClick={() => setShowMaximizedImage(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopProducts;
