import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-full overflow-x-scroll bg-gray-100 font-poppins min-h-4">
      <Head>
        <title>BP KNPI Malaysia</title>
        <meta
          name="description"
          content="Official website of Komite Nasional Pemuda Indonesia in Malaysia."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex w-full">
        <div className="w-3/4">{children}</div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
