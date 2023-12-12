import React, { useState } from "react";
import wiraLogo from "../../../public/wiraa.svg";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const whileHover = "hover:text-mainColor cursor-pointer duration-50";

export default function Header() {
  const [navList, setNavList] = useState(false);
  const changeNav = () => {
    setNavList(!navList);
  };

  return (
    <div>
      <div className="w-full flex fixed z-40">
        <AnimatePresence>
          {navList && (
            <motion.div
              id="sidebar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "tween" }}
              exit={{ opacity: 0 }}
              className="w-full block h-[100vh] fixed backdrop-blur-2xl bg-tabelColor"
            >
              <div id="navInti" className="flex w-full h-full">
                <span className="w-full my-auto bottom-[5rem]">
                  <Sidebar to="Home" />
                  <Sidebar to="About" />
                  <Sidebar to="Services" />
                  <Sidebar to="Skills" />
                  <Sidebar to="Project" />
                  <Sidebar to="Contact" />
                  <a
                    href="https://wiraananda-cv.netlify.app/"
                    id="isiSidebar"
                    className="w-[40%] mb-[2rem] mx-auto flex rounded-[2.6rem] cursor-pointer py-[2rem] bg-mainColor hover:bg-backgroundColor2 hover:text-white text-black transition-all"
                  >
                    <p className=" text-[3rem] font-medium m-auto">CV</p>
                  </a>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div id="headnav" className="mx-auto w-[70%] top-[3rem]">
          <header className=" backdrop-blur-xl text-[1.8rem] flex text-white rounded-[1rem]  h-[10rem] justify-between ">
            <img
              src={wiraLogo}
              alt="logo wira"
              className="lg:ml-[18px] ml-[10px]"
            />
            <span className=" gap-[1.2rem] items-center mr-[4rem] hidden md:flex ">
              <Navbar page="Home" />
              <Navbar page="About" />
              <Navbar page="Services" />
              <Navbar page="Skills" />
              <Navbar page="Project" />
              <Navbar page="Contact" />
              <a
                className={whileHover}
                href="https://wiraananda-cv.netlify.app/"
                smooth={true}
                duration={320}
              >
                CV
              </a>
            </span>
            {navList ? (
              <AiOutlineClose
                size={30}
                onClick={changeNav}
                className="flex md:hidden my-auto mr-16 cursor-pointer"
              />
            ) : (
              <AiOutlineMenu
                className="flex md:hidden my-auto mr-16 cursor-pointer "
                size={30}
                onClick={changeNav}
              />
            )}
          </header>
        </div>
      </div>
    </div>
  );
}

function Navbar(props) {
  return (
    <Link to={props.page} smooth={true} duration={320}>
      <p className={whileHover}>{props.page}</p>
    </Link>
  );
}

function Sidebar(props) {
  return (
    <Link to={`${props.to}`} smooth={true} duration={320}>
      <div
        id="isiSidebar"
        className="w-[40%] mb-[2rem] mx-auto flex rounded-[2.6rem] cursor-pointer py-[2rem] bg-mainColor hover:bg-backgroundColor2 hover:text-white text-black transition-all"
      >
        <p className=" text-[3rem] font-medium m-auto">{props.to}</p>
      </div>
    </Link>
  );
}
