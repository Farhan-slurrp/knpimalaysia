/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import DropDownMenu from "../components/DropDownMenu";
import menu from "../utils/dropdown-menu.json";

interface Props {}

const SideHeader = (props: Props) => {
  const router = useRouter();

  return (
    <div className="fixed z-50 flex flex-col h-screen pt-6 overflow-y-scroll text-yellow-100 bg-blue-500 top-12">
      <a
        href="/"
        className={`uppercase px-3 py-3 border-t border-b md:border-0 border-white items-center hover:bg-blue-600 ${
          router.route == "/" ? "bg-blue-700" : "bg-blue-500"
        }`}
      >
        <HomeIcon fontSize="medium" />
      </a>
      <DropDownMenu title="dpp knpi" menus={menu["dpp-knpi"]} />
      <DropDownMenu title="bp knpi malaysia" menus={menu["bp-knpi-malaysia"]} />
      <DropDownMenu title="berita knpi" menus={menu["berita"]} />
      <DropDownMenu title="galeri kegiatan knpi" menus={menu["galeri"]} />
      <a
        href="/perwakilan-ri-di-malaysia"
        className={`px-4 py-4 uppercase hover:bg-blue-600 
            router.route == "/perwakilan-ri-di-malaysia"
              ? "bg-blue-700"
              : "bg-blue-500"
          }`}
      >
        perwakilan ri di malaysia
      </a>
      <a
        href="/opini"
        className={`px-4 py-4 uppercase hover:bg-blue-600 
          ${router.route == "/opini" ? "bg-blue-700" : "bg-blue-500"}`}
      >
        opini
      </a>
      <a
        href="/jurnal"
        className={`px-4 py-4 uppercase hover:bg-blue-600 
          ${router.route == "/jurnal" ? "bg-blue-700" : "bg-blue-500"}`}
      >
        jurnal
      </a>
      <DropDownMenu title="aomi malaysia" menus={menu["aomi-malaysia"]} />
      <DropDownMenu title="pojok pmi malaysia" menus={menu["pmi-malaysia"]} />
    </div>
  );
};

export default SideHeader;
