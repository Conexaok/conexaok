import React from "react";
import Img1 from "../../assets/women/necessaire.png";
import Img2 from "../../assets/women/squeeze.png";
import Img3 from "../../assets/women/cheveiro.jpg";
import Img4 from "../../assets/women/entrega.jpg";
import { FaStar } from "react-icons/fa6";

// Dados dos produtos
const BrindesData = [
  {
    id: 1,
    img: Img1,
    title: "Necessaire",
    
  },
  {
    id: 2,
    img: Img2,
    title: "Squeeze",
  },
  {
    id: 3,
    img: Img3,
    title: "Chaveiro",
  },
  {
    id: 4,
    img: Img4,
    title: "Entrega Rápida",
  },
  {
    id: 5,
    img: Img2,
    title: "Brinds",
  },
];

const Brindes = () => {
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
