import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";
import Satu from "../img/projectThree.png";
import Dua from "../img/projectTwo.png";
import Tiga from "../img/projectOne.png";

export default function Project(props) {
  const AnimationVariants = props.Variants;
  return (
    <div
      id="Project"
      className="w-[100vw] h-[113vh] md:h-[220vh] lg:h-[200vh] xl:h-[180vh] 2xl:h-[165vh] bg-backgroundColor2 lg:flex lg:justify-center lg:gap-[5rem]"
    >
      <motion.div
        variants={AnimationVariants}
        initial="awal"
        whileInView="akhir"
        id="textProject"
        className="text-center lg:text-start mb-[2vh]"
      >
        <h1 className="text-[3rem] font-bold">What I have done</h1>
        <h1 className="text-[1.5rem] font-medium ">
          each project is unique, here are some of my work.
        </h1>
        {/* <div className="mt-[2rem] mb-[3rem] flex lg:block font-medium text-[2rem] w-[70%] lg:w-full mx-auto text-center lg:text-start">
          <h1 className="cursor-pointer w-[50%] lg:w-full ">
            Frontend Developer
          </h1>
          <h1 className="cursor-pointer w-[50%] lg:w-full">UI Designer</h1>
        </div> */}
      </motion.div>
      <motion.div
        variants={AnimationVariants}
        initial="awal"
        whileInView="akhir"
        className="flex"
      >
        <div className="mx-auto ">
          <ProjectBar
            img={Satu}
            number="01"
            project="movie streaming"
            jenis="website"
          />
          <ProjectBar
            img={Dua}
            number="02"
            project="music streaming"
            jenis="website"
          />
          <ProjectBar
            img={Tiga}
            number="03"
            project="fashion shopping"
            jenis="website"
          />
        </div>
      </motion.div>
    </div>
  );
}

function ProjectBar(props) {
  return (
    <div className="w-[50rem] h-[40rem] bg-tabelColor rounded-[7rem] mb-[4rem] ">
      <div className="flex justify-center gap-[5.3rem] w-full h-full">
        <img
          src={props.img}
          className="w-[19rem] h-[25.5rem] block my-auto cursor-pointer"
        />
        <div className={`text-mainColor top-[20%] font-semibold`}>
          <h1 className="font-bold text-[4rem] text-white">{props.number}</h1>
          <h1 className="text-[1.3rem]">{props.project}</h1>
          <h1 className="text-[1.3rem]">{props.jenis}</h1>

          <h1 className="top-[23%] text-[1.2rem] bg-mainColor text-black rounded-[2rem]  text-center font-semibold px-[1rem] cursor-pointer">
            VISIT THE WEBSITE
          </h1>
        </div>
      </div>
    </div>
  );
}
