/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useRouter } from "next/router";

interface Props {}

const undangUndang = [
  {
    title:
      "PERATURAN BADAN NOMOR 07 TAHUN  2021: Tentang Pemberian Bantuan Bagi Calon Pekerja Migran Indonesia dan Pekerja Migran Indonesia Bermasalah",
    link: "perban-72021",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 03 TAHUN  2021: Tentang Tunda Pelayanan Bagi Perusahaan Penempatan Pekerja Migran Indonesia",
    link: "perban-32021",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 02 TAHUN  2021: Tentang Perjanjian Penempatan antara Badan Pelindungan Pekerja Migran Indonesia dan Calon Pekerja Migran Indonesia",
    link: "perban-22021",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 01 TAHUN  2021: Tentang Perubahan atas Peraturan Badan Pelindungan Pekerja Migran Indonesia Nomor 9 Tahun 2020 tentang Pembebasan Biaya Penempatan Pekerja Migran Indonesia",
    link: "perban-12021",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 09 TAHUN  2020: Tentang Pembebasan Biaya Penempatan Pekerja Migran Indonesia",
    link: "perban-92020",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 05 TAHUN  2020: Tentang Rencana Strategis Badan Pelindungan Pekerja Migran Indonesia Tahun 2020-2024",
    link: "perban-52020",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 04 TAHUN  2020: Tentang Organisasi dan Tata Kerja Badan Pelindungan Pekerja Migran Indonesia",
    link: "perban-42020",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 03 TAHUN  2020: Tentang Tata Cara Penerbitan dan Pencabutan Surat Izin Perekrutan Pekerja Migran Indonesia",
    link: "perban-32020",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 02 TAHUN  2020: Tentang Biaya Penempatan Pekerja Migran Indonesia",
    link: "perban-22020",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 01 TAHUN  2020: Tentang Standar, Penandatanganan dan Verifikasi Perjanjian Kerja Pekerja Migran Indonesia",
    link: "perban-12020",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 03 TAHUN  2019: Tentang Petunjuk Teknis Pelayanan Kepulangan Pekerja Migran Indonesia Bermasalah sampai ke daerah Asal",
    link: "#",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 10 TAHUN  2017: Tentang Pedoman Penanganan Pengaduan di Lingkungan BNP2TKI",
    link: "#",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 06 TAHUN  2017: Tentang Komunitas Keluarga Buruh Migran",
    link: "#",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 04 TAHUN  2017: Tentang Pemberdayaan TKI, TKI Purna, dan Keluarganya",
    link: "#",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 01 TAHUN  2017: Tentang Pedoman Penyelenggaraan Peningkatan Kualitas/Kompetensi Calon Tenaga Kerja Indonesia",
    link: "#",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 10 TAHUN  2016: Tentang Organisasi dan Tata Kerja Unit Pelaksana Teknis Pelayanan Penempatan dan Perlindungan Tenaga Kerja Indonesia",
    link: "#",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 28 TAHUN  2015: Tentang Tata Cara Penyelesaian Masalah Calon Tenaga Kerja Indonesia/Tenaga Kerja Indonesia Melalui Mediasi dan Advokasi",
    link: "#",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 18 TAHUN  2015: Tentang Pelayanan Penempatan Calon TKI/TKI Melalui Daerah Perbatasan Kabupaten Nunukan",
    link: "#",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 16 TAHUN  2015: Tentang Petunjuk Teknis Pelayanan Kepulangan Tenaga Kerja Indonesia Bermasalah",
    link: "#",
  },
  {
    title:
      "PERATURAN BADAN NOMOR 18 TAHUN  2015: Tentang Pelayanan Penempatan Calon TKI/TKI Melalui Daerah Perbatasan Kabupaten Nunukan",
    link: "#",
  },
];

const PerbanPerlindunganPMI = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col gap-8 px-8 py-12 text-justify">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
            PERATURAN BADAN PELINDUNGAN PEKERJA MIGRAN INDONESIA:
          </h2>
          <div>
            {undangUndang.map((uu, idx) => (
              <p key={idx}>
                {idx + 1}.{" "}
                <a
                  href={`/uu-dan-peraturan-pmi/${uu["link"]}`}
                  target="_blank"
                  className="text-blue-700 hover:underline"
                >
                  {uu["title"]}
                </a>
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerbanPerlindunganPMI;
