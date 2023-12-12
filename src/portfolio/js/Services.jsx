import React from "react";
import code from "../svg/code.svg";
import design from "../svg/design.svg";
import photography from "../svg/photography.svg";
import react from "../svg/react.svg";
import tailwind from "../svg/tailwind.svg";
import vue from "../svg/vue.svg";
import sass from "../svg/sass.svg";
import html from "../svg/html.svg";
import js from "../svg/js.svg";
import css from "../svg/css.svg";
import ImageComp from "./component/ImageComp";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";

export default function Services(props) {
  const AnimationVariants = props.Variants;

  return (
    <div
      id="Services"
      className="w-[100vw] h-[115vh] md:h-[90vh] bg-backgroundColor2 "
    >
      <motion.div
        variants={AnimationVariants}
        initial="awal"
        whileInView="akhir"
        className="w-full md:top-[15%] lg:top-[20%]"
      >
        <h1
          id="Offer"
          className="text-white font-bold text-[4rem] mb-[2.5rem] text-center"
        >
          What I Offer
        </h1>
        <span className="top-[2%] gap-[2rem] w-[85%] text-normal text-white  md:flex block text-[1.5rem] mx-auto ">
          <span className="bg-backgroundColor3 block text-center rounded-[2rem] w-full pt-[3vh] pb-[3vh] mb-[2vh] md:mb-0">
            <img src={code} className="block mx-auto mb-[2vh]" />
            <h1 className="text-[2.5rem] font-bold mb-[.5vh]">
              Frontend Developing
            </h1>
            <p className="mx-[4rem] mb-[1.6vh] ">
              I’m quite good with developing user interface on responsive
              website, with amazing improved knowledge about frontend
              programming language, library, framework, and tools.
            </p>
            <h3 className="text-mainColor mb-[.5vh]">My Dev Tools :</h3>
            <p className="mb-[2rem]">
              HTML, CSS, Javascript, Typescript, <br />
              React JS, Tailwind CSS, SASS, <br /> Vite JS, Next JS, Three JS,
              React Native JS
            </p>
            {/* <div className="lg:flex mx-auto gap-4 w-[15rem] mb-[2rem] hidden">
              <ImageComp image={html} />
              <ImageComp image={css} />
              <ImageComp image={js} />
            </div>
            <div className="lg:flex mx-auto gap-4 w-[20rem] hidden">
              <ImageComp image={react} />
              <ImageComp image={tailwind} />
              <ImageComp image={sass} />
              <ImageComp image={vue} />
            </div> */}
          </span>
          <span className="bg-backgroundColor3 block text-center rounded-[2rem] w-full pt-[3vh] pb-[3vh] mb-[2vh] md:mb-0">
            <img src={design} className="block mx-auto  mb-[2vh]" />
            <h1 className="text-[2.5rem] font-bold mb-[.5vh]">UI Designing</h1>
            <p className="mx-[4rem] mb-[1.6vh] ">
              I always enjoy to designing anything with my designing style. I
              also have a good command of many design and editing software
              features.
            </p>
            <h3 className="text-mainColor mb-[.5vh]">Things That I Design :</h3>
            <p className="mb-[2vh]">
              UI, Web, App, Typography, <br /> Logo, Poster, Product
            </p>
            <h3 className="text-mainColor mb-[.5vh]">My Design Tools :</h3>
            <p className="mb-[2vh]">
              Figma, Canva, Picsart, Pixellab, Phonto, <br /> Jitter, Pinpot,
              Adobe XD, Adobe Illustrator
            </p>
          </span>
          <span className="bg-backgroundColor3 block text-center rounded-[2rem] w-full pt-[3vh] pb-[3vh] mb-[2vh] md:mb-0">
            <img src={photography} className="block mx-auto  mb-[2vh]" />
            <h1 className="text-[2.5rem] font-bold mb-[.5vh]">Photography</h1>
            <p className="mx-[4rem] mb-[1.6vh] ">
              This things is just hobby for me, <br />
              but I love everything that I shot.
            </p>
            <h3 className="text-mainColor mb-[.5vh]">My Photography Tools :</h3>
            <p className="mb-[2vh]">
              Canon EOS, Lightroom, <br /> VSCO, Snapseed, Remini, Capcut,{" "}
              <br />
              Adobe Premiere Pro, Filmora X
            </p>
          </span>
        </span>
      </motion.div>
    </div>
  );
}
