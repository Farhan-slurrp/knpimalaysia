/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {}

const WebUnderConstruction = (props: Props) => {
  return (
    <div>
      <img src="/under-construction.jpeg" alt="img" className="w-full p-8" />
    </div>
  );
};

export default WebUnderConstruction;
