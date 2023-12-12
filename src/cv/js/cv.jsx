export default function Cv() {
  return (
    <div className="w-[100vw] flex mt-[3rem] px-[2rem] md:px-0">
      <div className="w-[67%] md:w-[70%] md:pl-[5rem]">
        <div className="w-[80%] mx-auto text-[1.7rem]">
          <div className="mb-[2rem]">
            <Judul isi="PERSONAL PROFILE" />
            <p>
              You can call me{" "}
              <a
                href="https://wiraananda.netlify.app/"
                id="UIEngineer"
                className="font-semibold cursor-pointer"
              >
                Wiraa
              </a>
              , I am a college student who wanted to become a{" "}
              <a
                href="https://www.jagoanhosting.com/blog/front-end-developer/"
                id="UIEngineer"
                className="font-semibold cursor-pointer"
              >
                Frontend Developer{" "}
              </a>
              and{" "}
              <a
                href="https://www.dewaweb.com/blog/ui-designer/"
                id="UIEngineer"
                className="font-semibold cursor-pointer"
              >
                UI Designer
              </a>
              , with unique vision on the creative field and have a lot of
              creative stuff. I love designing something and implementing it
              with a developing code.
            </p>
          </div>
          <div className="mb-[2rem]">
            <Judul isi="ORGANITATION EXPERIENCE" />
            <Experience
              peran="KETUA UMUM"
              tempat="Pramuka SMAN 1 Gowa"
              tahun="2021-2022"
              isi="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, magni ipsum neque, aspernatur esse assumenda similique laboriosam numquam quasi quia, reiciendis accusamus sequi consequuntur repellat! Dolorem accusantium deserunt assumenda quos?"
            />
            <Experience
              peran="CREATIVE BRANDING"
              tempat="Pramuka SMAN 1 Gowa"
              tahun="2022-now"
              isi="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, magni ipsum neque, aspernatur esse assumenda similique laboriosam numquam quasi quia, reiciendis accusamus sequi consequuntur repellat! Dolorem accusantium deserunt assumenda quos?"
            />
            <Experience
              peran="VISUAL ART & DESIGN"
              tempat="Indonesian Future Leaders Chapter Sulsel"
              tahun="2023-now"
              isi="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, magni ipsum neque, aspernatur esse assumenda similique laboriosam numquam quasi quia, reiciendis accusamus sequi consequuntur repellat! Dolorem accusantium deserunt assumenda quos?"
            />
          </div>
          <div className="mb-[2rem]">
            <Judul isi="WORK EXPERIENCE (AAMIIN)" />
            <Experience
              peran="JUNIOR FRONTEND ENGINEER"
              tempat="Tokopedia (Internship)"
              tahun="2024"
              isi="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, magni ipsum neque, aspernatur esse assumenda similique laboriosam numquam quasi quia, reiciendis accusamus sequi consequuntur repellat! Dolorem accusantium deserunt assumenda quos?"
            />
            <Experience
              peran="FRONTEND ENGINEER"
              tempat="Tokopedia"
              tahun="2026"
              isi="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, magni ipsum neque, aspernatur esse assumenda similique laboriosam numquam quasi quia, reiciendis accusamus sequi consequuntur repellat! Dolorem accusantium deserunt assumenda quos?"
            />
            <Experience
              peran="UI ENGINEER"
              tempat="Microsoft"
              tahun="2026"
              isi="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, magni ipsum neque, aspernatur esse assumenda similique laboriosam numquam quasi quia, reiciendis accusamus sequi consequuntur repellat! Dolorem accusantium deserunt assumenda quos?"
            />
            <Experience
              peran="SENIOR SOFTWARE ENGINEER"
              tempat="Microsoft"
              tahun="2026-2028"
              isi="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, magni ipsum neque, aspernatur esse assumenda similique laboriosam numquam quasi quia, reiciendis accusamus sequi consequuntur repellat! Dolorem accusantium deserunt assumenda quos?"
            />
            <Experience
              peran="JUNIOR GAME DEVELOPER"
              tempat="Capcom"
              tahun="2028-2029"
              isi="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, magni ipsum neque, aspernatur esse assumenda similique laboriosam numquam quasi quia, reiciendis accusamus sequi consequuntur repellat! Dolorem accusantium deserunt assumenda quos?"
            />
          </div>
        </div>
      </div>
      <div className="w-[33%] md:w-[30%] mx-auto text-[1.7rem] pr-[5rem]">
        <div className="mb-[2rem]">
          <Judul isi="EDUCATION" />
          <Education sekolah="SD INPRES LAKIYUNG" tahun="2009-2016" />
          <Education sekolah="MTS AISYIYAH SUNGGUMINASA" tahun="2016-2019" />
          <Education sekolah="SMA NEGERI 1 GOWA" tahun="2019-2022" />
          <Education
            sekolah="UNIVERSITAS DIPA MAKASSAR"
            tahun="2022-now"
            jurusan="Teknik Informatika"
          />
        </div>
        <div className="mb-[2rem]">
          <Judul isi="PERSONAL SKILLS" />
          <ProgressRing persen="80" skill="Frontend Developing" />
          <ProgressRing persen="80" skill="UI Designing" />
          <ProgressRing persen="85" skill="Brain Storming" />
          <ProgressRing persen="75" skill="Problem Solving" />
          <ProgressRing persen="80" skill="Public Speaking" />
        </div>
      </div>
    </div>
  );
}

function ProgressRing(props) {
  const radius = 40;
  const persen = props.persen / 100;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = persen * dashArray;
  return (
    <div className="w-[100px] font-semibold text-center mb-[2rem] ">
      <h1 className="">{props.persen}%</h1>
      <svg width={100} height={100}>
        <circle
          id="circleBackground"
          cx="50"
          cy="50"
          stroke="#2a9d8f"
          strokeWidth="13"
          r={radius}
          style={{
            fill: "none",
          }}
        />
        <circle
          id="circleProgress"
          cx="50"
          cy="50"
          stroke="#0b1414"
          strokeWidth="13"
          r={radius}
          style={{
            fill: "none",
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
          }}
        />
      </svg>

      <h1>{props.skill}</h1>
    </div>
  );
}

function Experience(props) {
  return (
    <div className="block mb-[1.5rem]">
      <div className="flex justify-between mb-[.5rem]">
        <div className="block">
          <div className="font-semibold">{props.peran}</div>
          <div className="font-medium">{props.tempat}</div>
        </div>
        <div>{props.tahun}</div>
      </div>
      <div>{props.isi}</div>
      <div className="font-medium">---</div>
    </div>
  );
}

function Education(props) {
  return (
    <div className="mb-[1.5rem]">
      <div className="block">
        <div className="font-semibold">{props.sekolah}</div>
        <div className="font-medium">{props.jurusan}</div>
      </div>
      <div>{props.tahun}</div>
    </div>
  );
}

function Judul(props) {
  return (
    <h1 className="font-bold text-[2.3rem] text-mainColor mb-[1.5rem]">
      {props.isi}
    </h1>
  );
}
