import React from "react";
import NewsList from "../../components/News/NewsList";
import { ListBeritaUmum } from "../../utils/news";

interface Props {}

const BeritaUmum = (props: Props) => {
  return (
    <div>
      {" "}
      <NewsList
        title="BERITA TENTANG DPP KNPI"
        allNews={ListBeritaUmum}
        baseLink="berita-dpp-knpi"
      />
      );
    </div>
  );
};

export default BeritaUmum;
