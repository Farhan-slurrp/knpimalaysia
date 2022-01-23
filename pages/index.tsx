/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
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

  const getNewsCategory = (news: any) => {
    for (const cat in groupedNews) {
      // console.log(groupedNews[cat]);
      for (let i = 0; i < groupedNews[cat].length; i++) {
        if (groupedNews[cat][i]["id"] == news["id"]) return cat;
      }
    }
    return "";
  };

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

  const getSortedNews = (allNews: any) => {
    return allNews.sort(
      (
        a: { [x: string]: string | number | Date },
        b: { [x: string]: string | number | Date }
      ) => {
        const d1 = new Date(a["publishDate"]!).getTime();
        const d2 = new Date(b["publishDate"]!).getTime();
        return d1 > d2 ? -1 : 1;
      }
    );
  };

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
              <Link
                href={`${getNewsCategory(getSortedNews(combinedNews)[0])}/${
                  getSortedNews(combinedNews)[0].id
                }`}
              >
                <div
                  className={`w-full h-max border border-gray-400 rounded-md p-4 flex flex-col gap-3 cursor-pointer`}
                >
                  <img src={getSortedNews(combinedNews)[0].thumbnail} alt="" />
                  <small className="-mt-3 text-sm text-blue-700 px-2 py-2 font-semibold bg-blue-100 uppercase">
                    {getNewsCategory(getSortedNews(combinedNews)[0])
                      .split("-")
                      .join(" ")}
                  </small>
                  <p className="text-lg">
                    {getSortedNews(combinedNews)[0].title}
                  </p>
                </div>
              </Link>
            )}
            <div className="flex flex-col w-full gap-4">
              {combinedNews &&
                combinedNews
                  .sort((a, b) => {
                    const d1 = new Date(a["publishDate"]!).getTime();
                    const d2 = new Date(b["publishDate"]!).getTime();
                    return d1 > d2 ? -1 : 1;
                  })
                  .slice(1, 5)
                  .map((news, idx) => {
                    return (
                      <Link
                        href={`${getNewsCategory(news)}/${news.id}`}
                        key={idx}
                      >
                        <div
                          className={`w-full flex gap-4 items-start justify-between p-4 cursor-pointer`}
                        >
                          <img className="w-28" src={news.thumbnail} alt="" />
                          <p>{news.title}</p>
                        </div>
                      </Link>
                    );
                  })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-wrap mt-16">
          <h1 className="uppercase text-2xl font-semibold">
            Berita bp knpi malaysia
          </h1>
          <div className="flex flex-col gap-4">
            {groupedNews &&
              groupedNews["berita-bp-knpi-malaysia"] &&
              groupedNews["berita-bp-knpi-malaysia"].map(
                (news: any, idx: any) => {
                  return (
                    <Link
                      href={`${getNewsCategory(news)}/${news.id}`}
                      key={idx}
                    >
                      <div
                        className={`w-full flex gap-4 items-start p-4 cursor-pointer border border-gray-300 rounded-md`}
                      >
                        <img className="w-28" src={news.thumbnail} alt="" />
                        <p className="text-lg">{news.title}</p>
                      </div>
                    </Link>
                  );
                }
              )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
