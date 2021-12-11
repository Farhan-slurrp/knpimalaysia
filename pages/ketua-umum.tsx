/* eslint-disable @next/next/no-img-element */
import React from "react";
import ketum from "../utils/ketua-umum.json";

interface Props {}

const KetuaUmum = (props: Props) => {
  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-12 p-8">
      {ketum.map((ketua, idx) => (
        <div key={idx} className="flex flex-col gap-2 items-center">
          <img src={ketua["src"]} alt={ketua["name"]} />
          <p>{ketua["name"].toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
};

export default KetuaUmum;
