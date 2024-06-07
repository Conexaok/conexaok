import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Grafica from "./components/Grafica/Grafica";
import Brindes from "./components/Brindes/Brindes";
import Stands from "./components/Stands/Stands";
import Contato from "./components/Contato/Contato";
import { Gallery } from "./components/Gallery/Gallery";
import WhatsApp from "./components/WhatsApp/WhatsApp"; 


function App() {
  AOS.init();

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Router>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Grafica/>
      <Brindes/>
      <Stands/>
      <Contato/>
      <Testimonials/>
      <Clientes/>
      <Subscribe/>
      <WhatsApp/>
      <Footer/>
      <Routes>
    
        <Route path="/products" element={<Products />} />
        <Route path="/top-products" element={<TopProducts />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/grafica" element={<Grafica />} />
        <Route path="/brindes" element={<Brindes />} />
        <Route path="/stands" element={<Stands />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

