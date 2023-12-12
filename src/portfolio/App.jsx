import React from "react";

import Home from "../portfolio/js/Home";
import About from "../portfolio/js/About";
import Header from "../portfolio/js/Navbar";
import Services from "../portfolio/js/Services";
import Opening from "../portfolio/js/Opening";
import Skills from "../portfolio/js/Skills";
import Project from "../portfolio/js/Project";
import Contact from "../portfolio/js/Contact";
import Footer from "../portfolio/js/Footer";

const Variants = {
  awal: {
    opacity: 0,
  },
  awal2: {
    opacity: 0,
  },
  skillsAwal: {
    opacity: 0,
    y: -100,
  },
  skillsAkhir: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
  akhir: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
  akhir1: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1,
    },
  },
  akhir2: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 2,
    },
  },
  akhir3: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 3,
    },
  },
};

export default function App() {
  return (
    <main className="App">
      <Opening Variants={Variants} />
      <>
        <Header />
        <Home Variants={Variants} />
        <About Variants={Variants} />
        <Services Variants={Variants} />
        <Skills Variants={Variants} />
        <Project Variants={Variants} />
        <Contact Variants={Variants} />
        <Footer Variants={Variants} />
      </>
    </main>
  );
}

// export default function App() {
//   let gajiBersih;

//   if()
//   return (
//     <div className="w-[100%] block">
//       <h1 className="mx-auto text-center w-full text-[5rem]">
//         PERHITUNGAN GAJI PEGAWAI
//       </h1>
//       <div className="text-[2rem] ">
//         <form action="" className="block">
//           <label>
//             {" "}
//             NIK :
//             <input type="text" id="fnik" />
//           </label>
//           <label>
//             {" "}
//             Nama Pegawai :
//             <input type="text" id="fnama" />
//           </label>
//           <label>
//             {" "}
//             Jabatan :
//             <input type="text" id="fjabat" />
//           </label>
//           <label>
//             {" "}
//             Gaji Pokok :
//             <input type="text" id="fgapok" />
//           </label>

//           <h1></h1>
//         </form>
//       </div>
//     </div>
//   );
// }
