import { useRouter } from "next/router";
import React from "react";

interface Props {
  name: string;
  link: string;
}

const UndangUndang = (props: Props) => {
  const router = useRouter();

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
      <div className="flex justify-center pt-12">
        <button
          onClick={() =>
            window.history.length > 1 ? router.back() : router.replace("/")
          }
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default UndangUndang;
