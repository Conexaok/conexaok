import React, { useState } from "react";
import Gallery from "../Gallery/Gallery"; // Sobe um nível e entra na pasta Gallery

const Products = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]); // Estado para as imagens selecionadas
  const [visibleCards, setVisibleCards] = useState(6); // Inicialmente exibe 6 cards

  // Dados dos cards com suas respectivas imagens
  const cards = [
    {
      id: 1,
      title: "Don't Overlook A Category Page: Why Category Description is a Game-Changer",
      description: "3 min read | Published on Oct. 1, 2024 | By Peter Skouhus",
      imageUrl: "https://via.placeholder.com/300x200/007bff/ffffff?text=Image+1",
      images: [
        "https://via.placeholder.com/800x600/007bff/ffffff?text=Imagem+1",
        "https://via.placeholder.com/800x600/007bff/ffffff?text=Imagem+2",
        "https://via.placeholder.com/800x600/007bff/ffffff?text=Imagem+3"
      ]
    },
    {
      id: 2,
      title: "Humanizing AI content: How to make AI-generated text feel more authentic + Prompt examples",
      description: "5 min read | Published on Sep. 27, 2024 | By Peter Skouhus",
      imageUrl: "https://via.placeholder.com/300x200/ff4444/ffffff?text=Image+2",
      images: [
        "https://via.placeholder.com/800x600/ff4444/ffffff?text=Imagem+1",
        "https://via.placeholder.com/800x600/ff4444/ffffff?text=Imagem+2",
        "https://via.placeholder.com/800x600/ff4444/ffffff?text=Imagem+3"
      ]
    },
    {
      id: 3,
      title: "Why is keyword analysis important in ecommerce?",
      description: "3 min read | Published on Aug. 6, 2024 | By Peter Skouhus",
      imageUrl: "https://via.placeholder.com/300x200/28a745/ffffff?text=Image+3",
      images: [
        "https://via.placeholder.com/800x600/28a745/ffffff?text=Imagem+1",
        "https://via.placeholder.com/800x600/28a745/ffffff?text=Imagem+2",
        "https://via.placeholder.com/800x600/28a745/ffffff?text=Imagem+3"
      ]
    },
    {
      id: 4,
      title: "The Importance of Mobile Optimization for E-commerce",
      description: "4 min read | Published on Jul. 12, 2024 | By Jane Doe",
      imageUrl: "https://via.placeholder.com/300x200/00aaff/ffffff?text=Image+4",
      images: [
        "https://via.placeholder.com/800x600/00aaff/ffffff?text=Imagem+1",
        "https://via.placeholder.com/800x600/00aaff/ffffff?text=Imagem+2",
        "https://via.placeholder.com/800x600/00aaff/ffffff?text=Imagem+3"
      ]
    },
    {
      id: 5,
      title: "Understanding Customer Behavior in Online Stores",
      description: "6 min read | Published on Jun. 5, 2024 | By John Smith",
      imageUrl: "https://via.placeholder.com/300x200/ffaa00/ffffff?text=Image+5",
      images: [
        "https://via.placeholder.com/800x600/ffaa00/ffffff?text=Imagem+1",
        "https://via.placeholder.com/800x600/ffaa00/ffffff?text=Imagem+2",
        "https://via.placeholder.com/800x600/ffaa00/ffffff?text=Imagem+3"
      ]
    },
    {
      id: 6,
      title: "Boosting Conversion Rates with Better UX",
      description: "5 min read | Published on May. 20, 2024 | By Alex Johnson",
      imageUrl: "https://via.placeholder.com/300x200/aa00ff/ffffff?text=Image+6",
      images: [
        "https://via.placeholder.com/800x600/aa00ff/ffffff?text=Imagem+1",
        "https://via.placeholder.com/800x600/aa00ff/ffffff?text=Imagem+2",
        "https://via.placeholder.com/800x600/aa00ff/ffffff?text=Imagem+3"
      ]
    },
    {
      id: 7,
      title: "Product Title 7",
      description: "Description for Product 7",
      imageUrl: "https://via.placeholder.com/300x200/007bff/ffffff?text=Image+7",
      images: [
        "https://via.placeholder.com/800x600/007bff/ffffff?text=Imagem+7",
        "https://via.placeholder.com/800x600/007bff/ffffff?text=Imagem+8",
        "https://via.placeholder.com/800x600/007bff/ffffff?text=Imagem+9"
      ]
    },
    {
      id: 8,
      title: "Product Title 8",
      description: "Description for Product 8",
      imageUrl: "https://via.placeholder.com/300x200/ffaa00/ffffff?text=Image+8",
      images: [
        "https://via.placeholder.com/800x600/ffaa00/ffffff?text=Imagem+10",
        "https://via.placeholder.com/800x600/ffaa00/ffffff?text=Imagem+11",
        "https://via.placeholder.com/800x600/ffaa00/ffffff?text=Imagem+12"
      ]
    },
    {
      id: 9,
      title: "Product Title 9",
      description: "Description for Product 9",
      imageUrl: "https://via.placeholder.com/300x200/00aaff/ffffff?text=Image+9",
      images: [
        "https://via.placeholder.com/800x600/00aaff/ffffff?text=Imagem+13",
        "https://via.placeholder.com/800x600/00aaff/ffffff?text=Imagem+14",
        "https://via.placeholder.com/800x600/00aaff/ffffff?text=Imagem+15"
      ]
    }
  ];

  // Função para abrir a galeria com as imagens selecionadas
  const openGallery = (images) => {
    setSelectedImages(images);
    setShowGallery(true);
  };

  // Função para fechar a galeria
  const closeGallery = () => {
    setShowGallery(false);
  };

  // Função para mostrar mais 3 cards
  const loadMoreCards = () => {
    setVisibleCards((prevCount) => prevCount + 3);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.slice(0, visibleCards).map((card) => (
          <div
            key={card.id}
            className="overflow-hidden group cursor-pointer"
            onClick={() => openGallery(card.images)} // Ao clicar, abre a galeria com as imagens do card
          >
            {/* Image Section */}
            <div className="h-44 flex items-center justify-center overflow-hidden">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="object-cover h-full w-full transition-transform duration-700 ease-in-out transform group-hover:scale-105"
              />
            </div>
            {/* Content Section */}
            <div className="mt-4">
              <h3 className="text-3xl font-bold mb-2 transition-colors duration-700 ease-in-out group-hover:underline group-hover:text-black">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Renderize o botão "Ver mais" apenas se houver mais cards para mostrar */}
      {visibleCards < cards.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreCards}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Ver mais
          </button>
        </div>
      )}

      {/* Renderize a galeria apenas se showGallery for true */}
      {showGallery && (
        <Gallery images={selectedImages} onClose={closeGallery} />
      )}
    </div>
  );
};

export default Products;
