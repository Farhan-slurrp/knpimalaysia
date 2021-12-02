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
    <div className="flex flex-col w-full">
      <Image src="/banner.jpg" alt="banner" height="424" width="400"></Image>
      <div className="flex flex-wrap items-center justify-center w-full text-xs font-semibold text-white bg-blue-500">
        <a
          href="/"
          className={`uppercase px-3 py-3 items-center hover:bg-blue-600 ${
            router.route == "/" ? "bg-blue-700" : "bg-blue-500"
          }`}
        >
          <HomeIcon fontSize="medium" />
        </a>
        <DropDownMenu title="dpp knpi" menus={menu["dpp-knpi"]} />
        <DropDownMenu
          title="bp knpi malaysia"
          menus={menu["bp-knpi-malaysia"]}
        />
        <DropDownMenu title="berita knpi" menus={menu["berita"]} />
        <DropDownMenu title="galeri kegiatan knpi" menus={menu["galeri"]} />
        <a
          href="/perwakilan-ri-di-malaysia"
          className={`px-2 py-4 uppercase hover:bg-blue-600
          ${
            router.route == "/perwakilan-ri-di-malaysia"
              ? "bg-blue-700"
              : "bg-blue-500"
          }`}
        >
          perwakilan ri di malaysia
        </a>
        <a
          href="/opini"
          className={`px-2 py-4 uppercase hover:bg-blue-600
          ${router.route == "/opini" ? "bg-blue-700" : "bg-blue-500"}`}
        >
          opini
        </a>
        <a
          href="/jurnal"
          className={`px-2 py-4 uppercase hover:bg-blue-600
          ${router.route == "/jurnal" ? "bg-blue-700" : "bg-blue-500"}`}
        >
          jurnal
        </a>
        <DropDownMenu title="aomi malaysia" menus={menu["aomi-malaysia"]} />
        <DropDownMenu title="pojok pmi malaysia" menus={menu["pmi-malaysia"]} />
      </div>
    </div>
  );
}

export default Header;
