import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Product = () => {
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
  return (
    <div className="container p-3">
      <h2 className="text-center text-decoration-underline pb-3">Check Out Our Products</h2>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4">
            <ProjectCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
