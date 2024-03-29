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

  console.log(allNews);

  if (!allNews) return <div></div>;

  return (
    <div className="w-screen md:w-full p-2 md:p-4 flex flex-col items-center">
      <h2 className="py-4 text-center md:text-left text-lg md:text-2xl mb-8 font-semibold text-gray-900">
        {title}
      </h2>
      <div className="flex flex-col gap-4 items-stretch min-w-2">
        {allNews.length > 0 &&
          allNews.map((news) => (
            <div
              key={news["id"]}
              className="flex items-center gap-4 p-4 border border-gray-300 rounded-md cursor-pointer"
              onClick={() => router.push(`/${baseLink}/${news["id"]}/${news["title"].split(" ").join("-").toLowerCase()}`)}
            >
              <img
                src={news["thumbnail"] ? news["thumbnail"] : "/knpi.png"}
                alt="no-img"
                width="80"
                height="70"
                className="border border-gray-400"
              />
              <div className="flex flex-col justify-center">
                {news["type"] == "external" && (
                  <p className="text-xs text-gray-800 px-2 py-1 mb-1 rounded-lg bg-gray-100 font-semibold w-max">
                    {news["publisher"]}
                  </p>
                )}
                <p className="md:text-xl hover:text-blue-500 hover:underline text-ellipsis">
                  {news["title"]}
                </p>
                <p className="text-xs text-gray-800">
                  {news["publishDate"] &&
                    format(new Date(news["publishDate"]), "dd MMMM yyyy")}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsList;
