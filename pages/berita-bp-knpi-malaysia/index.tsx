/* eslint-disable react/jsx-no-target-blank */
// @ts-ignore
import React from "react";
import { BPKNPINews } from "../../utils/news";

interface Props {}

const BeritaBPKNPI = (props: Props) => {
  return (
    <div className="p-4">
      <h2 className="py-4 text-2xl font-semibold text-gray-900">
        SEMUA BERITA BP KNPI MALAYSIA
      </h2>
      <div className="flex flex-col gap-4">
        {BPKNPINews.map((news) => (
          <a
            key={news["source"]}
            className="flex flex-col p-4 border border-gray-300 rounded-md"
            href={`berita-bp-knpi-malaysia/${news["id"]}`}
          >
            <p className="text-xl hover:text-blue-500 hover:underline">
              {news["title"]}
            </p>
            <p className="text-xs text-gray-800">Sumber: {news["source"]}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BeritaBPKNPI;
