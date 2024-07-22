import React, { useState } from "react";
import Gallery from "../Gallery/Gallery"; // Certifique-se de que o caminho está correto
import prt1 from "../../assets/shirt/print/1.jpg";
import prt2 from "../../assets/shirt/print/2.png";
import prt3 from "../../assets/shirt/print/3.png";
import prt4 from "../../assets/shirt/print/4.jpg";
import prt5 from "../../assets/shirt/print/5.png";

// Dados das imagens para cada galeria
const galleryData = {
  grafica1: [{ imgelink: prt1 }],
  grafica2: [{ imgelink: prt2 }],
  grafica3: [{ imgelink: prt3 }],
  grafica4: [{ imgelink: prt4 }],
  grafica5: [{ imgelink: prt5 }],
};

// Array de dados dos produtos
const UniformesData = [
  {
    id: 1,
    img: prt1,
    title: "Uniformes 01",
    galleryType: "grafica1",
  },
  {
    id: 2,
    img: prt2,
    title: "Uniformes 02",
    galleryType: "grafica2",
  },
  {
    id: 3,
    img: prt3,
    title: "Uniformes 03",
    galleryType: "grafica3",
  },
  {
    id: 4,
    img: prt4,
    title: "Uniformes 04",
    galleryType: "grafica4",
  },
  {
    id: 5,
    img: prt5,
    title: "Uniformes 05",
    galleryType: "grafica5",
  },
];

// Componente Grafica
const Uniformes = () => {
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
    <div id="Uniformes" className="mt-14 mb-12">
      <div className="container">
        {/* Seção de cabeçalho */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold shadow-md">
          Uniformes
          </h1>
        </div>
        {/* Seção do corpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-5">
            {/* Seção dos cards de produtos */}
            {UniformesData.map((data) => (
              <div
                data-aos="fade-up" // Animação AOS
                data-aos-delay={data.aosDelay} // Atraso para a animação AOS
                key={data.id}
                className="relative flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-gray-950 hover:bg-sky-700 dark:text-white from-primary to-secondary dark:hover:bg-cyan-900 hover:text-white shadow-xl duration-300 group w-full h-[250px] max-w-[300px]"
                style={{ cursor: "pointer" }}
                onClick={() => handleItemClick(data.galleryType)}
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

export default Uniformes;
