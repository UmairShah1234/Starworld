import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="" id="aboutSection">
      <section className="py-1 mt-3">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-lg-6   d-flex">
              {/* <motion.img
                src="https://via.placeholder.com/500x300"
                alt="About Us"
                className="img-fluid"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              /> */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-decoration-underline mb-3 text-center"
                >
                  About Us
                </motion.h2>
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="p-1">
                    Established in 2017 as "Starworld Engineering Company," we
                    are located in Vasai East, Dist. Palghar. With nearly two
                    decades of experience, we have gained extensive expertise in
                    servicing industries such as hospitality, laundry, garment
                    processing, pharma, and star hotels.
                  </p>
                  <p className="p-1">
                    At Starworld, we specialize in manufacturing, installing,
                    and commissioning laundry machines and garment processing
                    machines. Our team comprises highly qualified service
                    engineers who ensure seamless installation and commissioning
                    processes.
                  </p>
                  <p className="p-1">
                    Driven by a vision to excel in our chosen field, we invest
                    in new technology machines for finishing, installation, and
                    commissioning systems. Our services span project planning,
                    designing, system counseling, and comprehensive training for
                    machine operation.
                  </p>
                  <p className="p-1">
                    At Starworld Engineering Company, our commitment is to
                    provide top-notch products and services to customers across
                    India. We strive to leverage our experience, expertise, and
                    innovative approach to meet and exceed customer
                    expectations.
                  </p>
                </motion.span>
              </div>
            </div>

            <div className="col-lg-6 p-5 ml-3">
              <motion.h5
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Why Choose Us?
              </motion.h5>
              <motion.div
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
                      className="p-1"
                    >
                      Expertise: Extensive
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="p-1"
                    >
                      Quality: Superior
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="p-1"
                    >
                      Service: Exceptional
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="p-1"
                    >
                      Reliability: Trustworthy
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
                      className="p-1  "
                    >
                      Versatility: Diverse
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="p-1"
                    >
                      Relentless Pursuit of Customer Satisfaction
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="p-1"
                    >
                      Commitment: Unwavering
                    </motion.span>
                  </motion.ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </div>
  );
};

export default About;
