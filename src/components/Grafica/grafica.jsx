import React, { useState } from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { Gallery } from "../Gallery/Gallery";
import prt1 from "../../assets/shirt/print/1.jpg"
import prt2 from "../../assets/shirt/print/2.png"
import prt3 from "../../assets/shirt/print/3.png"
import prt4 from "../../assets/shirt/print/4.jpg"
import prt5 from "../../assets/shirt/print/5.png"



// Dados dos produtos
const GraficaData = [
  {
    id: 1,
    img: prt1,
    title: "Comunicação Visual",
    galleryType: "grafica1",
  },
  {
    id: 2,
    img: prt2,
    title: "Foldes, Flyers, Folhetos",
    galleryType: "grafica2",
  },
  {
    id: 3,
    img: prt3,
    title: "Adesivo Perfurado",
    galleryType: "grafica3",
  },
  {
    id: 4,
    img: prt4,
    title: "Backdrop",
    galleryType: "grafica4",
  },
  {
    id: 5,
    img: prt5,
    title: "Balcão Personalizado",
    galleryType: "grafica5",
  }
];

// Dados das imagens para cada galeria
const galleryData = {
  grafica1: [
    {
      imgelink: prt1
    },
  ],
  grafica2: [
    {
      imgelink: prt2
    },
  ],
  grafica3: [
    {
      imgelink: prt3
    },
  ],
  grafica4: [
    {
      imgelink: prt4
    },
  ],
  grafica5: [
    {
      imgelink: prt5
    },
  ],
};

const Grafica = () => {
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
    <div id="Grafica" className="mt-14 mb-12">
      <div className="container">
        {/* Seção de cabeçalho */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold shadow-md">
            Gráfica
          </h1>
        </div>
        {/* Seção do corpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Seção dos cards de produtos */}
            {GraficaData.map((data) => (
              <div
                data-aos="fade-up" // Animação AOS
                data-aos-delay={data.aosDelay} // Atraso para a animação AOS
                key={data.id}
                className="space-y-3"
              >
                {/* Imagem do produto */}
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  {/* Título do produto */}
                  <h3 className="font-semibold">{data.title}</h3>
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

export default Grafica;
