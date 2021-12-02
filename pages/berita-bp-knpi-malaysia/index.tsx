/* eslint-disable react/jsx-no-target-blank */
// @ts-ignore
import React from "react";
import { BPKNPINews } from "../../utils/news";
import NewsList from "../../components/News/NewsList";

interface Props {}

const BeritaBPKNPI = (props: Props) => {
  return (
    <NewsList
      title="SEMUA BERITA TENTANG BP KNPI MALAYSIA"
      allNews={BPKNPINews}
      baseLink="berita-bp-knpi-malaysia"
    />
  );
};

export default BeritaBPKNPI;
