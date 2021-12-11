import React from "react";
import { DPPKNPINews } from "../../utils/news";
import NewsList from "../../components/News/NewsList";

interface Props {}

const BeritaDPPKNPI = (props: Props) => {
  return (
    <NewsList
      title="BERITA TENTANG DPP KNPI MALAYSIA"
      allNews={DPPKNPINews}
      baseLink="berita-dpp-knpi"
    />
  );
};

export default BeritaDPPKNPI;
