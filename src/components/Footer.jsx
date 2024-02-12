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
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/src/assets/Brand1.png" alt="" />
          </motion.div>
          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="py-1">
                <a href="#" className="text-decoration-none text-dark underline-on-hover">
                  Home
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="py-1">
                <a href="#" className="text-decoration-none text-dark underline-on-hover">
                  About
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="py-1">
                <a href="#" className="text-decoration-none text-dark underline-on-hover">
                  Services
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="py-1">
                <a href="#" className="text-decoration-none text-dark underline-on-hover">
                  Portfolio
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a href="#" className="text-decoration-none text-dark underline-on-hover">
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            className="col-md-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h5>Contact Us</h5>
            <address>
              123 Main Street
              <br />
              City, State 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com(To Change)
            </address>
          </motion.div>
        </div>
      </div>
      <div className="text-center">
        <span className="p-3">
          {" "}
          © Copyright 2023 | All Rights Reserved Starwart
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;
