import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/src/assets/Brand.jpeg" alt="" height={60} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <motion.li
              className="nav-item mx-3 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className="nav-link" href="/">
                <span className="underline-on-hover">Home</span>
              </a>
            </motion.li>
            <motion.li
              className="nav-item mx-3 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className="nav-link" href="/about">
                <span className="underline-on-hover">About</span>
              </a>
            </motion.li>
            <motion.li
              className="nav-item mx-3 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className="nav-link" href="/services">
                <span className="underline-on-hover">Services</span>
              </a>
            </motion.li>
            <motion.li
              className="nav-item mx-3 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className="nav-link" href="/portfolio">
                <span className="underline-on-hover">Portfolio</span>
              </a>
            </motion.li>
            <motion.li
              className="nav-item mx-3 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className="nav-link" href="/contact">
                <span className="underline-on-hover">Contact</span>
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
