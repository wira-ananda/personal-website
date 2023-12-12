import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Skills(props) {
  const AnimationVariants = props.Variants;
  const [skill, setSkill] = useState();
  const changeSkillSatu = () => {
    setSkill(false);
  };
  const changeSkillDua = () => {
    setSkill(true);
  };

  let styleSkillSatu;
  let styleSkillDua;

  if (skill == true) {
    styleSkillSatu = { color: "#2a9d8f" };
    styleSkillDua = { color: "#fff" };
  } else {
    styleSkillSatu = { color: "#fff" };
    styleSkillDua = { color: "#2a9d8f" };
  }
  return (
    <div
      id="Skills"
      className="w-[100vw] h-[70vh] md:h-[120vh] lg:h-[110vh] 2xl:h-[100vh] bg-backgroundColor2 "
    >
      <motion.div
        variants={AnimationVariants}
        initial="awal"
        whileInView="akhir"
        className="text-white font-normal w-full top-[10%] md:top-[10%]"
      >
        <div className="w-[70%] mx-auto text-center mb-[2.5rem] lg:mb-4">
          <h1 className="font-semibold text-[2.5rem] ">all about</h1>
          <h1 className="font-bold text-[3.5rem]">
            My <a className="text-mainColor"> Skills</a>
          </h1>
        </div>
        <div
          id="skillJudul"
          className="flex font-semibold text-[2rem] w-[70%] md:w-[60%] mx-auto text-center"
        >
          <h1
            style={styleSkillSatu}
            className={`cursor-pointer hover:text-mainColor w-[50%] text-white `}
            onClick={changeSkillSatu}
          >
            Frontend Developer
          </h1>
          <h1
            style={styleSkillDua}
            className={`cursor-pointer hover:text-mainColor w-[50%] text-white `}
            onClick={changeSkillDua}
          >
            UI Designer
          </h1>
        </div>

        {skill ? (
          <>
            <SkillsComp skill="UI Designer (Overall)" persen="80%" />
            <SkillsComp skill="Software Design" persen="80%" />
            <SkillsComp skill="Software Animating & Transition" persen="70%" />
            <SkillsComp skill="Logo Design" persen="70%" />
            <SkillsComp skill="Poster Design" persen="90%" />
          </>
        ) : (
          <>
            <SkillsComp skill="Frontend Developer (Overall)" persen="80%" />
            <SkillsComp skill="UI Engineering" persen="90%" />
            <SkillsComp skill="Responsive Website" persen="90%" />
            <SkillsComp skill="Animating Website" persen="70%" />
            <SkillsComp skill="Featuring Website" persen="70%" />
          </>
        )}
      </motion.div>
    </div>
  );
}

function SkillsComp(props) {
  const AnimationVariants = props.Variants;
  const variant = {
    animate: {
      width: `${props.persen}`,
    },
  };
  return (
    <div className="w-[70%] md:w-[60%] bg-backgroundColor3 h-[10rem] mx-auto rounded-[.7rem] mt-[2rem]">
      <div className="flex font-normal text-[2.1rem] top-[2rem] justify-between">
        <h1 className="left-[5%]">{props.skill}</h1>
        <h1 className="right-[5%]">{props.persen}</h1>
      </div>
      <div className="w-[90%] bg-tabelColor h-[1rem] rounded-[.5rem] top-[2.7rem] mx-auto">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${props.persen}` }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className={`bg-mainColor h-[1rem] rounded-[.5rem] w-[${props.persen}] `}
        ></motion.div>
      </div>
    </div>
  );
}

function SkillsJudul(props) {
  return (
    <h1
      className={`cursor-pointer hover:text-mainColor w-[50%] text-[${props.color}] `}
      onClick={props.click}
    >
      {props.skillJudul}
    </h1>
  );
}
