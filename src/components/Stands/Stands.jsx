import React, { useState } from "react";
import { FaArrowRight, FaCubes } from "react-icons/fa"; // Ícones
import Gallery from "../Gallery/Gallery";
import imb1 from "../../assets/shirt/stands/1.jpg";
import imb2 from "../../assets/shirt/stands/2.jpg";
import imb3 from "../../assets/shirt/stands/3.jpg";
import imb4 from "../../assets/shirt/stands/4.jpg";
import imb5 from "../../assets/shirt/stands/5.jpg";
import fln1 from "../../assets/shirt/stands/6.jpg";
import fln2 from "../../assets/shirt/stands/7.jpg";
import fln3 from "../../assets/shirt/stands/8.jpg";
import fln4 from "../../assets/shirt/stands/9.jpg";
import fln5 from "../../assets/shirt/stands/10.jpg";
import fcs1 from "../../assets/shirt/stands/11.jpg";
import fcs2 from "../../assets/shirt/stands/12.jpg";
import fcs3 from "../../assets/shirt/stands/13.jpg";
import fcs4 from "../../assets/shirt/stands/14.jpg";
import fcs5 from "../../assets/shirt/stands/15.jpg";
import bil1 from "../../assets/shirt/stands/16.jpg";
import bil2 from "../../assets/shirt/stands/17.jpg";
import bil3 from "../../assets/shirt/stands/18.jpg";
import bil4 from "../../assets/shirt/stands/19.jpg";
import bil5 from "../../assets/shirt/stands/20.jpg";
import efn1 from "../../assets/shirt/stands/21.jpg";
import efn2 from "../../assets/shirt/stands/22.jpg";
import efn3 from "../../assets/shirt/stands/23.jpg";
import efn4 from "../../assets/shirt/stands/24.jpg";
import efn5 from "../../assets/shirt/stands/25.jpg";

// Dados dos produtos
const StandsData = [
  {
    id: 1,
    img: imb1,
    title: "Salão Imobiliário de Pernambuco",
    aosDelay: "0", // Atraso para a animação AOS
    galleryType: "stands1",
  },
  {
    id: 2,
    img: fln2,
    title: "Feira Limpa Nome",
    aosDelay: "200", // Atraso para a animação AOS
    galleryType: "stands2",
  },
  {
    id: 3,
    img: fcs1,
    title: "Ficons",
    aosDelay: "400", // Atraso para a animação AOS
    galleryType: "stands3",
  },
  {
    id: 4,
    img: bil1,
    title: "Bienal Internacional do Livro",
    aosDelay: "600", // Atraso para a animação AOS
    galleryType: "stands4",
  },
  {
    id: 5,
    img: efn3,
    title: "Expo Fest Noivas",
    aosDelay: "800", // Atraso para a animação AOS
    galleryType: "stands5",
  },
];

// Dados das imagens para cada galeria
const galleryData = {
  stands1: [
    { imgelink: imb1 },
    { imgelink: imb2 },
    { imgelink: imb3 },
    { imgelink: imb4 },
    { imgelink: imb5 },
  ],
  stands2: [
    { imgelink: fln1 },
    { imgelink: fln2 },
    { imgelink: fln3 },
    { imgelink: fln4 },
    { imgelink: fln5 },
  ],
  stands3: [
    { imgelink: fcs1 },
    { imgelink: fcs2 },
    { imgelink: fcs3 },
    { imgelink: fcs4 },
    { imgelink: fcs5 },
  ],
  stands4: [
    { imgelink: bil1 },
    { imgelink: bil2 },
    { imgelink: bil3 },
    { imgelink: bil4 },
    { imgelink: bil5 },
  ],
  stands5: [
    { imgelink: efn1 },
    { imgelink: efn2 },
    { imgelink: efn3 },
    { imgelink: efn4 },
    { imgelink: efn5 },
  ],
};

const Stands = () => {
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
    <div id="Stands" className="mt-14 mb-12 px-4">
      <div className="container mx-auto p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {/* Seção de cabeçalho */}
        <div className="text-center mb-10 max-w-[600px] mx-auto p-4 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-700">
          <h1 data-aos="fade-up" className="text-3xl font-extrabold tracking-wide text-gray-800 dark:text-gray-200 drop-shadow-lg flex items-center justify-center">
            <FaCubes className="mr-2 text-blue-600 dark:text-blue-400" /> Estruturas
          </h1>
        </div>
        {/* Seção do corpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Seção dos cards de produtos */}
            {StandsData.map((data) => (
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
                  <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {data.title}
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{data.color}</p>
                  <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-full mt-4 transition-colors duration-300">
                    Clique aqui <FaArrowRight className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
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

export default Stands;
