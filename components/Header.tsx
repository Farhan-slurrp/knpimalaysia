/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import DropDownMenu from "./DropDownMenu";
import menu from "../utils/dropdown-menu.json";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";

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
          <HomeIcon fontSize="large" />
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
