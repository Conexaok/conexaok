import React, { useState } from "react";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa"; // Ícone de seta e ícone de calendário
import img1 from "../../assets/evento/imagem1.JPG";
import img2 from "../../assets/evento/imagem2.JPG";
import img3 from "../../assets/evento/imagem3.JPG";
import img4 from "../../assets/evento/imagem4.JPG";
import img5 from "../../assets/evento/imagem5.JPG";
import img6 from "../../assets/evento/imagem6.jpg";
import img7 from "../../assets/evento/imagem7.jpg";
import img8 from "../../assets/evento/imagem8.jpg";
import img9 from "../../assets/evento/imagem9.jpg";
import img10 from "../../assets/evento/imagem10.jpg";
import img11 from "../../assets/evento/imagem11.jpg";
import img12 from "../../assets/evento/imagem12.jpeg";
import img13 from "../../assets/evento/imagem13.jpg";
import img14 from "../../assets/evento/imagem14.jpeg";
import img15 from "../../assets/evento/imagem15.jpeg";
import img16 from "../../assets/evento/imagem16.jpeg";
import img17 from "../../assets/evento/imagem17.jpeg";
import img18 from "../../assets/evento/imagem18.jpeg";
import img19 from "../../assets/evento/imagem19.jpeg";
import img20 from "../../assets/evento/imagem20.jpeg";
import img21 from "../../assets/evento/imagem21.jpeg";
import img22 from "../../assets/evento/imagem22.jpeg";
import img23 from "../../assets/evento/imagem23.jpeg";
import img24 from "../../assets/evento/imagem24.jpeg";
import img25 from "../../assets/evento/imagem25.jpeg";
import { GalleryProducts } from "./GalleryProducts";

// Dados dos produtos
const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Heineken",
    color: "esperando por Dani.",
    aosDelay: "0", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: img1 },
      { imgelink: img2 },
      { imgelink: img3 },
      { imgelink: img4 },
      { imgelink: img5 },
    ],
  },
  {
    id: 2,
    img: img6,
    title: "Unilever",
    color: "esperando por Dani",
    aosDelay: "200", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: img6 },
      { imgelink: img7 },
      { imgelink: img8 },
      { imgelink: img9 },
      { imgelink: img10 },
    ],
  },
  {
    id: 3,
    img: img11,
    title: "Carnaval",
    color: "esperando por Dani",
    aosDelay: "400", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: img11 },
      { imgelink: img12 },
      { imgelink: img13 },
      { imgelink: img14 },
      { imgelink: img15 },
    ],
  },
  {
    id: 4,
    img: img16,
    title: "FENAFE",
    color: "FENAFE por Dani",
    aosDelay: "600", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: img16 },
      { imgelink: img17 },
      { imgelink: img18 },
      { imgelink: img19 },
      { imgelink: img20 },
    ],
  },
  {
    id: 5,
    img: img21,
    title: "CoofBrack",
    color: "Descrição do Evento 5",
    aosDelay: "800", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: img21 },
      { imgelink: img22 },
      { imgelink: img23 },
      { imgelink: img24 },
      { imgelink: img25 },
    ],
  },
];

const Products = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const handleEventClick = (galleryImages) => {
    setGalleryImages(galleryImages);
    setShowGallery(true);
  };

  if (showGallery) {
    return <GalleryProducts images={galleryImages} onClose={() => setShowGallery(false)} />;
  }

  return (
    <div id="Eventos" className="mt-14 mb-12 px-4">
      <div className="container mx-auto p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {/* Seção de cabeçalho */}
        <div className="text-center mb-10 max-w-[600px] mx-auto p-4 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-700">
          <h1 data-aos="fade-up" className="text-3xl font-extrabold tracking-wide text-gray-800 dark:text-gray-200 drop-shadow-lg flex items-center justify-center">
            <FaCalendarAlt className="mr-2 text-blue-600 dark:text-blue-400" /> Eventos Realizados
          </h1>
        </div>
        {/* Seção do corpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Seção dos cards de produtos */}
            {ProductsData.map((data) => (
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

export default Products;
