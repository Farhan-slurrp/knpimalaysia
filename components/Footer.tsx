/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col items-center p-4 text-xs text-gray-800 border-t border-gray-300">
      <p className="text-center">
        Alamat Sekretariat: Lot 108, Jalan Ampang, Desa Pahlawan, Kuala Lumpur,
        Malaysia
      </p>
      <div className="flex items-center gap-6">
        <p className="flex items-center">
          <img
            src="http://assets.stickpng.com/images/584856b4e0bb315b0f7675ac.png"
            alt="email"
            width="28"
            height="17"
          />{" "}
          knpi.malaysia@gmail.com
        </p>
        <p className="flex items-center">
          <img
            src="https://w7.pngwing.com/pngs/672/164/png-transparent-whatsapp-icon-whatsapp-logo-computer-icons-zubees-halal-foods-whatsapp-text-circle-unified-payments-interface.png"
            alt="email"
            width="20"
            height="20"
          />{" "}
          +60 12-6269 565
        </p>
      </div>
    </div>
  );
};

export default Footer;
