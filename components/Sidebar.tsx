/* eslint-disable @next/next/no-img-element */
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
      <a href="" className="flex">
        <img
          src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
          alt="fb"
          width="30"
        />
        Facebook
      </a>
      <a href="">Instagram</a>
      <a href="">Twitter</a>
    </div>
  );
};

export default Sidebar;
