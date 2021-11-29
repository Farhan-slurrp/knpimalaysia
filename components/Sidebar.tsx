import React from "react";
// import { FacebookProvider, EmbeddedPost } from "react-facebook";
import Script from "next/script";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 p-2 border-l border-gray-400">
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></Script>
      <p className="py-2 font-semibold">Social Media</p>
      <a
        className="twitter-timeline"
        data-width="220"
        href="https://twitter.com/UluluUlala?ref_src=twsrc%5Etfw"
      ></a>
    </div>
  );
};

export default Sidebar;
