/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

interface Props {}

const UUDanPeraturanPMI = (props: Props) => {
  return (
    <div className="flex flex-col gap-8 px-8 py-12 text-justify">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">
          JARINGAN DOKUMENTASI DAN INFORMASI HUKUM BP KNPI MALAYSIA
        </h2>
        <p>
          Database Undang-Undang dan Peraturan ini merupakan bagian dari
          pelaksanaan JDIH di lingkungan BP KNPI Malaysia. Secara khusus
          dimaksudkan untuk menyebarluaskan informasi peraturan
          perundang-undangan dan dokumentasi hukum secara mudah, cepat dan
          akurat kepada para pengguna baik kalangan internal maupun masyarakat
          pada umumnya.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">
          UNDANG-UNDANG PELINDUNGAN PEKERJA MIGRAN INDONESIA
        </h2>
        <div>
          <p>Nomor: 18</p>
          <p>Tanggal Disahkan: 22 Nopember 2017</p>
          <p>Tanggal Diundangkan: 22 Nopember 2017</p>
          <p className="flex items-center gap-3">
            File:{" "}
            <div className="flex items-center gap-2 px-3 py-1 border border-gray-300 group rounded-xl">
              <img
                src="https://www.datalytyx.com/wp-content/uploads/2017/10/PDF-image.png"
                alt="pdf"
                width="17"
                height="17"
              />
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1TOvKEFkM9dMW5VJrkesQWscYPWqNI1KF/view"
                className="group-hover:text-blue-500 group-hover:underline"
              >
                UU NOMOR 18 TAHUN 2017 TENTANG PERLINDUNGAN PEKERJA MIGRAN
                INDONESIA.pdf
              </a>
            </div>
          </p>
        </div>
      </div>
      <div>
        <h2 className="py-4 text-xl font-semibold">ABSTRAK</h2>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">
            TENTANG UNDANG-UNDANG TENTANG PELINDUNGAN PEKERJA MIGRAN INDONESIA
          </h2>
          <div>
            <li>
              Ketentuan yang diatur dalam Undang-Undang Nomor 39 Tahun 2004
              tentang Penempatan dan Perlindungan Tenaga Kerja Indonesia di Luar
              Negeri sudah tidak sesuai dengan perkembangan kebutuhan
              pelindungan pekerja migran Indonesia; berdasarkan pertimbangan
              tersebut perlu membentuk Undang-Undang tentang Pelindungan Pekerja
              Migran Indonesia.
            </li>
            <li>
              Dasar hukum undang-undang ini adalah: Pasal 20, Pasal 21, Pasal 27
              ayat (2), Pasal 28D ayat (1) dan ayat (2), Pasal 28E ayat (1) dan
              ayat (3), Pasal 28G, Pasal 28L ayat (1) dan ayat (2), dan Pasal 29
              Undang-Undang Dasar Negara Republik Indonesia Tahun 1945;
              Undang-Undang Nomor 13 Tahun 2003 tentang Ketenagakerjaan; dan
              Undang-Undang Nomor 6 Tahun 2012 tentang Pengesahan Intemational
              Convention on the Protection of the Rights of All Migrant Workers
              and Members of Their Families (Konvensi Internasional mengenai
              Perlindungan Hak-Hak Seluruh Pekerja Migran dan Anggota
              Keluarganya.
            </li>
            <li>
              Undang-undang ini diatur tentang: Pekerja Migran Indonesia yang
              bekerja pada Pemberi Kerja berbadan hukum, Pekerja Migran
              Indonesia yang bekerja pada Pemberi Kerja perseorangan, pelaut
              awak kapal dan pelaut perikanan, hak dan kewajiban Pekerja Migran
              Indonesia dan keluarganya, upaya Pelindungan Pekerja Migran
              Indonesia baik pelindungan dalam sistem penempatan (sebelum
              bekerja, selama bekerja, dan sesudah bekerja), atase
              ketenagakerjaan, layanan terpadu satu atap, sistem pembiayaan yang
              berpihak pada Calon Pekerja Migran Indonesia dan Pekerja Migran
              Indonesia, penyelenggaraan Jaminan Sosial Pekerja Migran
              Indonesia, dan pelindungan hukum, sosial, dan ekonomi.{" "}
            </li>
            <li>
              Undang-Undang ini juga mengatur tugas dan wewenang Pemerintah
              Pusat dan Pemerintah Daerah, serta peran dan fungsi Badan sebagai
              pelaksana kebijakan Pelindungan Pekerja Migran Indonesia. Dalam
              Undang-Undang ini, Badan Nasional Penempatan dan Perlindungan
              Tenaga Kerja Indonesia yang dibentuk berdasarkan Undang-Undang
              Nomor 39 Tahun 2004 diperkuat fungsi dan perannya sebagai
              pelaksana pelindungan bagi Pekerja Migran Indonesia.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UUDanPeraturanPMI;
