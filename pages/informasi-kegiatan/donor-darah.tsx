import React from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { useRouter } from "next/router";
import Head from "next/head";

type Props = {};

export default function InformasiKegiatan({}: Props) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Donor Darah KBRI Kuala Lumpur" />
        <meta property="og:image" content="/donor-darah.jpeg" />
        <meta
          property="og:description"
          content="Aksi Sosial Donor Darah KBRI Kuala Lumpur & Organisai Masyarakat
          Indonesia di Malaysia"
        />
        {/* <link rel="icon" href="/donor-darah.jpeg" /> */}
      </Head>
      <div className="py-7 px-16 flex flex-col gap-9 items-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeWFXZfiG5ST6UUAyqHZYcdz016bF19IpCsgFAOSilR0nWYIQ/viewform"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src="/donor-darah.jpeg" className="h-auto w-96" />
        </a>
        <h1 className="font-bold text-2xl">
          Aksi Sosial Donor Darah KBRI Kuala Lumpur & Organisai Masyarakat
          Indonesia di Malaysia
        </h1>
        <p className="flex flex-col gap-3 text-justify">
          Donor darah adalah hal yang sederhana untuk dilakukan tapi dapat
          membuat perbedaan besar dalam kehidupan orang yang membutuhkan.
          <br />
          Darah sangat penting untuk kelangsungan hidup seseorang karena
          bertindak sebagai pemasok oksigen dan nutrisi penting untuk berbagai
          organ dalam tubuh. Inilah sebabnya mengapa institusi kesehatan
          membutuhkan darah untuk merawat pasien agar kembali sehat.
          <br />
          <br />
          Donor darah secara rutin juga memberikan banyak manfaat kesehatan bagi
          penyumbang. Donor darah tidak hanya bermanfaat bagi penerimanya,
          tetapi juga ada manfaat kesehatan bagi donor.
          <br />
          <br />
          Dengan donor darah, banyak nyawa terselamatkan. Terutama ditengah
          pandemi ketika jumlah kasus Covid-19 meningkat, ada kebutuhan mendesak
          akan plasma konvalesen untuk membantu pasien melawan virus corona.
          <br />
          <b className="text-2xl">Ayoo donorkan darahmu!</b>
          <br />
          Daftar melalui link dibawah ini:
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeWFXZfiG5ST6UUAyqHZYcdz016bF19IpCsgFAOSilR0nWYIQ/viewform"
            target={"_blank"}
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-400 upper font-semibold"
          >
            Formulir Pendaftaran <InsertLinkIcon />
          </a>
        </p>
        <div className="flex w-full items-start flex-col">
          <table>
            <tr>
              <td className="pr-4">Hari/Tanggal:</td>

              <td>Minggu, 13 Maret 2022</td>
            </tr>
            <tr>
              <td className="pr-4">Waktu:</td>
              <td>09.00 - 13.00 MYT</td>
            </tr>
            <tr>
              <td className="pr-4">Tempat:</td>
              <td>
                Aula Hasanuddin, KBRI Kuala Lumpur <br />
                No.233, Jalan Tun Razak, 50400, Kuala Lumpur, Malaysia
              </td>
            </tr>
            <tr>
              <td className="pr-4">Narahubung:</td>
              <td>Gojes +60182041405</td>
            </tr>
            <tr>
              <td className="pr-4"></td>
              <td>Ena +601126647049</td>
            </tr>
            <tr>
              <td className="pr-4"></td>
              <td>Susi +60183608297</td>
            </tr>
          </table>
        </div>
        <div className="flex items-start flex-col w-full">
          <h3>
            Aksi Sosial KBRI Kuala Lumpur Kerjasama Organisasi Masyarakat
            Indonesia di Malaysia:
          </h3>
          <ul className="uppercase">
            <li>- PCI Nahdhatul Ulama Malaysia</li>
            <li>- BP KNPI Malaysia</li>
            <li>- APMI Malaysia</li>
            <li>- Gusdurian Kuala Lumpur</li>
            <li>- Kubes BMI Malaysia</li>
            <li>- Flobamorata Malaysia</li>
            <li>- Fokma Malaysia</li>
            <li>- Hikabara Malaysia</li>
            <li>- IWJ Malaysia</li>
            <li>- IPMI Malaysia</li>
            <li>- PWGM Malaysia</li>
          </ul>
        </div>
      </div>
    </>
  );
}
