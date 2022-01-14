import React from "react";
import { DPPKNPINews, INews } from "../../utils/news";
import NewsList from "../../components/News/NewsList";
import { db } from "../../firebase/init";

interface Props {}

const BeritaDPPKNPI = (props: Props) => {
  const [allNews, setAllNews] = React.useState<INews[]>([]);

  const getBerita = async () => {
    const newsRef = db.collection("berita-dpp-knpi");
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
      };
      setAllNews([...allNews, newNews]);
    });
  };

  React.useEffect(() => {
    getBerita();
  }, []);

  return (
    <NewsList
      title="BERITA TENTANG DPP KNPI"
      allNews={allNews}
      baseLink="berita-dpp-knpi"
    />
  );
};

export default BeritaDPPKNPI;
