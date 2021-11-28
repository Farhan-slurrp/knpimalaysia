import React, { ReactElement } from "react";
import DropDownMenu from "./DropDownMenu";

interface Props {}

function Header({}: Props): ReactElement {
  return (
    <div className="flex flex-col w-screen">
      <div className="h-14"></div>
      <div className="flex gap-8 px-8 py-4 text-white bg-blue-500">
        <a className="uppercase">Beranda</a>
        <a className="uppercase">Sejarah KNPI</a>
        <DropDownMenu title="tentang bp knpi malaysia" />
        <a className="uppercase">berita</a>
        <DropDownMenu title="galeri" />
        <a className="uppercase">perwakilan ri di malaysia</a>
      </div>
    </div>
  );
}

export default Header;
