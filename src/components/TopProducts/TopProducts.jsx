import React from "react";
import Img1 from "../../assets/shirt/shirt.png"; // Importa a imagem 1
import Img2 from "../../assets/shirt/shirt2.png"; // Importa a imagem 2
import Img3 from "../../assets/shirt/shirt3.png"; // Importa a imagem 3
import Img4 from "../../assets/shirt/shirt4.png"; // Importa a imagem 4

// Array de dados dos produtos
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Galpôes",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Montagens de Stands",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Movéis em Geral",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    img: Img4,
    title: "Eletrônicos",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

// Componente TopProducts
const TopProducts = ({ galerry }) => {
  return (
    <div className="container flex flex-col items-center justify-center pt-24"> {/* Adiciona padding-top para compensar a altura do navbar */}
      {/* Seção de cabeçalho */}
      <div className="text-center mb-24">
        <h1 className="text-3xl font-bold shadow-md">
          Locações de Móveis e Estruturas Para Eventos
        </h1>
      </div>
      {/* Seção do corpo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center">
        {/* Mapeamento dos dados dos produtos */}
        {ProductsData.map((data) => (
          <div
            key={data.id}
            className="
              relative
              rounded-2xl
              bg-white
              dark:bg-gray-800
              hover:bg-gradient-to-b
              from-primary
              to-secondary
              dark:hover:bg-primary
              hover:text-white
              shadow-xl
              duration-300
              group
              max-w-[300px]
              space-y-3
            "
            style={{ cursor: "pointer" }}
            onClick={() => galerry(data.id)}
          >
            {/* Seção da imagem */}
            <div className="h-[100px] relative">
              <img
                src={data.img}
                alt={data.title}
                className="
                  max-w-[140px]
                  block
                  mx-auto
                  absolute
                  left-0
                  right-0
                  top-1/2
                  transform
                  -translate-y-1/2
                  group-hover:scale-105
                  duration-300
                  drop-shadow-md
                "
              />
            </div>
            {/* Seção de detalhes */}
            <div className="p-4 text-center">
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                {data.description}
              </p>
              <button
                className="
                  bg-primary
                  hover:scale-105
                  duration-300
                  text-white
                  py-1
                  px-4
                  rounded-full
                  mt-4
                  group-hover:bg-white
                  group-hover:text-primary
                "
              >
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
