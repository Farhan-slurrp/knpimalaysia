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
        <div className="border border-gray-800">
          <a
            href="/uu-dan-peraturan-pmi/uu-perlindungan-pekerja-imigran"
            className="flex flex-col gap-4"
          >
            <h1 className="flex items-center gap-2 p-2 text-white bg-gray-800">
              <InsertDriveFileOutlinedIcon /> UNDANG-UNDANG PELINDUNGAN PEKERJA
              MIGRAN INDONESIA
            </h1>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              mollitia porro, id praesentium iusto accusamus quasi dolores quos,
              qui, consectetur nulla sunt eum eligendi animi in officia saepe
              nisi rerum.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UUDanPeraturanPMI;
