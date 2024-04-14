import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div>
      <section id="services" className="py-1">
        <div className="container">
          <motion.h2
            className="text-center mb-5 text-decoration-underline"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <div className="row justify-content-center">
            <div className="col-6 col-md-4 col-lg-2 mb-4">
              <motion.div
                className="card shadow rounded-circle p-3 bg-info"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#e6f7ff",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">System Counseling</h5>
                  <p className="card-text">
                    Expert guidance for optimizing operations.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4">
              <motion.div
                className="card shadow rounded-circle p-3"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#e6f7ff",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">GPM</h5>
                  <p className="card-text">
                    Tailored machinery for efficient garment finishing.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4">
              <motion.div
                className="card shadow rounded-circle p-3 bg-info"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#e6f7ff",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">Installation</h5>
                  <p className="card-text">
                    Seamless setup and operation by highly qualified engineers.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4">
              <motion.div
                className="card shadow rounded-circle p-3"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#e6f7ff",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">Design</h5>
                  <p className="card-text">
                    Customized solutions from conception to execution.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4">
              <motion.div
                className="card shadow rounded-circle p-3 bg-info"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#e6f7ff",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">Training</h5>
                  <p className="card-text">
                    Comprehensive instruction for efficient machine operation.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 mb-4">
              <motion.div
                className="card shadow rounded-circle p-3"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#e6f7ff",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">Equipment</h5>
                  <p className="card-text">
                    Manufacturing of ovens, dryers, roasters etc for diverse industries 
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
