import React from "react";
import { INews } from "../../utils/news";
import { useRouter } from "next/router";

interface Props {
  title: string;
  allNews: INews[];
  baseLink: string;
}

const NewsList = ({ title, allNews, baseLink }: Props) => {
  const router = useRouter();
  return (
    <div className="p-4">
      <h2 className="py-4 text-2xl font-semibold text-gray-900">{title}</h2>
      <div className="flex flex-col gap-4">
        {allNews.map((news) => (
          <div
            key={news["source"]}
            className="flex flex-col p-4 border border-gray-300 rounded-md cursor-pointer"
            onClick={() => router.push(`/${baseLink}/${news["id"]}`)}
          >
            <p className="text-xl hover:text-blue-500 hover:underline">
              {news["title"]}
            </p>
            <p className="text-xs text-gray-800">Sumber: {news["source"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
