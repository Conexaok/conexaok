import React, { useState } from "react";
import { FaArrowRight, FaCouch } from "react-icons/fa"; // Ícones
import Gallery from "../Gallery/Gallery"; // Certifique-se de que o caminho está correto

// URLs das novas imagens reais
const moveisImage1 = "https://i.im.ge/2024/09/04/fgsHEr.2.jpeg";
const moveisImage2 = "https://i.im.ge/2024/09/04/fgsfef.1.jpeg";
const moveisImage3 = "https://i.im.ge/2024/09/04/fgsK0P.5.jpeg";
const moveisImage4 = "https://i.im.ge/2024/09/04/fgsRVq.3.jpeg";
const moveisImage5 = "https://i.im.ge/2024/09/04/fgaOfF.SaveIG-App-399780673-275186535506399-4500663527955457619-n.jpeg";

// Dados das imagens para cada galeria
const moveisGalleryData = {
  moveis1: [{ imgelink: moveisImage1 }],
  moveis2: [{ imgelink: moveisImage2 }],
  moveis3: [{ imgelink: moveisImage3 }],
  moveis4: [{ imgelink: moveisImage4 }],
  moveis5: [{ imgelink: moveisImage5 }],
};

// Array de dados dos produtos
const MoveisData = [
  {
    id: 1,
    img: moveisImage1,
    title: "Televisões",
    galleryType: "moveis1",
    aosDelay: "0", // Atraso para a animação AOS
  },
  {
    id: 2,
    img: moveisImage2,
    title: "Frigobar",
    galleryType: "moveis2",
    aosDelay: "200", // Atraso para a animação AOS
  },
  {
    id: 3,
    img: moveisImage3,
    title: "Rádios",
    galleryType: "moveis3",
    aosDelay: "400", // Atraso para a animação AOS
  },
  {
    id: 4,
    img: moveisImage4,
    title: "Cafeteiras",
    galleryType: "moveis4",
    aosDelay: "600", // Atraso para a animação AOS
  },
  {
    id: 5,
    img: moveisImage5,
    title: "Mesas",
    galleryType: "moveis5",
    aosDelay: "800", // Atraso para a animação AOS
  },
];

// Componente Móveis
const Moveis = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleItemClick = (galleryType) => {
    setGalleryImages(moveisGalleryData[galleryType]);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  if (showGallery) {
    return <Gallery images={galleryImages} onClose={closeGallery} />;
  }

  return (
    <div id="Moveis" className="mt-14 mb-12 px-4">
      <div className="container mx-auto p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {/* Seção de cabeçalho */}
        <div className="text-center mb-10 max-w-[600px] mx-auto p-4 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-700">
          <h1 data-aos="fade-up" className="text-3xl font-extrabold tracking-wide text-gray-800 dark:text-gray-200 drop-shadow-lg flex items-center justify-center">
            <FaCouch className="mr-2 text-blue-600 dark:text-blue-400" /> Móveis
          </h1>
        </div>
        {/* Seção do corpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Seção dos cards de produtos */}
            {MoveisData.map((data) => (
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

export default Moveis;
