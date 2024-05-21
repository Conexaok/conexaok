import React, { useState } from "react";
import img1 from "../../assets/evento/imagem1.jpeg"; // Caminho para a primeira imagem
import img2 from "../../assets/evento/imagem2.jpeg"; // Caminho para a segunda imagem
import img3 from "../../assets/evento/imagem3.jpeg"; // Caminho para a terceira imagem
import img4 from "../../assets/evento/imagem4.jpeg"; // Caminho para a quarta imagem
import img5 from "../../assets/evento/imagem5.jpeg"; // Caminho para a quinta imagem
import img6 from "../../assets/evento/imagem6.jpeg"; // Caminho para a primeira imagem
import img7 from "../../assets/evento/imagem7.jpeg"; // Caminho para a segunda imagem
import img8 from "../../assets/evento/imagem8.jpeg"; // Caminho para a terceira imagem
import img9 from "../../assets/evento/imagem9.jpeg"; // Caminho para a quarta imagem
import img10 from "../../assets/evento/imagem10.jpeg"; // Caminho para a quinta imagem
import img11 from "../../assets/evento/imagem11.jpeg"; // Caminho para a primeira imagem
import img12 from "../../assets/evento/imagem12.jpeg"; // Caminho para a segunda imagem
import img13 from "../../assets/evento/imagem13.jpeg"; // Caminho para a terceira imagem
import img14 from "../../assets/evento/imagem14.jpeg"; // Caminho para a quarta imagem
import img15 from "../../assets/evento/imagem15.jpeg"; // Caminho para a quinta imagem
import img16 from "../../assets/evento/imagem16.jpeg"; // Caminho para a primeira imagem
import img17 from "../../assets/evento/imagem17.jpeg"; // Caminho para a segunda imagem
import img18 from "../../assets/evento/imagem18.jpeg"; // Caminho para a terceira imagem
import img19 from "../../assets/evento/imagem19.jpeg"; // Caminho para a quarta imagem
import img20 from "../../assets/evento/imagem20.jpeg"; // Caminho para a quinta imagem
import img21 from "../../assets/evento/imagem21.jpeg"; // Caminho para a primeira imagem
import img22 from "../../assets/evento/imagem22.jpeg"; // Caminho para a segunda imagem
import img23 from "../../assets/evento/imagem23.jpeg"; // Caminho para a terceira imagem
import img24 from "../../assets/evento/imagem24.jpeg"; // Caminho para a quarta imagem
import img25 from "../../assets/evento/imagem25.jpeg"; // Caminho para a quinta imagem
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Dados dos produtos
const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Hnk",
    color: "esperando dani.",
    aosDelay: "0", // Atraso para a animação AOS
    galleryImages: [img1, img2, img3, img4, img5],
  },
  {
    id: 2,
    img: img6,
    title: "Unilever",
    color: "esperando por dani",
    aosDelay: "200", // Atraso para a animação AOS
    galleryImages: [img6, img7, img8, img9, img10],
  },
  {
    id: 3,
    img: img1,
    title: "São João",
    color: "esperando por dani",
    aosDelay: "400", // Atraso para a animação AOS
    galleryImages: [img11, img12, img13, img14, img15],
  },
  {
    id: 4,
    img: img16,
    title: "Carnaval",
    color: "esperando por dani",
    aosDelay: "600", // Atraso para a animação AOS
    galleryImages: [img16, img17, img18, img19, img20],
  },
  {
    id: 4,
    img: img21,
    title: "Feiras",
    color: "Descrição do Evento 5",
    aosDelay: "600", // Atraso para a animação AOS
    galleryImages: [img21, img22, img23, img24, img25],
  },
];

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (id) => {
    setSelectedEvent(id);
    setShowModal(true);
  };

  return (
    <div id="#" className="mt-14 mb-12">
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
              <button
                key={data.id}
                onClick={() => handleEventClick(data.id)}
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
                  {/* Cor do produto */}
                  <p className="text-sm text-gray-600">{data.color}</p>
                  {/* Rating do produto */}
                  <div className="flex items-center gap-1">
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {showModal && selectedEvent !== null && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-3/4 max-h-3/4">
            <ImageGallery
              items={ProductsData[selectedEvent - 1].galleryImages.map((img) => ({
                original: img,
                thumbnail: img,
              }))}
              showPlayButton={false}
              showFullscreenButton={false}
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-0 right-0 m-4 p-2 bg-white text-black rounded-full"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
