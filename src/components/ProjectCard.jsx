import React, { useContext, useState } from "react";
import "./ProjectCard.css";
import { motion } from "framer-motion";
import { ProductContext } from "../context/ProductProvider";

const ProjectCard = ({ product }) => {
  // const { setSingleProduct } = useContext(ProductContext);
  // setSingleProduct(product);

  return (
    <>
      <motion.div
        className="card product-card text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="card-img-container">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {product.name.length > 25
              ? product.name.substring(0, 25) + "..."
              : product.name}
          </h5>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Buy Now
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
