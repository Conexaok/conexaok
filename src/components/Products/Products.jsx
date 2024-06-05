import React, { useState } from "react";
import img1 from "../../assets/evento/imagem1.jpeg";
import img2 from "../../assets/evento/imagem2.jpeg";
import img3 from "../../assets/evento/imagem3.jpeg";
import img4 from "../../assets/evento/imagem4.jpeg";
import img5 from "../../assets/evento/imagem5.jpeg";
import img6 from "../../assets/evento/imagem6.jpeg";
import img7 from "../../assets/evento/imagem7.jpeg";
import img8 from "../../assets/evento/imagem8.jpeg";
import img9 from "../../assets/evento/imagem9.jpeg";
import img10 from "../../assets/evento/imagem10.jpeg";
import img11 from "../../assets/evento/imagem11.jpeg";
import img12 from "../../assets/evento/imagem12.jpeg";
import img13 from "../../assets/evento/imagem13.jpeg";
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
    title: "Hnk",
    color: "esperando dani.",
    aosDelay: "0", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: img1 },
      { imgelink: img2 },
      { imgelink: img3 },
      { imgelink: img4 },
      { imgelink: img5 }
    ],
  },
  {
    id: 2,
    img: img6,
    title: "Unilever",
    color: "esperando por dani",
    aosDelay: "200", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: img6 },
      { imgelink: img7 },
      { imgelink: img8 },
      { imgelink: img9 },
      { imgelink: img10 }
    ],
  },
  {
    id: 3,
    img: img11,
    title: "São João",
    color: "esperando por dani",
    aosDelay: "400", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: img11 },
      { imgelink: img12 },
      { imgelink: img13 },
      { imgelink: img14 },
      { imgelink: img15 }
    ],
  },
  {
    id: 4,
    img: img16,
    title: "Carnaval",
    color: "esperando por dani",
    aosDelay: "600", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: img16 },
      { imgelink: img17 },
      { imgelink: img18 },
      { imgelink: img19 },
      { imgelink: img20 }
    ],
  },
  {
    id: 5,
    img: img21,
    title: "Feiras",
    color: "Descrição do Evento 5",
    aosDelay: "800", // Atraso para a animação AOS
    galleryImages: [
      { imgelink: img21 },
      { imgelink: img22 },
      { imgelink: img23 },
      { imgelink: img24 },
      { imgelink: img25 }
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

  return (
    <div id="Eventos" className="mt-14 mb-12">
      <div className="container">
        {/* Seção de cabeçalho */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold shadow-md">
            Eventos Realizados
          </h1>
        </div>
        {/* Seção do corpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Seção dos cards de produtos */}
            {ProductsData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 cursor-pointer"
                onClick={() => handleEventClick(data.galleryImages)}
              >
                {/* Imagem do produto */}
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  {/* Título do produto */}
                  <h3 className="font-semibold">{data.title}</h3>
                  {/* Cor do produto */}
                  <p className="text-sm text-gray-600">{data.color}</p>
                </div>
                <button
                  className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEventClick(data.galleryImages);
                  }}
                >
                  Clique aqui
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showGallery && (
        <GalleryProducts images={galleryImages} onClose={() => setShowGallery(false)} />
      )}
    </div>
  );
};

export default Products;
