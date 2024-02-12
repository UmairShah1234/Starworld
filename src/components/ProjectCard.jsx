import React from "react";
import "./ProjectCard.css";
import { motion } from "framer-motion";

const ProjectCard = ({ product }) => {
  return (
    <motion.div
      className="card mb-3 shadow rounded-3"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={product.image} className="card-img-top" alt={product.name} height={250}/>
      <div className="card-body border">
        <h6 className="card-title">{product.name}</h6>
        <p className="card-text">{product.description}</p>
        <button className="btn btn-outline-primary">Add to Cart</button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
