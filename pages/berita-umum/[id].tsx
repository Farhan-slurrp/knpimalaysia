import React from "react";
import { BeritaUmum, INews } from "../../utils/news";
import { useRouter } from "next/router";
import SingleNews from "../../components/News/SingleNews";

interface Props {}

const SingleBeritaUmum = (props: Props) => {
  const router = useRouter();
  const id = router.query["id"];
  const news: INews | undefined = BeritaUmum.find((news) => news["id"] == id);

  return <SingleNews news={news} />;
};

export default SingleBeritaUmum;
