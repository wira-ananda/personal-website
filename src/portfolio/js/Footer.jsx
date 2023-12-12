import React from "react";
import wiraa from "../../../public/icon.svg";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";
import Database from "../db/db.json";

export default function Footer(props) {
  const AnimationVariants = props.Variants;
  return (
    <div className="bg-backgroundColor h-[8vh] md:h-[9vh] lg:h-[10.5vh] w-[100vw] ">
      <motion.div
        variants={AnimationVariants}
        initial="awal"
        whileInView="akhir"
        className=" w-[75%] flex justify-between m-auto items-center text-white"
      >
        <div className="h-full flex items-center gap-[1rem]">
          <img src={wiraa} className="w-[6rem]" />
          <h1 className="text-[1.5rem] font-medium my-auto">
            DESIGN & DEVELOPMENT
          </h1>
        </div>
        <h1 className="text-[1.78rem] my-auto">
          created by{" "}
          <a id="FullstackDesigner" className="font-bold cursor-pointer">
            Wiraa
          </a>
        </h1>
      </motion.div>
    </div>
  );
}
