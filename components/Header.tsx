/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import DropDownMenu from "./DropDownMenu";
import menu from "../utils/dropdown-menu.json";
import { useRouter } from "next/router";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import SideHeader from "./SideHeader";
import CloseIcon from "@mui/icons-material/Close";
import { useAppStore } from "../stores/AppContext";

interface Props {}

function Header({}: Props): ReactElement {
  const router = useRouter();
  const { isOpen, setIsOpen } = useAppStore();

  return (
    <div
      className="flex flex-col-reverse w-full items-center md:flex-col"
      id="header"
    >
      <div className="w-full h-1/2 flex justify-center bg-white">
        <img src="/wall.png" alt="banner" className="md:max-h-80 w-full"></img>
      </div>
      {/* wide screen */}
      <div className="flex-wrap items-center justify-center hidden w-full text-xs font-bold text-white bg-blue-500 md:flex">
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
        <DropDownMenu title="galeri kegiatan knpi" menus={menu["galeri"]} />
        <a
          href="/perwakilan-ri-di-malaysia"
          className={`px-4 py-4 uppercase hover:bg-blue-600
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
          className={`px-4 py-4 uppercase hover:bg-blue-600
          ${router.route == "/opini" ? "bg-blue-700" : "bg-blue-500"}`}
        >
          opini
        </a>
        <DropDownMenu title="berita" menus={menu["berita"]} />
        <DropDownMenu title="aomi malaysia" menus={menu["aomi-malaysia"]} />
        <DropDownMenu title="pojok pmi malaysia" menus={menu["pmi-malaysia"]} />
      </div>
      {/* mobile screen */}
      <div className="flex flex-col items-end md:hidden w-full h-full py-4 text-xs font-bold text-white bg-blue-500 shadow-xl">
        {isOpen ? (
          <CloseIcon
            className="mx-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <MenuIcon
            className="mx-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        {isOpen && <SideHeader />}
      </div>
    </div>
  );
}

export default Header;
