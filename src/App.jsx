import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import "aos/dist/aos.css";
import AOS from "aos";
import Clientes from "./components/Clientes/Clientes";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Grafica from "./components/Grafica/grafica";
import Brindes from "./components/Brindes/Brindes";
import Stands from "./components/Stands/Stands";
import Contato from "./components/Contato/Contato";
import GalleryProducts from "./components/Products/GalleryProducts"; // Certifique-se de que este caminho está correto
import WhatsApp from "./components/WhatsApp/WhatsApp"; 
import Galpoes from "./components/Galpoes/Galpoes";
import Uniformes from "./components/Uniformes/Uniformes";
import GraficaOffset from "./components/GraficaOffset/GraficaOffset";
import ComunicacaoVisual from "./components/ComunicacaoVisual/ComunicacaoVisual";



function App() {
  AOS.init();

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Router>
        <Hero/>
        <Products/>
        <Galpoes/>
        <Grafica/>
        <Brindes/>
        <Uniformes/>
        <GraficaOffset/>
        <ComunicacaoVisual/>
        <Stands/>
        <Contato/>
        <Testimonials/>
        <Clientes/>
        <Subscribe/>

        <Navbar/>
        <WhatsApp/>
        <Footer/>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/Galpoes" element={<Galpoes />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/grafica" element={<Grafica />} />
          <Route path="/brindes" element={<Brindes />} />
          <Route path="/uniformes" element={<Uniformes />} />
          <Route path="/GraficaOffset" element={<GraficaOffset />} />
          <Route path="/ComunicacaoVisual" element={<ComunicacaoVisual />} />
          <Route path="/stands" element={<Stands />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/gallery-products" element={<GalleryProducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
