import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-screen bg-gray-100 min-h-4">
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
