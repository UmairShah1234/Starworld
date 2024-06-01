import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import TopLoadingBar from "./components/TopLoadingBar";
import HeroSection from "./components/HeroSection";
// import Scroller from "./helpers/Scroller";
import ProductCarousel from "./components/ProductCarousel";
import { useRef } from "react";
import ProductComponent from "./components/ProductComponent";
import WhatsApp from "./components/WhatsApp";
import SeeMoreProducts from "./components/SeeMoreProducts";
// import { ProductContext, ProductProvider } from "./context/ProductProvider";

function App() {
  return (
    <>
      <Header />

      <div className="gradient-container">
        <TopLoadingBar />

        <HeroSection />

        <About />

        <Services />

        <ProductComponent />

        <SeeMoreProducts />

        <Contact />

        <WhatsApp />
      </div>

      <Footer />
    </>
  );
}

export default App;
