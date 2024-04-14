import React from "react";
import Carousel from "react-multi-carousel";
import ProjectCard from "./ProjectCard";
import "react-multi-carousel/lib/styles.css";
import ProductModal from "./ProductModal";

const ProductCarousel = () => {
  const products = [
    {
      name: "Front Loading Garment Processing Washing Machine",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 19.99,
      image: "/assets/FLGPWM.jpg",
    },
    {
      name: "Front Loading Garment Processing Machine With Forward Tilting Arrangement",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 29.99,
      image: "/assets/FLGPMWFTA.jpg",
    },
    {
      name: "Fully Automatic Front Loaded Garment Washing / Dyeing Machine",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 29.99,
      image: "/assets/FAFLGWDM.jpg",
    },
    {
      name: "Side Loading Garment / Textile Processing Washing Machine",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 29.99,
      image: "/assets/SLGTPWM.jpg",
    },
    {
      name: "Side Loading Garment / Textile Processing Washing Machine (Double Door)",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 29.99,
      image: "/assets/SLGTPWMDD.jpg",
    },
    {
      name: "Drying Tumbler With Forward Tilting Arrangement",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 29.99,
      image: "/assets/DTWFTA.jpg",
    },
    {
      name: "Hydro Extractor ( Centrifuge )",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 29.99,
      image: "/assets/HEC.jpg",
    },
    {
      name: "Drying Tumbler",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 29.99,
      image: "/assets/DT.jpg",
    },
    {
      name: "Drying Tumbler ( High Capacity )",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 29.99,
      image: "/assets/SLGTPWMDD.jpg",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <section className="skill my-5 py-5" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2 className="pb-3 text-decoration-underline">Our Products</h2>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  swipeable={true}
                  draggable={false}
                  showDots={true}
                  className="owl-carousel owl-theme skill-slider shadow"
                >
                  {products.map((product, index) => (
                    <div key={index} className="">
                      <ProjectCard product={product} />
                    </div>
                  ))}
                </Carousel>
                <ProductModal />
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={"colorSharp"} alt="Image" />
      </section>
    </div>
  );
};

export default ProductCarousel;
