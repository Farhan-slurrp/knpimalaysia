/* eslint-disable react/jsx-no-target-blank */
// @ts-ignore
import React from "react";
import { AOMINews } from "../../utils/news";
import NewsList from "../../components/News/NewsList";

interface Props {}

const BeritaAOMI = (props: Props) => {
  return (
    <NewsList
      title="BERITA TENTANG AOMI MALAYSIA"
      allNews={AOMINews}
      baseLink="berita-aomi-malaysia"
    />
  );
};

export default BeritaAOMI;
