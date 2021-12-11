/* eslint-disable @next/next/no-img-element */
import React from "react";
import ketum from "../utils/ketua-umum.json";

interface Props {}

const KetuaUmum = (props: Props) => {
  return (
    <main className="flex flex-col items-center gap-14 p-8">
      <h1 className="font-semibold text-2xl text-center">
        KETUA UMUM DPP KNPI DARI MASA KE MASA
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 py-8">
        {ketum.map((ketua, idx) => (
          <div key={idx} className="flex flex-col gap-3 items-center">
            <img src={ketua["src"]} alt={ketua["name"]} />
            <div className="flex flex-col items-center">
              <p className="font-semibold text-center text-sm md:text-base">
                {ketua["name"].toUpperCase()}
              </p>
              <p>({ketua["periode"]})</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default KetuaUmum;
