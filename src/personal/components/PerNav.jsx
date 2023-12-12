import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import wiraLogo from "../assets/wiraa.svg";
import { AiOutlineBranches, AiOutlineFileText  } from "react-icons/all";

export default function PerNav() {
  return (
    <div id="perNav" className="w-full flex fixed z-40 top-[90%] ">
      <div className="w-[100vw] bg-backgroundColor text-white font-medium">
        <div className="w-[30%] items-center mx-auto flex  text-[2rem] justify-evenly bg-backgroundColor2 h-[7rem] rounded-full">
          <PilNav name="Portfolio" icons={<AiOutlineBranches />} />
          <PilNav name="Blog" icons={<AiOutlineFileText />} />
        </div>
      </div>
    </div>
  );
}

function PilNav(props) {
  return (
    <div className="flex bg-backgroundColor w-[40%] h-[80%] rounded-full">
      <div className="mx-auto items-center flex gap-[1rem]">
        {props.icons}
        <h1 className="hidden md:flex">{props.name}</h1>
      </div>
    </div>
  );
}
