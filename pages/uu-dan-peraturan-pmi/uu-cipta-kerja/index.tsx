/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {}

const UUCiptaKerja = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col gap-8 px-8 py-12 text-justify">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
            UNDANG-UNDANG NOMOR 11 TAHUN 2020 TENTANG CIPTA KERJA
          </h2>
          <p>BAB IV KETENAGAKERJAAN</p>
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
                    UNDANG-UNDANG NOMOR 11 TAHUN 2020 TENTANG CIPTA KERJA.pdf
                  </p>
                </Link>
              </div>
            </p>
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
