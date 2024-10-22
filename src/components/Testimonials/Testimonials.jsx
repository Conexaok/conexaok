import React from "react";
import Products from "../Products/Products"; // Importando o componente Products
import Navbar from "../Navbar/Navbar";

const Testimonials = () => {
  return (
    <div
      id="Sobre"
      className="flex flex-col justify-center items-center bg-white min-h-screen"
      style={{ margin: 0, paddingTop: 0 }} // Garantindo sem espaçamento
    >
      {/* Exibindo os Products */}
      <Products />
      <Navbar/>
    </div>
  );
};

export default Testimonials;
