import React, { useState } from "react";
import ig from "../svg/instagram.svg";
import google from "../svg/google.svg";
import github from "../svg/github.svg";
import dribble from "../svg/dribble.svg";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";
import Database from "../db/db.json";

export default function Contact(props) {
  const AnimationVariants = props.Variants;
  return (
    <div
      id="Contact"
      className="w-[100vw] h-[60vh] md:h-[80vh] lg:h-[70vh] 2xl:h-[60vh] bg-backgroundColor"
    >
      <motion.div
        variants={AnimationVariants}
        initial="awal"
        whileInView="akhir"
        className="w-[70%] top-[5vh] mx-auto text-white"
      >
        <h1 className="text-[4rem] font-bold mb-3">
          Thanks for stopping here ✌️
        </h1>
        <div className="text-[2.3rem]">
          <h1 className="mb-[1rem]">
            I'm currently opening for freelance as a designer and developer, if
            you are interested in using my services, you can{" "}
            <a
              id="contactButton"
              className="cursor-pointer font-bold"
              href={Database.Medsos.whatsapp}
            >
              contact
            </a>{" "}
            me or send me an{" "}
            <a
              id="emailButton"
              className="cursor-pointer font-bold"
              href={Database.Medsos.email}
            >
              email
            </a>
            ...
          </h1>
          <h1>
            You can also see my Curriculum Vitae{" "}
            <a id="emailButton" className="font-bold" href="https://wiraananda-cv.netlify.app/">
              here
            </a>{" "}
            if you wanna know more about me...
          </h1>
        </div>
        <div className="mt-[10vh]">
          <h1 className="text-[4rem] font-bold mb-1">Dont be a stranger 👋</h1>
          <h1 className="text-[2rem]">connect with me online...</h1>
          <div className="flex gap-[1rem] mt-[.7vh] right-[.3rem]">
            <SocialComponent image={ig} link={Database.Medsos.instagram} />
            <SocialComponent image={google} link={Database.Medsos.email} />
            <SocialComponent image={github} link={Database.Medsos.github} />
            <SocialComponent image={dribble} link={Database.Medsos.dribbble} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SocialComponent(props) {
  return (
    <a href={props.link} className="cursor-pointer">
      <img src={props.image} className="w-[30px] md:w-[45px]" />
    </a>
  );
}
