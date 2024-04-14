import { motion, useAnimation, useViewportScroll } from "framer-motion";
import React, { useEffect } from "react";

const Scroller = ({ children }) => {
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();

  scrollY.onChange((value) => {
    if (value > window.innerHeight / 2) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  });

  return (
    <motion.div
      className="scroll-fade-in"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default Scroller;
