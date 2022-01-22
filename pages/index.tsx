/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import React from "react";
import Footer from "../components/Footer";
import { db } from "../firebase/init";

const Home: NextPage = () => {
  const [combinedNews, setCombinedNews] = React.useState<any[]>([]);
  const [groupedNews, setGroupedNews] = React.useState<any>(null);
  const categorizedNews: any = {
    "berita-aomi-malaysia": [],
    "berita-bp-knpi-malaysia": [],
    "berita-dpp-knpi": [],
    "berita-pmi-malaysia": [],
    opini: [],
  };

  const [loading, setLoading] = React.useState<boolean>(false);
  const newsTypes = [
    "berita-aomi-malaysia",
    "berita-bp-knpi-malaysia",
    "berita-dpp-knpi",
    "berita-pmi-malaysia",
    "opini",
  ];

  const getBerita = async () => {
    setLoading(true);
    for (let i = 0; i < newsTypes.length; i++) {
      const type = newsTypes[i];
      const newsRef = db.collection(type);
      const snapshot = await newsRef.get();
      let catNews: any[] = [];
      if (!snapshot.empty) {
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
          setCombinedNews((prevNews) => [...prevNews, newNews]);
          catNews.push(newNews);
        });
      }
      categorizedNews[type] = catNews;
    }
    setGroupedNews(categorizedNews);
    setLoading(false);
  };

  React.useEffect(() => {
    getBerita();
  }, []);

  // console.log(combinedNews.map((news) => news.id));
  // console.log(loading);
  if (!loading) console.log(groupedNews);

  if (loading) {
    return <div></div>;
  }

  return (
    <div>
      <main className="p-8 min-h-3 px-32">
        <div className="flex flex-col gap-4 flex-wrap">
          <h1 className="uppercase text-2xl font-semibold">Berita Terkini</h1>
          <div className="flex overflow-x-hidden gap-4 gap-y-8">
            {combinedNews && combinedNews.length > 0 && (
              <div
                className={`w-full h-max border border-gray-400 rounded-md p-4`}
              >
                <img
                  src={
                    combinedNews.sort((a, b) => {
                      const d1 = new Date(a["publishDate"]!).getTime();
                      const d2 = new Date(b["publishDate"]!).getTime();
                      return d1 > d2 ? -1 : 1;
                    })[0].thumbnail
                  }
                  alt=""
                />
                <p>
                  {
                    combinedNews.sort((a, b) => {
                      const d1 = new Date(a["publishDate"]!).getTime();
                      const d2 = new Date(b["publishDate"]!).getTime();
                      return d1 > d2 ? -1 : 1;
                    })[0].title
                  }
                </p>
              </div>
            )}
            <div className="flex flex-col w-full gap-4">
              {combinedNews &&
                combinedNews
                  .sort((a, b) => {
                    const d1 = new Date(a["publishDate"]!).getTime();
                    const d2 = new Date(b["publishDate"]!).getTime();
                    return d1 > d2 ? -1 : 1;
                  })
                  .slice(1, 4)
                  .map((news, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`w-full flex gap-4 items-start justify-between p-4`}
                      >
                        <img className="w-28" src={news.thumbnail} alt="" />
                        <p>{news.title}</p>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
