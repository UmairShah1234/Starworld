import { useEffect , useState } from "react";
import "./App.css";
import About from "./components/About";
import CarouselComp from "./components/CarouselComp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Services from "./components/Services";
import TopLoadingBar from "./components/TopLoadingBar";
// import LoadingBar from 'react-top-loading-bar'

function App() {
  // const [progress, setProgress] = useState(0);
  // useEffect(()=> {
  //   window.scroll()
  // },[progress])
  return (
    <>
      <Header />
      {/* <LoadingBar
        color='#f11946'
        progress={50}
        onLoaderFinished={() => setProgress(0)}
      /> */}
      <TopLoadingBar />
      <CarouselComp />
      <About />
      <Services />
      <Product />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
