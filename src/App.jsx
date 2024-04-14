import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import TopLoadingBar from "./components/TopLoadingBar";
import HeroSection from "./components/HeroSection";
import Scroller from "./helpers/Scroller";
import { motion } from "framer-motion";
import ProductCarousel from "./components/ProductCarousel";
import { ProductContext, ProductProvider } from "./context/ProductProvider";

function App() {
  return (
    <>
      <Header />

      <div className="gradient-container">
        <TopLoadingBar />
        {/* <motion.div
          id="herosection"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        > */}

        <HeroSection />
        {/* </motion.div> */}
        {/* <motion.div
          id="aboutsection"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        > */}
        <About />
        {/* </motion.div>
        <motion.div
          id="servicessection"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        > */}
        <Services />
        {/* </motion.div>
        <motion.div
          id="productsection"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        > */}
        {/* <ProductProvider> */}
          <ProductCarousel />
        {/* </ProductProvider> */}
        {/* </motion.div>
        <motion.div
          id="contactsection"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        > */}
        <Contact />
        {/* </motion.div> */}
      </div>

      <Footer />
    </>
  );
}

export default App;
