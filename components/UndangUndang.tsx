import React from "react";

interface Props {
  name: string;
  link: string;
}

const UndangUndang = (props: Props) => {
  return (
    <div className="p-12">
      <h2 className="py-6 text-xl font-semibold text-center">
        {props.name.toUpperCase()}
      </h2>
      <iframe
        src={props.link}
        className="w-full border border-gray-400 rounded-md min-h-5"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default UndangUndang;
