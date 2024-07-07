import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className=" text-dark pt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row">
          <motion.div
            className="col-md-4 text-center mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/Brand.jpeg" alt="" height={200} />
          </motion.div>
          <motion.div
            className="col-md-4 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-1 nav-link"
              >
                <a
                  onClick={() => {
                    const element = document.getElementById("heroSection");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="text-decoration-none text-dark underline-on-hover"
                >
                  Home
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-1 nav-link"
              >
                <a
                  onClick={() => {
                    const element = document.getElementById("aboutSection");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="text-decoration-none text-dark underline-on-hover"
                >
                  About
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-1 nav-link"
              >
                <a
                  onClick={() => {
                    const element = document.getElementById("serviceSection");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="text-decoration-none text-dark underline-on-hover"
                >
                  Services
                </a>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-1 nav-link"
              >
                <a
                  onClick={() => {
                    const element = document.getElementById("contactSection");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="text-decoration-none text-dark underline-on-hover"
                >
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            className="col-md-4 p-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h5>Contact Us</h5>
            <address>
              Survey No,176, Wakanpada,Rehamat Nagar
              <br />
              Nalasopara East,Dist. Palghar , Maharashtra.
              <br />
              Phone: 9890150932
              <br />
              Email: starworldengg@gmail.com
            </address>
          </motion.div>
        </div>
      </div>
      <div className="text-center">
        <span className="p-3">
          {" "}
          © Copyright 2023 | All Rights Reserved Starworld Engg
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;
