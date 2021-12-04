/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

interface Props {}

const UUCiptaKerja = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <img src="/under-construction.jpeg" alt="img" className="w-full p-8" />
      <div className="flex justify-center pt-8">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default UUCiptaKerja;
