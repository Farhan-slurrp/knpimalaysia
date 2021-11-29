/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import DropDownMenu from "./DropDownMenu";
import menu from "../utils/dropdown-menu.json";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

interface Props {}

function Header({}: Props): ReactElement {
  const router = useRouter();

  return (
    <div className="flex flex-col w-screen">
      <Image src="/banner.jpg" alt="banner" height="424" width="400"></Image>
      <div className="flex items-center px-8 font-semibold text-white bg-blue-500">
        <a
          href="/"
          className={`uppercase px-8 py-4 flex items-center hover:bg-blue-600 ${
            router.route == "/" ? "bg-blue-600" : "bg-blue-500"
          }`}
        >
          <HomeIcon fontSize="medium" />
        </a>
        <a
          href="/sejarah-knpi"
          className={`uppercase px-4 py-4 hover:bg-blue-600 ${
            router.route == "/sejarah-knpi" ? "bg-blue-600" : "bg-blue-500"
          }`}
        >
          Sejarah KNPI
        </a>
        <DropDownMenu title="berita" menus={menu["berita"]} />
        <DropDownMenu title="galeri" menus={menu["galeri"]} />
        <DropDownMenu
          title="tentang bp knpi malaysia"
          menus={menu["tentang-bp-knpi-malaysia"]}
        />
        <a
          href="/perwakilan-ri-di-malaysia"
          className={`px-4 py-4 uppercase hover:bg-blue-600
          ${
            router.route == "/perwakilan-ri-di-malaysia"
              ? "bg-blue-600"
              : "bg-blue-500"
          }`}
        >
          perwakilan ri di malaysia
        </a>
        <DropDownMenu title="aomi malaysia" menus={menu["aomi-malaysia"]} />
      </div>
    </div>
  );
}

export default Header;
