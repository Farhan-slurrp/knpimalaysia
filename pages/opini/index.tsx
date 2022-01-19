import React from "react";
import NewsList from "../../components/News/NewsList";
import { INews } from "../../utils/news";
import { db } from "../../firebase/init";

interface Props {}

const BeritaUmum = (props: Props) => {
  const [allNews, setAllNews] = React.useState<INews[]>([]);

  const getBerita = async () => {
    const newsRef = db.collection("opini");
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
    <div>
      <NewsList title="OPINI" allNews={allNews} baseLink="opini" />
    </div>
  );
};

export default BeritaUmum;
