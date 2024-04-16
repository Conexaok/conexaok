import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import EsposendeLogo from "../../assets/women/esposende.jpeg";
import FreegellsLogo from "../../assets/women/freegells.png";
import AmbevLogo from "../../assets/women/ambev.jpg";
import BomLeiteLogo from "../../assets/women/bomLeite.png";
import UnoparLogo from "../../assets/women/unopar.png";
import MaguaryLogo from "../../assets/women/maguary.png";
import NeoquimicaLogo from "../../assets/women/neoquimica.png";
import PituLogo from "../../assets/women/pitu.png";
import JohnsonLogo from "../../assets/women/johnson.svg";

const Banner = () => {
  const handleLogoHover = (event) => {
    event.target.style.transform = "translateY(-5px)";
  };

  const handleLogoLeave = (event) => {
    event.target.style.transform = "translateY(0)";
  };

  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-black shadow-md mb-4">
            Parceiros
          </h1>
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            <img
              src={EsposendeLogo}
              alt="Esposende"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={FreegellsLogo}
              alt="Freegells"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={AmbevLogo}
              alt="Ambev"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={BomLeiteLogo}
              alt="BomLeite"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={UnoparLogo}
              alt="Unopar"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={MaguaryLogo}
              alt="Maguary"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={NeoquimicaLogo}
              alt="Neoquimica"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={PituLogo}
              alt="Pitu"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={JohnsonLogo}
              alt="Johnson"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
