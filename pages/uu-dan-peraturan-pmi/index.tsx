/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
interface Props {}

const allData = [
  {
    title: "UNDANG-UNDANG NOMOR 18 TAHUN 2017",
    desc: "UNDANG-UNDANG TENTANG PELINDUNGAN PEKERJA MIGRAN INDONESIA BESERTA PERATURAN PELAKSANAANNYA",
    dates: "Tanggal Disahkan & Diundangkan: 22 November 2017",
    link: "/uu-dan-peraturan-pmi/uu-perlindungan-pekerja-imigran",
  },
  {
    title: "UNDANG-UNDANG NOMOR 11 TAHUN 2020",
    desc: "TENTANG CIPTA KERJA BESERTA PERATURAN PELAKSANAANNYA",
    dates: "Tanggal Disahkan & Diundangkan: 2 November 2020",
    link: "/uu-dan-peraturan-pmi/uu-cipta-kerja",
  },
  {
    title: "PERATURAN BADAN PELINDUNGAN PEKERJA MIGRAN INDONESIA",
    desc: "Basis Data Peraturan Yang Ditetapkan Oleh Kepala BP2MI Republik Indonesia",
    dates: "",
    link: "/uu-dan-peraturan-pmi/perban-perlindungan-pekerja-migran-indonesia",
  },
];

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
      <div className="flex flex-col gap-8">
        {allData.map((data) => (
          <Link key={data["title"]} href={data["link"]}>
            <div className="flex flex-col border border-blue-500 cursor-pointer">
              <h1 className="flex items-center gap-2 p-2 text-lg font-semibold text-white bg-blue-500">
                {data["title"]}
              </h1>
              <div className="px-4 py-2 text-lg">
                <p className="font-semibold">{data["desc"].toUpperCase()}</p>
                <small>{data["dates"]}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UUDanPeraturanPMI;
