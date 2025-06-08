/* eslint-disable react/jsx-no-target-blank */
import React from "react";

interface Props {}

const PengurusBPKNPI = (props: Props) => {
  return (
    <div className="py-7 px-6 md:px-16 flex flex-col gap-9 items-center">
      <h1 className="md:text-2xl text-xs font-semibold text-center pb-4">
        KOMPOSISI DAN PERSONALIA <br />
        BADAN PERWAKILAN <br className="md:hidden block" /> KOMITE NASIONAL
        PEMUDA INDONESIA &nbsp;
        <br className="md:hidden block" />
        DI MALAYSIA <br />
        PERIODE 2022 – 2025
      </h1>
      <a
          href="https://www.instagram.com/tengku.adnan/"
          target={"_blank"}
          rel="noreferrer"
        >

       <img src="/tengku-adnan.jpeg" alt="img" className="h-auto w-96" />
       </a>
      <p className="pt-4 text-lg font-semibold text-center">
        Tengku Adnan - KETUA
      </p>  
    </div>
  );
};

export default PengurusBPKNPI;
