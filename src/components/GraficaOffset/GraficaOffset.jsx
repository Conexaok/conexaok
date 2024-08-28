import React, { useState } from "react";
import { FaArrowRight, FaPrint } from "react-icons/fa"; // Ícones
import Gallery from "../Gallery/Gallery"; // Certifique-se de que o caminho está correto
import prt1 from "../../assets/shirt/print/one.png";

// URLs das novas imagens
const newImage1 = "https://i.im.ge/2024/08/29/fANJkW.Ima.jpeg";
const newImage2 = "https://i.im.ge/2024/08/29/fAN4F0.Cartao.jpeg";
const newImage3 = "https://i.im.ge/2024/08/29/fANBjT.banners.jpeg";
const newImage4 = "https://i.im.ge/2024/08/29/fANGRc.cracha.png";

// Dados das imagens para cada galeria
const galleryData = {
  grafica1: [{ imgelink: prt1, description: "Descrição da imagem 1" }],
  grafica2: [{ imgelink: newImage1 }],
  grafica3: [{ imgelink: newImage2 }],
  grafica4: [{ imgelink: newImage3 }],
  grafica5: [{ imgelink: newImage4 }],
};

// Array de dados dos produtos
const GraficaOffsetData = [
  {
    id: 1,
    img: prt1,
    title: "GraficaOffset 01",
    galleryType: "grafica1",
    aosDelay: "0", // Atraso para a animação AOS
  },
  {
    id: 2,
    img: newImage1,
    title: "Ima Geladeira",
    galleryType: "grafica2",
    aosDelay: "200", // Atraso para a animação AOS
  },
  {
    id: 3,
    img: newImage2,
    title: "Cartão",
    galleryType: "grafica3",
    aosDelay: "400", // Atraso para a animação AOS
  },
  {
    id: 4,
    img: newImage3,
    title: "Banner",
    galleryType: "grafica4",
    aosDelay: "600", // Atraso para a animação AOS
  },
  {
    id: 5,
    img: newImage4,
    title: "Crachá",
    galleryType: "grafica5",
    aosDelay: "800", // Atraso para a animação AOS
  },
];

// Componente GraficaOffset
const GraficaOffset = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleItemClick = (galleryType) => {
    setGalleryImages(galleryData[galleryType]);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  if (showGallery) {
    return <Gallery images={galleryImages} onClose={closeGallery} />;
  }

  return (
    <div id="GraficaOffset" className="mt-14 mb-12 px-4">
      <div className="container mx-auto p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {/* Seção de cabeçalho */}
        <div className="text-center mb-10 max-w-[600px] mx-auto p-4 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-700">
          <h1 data-aos="fade-up" className="text-3xl font-extrabold tracking-wide text-gray-800 dark:text-gray-200 drop-shadow-lg flex items-center justify-center">
            <FaPrint className="mr-2 text-blue-600 dark:text-blue-400" /> GraficaOffset
          </h1>
        </div>
        {/* Seção do corpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Seção dos cards de produtos */}
            {GraficaOffsetData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="relative flex flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-900 hover:bg-blue-100 dark:hover:bg-blue-800 shadow-md transition-transform duration-300 transform hover:scale-105"
                style={{ cursor: "pointer" }}
                onClick={() => handleItemClick(data.galleryType)}
              >
                <div className="h-[120px] relative flex items-center justify-center">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="max-w-[120px] block mx-auto transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center flex flex-col items-center justify-center h-full">
                  <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {data.title}
                  </h1>
                  <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-full mt-4 transition-colors duration-300">
                    Clique Aqui <FaArrowRight className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraficaOffset;
