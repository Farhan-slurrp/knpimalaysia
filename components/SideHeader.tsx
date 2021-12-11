/* eslint-disable @next/next/no-img-element */
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
    <div className="fixed z-50 flex flex-col h-full pt-6 pb-16 overflow-y-scroll bg-blue-500 top-12">
      <a
        href="/"
        className={`uppercase px-3 py-3 items-center hover:bg-blue-600 border-b border-white ${
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
        className={`px-4 py-4 uppercase hover:bg-blue-600 border-b border-white
            router.route == "/perwakilan-ri-di-malaysia"
              ? "bg-blue-700"
              : "bg-blue-500"
          }`}
      >
        perwakilan ri di malaysia
      </a>
      <a
        href="/opini"
        className={`px-4 py-4 uppercase hover:bg-blue-600  border-b border-white
          ${router.route == "/opini" ? "bg-blue-700" : "bg-blue-500"}`}
      >
        opini
      </a>
      <a
        href="/jurnal"
        className={`px-4 py-4 uppercase hover:bg-blue-600  border-b border-white
          ${router.route == "/jurnal" ? "bg-blue-700" : "bg-blue-500"}`}
      >
        jurnal
      </a>
      <DropDownMenu title="aomi malaysia" menus={menu["aomi-malaysia"]} />
      <DropDownMenu title="pojok pmi malaysia" menus={menu["pmi-malaysia"]} />
      <div className="p-4 flex gap-4 justify-center flex-wrap">
        <a
          href="https://facebook.com/knpimalaysia/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
            alt="fb"
            width={20}
            height={20}
          />
          BP KNPI MALAYSIA
        </a>
        <a
          href="https://www.instagram.com/knpimalaysia/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            alt="fb"
            width={20}
            height={20}
          />
          BP KNPI MALAYSIA
        </a>
        <a
          href="https://twitter.com/knpimalaysia/"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center"
        >
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
            alt="fb"
            width={20}
            height={20}
          />
          BP KNPI MALAYSIA
        </a>
        <a
          href="https://www.youtube.com/channel/UCB4ZBRFMW07kFUeYord5v6Q"
          target="_blank"
          rel="noreferrer"
          className="flex gap-2 items-center"
        >
          <img
            src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png"
            alt="fb"
            width={20}
            height={20}
          />
          BP KNPI MALAYSIA
        </a>
      </div>
    </div>
  );
};

export default SideHeader;
