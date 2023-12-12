import React from "react";
import Typewriter from "typewriter-effect";
// import TypeAnimation from "react-type-animation";
import homeImg from "../img/profile.png";
import ig from "../svg/instagram.svg";
import google from "../svg/google.svg";
import github from "../svg/github.svg";
import dribble from "../svg/dribble.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import Database from "../db/db.json";

export default function Home(props) {
  const AnimationVariants = props.Variants;

  return (
    <main id="Home" className="pt-[13vh] md:pt-[20vh] w-[100vw] relative">
      <motion.div
        variants={AnimationVariants}
        initial="awal"
        whileInView="akhir"
        className="container mx-auto w-[80%] block lg:flex justify-between"
      >
        <section className="text-white font-bold lg:mt-[5rem] xl:mt-[7.5rem] 2xl:mt-[10rem]">
          <h3 className="text-5xl mb-4">{Database.Home.judul}</h3>
          <h1 className="text-8xl mb-3">{Database.Home.name}</h1>
          <div className="text-mainColor flex font-bold text-[2.7rem] mb-10">
            <span className="text-white">{Database.Home.sebagai.satu}</span>
            <span className="left-3">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [
                    Database.Home.sebagai.dua,
                    Database.Home.sebagai.tiga,
                  ],
                }}
              />
            </span>
          </div>
          <div className="xl:w-[78%] lg:w-[60%] font-medium text-4xl leading-[3rem]">
            <p className="mb-[1.5rem]">{Database.Home.deskripsi}</p>
            <p>
              Check my Curriculum Vitae{" "}
              <a
                className="text-mainColor font-bold"
                href="https://wiraananda-cv.netlify.app/"
              >
                here!
              </a>
            </p>
          </div>
          <div id="sosial" className="flex right-[.5rem] gap-[1rem] mt-12 ">
            <SocialComponent image={ig} link={Database.Medsos.instagram} />
            <SocialComponent image={google} link={Database.Medsos.email} />
            <SocialComponent image={github} link={Database.Medsos.github} />
            <SocialComponent image={dribble} link={Database.Medsos.dribbble} />
          </div>
        </section>
        <section id="kanan">
          <img
            className=" lg:w-[87rem]  xl:w-[100rem] block mx-auto"
            src={homeImg}
          />
        </section>
      </motion.div>
    </main>
  );
}

function SocialComponent(props) {
  return (
    <a href={props.link} className="cursor-pointer">
      <img src={props.image} className="w-[30px] md:w-[45px]" />
    </a>
  );
}
