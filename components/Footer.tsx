/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col items-center p-4 text-xs text-gray-800 border-t border-gray-300">
      <p className="text-center">
        Alamat Sekretariat: 101, Jalan Putra,{" "}
        <br className="md:hidden block" />
        Chow Kit, 50350, Kuala Lumpur, Malaysia.
      </p>
      <div className="flex items-center gap-6">
        <p className="flex items-center">
          knpi.malaysia@gmail.com {" "}
        </p>

      </div>
    </div>
  );
};

export default Footer;
