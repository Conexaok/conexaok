import React, { useState } from "react";
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
    galleryImages: [
      { imgelink: Img1, caption: "Descrição" },
      { imgelink: Img2, caption: "Descrição" },
      { imgelink: Img3, caption: "Descrição" },
      { imgelink: Img4, caption: "Descrição" },
      { imgelink: Img5, caption: "Descrição" }
    ],
  },
  {
    id: 2,
    img: Img2,
    title: "Squeeze",
    galleryImages: [
      { imgelink: Img2, caption: "Descrição" },
      { imgelink: Img1, caption: "Descrição" },
      { imgelink: Img3, caption: "Descrição" },
      { imgelink: Img4, caption: "Descrição" },
      { imgelink: Img5, caption: "Descrição" }
    ],
  },
  {
    id: 3,
    img: Img3,
    title: "Chaveiro",
    galleryImages: [
      { imgelink: Img3, caption: "Descrição" },
      { imgelink: Img2, caption: "Descrição" },
      { imgelink: Img1, caption: "Descrição" },
      { imgelink: Img4, caption: "Descrição" },
      { imgelink: Img5, caption: "Descrição" }
    ],
  },
  {
    id: 4,
    img: Img4,
    title: "Entrega Rápida",
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
    <div id="Brindes" className="mt-14 mb-12">
      <div className="container">
        {/* Seção de cabeçalho */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold shadow-md">
            Brindes
          </h1>
        </div>
        {/* Seção do corpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Seção dos cards de produtos */}
            {BrindesData.map((data) => (
              <div
                data-aos="fade-up" // Animação AOS
                data-aos-delay={data.aosDelay} // Atraso para a animação AOS
                key={data.id}
                className="relative flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-gray-950 hover:bg-sky-700 dark:text-white from-primary to-secondary dark:hover:bg-cyan-900 hover:text-white shadow-xl duration-300 group w-full h-[250px] max-w-[300px]"
                style={{ cursor: "pointer" }}
                onClick={() => handleEventClick(data.galleryImages)}
              >
                <div className="h-[100px] relative flex items-center justify-center">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="max-w-[100px] block mx-auto group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                <div className="p-4 text-center flex flex-col items-center justify-center h-full">
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <button className="bg-sky-700 dark:bg-cyan-900 hover:scale-105 duration-300 text-white py-2 px-8 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                    Clique aqui
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showGallery && (
        <GalleryBrinds images={galleryImages} onClose={closeGallery} />
      )}
    </div>
  );
};

export default Brindes;
