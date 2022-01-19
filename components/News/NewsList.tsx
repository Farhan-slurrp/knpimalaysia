/* eslint-disable @next/next/no-img-element */
import React from "react";
import { INews } from "../../utils/news";
import { useRouter } from "next/router";
import { format } from "date-fns";

interface Props {
  title: string;
  allNews: INews[];
  baseLink: string;
}

const NewsList = ({ title, allNews, baseLink }: Props) => {
  const router = useRouter();

  return (
    <div className="w-screen md:w-full p-2 md:p-4 flex flex-col items-center">
      <h2 className="py-4 text-center md:text-left text-lg md:text-2xl mb-8 font-semibold text-gray-900">
        {title}
      </h2>
      <div className="flex flex-col gap-4 items-center md:items-stretch min-w-2">
        {allNews.length > 0 &&
          allNews.map((news) => (
            <div
              key={news["id"]}
              className="flex items-center gap-4 p-4 border border-gray-300 rounded-md cursor-pointer"
              onClick={() => router.push(`/${baseLink}/${news["id"]}`)}
            >
              <img
                src={news["thumbnail"] ? news["thumbnail"] : "/knpi.png"}
                alt="no-img"
                width="80"
                height="70"
                className="border border-gray-400"
              />
              <div className="flex flex-col justify-center">
                <p className="text-xl hover:text-blue-500 hover:underline text-ellipsis">
                  {news["title"]}
                </p>
                <p className="text-xs text-gray-800">
                  Tanggal Terbit:{" "}
                  {format(new Date(news["publishDate"]!), "dd MMMM yyyy")}
                </p>
                {news["type"] == "external" && (
                  <p className="text-xs text-gray-800">
                    Sumber: {news["publisher"]}
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsList;
