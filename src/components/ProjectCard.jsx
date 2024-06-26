import React from "react";
import "./ProjectCard.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const ProjectCard = ({ product }) => {
  return (
    <>
      <motion.div
        className="card m-1"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-3 border  text-center">
          <img src={product.image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <p className="card-title">
            <strong>{product.name}</strong>
          </p>
          <p className="card-text">
           {product.description}
          </p>

          <Link
            to="homesection"
            className=" btn btn-primary text-light rounded-0"
            smooth={true}
            onClick={() => {
              const element = document.getElementById("contactSection");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Inquire
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
