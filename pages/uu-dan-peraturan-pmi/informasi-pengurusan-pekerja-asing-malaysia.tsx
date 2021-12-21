/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useRouter } from "next/router";

interface Props {}

const PengurusanPekerjaAsingMalaysia = (props: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 items-center px-2 md:px-12">
      <h1 className="py-8 text-lg md:text-2xl font-semibold">
        INFORMASI TENTANG PENGURUSAN PEKERJA ASING KERAJAAN MALAYSIA{" "}
      </h1>
      <div className="flex flex-col gap-6">
        <p className="text-justify">
          Terdapat 15 buah negara sumber yang dibenarkan untuk membekalkan
          pekerja asing ke Malaysia. Negara-negara tersebut adalah Indonesia,
          Nepal, Myanmar, India, Vietnam, Filipina (Lelaki), Pakistan, Thailand,
          Kemboja, Sri Lanka, Laos, Turksmenistan, Uzbekistan dan Kazakhstan.{" "}
        </p>
        <p className="text-justify">
          Had umur penggajian pekerja asing yang dibenarkan adalah 18
          tahun(minimum) dan 45 tahun(maksimum). Had umur ini merujuk kepada
          umur pada kali pertama kemasukan pekerja asing ke dalam Malaysia.{" "}
        </p>
        <p className="text-justify">
          Tempoh penggajian yang dibenarkan adalah 10 tahun + 3 tahun bagi 5
          sektor formal. Manakala bagi sektor informal iaitu pembantu rumah
          asing tiada had tempoh penggajian ditetapkan.{" "}
        </p>
        <p className="text-justify">
          Pada masa kini, hanya 6 sektor pekerjaan yang dibenarkan untuk
          mengambil pekerja asing iaitu 5 sektor formal merangkumi sektor
          pembinaan, perkilangan, perkhidmatan, perladangan dan pertanian.
          Manakala 1 sektor informal adalah pembantu rumah asing.{" "}
        </p>
        <p>Informasi selengkapnya silahkan buka link dibawah ini:</p>
      </div>
      <div className="flex flex-col w-full gap-3">
        <a
          href="https://www.moha.gov.my/index.php/ms/bahagian-pa-dasar-dasar-semasa/dasar-semasa-penggajian-pekerja-asing"
          className="text-blue-500 p-2 border border-blue-500 rounded-md w-full"
          target="_blank"
        >
          INFORMASI KEMENTERIAN DALAM NEGERI MALAYSIA
        </a>
        <a
          href="https://www.imi.gov.my/portal2017/index.php/ms/pekerja-asing.html"
          className="text-blue-500 p-2 border border-blue-500 rounded-md w-full"
          target="_blank"
        >
          INFORMASI JABATAN IMIGRESEN MALAYSIA
        </a>
        <a
          href="https://jtksm.mohr.gov.my/ms/88-orang-awam/703-pengurusan-pekerja-asing"
          className="text-blue-500 p-2 border border-blue-500 rounded-md w-full"
          target="_blank"
        >
          INFORMASI JABATAN TENAGA KERJA SEMENANJUNG MALAYSIA
        </a>
      </div>
      <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-blue-500 rounded-md text-white mt-4"
      >
        Kembali
      </button>
    </div>
  );
};

export default PengurusanPekerjaAsingMalaysia;
