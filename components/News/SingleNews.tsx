import React from "react";
import { INews } from "../../utils/news";

interface Props {
  news: INews | undefined;
}

const SingleNews = ({ news }: Props) => {
  return (
    <div className="flex flex-col gap-10 px-4 py-12">
      <p className="text-2xl font-semibold text-center text-gray-900">
        {news ? news["title"] : ""}
      </p>
      {news && news["source"] && (
        <iframe
          className="w-full min-h-4"
          src={news ? news["source"] : ""}
          frameBorder="0"
        ></iframe>
      )}
      {news && news["content"] && <p>{news["content"]}</p>}
    </div>
  );
};

export default SingleNews;
