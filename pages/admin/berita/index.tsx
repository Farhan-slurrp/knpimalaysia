/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import React from "react";
import AdminLayout from "../../../components/AdminLayout";

interface Props {}

const AdminBerita = (props: Props) => {
  const berita = [
    {
      title: "berita dpp knpi",
      link: "/admin/berita/berita-dpp-knpi",
    },
    {
      title: "berita bp knpi malaysia",
      link: "/admin/berita/berita-bp-knpi-malaysia",
    },
    {
      title: "berita umum",
      link: "/admin/berita/berita-umum",
    },
    {
      title: "opini",
      link: "/admin/berita/opini",
    },
    {
      title: "berita aomi malaysia",
      link: "/admin/berita/berita-aomi-malaysia",
    },
    {
      title: "berita pmi malaysia",
      link: "/admin/berita/berita-pmi-malaysia",
    },
  ];
  return (
    <AdminLayout>
      <div className="flex flex-col gap-8 p-12">
        <h1 className="text-2xl font-semibold text-center text-gray-700 underline">
          PILIH JENIS BERITA
        </h1>
        <div className="grid grid-cols-2 gap-6 items-center justify-center p-10">
          {berita.map((item) => (
            <Link href={item["link"]} key={item["link"]}>
              <p className="cursor-pointer text-center p-4 hover:bg-blue-700 bg-blue-500 uppercase rounded-md text-white font-semibold">
                {item["title"]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminBerita;
