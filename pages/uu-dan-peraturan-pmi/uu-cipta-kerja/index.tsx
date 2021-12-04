/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {}

const undangUndang = [
  {
    title:
      "Peraturan Pemerintah Nomor 37 Tahun 2021: Tentang Penyelenggaraan Program Jaminan Kehilangan Pekerjaan",
    link: "#",
  },
  {
    title: "Peraturan Pemerintah Nomor 36 Tahun 2021: Tentang Pengupahan",
    link: "#",
  },
  {
    title:
      "Peraturan Pemerintah Nomor 35 Tahun 2021: Tentang Perjanjian Kerja Waktu Tertentu, Alih Daya, Waktu Kerja dan Waktu Istirahat, dan Pemutusan Hubungan Kerja",
    link: "#",
  },
  {
    title:
      "Peraturan Pemerintah Nomor 34 tahun 2021: Tentang Penggunaan Tenaga Kerja Asing",
    link: "#",
  },
  {
    title:
      "Peraturan Pemerintah Nomor 5 Tahun 2021: Tentang Penyelenggaraan Perizinan Berusaha Berbasis Risiko",
    link: "#",
  },
  {
    title:
      "Peraturan Menteri Nomor 23 Tahun 2021: Tentang Pencabutan Peraturan Menteri Ketenagakerjaan Sebagai Akibat Diundangkannya Undang-Undang Nomor 11 Tahun 2020 Tentang Cipta Kerja Beserta Peraturan Pelaksanaan",
    link: "#",
  },
  {
    title:
      "Peraturan Menteri Nomor 15 Tahun 2021: Tentang Tata Cara Pemberian Manfaat Jaminan Kehilangan Pekerjaan",
    link: "#",
  },
  {
    title:
      "Peraturan Menteri Nomor 13 Tahun 2021: Tentang Tata Cara Pengangkatan, Pemberhentian, dan Penggantian Anggota Dewan Pengupahan, dan Tata Kerja Dewan Pengupahan",
    link: "#",
  },
  {
    title:
      "Peraturan Menteri Nomor 8 Tahun 2021: Tentang Peraturan Pelaksanaan Peraturan Pemerintah Nomor 34 Tahun 2021 tentang Penggunaan Tenaga Kerja Asing",
    link: "#",
  },
  {
    title:
      "Peraturan Menteri Nomor 7 Tahun 2021: Tentang Tata Cara Pendaftaran Peserta dan Pelaksanaan Rekomposisi Iuran Dalam Program Jaminan Kehilangan Pekerjaan",
    link: "#",
  },
  {
    title:
      "Peraturan Menteri Nomor 6 Tahun 2021: Tentang Penetapan Standar Kegiatan Usaha dan/atau Produk Pada Penyelenggaraan Perizinan Berusaha Berbasis Risiko Sektor Ketenagakerjaan",
    link: "#",
  },
];

const UUCiptaKerja = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col gap-8 px-8 py-12 text-justify">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
            BAB IV KETENAGAKERJAAN: UNDANG-UNDANG NOMOR 11 TAHUN 2020 TENTANG
            CIPTA KERJA
          </h2>
          <div>
            <p>Nomor: 11</p>
            <p>Tanggal Disahkan: 2 Nopember 2020</p>
            <p>Tanggal Diundangkan: 2 Nopember 2020</p>
            <p className="flex items-center gap-3">
              File:{" "}
              <div className="flex items-center gap-2 px-3 py-1 border border-gray-300 group rounded-xl">
                <img
                  src="https://www.datalytyx.com/wp-content/uploads/2017/10/PDF-image.png"
                  alt="pdf"
                  width="17"
                  height="17"
                />
                <Link href="/uu-dan-peraturan-pmi/uu-cipta-kerja/file">
                  <p className="text-blue-700 cursor-pointer group-hover:underline">
                    BAB IV KETENAGAKERJAAN: UNDANG-UNDANG NOMOR 11 TAHUN 2020
                    TENTANG CIPTA KERJA.pdf
                  </p>
                </Link>
              </div>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
            PERATURAN PELAKSANAAN DARI UNDANG-UNDANG NO. 18 TENTANG PELINDUNGAN
            PEKERJA MIGRAN INDONESIA:
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

export default UUCiptaKerja;
