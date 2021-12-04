/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

interface Props {}

const UUDanPeraturanPMI = (props: Props) => {
  return (
    <div className="flex flex-col gap-8 px-8 py-12 text-justify">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">
          JARINGAN DOKUMENTASI DAN INFORMASI HUKUM BP KNPI MALAYSIA
        </h2>
        <p>
          Database Undang-Undang dan Peraturan ini merupakan bagian dari
          pelaksanaan JDIH di lingkungan BP KNPI Malaysia. Secara khusus
          dimaksudkan untuk menyebarluaskan informasi peraturan
          perundang-undangan dan dokumentasi hukum secara mudah, cepat dan
          akurat kepada para pengguna baik kalangan internal maupun masyarakat
          pada umumnya.
        </p>
      </div>
      <div>
        <Link href="/uu-dan-peraturan-pmi/uu-perlindungan-pekerja-imigran">
          <div className="flex flex-col border border-blue-500">
            <h1 className="flex items-center gap-2 p-2 text-lg font-semibold text-white bg-blue-500">
              <InsertDriveFileOutlinedIcon /> UNDANG-UNDANG NOMOR 18 TAHUN 2017
            </h1>
            <div className="px-4 py-2 text-lg">
              <p className="font-semibold">
                UNDANG-UNDANG TENTANG PELINDUNGAN PEKERJA MIGRAN INDONESIA
                BESERTA PERATURAN PELAKSANAANNYA
              </p>
              <small>Tanggal Disahkan & Diundangkan: 22 Nopember 2017</small>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UUDanPeraturanPMI;
