import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../Gallery/Gallery"; // Certifique-se de que o caminho está correto
import glp1 from "../../assets/shirt/shed/1.jpg";
import glp2 from "../../assets/shirt/shed/2.jpg";
import glp3 from "../../assets/shirt/shed/3.jpg";
import glp4 from "../../assets/shirt/shed/4.jpg";
import glp5 from "../../assets/shirt/shed/5.jpg";
import fnt1 from "../../assets/shirt/furniture/1.jpg";
import fnt2 from "../../assets/shirt/furniture/2.jpg";
import fnt3 from "../../assets/shirt/furniture/3.jpg";
import fnt4 from "../../assets/shirt/furniture/4.jpg";
import fnt5 from "../../assets/shirt/furniture/5.jpg";
import amb1 from "../../assets/shirt/assembly/6.jpg";
import amb2 from "../../assets/shirt/assembly/2.jpg";
import amb3 from "../../assets/shirt/assembly/3.jpg";
import amb4 from "../../assets/shirt/assembly/j4.JPG";
import amb5 from "../../assets/shirt/assembly/5.jpg";
import oys1 from "../../assets/shirt/toys/1.webp";
import oys2 from "../../assets/shirt/toys/2.webp";
import oys3 from "../../assets/shirt/toys/3.webp";
import oys4 from "../../assets/shirt/toys/4.jpeg";
import oys5 from "../../assets/shirt/toys/5.jpeg";

// Dados das imagens para cada galeria
const galleryData = {
  galpoes: [
    { imgelink: glp1 },
    { imgelink: glp2 },
    { imgelink: glp3 },
    { imgelink: glp4 },
    { imgelink: glp5 },
  ],
  stands: [
    { imgelink: amb1 },
    { imgelink: amb2 },
    { imgelink: amb3 },
    { imgelink: amb4 },
    { imgelink: amb5 },
  ],
  moveis: [
    { imgelink: fnt1 },
    { imgelink: fnt2 },
    { imgelink: fnt3 },
    { imgelink: fnt4 },
    { imgelink: fnt5 },
  ],
  eletronicos: [
    { imgelink: oys1 },
    { imgelink: oys2 },
    { imgelink: oys3 },
    { imgelink: oys4 },
    { imgelink: oys5 },
  ],
};

// Array de dados dos produtos
const ProductsData = [
  {
    id: 1,
    img: glp1,
    title: "Galpôes",
    description: "Locação de galpôes para eventos",
    galleryType: "galpoes",
  },
  {
    id: 2,
    img: amb5,
    title: "Montagens de Stands",
    description: "Montagem completa de stands",
    galleryType: "stands",
  },
  {
    id: 3,
    img: fnt5,
    title: "Móveis",
    description: "Locação de móveis diversos",
    galleryType: "moveis",
  },
  {
    id: 4,
    img: oys3,
    title: "Eletrônicos",
    description: "Locação de equipamentos eletrônicos",
    galleryType: "eletronicos",
  },
];

// Componente TopProducts
const TopProducts = () => {
  const navigate = useNavigate();
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleItemClick = (galleryType) => {
    console.log("Gallery Type:", galleryType); // Adicione este log para verificar o tipo de galeria
    console.log("Images for gallery:", galleryData[galleryType]); // Adicione este log para verificar as imagens
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
    <div id="TopProducts" className="container flex flex-col items-center justify-center">
      <div className="text-center mb-24">
        <h1 data-aos="fade-up" className="text-3xl font-bold shadow-md">
          Locações de Móveis e Estruturas Para Eventos
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
        {ProductsData.map((data) => (
          <div
            key={data.id}
            data-aos="zoom-in"
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
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {data.description}
              </p>
              <button className="bg-sky-700 dark:bg-cyan-900 hover:scale-105 duration-300 text-white py-2 px-8 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                Clique Aqui
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
