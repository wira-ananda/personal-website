import React, { useState } from "react";
import wiraLogo from "../../../public/wiraa.svg";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";

export default function Opening(props) {
  const animationVariants = props.Variants;

  const [showOpening, setShowOpening] = useState(true);
  setTimeout(() => {
    setShowOpening(false);
  }, 5000);

  const [textOpening1, setTextOpening1] = useState(true);
  setTimeout(() => {
    setTextOpening1(false);
  }, 4500);
  const [textOpening2, setTextOpening2] = useState(true);
  setTimeout(() => {
    setTextOpening2(false);
  }, 3500);
  const [textOpening3, setTextOpening3] = useState(true);
  setTimeout(() => {
    setTextOpening3(false);
  }, 3000);

  return (
    <AnimatePresence>
      {showOpening && (
        <motion.div
          id="openingAnimation"
          variants={animationVariants}
          animate="akhir"
          transition={{ duration: 0.55 }}
          exit={{ y: -1000 }}
          className="text-white bg-backgroundColor w-[100vw] h-[100vh] font-normal fixed z-50"
        >
          <span className="text-center text-[2rem] top-8 m-auto">
            <AnimatePresence>
              {textOpening1 && (
                <motion.img
                  variants={animationVariants}
                  initial="awal"
                  animate="akhir1"
                  src={wiraLogo}
                  alt="logo wira"
                  className="block right-[3px] top-[28%] m-auto w-[15rem] "
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>

            <motion.span
              className="top-[28%]"
              variants={animationVariants}
              initial="awal"
              animate="akhir2"
            >
              <AnimatePresence>
                {textOpening2 && (
                  <motion.h1 exit={{ opacity: 0 }}>
                    Frontend Developer
                  </motion.h1>
                )}
              </AnimatePresence>
            </motion.span>
            <motion.span
              className="top-[28%]"
              variants={animationVariants}
              initial="awal2"
              animate="akhir2"
            >
              <AnimatePresence>
                {textOpening3 && (
                  <motion.h1 exit={{ opacity: 0 }}>UI Designer</motion.h1>
                )}
              </AnimatePresence>
            </motion.span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
