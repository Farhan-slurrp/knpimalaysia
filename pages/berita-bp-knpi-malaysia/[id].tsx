import React, { ReactElement } from "react";
import { BPKNPINews, INews } from "../../utils/news";
import { useRouter } from "next/router";

interface Props {}

export default function SingleBPKNPINews(props: Props): ReactElement {
  const router = useRouter();
  const id = router.query["id"];
  const news: INews | undefined = BPKNPINews.find((news) => news["id"] == id);

  return (
    <div className="flex flex-col gap-10 px-4 py-12">
      <p className="text-2xl font-semibold text-center text-gray-900">
        {news ? news["title"] : ""}
      </p>
      <iframe
        className="w-full min-h-4"
        src={news ? news["source"] : ""}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
