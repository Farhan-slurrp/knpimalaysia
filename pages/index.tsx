/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import { db } from "../firebase/init";
import CircularProgress from "@mui/material/CircularProgress";

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
    return (
      <div className="min-h-4 grid place-items-center">
        <div className="flex flex-col items-center gap-4">
          <CircularProgress />
          <p className="text-blue-600 font-semibold">Loading..</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <main className="py-12 px-2 min-h-3 md:px-32">
        <div className="flex flex-col gap-4 flex-wrap">
          <h1 className="uppercase text-2xl font-semibold">Berita Terkini</h1>
          <div className="flex flex-col md:flex-row overflow-x-hidden gap-4 gap-y-8">
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
                          className={`w-full flex items-center gap-4 justify-between p-4 cursor-pointer border border-gray-200`}
                        >
                          <img className="w-28" src={news.thumbnail} alt="" />
                          <div className="flex flex-col gap-1">
                            <small className="-mt-3 text-xs text-gray-700 p-1 font-semibold uppercase">
                              {getNewsCategory(news).split("-").join(" ")}
                            </small>
                            <p>{news.title}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-wrap mt-12">
          <h1 className="uppercase text-2xl font-semibold">
            Berita bp knpi malaysia
          </h1>
          <div className="flex flex-col gap-3">
            {groupedNews &&
              groupedNews["berita-bp-knpi-malaysia"] &&
              getSortedNews(groupedNews["berita-bp-knpi-malaysia"])
                .slice(0, 3)
                .map((news: any, idx: any) => {
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
                })}
            <Link href="/berita-bp-knpi-malaysia">
              <p className="text-blue-400 cursor-pointer font-semibold -mt-1">
                Load More...
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-wrap mt-12">
          <h1 className="uppercase text-2xl font-semibold">Berita dpp knpi</h1>
          <div className="flex flex-col gap-3">
            {groupedNews &&
              groupedNews["berita-dpp-knpi"] &&
              getSortedNews(groupedNews["berita-dpp-knpi"])
                .slice(0, 3)
                .map((news: any, idx: any) => {
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
                })}
            <Link href="/berita-dpp-knpi">
              <p className="text-blue-400 cursor-pointer font-semibold -mt-1">
                Load More...
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-wrap mt-12">
          <h1 className="uppercase text-2xl font-semibold">
            Berita aomi malaysia
          </h1>
          <div className="flex flex-col gap-3">
            {groupedNews &&
              groupedNews["berita-aomi-malaysia"] &&
              getSortedNews(groupedNews["berita-aomi-malaysia"])
                .slice(0, 3)
                .map((news: any, idx: any) => {
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
                })}
            <Link href="/berita-aomi-malaysia">
              <p className="text-blue-400 cursor-pointer font-semibold -mt-1">
                Load More...
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-wrap mt-12">
          <h1 className="uppercase text-2xl font-semibold">
            Berita pmi malaysia
          </h1>
          <div className="flex flex-col gap-3">
            {groupedNews &&
              groupedNews["berita-pmi-malaysia"] &&
              getSortedNews(groupedNews["berita-pmi-malaysia"])
                .slice(0, 3)
                .map((news: any, idx: any) => {
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
                })}
            <Link href="/berita-pmi-malaysia">
              <p className="text-blue-400 cursor-pointer font-semibold -mt-1">
                Load More...
              </p>
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 flex-wrap mt-12">
          <h1 className="uppercase text-2xl font-semibold">opini</h1>
          <div className="flex flex-col gap-3">
            {groupedNews &&
              groupedNews["opini"] &&
              getSortedNews(groupedNews["opini"])
                .slice(0, 3)
                .map((news: any, idx: any) => {
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
                })}
            <Link href="/opini">
              <p className="text-blue-400 cursor-pointer font-semibold -mt-1">
                Load More...
              </p>
            </Link>
          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
