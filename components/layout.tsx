import React from "react";
import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useAppStore } from "../stores/AppContext";
import BackToTopButton from "./BackToTopButton";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  const { isOpen, isHeightFull } = useAppStore();

  return (
    <div
      className={`flex flex-col m-auto overflow-x-scroll border-l border-r border-gray-500 max-w-7xl bg-gray-50 font-poppins min-h-4 ${
        isOpen
          ? "overflow-hidden h-screen"
          : !isHeightFull
          ? "overflow-hidden h-screen"
          : "overflow-auto h-full"
      }`}
    >
      <Head>
        <title>BP KNPI Malaysia</title>
        <meta
          name="description"
          content="Official website of Komite Nasional Pemuda Indonesia in Malaysia."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex justify-center w-full min-h-4 relative">
        {children}
        {/* <Sidebar /> */}
        {isHeightFull && <BackToTopButton />}
      </div>
    </div>
  );
};

export default Layout;
