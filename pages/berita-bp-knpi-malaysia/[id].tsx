import React, { ReactElement } from "react";
import { BPKNPINews, INews } from "../../utils/news";
import { useRouter } from "next/router";
import SingleNews from "../../components/News/SingleNews";

interface Props {}

export default function SingleBPKNPINews(props: Props): ReactElement {
  const router = useRouter();
  const id = router.query["id"];
  const news: INews | undefined = BPKNPINews.find((news) => news["id"] == id);

  return <SingleNews news={news} />;
}
