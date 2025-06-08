/* eslint-disable react/jsx-no-target-blank */
import React from "react";

interface Props {}

const PengurusBPKNPI = (props: Props) => {
  return (
    <div className="p-3 md:p-12 text-3xs md:text-base flex flex-col w-screen md:w-full">
      <h1 className="md:text-2xl text-xs font-semibold text-center pb-4">
        KOMPOSISI DAN PERSONALIA <br />
        BADAN PERWAKILAN <br className="md:hidden block" /> KOMITE NASIONAL
        PEMUDA INDONESIA
        <br className="md:hidden block" />
        DI MALAYSIA <br />
        PERIODE 2022 – 2025
      </h1>

       <img src="/tengku-adnan.jpeg" alt="img" className="w-full p-8" />
      
    </div>
  );
};

export default PengurusBPKNPI;
