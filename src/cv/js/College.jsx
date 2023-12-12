import DataSatu from "../db/randomData.json";
import DataDua from "../db/mataKuliah.json";
import React, { useMemo, useState } from "react";

export default function Transkrip() {
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
    tag = <TabelDua />;
  } else {
    styleNavSatu = { color: "#2a9d8f" };
    styleNavDua = { color: "#000" };
    tag = <TabelSatu />;
  }
  return (
    <>
      <div className="w-[100vw] flex mt-[3rem]">
        <div className="w-[80%] mx-auto">
          <div className="flex gap-[2rem]">
            <h1
              style={styleNavSatu}
              className="text-[2.3rem] font-bold mb-[1.5rem] cursor-pointer "
              onClick={changeIsiSatu}
            >
              TRANSKRIP NILAI
            </h1>
            <h1
              style={styleNavDua}
              className="text-[2.3rem] font-semibold mb-[1.5rem] cursor-pointer"
              onClick={changeIsiDua}
            >
              MATA KULIAH
            </h1>
          </div>
        </div>
      </div>
      {tag}
    </>
  );
}

function TabelSatu() {
  const Data = DataSatu;
  const Column = [
    {
      Header: "ID",
    },
    {
      Header: "MATA KULIAH",
    },
    {
      Header: "KODE",
    },
    {
      Header: "NILAI",
    },
  ];

  const kolom = useMemo(() => Column, []);
  const data = useMemo(() => Data, []);

  return (
    <div className="w-[100vw] flex">
      <div className="w-[80%] mx-auto mb-[5rem]">
        <table className=" text-[1.5rem]">
          <thead>
            <tr id="tr">
              {Object.keys(data[0]).map((key) => (
                <th className="bg-mainColor" key={key}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, subIndex) => (
                  <td key={subIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TabelDua() {
  const Data = DataDua;
  const Column = [
    {
      Header: "ID",
    },
    {
      Header: "MATA KULIAH",
    },
    {
      Header: "KELAS",
    },
    {
      Header: "DOSEN",
    },
  ];

  const kolom = useMemo(() => Column, []);
  const data = useMemo(() => Data, []);

  return (
    <div className="w-[100vw] flex">
      <div className="w-[80%] mx-auto mb-[5rem]">
        <table className=" text-[1.5rem]">
          <thead>
            <tr id="tr">
              {Object.keys(data[0]).map((key) => (
                <th className="bg-mainColor" key={key}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, subIndex) => (
                  <td key={subIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
