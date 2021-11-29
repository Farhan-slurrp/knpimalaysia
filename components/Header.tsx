import React, { ReactElement } from "react";
import DropDownMenu from "./DropDownMenu";
import menu from "../utils/dropdown-menu.json";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {}

function Header({}: Props): ReactElement {
  const router = useRouter();

  return (
    <div className="flex flex-col w-screen">
      <Image src="/banner.jpg" alt="banner" height="424" width="400"></Image>
      <div className="flex items-center px-8 font-semibold text-white bg-blue-500">
        <a
          className={`uppercase px-8 py-4 hover:bg-blue-600 ${
            router.route == "/" ? "bg-blue-600" : "bg-blue-500"
          }`}
        >
          <img
            src="data:image/png;base64,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"
            width="30"
            height="30"
            alt=""
          />
        </a>
        <a className="px-4 py-4 uppercase hover:bg-blue-600">Sejarah KNPI</a>
        <DropDownMenu title="berita" menus={menu["berita"]} />
        <DropDownMenu title="galeri" menus={menu["galeri"]} />
        <DropDownMenu
          title="tentang bp knpi malaysia"
          menus={menu["tentang-bp-knip-malaysia"]}
        />
        <a className="px-4 py-4 uppercase hover:bg-blue-600">
          perwakilan ri di malaysia
        </a>
        <a className="px-4 py-4 uppercase hover:bg-blue-600">dpp knpi</a>
      </div>
    </div>
  );
}

export default Header;
