import Typewriter from "typewriter-effect";
import LogoWiraHitam from "../img/logoWiraHitam.svg";
import FotoWira from "../img/wiraaFoto.jpg";
import chat from "../img/chat.svg";
import github from "../img/github.svg";
import ig from "../img/ig.svg";
import email from "../img/email.svg";
import linkedin from "../img/linkedin.svg";
import portfolio from "../img/portfolio.svg";
import lokasi from "../img/lokasi.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Sivi from "./cv";
import Transkrip from "./College";
import React, { useState } from "react";

export default function AppCv() {
  let [isi, setIsi] = useState();

  const changeIsiSatu = () => {
    setIsi(false);
  };

  const changeIsiDua = () => {
    setIsi(true);
  };

  let styleNavSatu;
  let styleNavDua;

  let tag;

  if (isi) {
    styleNavSatu = { color: "#000" };
    styleNavDua = { color: "#2a9d8f" };
    tag = <Transkrip />;
  } else {
    styleNavSatu = { color: "#2a9d8f" };
    styleNavDua = { color: "#000" };
    tag = <Sivi />;
  }
  return (
    <>
      <div className="w-[100vw] h-[15vh] md:h-[27vh] text-black">
        <div className="w-[70%] h-full m-auto flex items-center justify-between ">
          <div>
            <h1
              id="UIEngineer"
              className="text-[3.7rem] md:text-[5.5rem] font-semibold"
            >
              Wira Ananda
            </h1>
            <span className="text-[2.1rem] md:text-[2.5rem] bottom-[.7rem] lg:bottom-[1rem] font-medium left-[.2rem]">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["Frontend Developer", "UI Designer"],
                }}
              />
            </span>
            <div className="bottom-[1.2rem] text-[1.5rem] font-semibold">
              -------------------
            </div>
            <nav className="flex gap-[1.4rem] text-[1.4rem] md:text-[1.7rem] bottom-[.5rem] text-black font-medium">
              <h1
                style={styleNavSatu}
                className="hover:font-semibold cursor-pointer"
                onClick={changeIsiSatu}
              >
                Curriculum Vitae
              </h1>
              <a
                className="hover:font-semibold cursor-pointer"
                href="https://wiraananda.netlify.app/"
              >
                Portfolio
              </a>
              <h1
                style={styleNavDua}
                className="hover:font-semibold cursor-pointer"
                onClick={changeIsiDua}
              >
                College
              </h1>
            </nav>
          </div>
          <a
            href="https://www.instagram.com/wiraa_and/"
            className="cursor-pointer"
          >
            <img
              src={LogoWiraHitam}
              className="w-[10vh] h-[10vh] md:w-[15vh] md:h-[15vh] lg:w-[22vh] lg:h-[22vh]"
            />
          </a>
        </div>
      </div>
      <Wira />
      {tag}
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <div className="w-[100vw] h-[10vh]">
      <div className="w-[75%] h-full mx-auto flex justify-between">
        <div className="h-full flex gap-[1rem]">
          <img src={LogoWiraHitam} className="w-[9rem]" />
          <h1 className="text-[1.5rem] font-semibold right-[1.5rem] my-auto">
            DESIGN & DEVELOPMENT
          </h1>
        </div>
        <h1 className="text-[1.78rem] my-auto">
          created by{" "}
          <a id="UIEngineer" className="font-semibold">
            Wiraa
          </a>
        </h1>
      </div>
    </div>
  );
}

function Wira() {
  return (
    <div className="w-[100vw] h-[21vh] sm:h-[35vh] flex">
      <div
        style={{
          backgroundImage: `url(${FotoWira})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center ",
        }}
        className="w-[80%] md:w-[70%]"
      >
        {" "}
      </div>
      <div className="w-[20%] md:w-[30%] bg-mainColor flex">
        <div className="m-auto">
          <Contact
            icon={email}
            isi="ur.wiraananda@gmail.com"
            link="mailto:ur.wiraananda@gmail.com?subject=Hai👋"
          />
          <Contact
            icon={chat}
            isi="0895632449666"
            link="https://wa.me/62895632449666"
          />
          <Contact
            icon={lokasi}
            isi="Makassar, Sulawesi Selatan"
            link="https://maps.app.goo.gl/AHwL6SzQyyNiboBM8"
          />
          <Contact
            icon={portfolio}
            isi="wiraananda.netlify.app"
            link="https://wiraananda.netlify.app/"
          />
          <Contact
            icon={linkedin}
            isi="Wira Ananda"
            link="https://www.linkedin.com/in/wira-ananda"
          />
          <Contact
            icon={github}
            isi="wira-ananda"
            link="https://github.com/wira-ananda"
          />
        </div>
      </div>
    </div>
  );
}

function Contact(props) {
  return (
    <div className="w-[100%] flex">
      <a href={props.link} className="flex gap-[1rem] cursor-pointer mb-[1rem]">
        <img
          src={props.icon}
          className="w-[3.5rem] h-[3.5rem] md:w-[2.75rem] md:h-[2.75rem]"
        />
        <a className="my-auto text-[1.7rem] font-medium hidden md:flex">
          {props.isi}
        </a>
      </a>
    </div>
  );
}
