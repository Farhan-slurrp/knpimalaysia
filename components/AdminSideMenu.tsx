/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";

interface Props {}

const AdminSideMenu = (props: Props) => {
  return (
    <div className="font-semibold bg-transparent text-blue-500 border-b border-blue-500 text-sm px-6 py-2 flex justify-center items-center gap-4">
      <Link href={"/admin/home"}>BERANDA</Link>
      <Link href={"/admin/berita"}>BERITA</Link>
      <Link href={"/admin/home"}>GALERI</Link>
    </div>
  );
};

export default AdminSideMenu;
