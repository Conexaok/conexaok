import React, { useState } from "react";

import { Gallery } from "../Gallery/Gallery";
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
    color: "white",
    aosDelay: "0", // Atraso para a animação AOS
    galleryType: "stands1",
  },
  {
    id: 2,
    img: fln2,
    title: "Feira Limpa Nome",
    color: "Red",
    aosDelay: "200", // Atraso para a animação AOS
    galleryType: "stands2",
  },
  {
    id: 3,
    img: fcs1,
    title: "Ficons",
    color: "brown",
    aosDelay: "400", // Atraso para a animação AOS
    galleryType: "stands3",
  },
  {
    id: 4,
    img: bil1,
    title: "Bienal internacional do Livro",
    color: "Yellow",
    aosDelay: "600", // Atraso para a animação AOS
    galleryType: "stands4",
  },
  {
    id: 5,
    img: efn3,
    title: "Expo Fest Noivas",
    color: "Pink",
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
    <div id="Stands" className="mt-14 mb-12">
      <div className="container mx-auto">
        {/* Seção de cabeçalho */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold mb-6 text-center shadow-md">
            Stands
          </h1>
        </div>
        {/* Seção do corpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5">
            {/* Seção dos cards de produtos */}
            {StandsData.map((data) => (
              <div
                data-aos="fade-up" // Animação AOS
                data-aos-delay={data.aosDelay} // Atraso para a animação AOS
                key={data.id}
                className="space-y-3 w-full flex flex-col items-center"
              >
                {/* Imagem do produto */}
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-full max-w-[150px] object-cover rounded-md"
                />
                <div className="text-center">
                  {/* Título do produto */}
                  <h3 className="font-semibold">{data.title}</h3>
                  {/* Cor do produto */}
                  <p className="text-sm text-gray-600">{data.color}</p>
                  {/* Rating do produto */}
                  <div className="flex items-center gap-1 justify-center">
                   
                    <span>{data.rating}</span>
                  </div>
                  {/* Botão para abrir a galeria */}
                  <button
                    className="bg-sky-700 dark:bg-cyan-900 hover:scale-105 duration-300 text-white py-2 px-8 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={() => handleItemClick(data.galleryType)}
                  >
                    Clique Aqui
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
