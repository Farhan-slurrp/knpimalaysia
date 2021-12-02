import React, { ReactElement } from "react";
import { AOMINews, INews } from "../../utils/news";
import { useRouter } from "next/router";
import SingleNews from "../../components/News/SingleNews";

interface Props {}

export default function SingleAOMINews(props: Props): ReactElement {
  const router = useRouter();
  const id = router.query["id"];
  const news: INews | undefined = AOMINews.find((news) => news["id"] == id);

  return <SingleNews news={news} />;
}
