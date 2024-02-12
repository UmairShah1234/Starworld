import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <section id="about" className="py-1 mt-3">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-lg-6">
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-decoration-underline"
              >
                About Us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
                vestibulum arcu. Aenean bibendum magna id neque feugiat, in
                ullamcorper mi vehicula. Nam nec augue quis leo volutpat
                placerat. Integer eu efficitur mauris. Ut porta leo in velit
                volutpat, sed luctus ante vehicula. Proin in libero quam.
                Vivamus nec justo et orci iaculis dignissim vel nec elit. Donec
                elementum augue nisi, at malesuada dolor venenatis id. Quisque
                dapibus felis eget quam cursus sollicitudin. Vivamus quis est at
                sapien pharetra venenatis.
              </motion.p>
              <motion.h5
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Why Choose Us?
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="d-flex"
                >
                  <motion.ul
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="d-flex flex-column"
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      &#10004; Lorem ipsum
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      &#10004; Lorem ipsum
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      &#10004; Lorem ipsum
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      &#10004; Lorem ipsum
                    </motion.span>
                  </motion.ul>{" "}
                  <motion.ul
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="d-flex flex-column"
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      &#10004; Lorem ipsum
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      &#10004; Lorem ipsum
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      &#10004; Lorem ipsum
                    </motion.span>
                  </motion.ul>
                </motion.div>
              </motion.p>
            </div>
            <div className="col-lg-6">
              <motion.img
                src="https://via.placeholder.com/500x300"
                alt="About Us"
                className="img-fluid"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
          <hr />
        </div>
      </section>
    </div>
  );
};

export default About;
