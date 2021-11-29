import React from "react";

interface Props {}

const MediaOnline = (props: Props) => {
  return (
    <div className="p-4">
      <p className="py-6">KNPI Garap Pemuda Indonesia di Luar Negeri</p>
      <iframe
        className="w-full h-80"
        src="https://www.jpnn.com/news/knpi-garap-pemuda-indonesia-di-luar-negeri"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default MediaOnline;
