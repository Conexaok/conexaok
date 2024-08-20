import React, { useState } from "react";
import { FaArrowRight, FaGift } from "react-icons/fa"; // Ícones
import Img1 from "../../assets/women/necessaire.jpeg";
import Img2 from "../../assets/women/squeeze.png";
import Img3 from "../../assets/women/cheveiro.jpg";
import Img4 from "../../assets/women/entrega.jpg";
import Img5 from "../../assets/women/bolsa.png";
import { GalleryBrinds } from "./GalleryBrinds";

// Array de dados dos produtos
const BrindesData = [
  {
    id: 1,
    img: Img1,
    title: "Necessaire",
    aosDelay: "0", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: "https://i.im.ge/2024/08/15/fIUbFm.CONEX-2.png", caption: "Descrição" },
      { imgelink: "https://i.im.ge/2024/08/15/fIU3kf.CONEX-4.png", caption: "Descrição" },
      { imgelink: "https://i.im.ge/2024/08/15/fIUEqP.CONEX-5.png", caption: "Descrição" },
      { imgelink: "https://i.im.ge/2024/08/15/fIUxt1.CONEX-3.png", caption: "Descrição" },
      { imgelink: "https://i.im.ge/2024/08/15/fIUAnp.CONEX-1.png", caption: "Descrição" }
    ],
  },
  {
    id: 2,
    img: Img2,
    title: "Squeeze",
    aosDelay: "200", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: "https://i.im.ge/2024/08/15/fIUcjr.CONEX-6.png", caption: "Descrição" },
      { imgelink: "https://i.im.ge/2024/08/15/fIUgRW.CONEX-7.png", caption: "Descrição" },
      { imgelink: "https://i.im.ge/2024/08/15/fIUZ3c.CONEX-8.png", caption: "Descrição" },
      { imgelink: "https://i.im.ge/2024/08/15/fIUK4L.CONEX-9.png", caption: "Descrição" },
      { imgelink: "https://i.im.ge/2024/08/15/fIUfqG.CONEX-12.png", caption: "Descrição" }
    ],
  },
  {
    id: 3,
    img: Img3,
    title: "Chaveiro",
    aosDelay: "400", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: "https://i.im.ge/2024/08/15/fIU4Tz.CONEX-15.png", caption: "Descrição" },
      { imgelink: "https://i.im.ge/2024/08/15/fIUJWS.CONEX-14.png", caption: "Descrição" },
      { imgelink: Img1, caption: "Descrição" },
      { imgelink: Img4, caption: "Descrição" },
      { imgelink: Img5, caption: "Descrição" }
    ],
  },
  {
    id: 4,
    img: Img4,
    title: "Entrega Rápida",
    aosDelay: "600", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: Img4, caption: "Descrição" },
      { imgelink: Img2, caption: "Descrição" },
      { imgelink: Img3, caption: "Descrição" },
      { imgelink: Img1, caption: "Descrição" },
      { imgelink: Img5, caption: "Descrição" }
    ],
  },
  {
    id: 5,
    img: Img5,
    title: "Bolsa",
    aosDelay: "800", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: Img5, caption: "Descrição" },
      { imgelink: Img2, caption: "Descrição" },
      { imgelink: Img3, caption: "Descrição" },
      { imgelink: Img4, caption: "Descrição" },
      { imgelink: Img1, caption: "Descrição" }
    ],
  },
];

// Componente Brindes
const Brindes = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleEventClick = (galleryImages) => {
    setGalleryImages(galleryImages);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  if (showGallery) {
    return <GalleryBrinds images={galleryImages} onClose={closeGallery} />;
  }

  return (
    <div id="Brindes" className="mt-14 mb-12 px-4">
      <div className="container mx-auto p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {/* Seção de cabeçalho */}
        <div className="text-center mb-10 max-w-[600px] mx-auto p-4 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-700">
          <h1 data-aos="fade-up" className="text-3xl font-extrabold tracking-wide text-gray-800 dark:text-gray-200 drop-shadow-lg flex items-center justify-center">
            <FaGift className="mr-2 text-blue-600 dark:text-blue-400" /> Brindes
          </h1>
        </div>
        {/* Seção do corpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Seção dos cards de produtos */}
            {BrindesData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="relative flex flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-900 hover:bg-blue-100 dark:hover:bg-blue-800 shadow-md transition-transform duration-300 transform hover:scale-105"
                style={{ cursor: "pointer" }}
                onClick={() => handleEventClick(data.galleryImages)}
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

export default Brindes;
