/* eslint-disable @next/next/no-img-element */
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
interface Props {}

const BackToTopButton = (props: Props) => {
  return (
    <a href="#header">
      <button className="rounded-full fixed bottom-0 right-0 bg-blue-500 text-white p-3 hover:bg-blue-800 m-4 md:mx-12 shadow-xl">
        <ArrowUpwardIcon />
      </button>
    </a>
  );
};

export default BackToTopButton;
