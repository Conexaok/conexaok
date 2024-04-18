import React from "react";

// Importando os logotipos das empresas
import AsanetLogo from "../../assets/women/asanet.png";
import AssaiLogo from "../../assets/women/assai.png";
import AmbevLogo from "../../assets/women/ambev.png";
import AccorLogo from "../../assets/women/ACCOR.png";
import BradescoLogo from "../../assets/women/BancoBradesco.png";
import AguardanteLogo from "../../assets/women/51.png";
import AjinomotoLogo from "../../assets/women/ajinomoto.png";
import PituLogo from "../../assets/women/pitu.png";
import BrfLogo from "../../assets/women/brf.png";
import BocarosaLogo from "../../assets/women/bocarosa.png";
import HeinekenLogo from "../../assets/women/heineken.png";
import BrisanetLogo from "../../assets/women/Brisanet.png";
import CafecoracoesLogo from "../../assets/women/cafecoracoes.png";
import CaixaLogo from "../../assets/women/Caixa.png";
import CapricheLogo from "../../assets/women/capriche.png";
import CardealLogo from "../../assets/women/cardeal.png";
import PatteoLogo from "../../assets/women/clientepatteo.png";
import CocacolaLogo from "../../assets/women/CocaCola.png";
import DelineLogo from "../../assets/women/deline.png";
import GilletteLogo from "../../assets/women/Gillette.png";
import HapvidaLogo from "../../assets/women/hapvida.png";
import HyperaLogo from "../../assets/women/hyperapharma.png";
import ImperioLogo from "../../assets/women/imperio.png";
import IndaiaLogo from "../../assets/women/indaia.png";
import KraftLogo from "../../assets/women/Kraft.png";
import MaggiLogo from "../../assets/women/maggi.png";
import MasterboiLogo from "../../assets/women/Masterboi.png";
import MastercardLogo from "../../assets/women/mastercard.png";
import MdiasLogo from "../../assets/women/mdias.png";
import MixmateusLogo from "../../assets/women/MixMateus.png";
import NissinLogo from "../../assets/women/nissin.png";
import OboticarioLogo from "../../assets/women/oboticario.png";
import PagbetLogo from "../../assets/women/pagbet.png";
import PernodRicardLogo from "../../assets/women/PernodRicard.png";
import RedbullLogo from "../../assets/women/RedBull.png";
import SaltonLogo from "../../assets/women/salton.png";
import SaobrazLogo from "../../assets/women/saobraz.png";
import SearaLogo from "../../assets/women/seara.png";
import SococoLogo from "../../assets/women/Sococo.png";
import TimLogo from "../../assets/women/tim.png";
import TintasfrevoLogo from "../../assets/women/tintasFrevo.png";
import TurquesaLogo from "../../assets/women/turquesa.png";

const Banner = ({ isDarkMode }) => {
  // Função para lidar com o hover do logo
  const handleLogoHover = (event) => {
    event.target.style.transform = "translateY(-5px)";
  };

  // Função para lidar com a saída do hover do logo
  const handleLogoLeave = (event) => {
    event.target.style.transform = "translateY(0)";
  };

  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 items-center text-center">
          {/* Título */}
          <h1 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} shadow-md mb-4`}>
            Clientes
          </h1>
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            {/* Renderizando os logotipos das empresas */}
            <img
              src={AsanetLogo}
              alt="Asanet"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={AssaiLogo}
              alt="Assai"
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
              src={AccorLogo}
              alt="Accor"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={BradescoLogo}
              alt="Bradesco"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={AguardanteLogo}
              alt="Aguardante"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={AjinomotoLogo}
              alt="Ajinomoto"
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
              src={BrfLogo}
              alt="Brf"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={BocarosaLogo}
              alt="Bocarosa"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={HeinekenLogo}
              alt="heineken"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={BrisanetLogo}
              alt="Brisanet"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={CafecoracoesLogo}
              alt="Cafe-corações"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={CaixaLogo}
              alt="Caixa"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={CapricheLogo}
              alt="Capriche"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={CardealLogo}
              alt="Cardeal"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={PatteoLogo}
              alt="Patteo"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={CocacolaLogo}
              alt="Coca-Cola"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={DelineLogo}
              alt="Deline"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
           
            <img
              src={GilletteLogo}
              alt="Gillette"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={HapvidaLogo}
              alt="Hapvida"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={HyperaLogo}
              alt="Hypera"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={ImperioLogo}
              alt="Imperio"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={IndaiaLogo}
              alt="Indaia"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={KraftLogo}
              alt="Kraft"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={MaggiLogo}
              alt="Maggi"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={MasterboiLogo}
              alt="Masterboi"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={MastercardLogo}
              alt="Mastercad"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={MdiasLogo}
              alt="Mdias"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={MixmateusLogo}
              alt="Mix"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={NissinLogo}
              alt="Nissin"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={OboticarioLogo}
              alt="Oboticario"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={PagbetLogo}
              alt="Pagbet"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={PernodRicardLogo}
              alt="Perno"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={RedbullLogo}
              alt="Redbull"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={SaltonLogo}
              alt="Salton"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={SaobrazLogo}
              alt="Saobraz"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={SearaLogo}
              alt="Seara"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={SococoLogo}
              alt="Sococo"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={TimLogo}
              alt="Tim"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={TintasfrevoLogo}
              alt="Tintas-Frevo"
              className="h-24 w-24 object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoLeave}
            />
            <img
              src={TurquesaLogo}
              alt="Turquesa"
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
