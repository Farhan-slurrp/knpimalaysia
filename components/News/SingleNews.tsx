/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { INews } from "../../utils/news";
import { useRouter } from "next/router";

interface Props {
  news: INews | undefined;
}

const SingleNews = ({ news }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-10 px-4 py-12">
      <a
        href={news ? (news["source"] ? news["source"] : "#") : "#"}
        target="_blank"
      >
        <p className="text-2xl font-semibold text-center text-gray-900">
          {news ? news["title"] : ""}
        </p>
      </a>
      <small>
        <span>&#42;</span>
        <i>Klik judul jika terjadi error / berita tidak muncul</i>
      </small>
      {news && news["source"] && (
        <iframe
          className="w-full min-h-5"
          src={news ? news["source"] : ""}
          frameBorder="0"
        ></iframe>
      )}
      {news && news["content"] && <p>{news["content"]}</p>}
      <div className="flex justify-center">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:text-white hover:bg-blue-500"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default SingleNews;
