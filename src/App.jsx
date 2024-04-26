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
import Popup from "./components/Popup/Popup";
import Grafica from "./components/Grafica/grafica";
import Brindes from "./components/Brindes/Brindes";
import Stands from "./components/Stands/Stands";
<<<<<<< HEAD
import Contato from "./components/Contato/Contato";
=======
{/* import Gallery from "./components/Gallery"; */}
>>>>>>> 1ffdda09dfcdc118a384983394e0507d5aea19a0


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
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
     {/* <Gallery />*/ }
      <Subscribe />
      <Grafica/>
      <Brindes/>
      <Testimonials />
      <Clientes />
      <Contato/>
      <Footer />
     
      
    </div>
  );
};

export default App;
