import React, { ReactElement } from "react";
import { DPPKNPINews, INews } from "../../utils/news";
import { useRouter } from "next/router";
import SingleNews from "../../components/News/SingleNews";
import { db } from "../../firebase/init";

interface Props {}

export default function SingleDPPKNPINews(props: Props): ReactElement {
  const router = useRouter();
  const id = router.query["id"];
  const [news, setNews] = React.useState<INews>({
    id: "",
    title: "",
  });

  const getNewsData = async () => {
    const doc = await db
      .collection("berita-dpp-knpi")
      .doc(id?.toString())
      .get();
    const newNews = {
      id: doc.id,
      title: doc.data()?.judul,
      source: doc.data()?.sumber,
      thumbnail: doc.data()?.thumbnailImage,
      publisher: doc.data()?.publisher,
      publishDate: doc.data()?.publishDate,
      type: doc.data()?.type,
      content: doc.data()?.content,
    };
    setNews(newNews);
  };

  React.useEffect(() => {
    getNewsData();
  }, []);

  return <SingleNews news={news} />;
}
