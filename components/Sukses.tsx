/* eslint-disable @next/next/no-img-element */
import router from "next/router";
import React from "react";
import { useRouter } from "next/router";

interface Props {
  type: string;
  name: string;
}

const SuksesPage = ({ type, name }: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-full gap-16 p-12 text-gray-800 min-h-2">
      <div className="flex items-center w-full gap-8 p-4 border border-blue-300 rounded-md">
        <img src="/success.png" alt="" width="80" height="80" />
        <div>
          <p className="text-xl font-semibold">
            {name.toUpperCase()}, TERIMA KASIH!
          </p>
          <p>{type.toUpperCase()} ANDA TELAH KAMI TERIMA.</p>
          {type == "data" && (
            <p>
              TERKAIT JADWAL KEPULANGAN, AKAN DIINFORMASIKAN BERIKUTNYA SETELAH
              DITENTUKAN OLEH AOMI MALAYSIA <br />
              DAN TIM PANITIA AKAN MENGHUBUNGI ANDA.
            </p>
          )}
          {type != "data" && (
            <p>
              TERIMA KASIH KARENA ANDA TELAH MENGHUBUNGI KAMI DAN KAMI AKAN
              PELAJARI {type.toUpperCase()} ANDA.
              <br />
              <br />
              TIM BP KNPI MALAYSIA NANTI AKAN SEGERA MENGHUBUNGI ANDA
            </p>
          )}
        </div>
      </div>
      <button
        className="px-6 py-2 font-semibold text-white bg-blue-700 rounded-md"
        onClick={() => router.push("/")}
      >
        Kembali
      </button>
    </div>
  );
};

export default SuksesPage;
