/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React from "react";
import { useCookies } from "react-cookie";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CollectionsIcon from "@mui/icons-material/Collections";
import Link from "next/link";
import AdminLayout from "../../components/AdminLayout";

interface Props {}

const AdminHome = (props: Props) => {
  return (
    <AdminLayout>
      <div className="flex flex-col items-center p-12 pt-16">
        <h1 className="text-2xl font-semibold text-center text-gray-700 underline">
          PILIH KONTEN UNTUK DIEDIT
        </h1>
        <div className="flex gap-12 py-12">
          <Link href={"/admin/berita"}>
            <div className="p-8 py-16 min-w-1 rounded-md hover:text-white border border-blue-500 text-blue-500 hover:bg-blue-500 cursor-pointer flex flex-col items-center gap-4">
              <p className="text-center text-2xl font-semibold">BERITA</p>
              <NewspaperIcon className="text-7xl" />
            </div>
          </Link>
          <Link href={"/admin/berita"}>
            <div className="p-8 py-16 min-w-1 rounded-md hover:text-white border border-blue-500 text-blue-500 hover:bg-blue-500 cursor-pointer flex flex-col items-center gap-4">
              <p className="text-center text-2xl font-semibold">GALERI</p>
              <CollectionsIcon className="text-7xl" />
            </div>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminHome;
