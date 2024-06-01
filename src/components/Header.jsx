import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="header"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/assets/Brand.jpeg" alt="" height={60} />
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
              <Link
                to="homesection"
                className="nav-link"
                smooth={true}
                onClick={() => {
                  const element = document.getElementById("heroSection");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span className="underline-on-hover">Home</span>
              </Link>
            </motion.li>
            <motion.li
              className="nav-item mx-3 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to="aboutsection"
                className="nav-link"
                smooth={true}
                onClick={() => {
                  const element = document.getElementById("aboutSection");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span className="underline-on-hover">About</span>
              </Link>
            </motion.li>
            <motion.li
              className="nav-item mx-3 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to="servicessection"
                className="nav-link"
                onClick={() => {
                  const element = document.getElementById("serviceSection");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span className="underline-on-hover">Services</span>
              </Link>
            </motion.li>
            <motion.li
              className="nav-item mx-3 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                className="nav-link"
                to="productsection"
                onClick={() => {
                  const element = document.getElementById("productSection");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span className="underline-on-hover">Products</span>
              </Link>
            </motion.li>
            <motion.li
              className="nav-item mx-3 "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                className="nav-link"
                to="contactsection"
                onClick={() => {
                  const element = document.getElementById("contactSection");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <span className="underline-on-hover">Contact</span>
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
