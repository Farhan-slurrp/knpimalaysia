import { useRouter } from "next/router";
import React from "react";

interface Props {}

const NoFileFound = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <p>File Not Found</p>
      <div className="flex justify-center pt-12">
        <button
          onClick={() => router.replace("/")}
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default NoFileFound;
