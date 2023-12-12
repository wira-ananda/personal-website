import React from "react";
import aboutPhoto from "../img/about.png";
import goalsSVG from "../svg/age.svg";
import ageSVG from "../svg/goals.svg";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";
import Database from "../db/db.json";

export default function About(props) {
  const AnimationVariants = props.Variants;
  let age = new Date().getFullYear() - 2004;

  return (
    <section
      id="About"
      className="w-[100vw] h-[70vh] md:h-[90vh] lg:h-[100vh]  "
    >
      <motion.div
        variants={AnimationVariants}
        initial="awal"
        whileInView="akhir"
        id="aboutDIV"
        className=" md:top-[7vh] lg:top-[10vh] 2xl:top-[20vh] mx-auto h-[62vh] md:h-[72vh] lg:h-[72vh] xl:h-[62vh]"
      >
        <div id="ch1" className="text-white text-center font-bold text-[3rem]">
          <h1 className="text-[2.5rem]">{Database.About.judul} </h1>
          <h1>
            Be <a className="text-mainColor">You</a>nique
          </h1>
        </div>
        <div
          id="ch2"
          className="lg:flex mt-10 lg:mt-[6vh] w-[80%] lg:gap-12 mx-auto "
        >
          <img
            className=" w-[40rem] bg-tabelColor backdrop-blur-1 rounded-[2rem] block mx-auto"
            src={aboutPhoto}
          />
          <section className="text-white mt-[3rem] lg:mt-0 align-top text-center lg:text-start m-auto lg:w-[43rem] ">
            <h1 className="font-bold text-[2rem] mb-[1rem] ">
              {Database.About.name}
            </h1>
            <a className="font-normal text-[1.5rem] lg:leading-[25px] ">
              {Database.About.deskripsi}
            </a>
            <div className="flex gap-[2rem] text-[2rem] mt-[3.5rem] lg:mt-[2rem] text-center justify-center lg:justify-start">
              <AboutComponent
                image={ageSVG}
                judul="age"
                isi={age + " years old"}
              />
              <AboutComponent
                image={goalsSVG}
                judul="goals"
                isi={Database.About.goals}
              />
            </div>
          </section>
        </div>
      </motion.div>
    </section>
  );
}

function AboutComponent(props) {
  return (
    <span className="bg-tabelColor backdrop-blur-1 rounded-[1.5rem] w-[15rem] h-[12rem]">
      <img src={props.image} className="block mx-auto mt-[2.3rem]" />
      <h1 className="font-bold">{props.judul}</h1>
      <p className="text-[1.17rem]">{props.isi}</p>
    </span>
  );
}
