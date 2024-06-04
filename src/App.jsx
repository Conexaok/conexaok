import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Clientes from "./components/Clientes/Clientes";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
/*import Popup from "./components/Popup/Popup";*/
import Grafica from "./components/Grafica/grafica";
import Brindes from "./components/Brindes/Brindes";
import Stands from "./components/Stands/Stands";
import Contato from "./components/Contato/Contato";
import Galerry from "./components/Gallery/index";
import MapPage from "./components/MapPage/MapPage";



const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Hero handleOrderPopup={handleOrderPopup} />
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Subscribe />
      <Grafica/>
      <Brindes/>
      <Stands/>
      <Testimonials />
      <Clientes />
      <Contato/>
      <MapPage />
      <Footer />
    </div>
  );
};

export default App;
