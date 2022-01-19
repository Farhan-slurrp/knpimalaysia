/* eslint-disable react/jsx-no-target-blank */
// @ts-ignore
import React from "react";
import { BPKNPINews, INews } from "../../utils/news";
import NewsList from "../../components/News/NewsList";
import { db } from "../../firebase/init";

interface Props {}

const BeritaBPKNPI = (props: Props) => {
  const [allNews, setAllNews] = React.useState<INews[]>([]);

  const getBerita = async () => {
    const newsRef = db.collection("berita-bp-knpi-malaysia");
    const snapshot = await newsRef.get();
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }

    snapshot.forEach((doc) => {
      const newNews = {
        id: doc.id,
        title: doc.data().judul,
        source: doc.data().sumber,
        thumbnail: doc.data().thumbnailImage,
        publisher: doc.data().publisher,
        publishDate: doc.data().publishDate,
        type: doc.data().type,
      };
      setAllNews((prevNews) => [...prevNews, newNews]);
    });
  };

  React.useEffect(() => {
    getBerita();
  }, []);

  return (
    <NewsList
      title="BERITA TENTANG BP KNPI MALAYSIA"
      allNews={allNews.sort((a, b) => {
        const d1 = new Date(a["publishDate"]!).getTime();
        const d2 = new Date(b["publishDate"]!).getTime();
        return d1 > d2 ? -1 : 1;
      })}
      baseLink="berita-bp-knpi-malaysia"
    />
  );
};

export default BeritaBPKNPI;
