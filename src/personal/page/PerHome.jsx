import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import WiraImg from "../assets/Wiraa.png";
import { AiTwotoneFolderOpen } from "react-icons/ai";

export default function PerHome() {
  return (
    <div id="perHome" className="w-[100vw] h-[100vh] bg-backgroundColor ">
      <div className="w-[70%] m-auto">
        <div id="isiPerHome" className="top-[17vh] text-white">
          <img src={WiraImg} className="w-[30rem] mx-auto mb-[3rem]" />
          <h1 className="text-center text-[1.75rem] font-medium">
            Hi, I'm Wiraa👋
          </h1>
          <h1 id="textPerHome" className="text-center font-bold text-[3rem]">
            Frontend Developer
            <br />
            UI Designer
          </h1>
        </div>s
      </div>
    </div>
  );
}
