import React from "react";
import AdminLayout from "../../../components/AdminLayout";
import AddIcon from "@mui/icons-material/Add";

interface Props {}

const NewsType = (props: Props) => {
  const types = {
    "berita-dpp-knpi": "DPP KNPI",
    "berita-bp-knpi-malaysia": "BP KNPI MALAYSIA",
    "berita-umum": "BERITA UMUM",
    opini: "OPINI",
    jurnal: "JURNAL",
    "berita-aomi-malaysia": "AOMI MALAYSIA",
    "berita-pmi-malaysia": "PMI MALAYSIA",
  };

  console.log(Object.keys(types));

  return (
    <AdminLayout>
      <div className="p-12">
        <div className="py-4 border-b border-gray-400 flex justify-between items-end">
          <h3 className="text-2xl font-semibold">Semua Berita</h3>
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md gap-1">
            <AddIcon />
            Berita Baru
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default NewsType;
