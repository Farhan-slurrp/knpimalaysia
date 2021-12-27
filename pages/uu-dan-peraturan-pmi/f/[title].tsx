import React from "react";
import UndangUndang from "../../../components/UndangUndang";
import { useRouter } from "next/router";
import { file } from "../../../utils/peraturan-file";
import NoFileFound from "../../../components/NoFileFound";

interface Props {}

const SingleUU = (props: Props) => {
  const router = useRouter();
  const title = router.query.title?.toString() ?? "";
  const currFile = file.find((f) => f["title"] == title);

  console.log(currFile);

  if (!currFile) {
    return <NoFileFound />;
  }

  return (
    <UndangUndang
      name={currFile ? currFile["name"] : ""}
      link={currFile ? currFile["link"] : ""}
    ></UndangUndang>
  );
};

export default SingleUU;
