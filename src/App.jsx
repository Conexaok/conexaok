import React from "react";
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import "aos/dist/aos.css";
import AOS from "aos";
import TopProducts from "./components/TopProducts/TopProducts";
import Clientes from "./components/Clientes/Clientes";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Grafica from "./components/Grafica/Grafica";
import Brindes from "./components/Brindes/Brindes";
import Stands from "./components/Stands/Stands";
import Contato from "./components/Contato/Contato";

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
    <BrowserRouter>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="top-products">
        <TopProducts />
      </div>
      <div id="grafica">
        <Grafica />
      </div>
      <div id="brindes">
        <Brindes />
      </div>
      <div id="stands">
        <Stands />
      </div>
      <div id="contato">
      <div id="subscribe">
        <Subscribe />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="clientes">
        <Clientes />
      </div>
      <div id="popup">
        <Popup />
      </div>
        <Contato />
      </div>
      <div id="footer">
        <Footer />
      </div>
      
    </BrowserRouter>
  );
};

export default App;
