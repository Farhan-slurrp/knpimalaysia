/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import Link from "next/link";
import React from "react";

interface Props {}

const UUPerlindunganPekerjaImigran = (props: Props) => {
  const undangUndang = [
    {
      title:
        "Peraturan Presiden No. 90/2019 | Badan Pelindungan Pekerja Migran Indonesia",
      link: "perpres-902019",
    },
    {
      title:
        "Peraturan Pemerintah No. 59/2021 | Pelaksanaan Perlindungan Pekerja Migran Indonesia",
      link: "pp-592021",
    },
    {
      title:
        "Peraturan Menteri No. 7/2020 | Tata Cara Pengenaan Sanksi Administratif dalam Pelaksanaan Penempatan dan Pelindungan Pekerja Migran Indonesia",
      link: "permenaker-72020",
    },
    {
      title:
        "Peraturan Menteri Ketenagakerjaan No. 9/2019 | Tata Cara Penempatan Pekerja Migran Indonesia",
      link: "permenaker-92019",
    },
    {
      title:
        "Peraturan Menteri Ketenagakerjaan No. 10/2019 | Tata Cara Pemberian Izin Perusahaan Penempatan Pekerja Migran Indonesia",
      link: "permenaker-102019",
    },
    {
      title:
        "Peraturan Menteri Ketenagakerjaan No. 17/2019 | Penghentian dan Pelarangan Penempatan Pekerja Migran Indonesia",
      link: "permenaker-172019",
    },
    {
      title:
        "Peraturan Menteri Ketenagakerjaan No. 18/2018 | Jaminan Sosial Pekerja Migran Indonesia",
      link: "permenaker-182018",
    },
  ];

  return (
    <div className="flex flex-col gap-8 px-8 py-12 text-justify">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">
          UNDANG-UNDANG PELINDUNGAN PEKERJA MIGRAN INDONESIA
        </h2>
        <div>
          <p>Nomor: 18</p>
          <p>Tanggal Disahkan: 22 November 2017</p>
          <p>Tanggal Diundangkan: 22 November 2017</p>
          <p className="flex items-center gap-3">
            File:{" "}
            <div className="flex items-center gap-2 px-3 py-1 border border-gray-300 group rounded-xl">
              <img
                src="https://www.datalytyx.com/wp-content/uploads/2017/10/PDF-image.png"
                alt="pdf"
                width="17"
                height="17"
              />
              <Link href="/uu-dan-peraturan-pmi/uu-perlindungan-pekerja-imigran/file">
                <p className="text-blue-700 cursor-pointer group-hover:underline">
                  UU NOMOR 18 TAHUN 2017 TENTANG PERLINDUNGAN PEKERJA MIGRAN
                  INDONESIA.pdf
                </p>
              </Link>
            </div>
          </p>
        </div>
      </div>
      <div>
        <h2 className="py-4 text-2xl font-semibold">ABSTRAK</h2>
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
      <div>
        <h2 className="py-4 text-2xl font-semibold">
          MEMAHAMI KERANGKA UNDANG-UNDANG 18 TAHUN 2017 TENTANG PELINDUNGAN
          PEKERJA MIGRAN INDONESIA
        </h2>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">PENDAHULUAN</h2>
          <div>
            <p>
              Undang-Undang Perlindungan Pekerja Migran Indonesia (UU PPMI)
              mencabut Undang-Undang Penempatan dan Pelindungan Tenaga Kerja di
              Luar Negeri (UU PPTKILN) serta mengamanatkan pembentukan beberapa
              peraturan turunan, yakni:
            </p>
            <li>12 Peraturan Pemerintah (PP);</li>
            <li>2 Peraturan Presiden (Perpres); </li>
            <li>11 Peraturan Menteri (Permen); dan </li>
            <li>3 Peraturan Kepala Badan.</li>
          </div>
          <div>
            <p>
              Dinyatakan dalam penjelasan UU PPMI, Perlindungan Calon Pekerja
              Migran Indonesia (CPMI) dan Pekerja Migran Indonesia (PMI)
              bertujuan untuk:
            </p>
            <li>
              Menjamin pemenuhan dan penegakan hak asasi manusia sebagai warga
              negara dan pekerja migran Indonesia
            </li>
            <li>
              Menjamin perlindungan hukum, ekonomi, dan sosial pekerja migran
              dan keluarganya.
            </li>
          </div>
          <p>
            Dilihat dari definisi dan tujuannya, UU ini setidaknya memiliki
            semangat dalam menggeser paradigma lama yang lebih kental aspek
            bisnis penempatan daripada aspek perlindungan terhadap PMI, hal ini
            bisa dibuktikan dengan menempatkan mekanisme pelindungan dalam
            batang tubuh UU, yang mana dalam UU 39/2004 (UU PPTKILN) pelindungan
            dituangkan dalam pasal terpisah yakni ada 8 pasal pelindungan namun
            dalam UU 18/2017 (UU PPMI) setiap pasal mengandung makna
            pelindungan. Tidak lagi berorientasi pada peningkatan produktivitas
            dan daya saing melalui optimalisasi pemberdayaan dan pendayagunaan
            tenaga kerja melainkan sudah mengedepankan penghormatan terhadap hak
            asasi PMI sebagai manusia dan warga negara.
          </p>
          <p>
            Selain itu, subjek pelindungan tidak lagi terbatas pada CPMI/PMI
            seperti dalam UU PPTKILN, namun juga sudah memuat jaminan
            pelindungan terhadap hak keluarga sebagaimana yang dimandatkan dalam
            Konvensi PBB 1990 tentang Pelindungan Hak-Hak Pekerja Migran dan
            Anggota Keluarganya.
          </p>
          <p>
            Ketentuan dan kerangka formal serta substansi dari peraturan
            perundang-undangan sangat penting menjadi ulasan kritis, perhatian
            publik dan pemahaman multipihak. Hal tersebut dilakukan dengan
            harapan agar peraturan perundangundangan lebih efektif ditegakkan
            dan dapat pula disempurnakan. Oleh karena itu pula, kertas kajian
            kebijakan ini disusun sebagai pengayaan bahan diseminasi dan
            analisis terhadap UU PPMI.
          </p>
          <p>
            Dalam paparan di bawah ini akan dijelaskan lebih lanjut kerangka UU
            PPMI yang meliputi siapa saja pihak-pihak dalam pelindungan CPMI dan
            PMI, perjanjian-perjanjian, dokumen dan persyaratan yang harus
            dipenuhi PMI, hak dan kewajiban PMI serta keluarga PMI,
            bentuk-bentuk pelindungan PMI, layanan terpadu satu atap (LTSA),
            pembinaan dan pengawasan serta penyelesaian perselisihan.
          </p>
          <div>
            <h2 className="pb-4 text-xl font-semibold">
              CALON PEKERJA MIGRAN INDONESIA DAN PEKERJA MIGRAN INDONESIA
            </h2>
            <p>
              Untuk dapat menjadi CPMI, tenaga kerja Indonesia (TKI) harus
              memenuhi syarat sebagai pencari kerja yang akan bekerja di luar
              negeri dan terdaftar di instansi pemerintah kabupaten/kota yang
              bertanggung jawab di bidang ketenagakerjaan. Mereka yang telah
              memenuhi syarat maupun terdaftar, baik akan, sedang, atau telah
              melakukan pekerjaan dengan menerima upah di luar wilayah Republik
              Indonesia (RI) disebut dengan PMI. Adapun PMI sendiri meliputi:
            </p>
            <li>PMI yang bekerja pada pemberi kerja berbadan hukum;</li>
            <li>
              PMI yang bekerja pada pemberi kerja perseorangan atau rumah
              tangga; dan
            </li>
            <li>Pelaut awak kapal dan pelaut perikanan.</li>
            <p>
              Dengan demikian, awak kapal Indonesia di luar negeri juga
              merupakan PMI dan dilindungi oleh UU PPMI.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">
              PERUSAHAAN PENEMPATAN PEKERJA MIGRAN INDONESIA, MITRA USAHA DAN
              PEMBERI KERJA
            </h2>
            <p>
              Perusahaan penempatan pekerja migran (P3MI), mitra usaha, dan
              pemberi kerja adalah pihak-pihak yang berkaitan dengan CPMI maupun
              PMI sehubungan dengan pemberian kerja. P3MI adalah perseroan
              terbatas (PT) di Indonesia yang memperoleh izin tertulis dari
              Menteri Ketenagakerjaan (Menaker) untuk melakukan penempatan PMI.
              Izin tertulis tersebut bertujuan mengesahkan suatu PT menjadi P3MI
              dan disebut dengan Surat Izin Perusahaan Penempatan Pekerja Migran
              Indonesia (SIP3MI). Selain SIP3MI, P3MI juga harus memiliki Surat
              Izin Perekrutan Pekerja Migran Indonesia (SIP2MI) dari Badan
              Pelindungan Pekerja Migran Indonesia (BP2MI) untuk dapat
              menempatkan CPMI. Dalam UU PPMI, peran P3MI dipangkas sehingga
              hanya bertanggung jawab pada penempatan PMI saja.
            </p>
            <p>
              P3MI tidak diperbolehkan lagi memberikan informasi, merekrut,
              mengurus dokumen dan mendidik PMI. Tugas dan tanggung jawab ini
              diserahkan kepada pemerintah terutama pemerintah daerah hingga
              pemerintah desa. Oleh karenanya, semangat UU PPMI tidak lagi
              sentralistik, dimana peran pemerintah pusat mendominasi seluruh
              urusan PMI tetapi menjadi desentralistik, yakni urusan
              ketenagakerjaan menjadi tanggung jawab pemerintah daerah hingga
              desa. Selanjutnya, perlu dipahami, P3MI hanya merupakan salah satu
              pelaksana penempatan PMI. Dua pelaksana penempatan PMI lainnya
              menurut UU PPMI adalah BP2MI (sebelumnya disebut BNP2TKI) dan
              perusahaan yang menempatkan PMI untuk kepentingan perusahaan
              sendiri. Mitra usaha adalah badan usaha berbadan hukum di luar
              negeri (negara tujuan penempatan) yang menempatkan PMI pada
              pemberi kerja. Sedangkan pemberi kerja adalah instansi pemerintah,
              badan hukum pemerintah, badan hukum swasta, dan/ atau perseorangan
              di luar negeri (negara tujuan penempatan) yang mempekerjakan PMI.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-semibold">
                PERSYARATAN DAN DOKUMEN PMI
              </h2>
              <p>Setiap PMI harus memenuhi persyaratan dan dokumen</p>
            </div>
            <div>
              <p>PERSYARATAN</p>
              <li>Berusia minimal delapan belas tahun;</li>
              <li>Memiliki kompetensi Sehat jasmani dan rohani;</li>
              <li>
                Terdaftar dan memiliki nomor peserta jaminan sosial (BPJS
                Ketenagakerjaan);
              </li>
              <li>Memiliki dokumen yang dipersyaratkan.</li>
            </div>
            <div>
              <p>DOKUMEN</p>
              <li>Fotokopi buku nikah (bagi yang telah menikah);</li>
              <li>
                Surat keterangan izin suami, istri, orangtua, atau wali yang
                diketahui oleh kepala desa atau lurah;
              </li>
              <li>
                Sertifikat kompetensi kerja (lebih dikenal dengan sebutan basic
                safety training atau BST);
              </li>
              <li>
                Surat keterangan sehat berdasarkan hasil pemeriksaan kesehatan
                dan psikologi;
              </li>
              <li>Paspor;</li>
              <li>Visa kerja;</li>
              <li>Perjanjian penempatan pekerja migran Perjanjian kerja.</li>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">PERJANJIAN-PERJANJIAN</h2>
              <p>
                Terdapat tiga jenis perjanjian yang diakui dalam UU PPMI yakni:
                <li>Perjanjian kerja sama penempatan</li>
                <p>
                  Adalah perjanjian tertulis antara P3MI dengan mitra usaha atau
                  pemberi kerja yang memuat hak dan kewajiban setiap pihak dalam
                  rangka penempatan dan pelindungan PMI di negara tujuan
                  penempatan.
                </p>
                <li>Perjanjian penempatan pekerja migran</li>
                <p>
                  Adalah perjanjian tertulis antara pelaksana penempatan PMI
                  (BP2MI, P3MI atau perusahaan yang menempatkan PMI untuk
                  kepentingan perusahaan sendiri) dengan CPMI yang memuat hak
                  dan kewajiban setiap pihak dalam rangka penempatan PMI.
                </p>
                <li>Perjanjian kerja</li>
                <p>
                  Adalah perjanjian tertulis antara PMI dengan pemberi kerja
                  yang memuat syarat kerja, hak, dan kewajiban setiap pihak,
                  serta jaminan keamanan dan keselamatan selama bekerja.
                  Perjanjian kerja dapat diperpanjang di hadapan pejabat yang
                  berwenang di kantor perwakilan RI yakni atase ketenagakerjaan,
                  pejabat dinas luar negeri yang ditunjuk, atau pegawai setempat
                  yang memiliki kompetensi dan ditugaskan.
                </p>
              </p>
            </div>
            <div>
              <h2 className="pb-4 text-xl font-semibold">HAK-HAK PMI</h2>
              <li>
                Memperoleh akses peningkatan kapasitas diri melalui pendidikan
                dan pelatihan kerja;
              </li>
              <li>
                Mendapatkan pekerjaan di luar negeri dan memilih pekerjaan
                sesuai dengan kompetensinya;
              </li>
              <li>
                Memperoleh informasi yang benar mengenai pasar kerja, tata cara
                penempatan, dan kondisi kerja di luar negeri;
              </li>
              <li>Menguasai dokumen perjalanan selama bekerja;</li>
              <li>
                Menjalankan ibadah sesuai dengan agama dan keyakinan yang
                dianut;
              </li>
              <li>
                Memperoleh pelayanan yang profesional dan manusiawi serta
                perlakuan tanpa diskriminasi pada saat sebelum, selama, dan
                setelah bekerja;
              </li>
              <li>
                Memperoleh perlindungan dan bantuan hukum atas tindakan yang
                dapat merendahkan harkat dan martabat sesuai dengan peraturan
                perundang-undangan di indonesia dan di negara tujuan penempatan;
              </li>
              <li>
                Memperoleh upah sesuai dengan standar upah yang berlaku di
                negara tujuan penempatan dan/atau kesepakatan kedua negara
                dan/atau perjanjian kerja;
              </li>
              <li>Memperoleh akses berkomunikasi;</li>
              <li>
                Memperoleh dokumen dan perjanjian kerja cpmi dan/ atau pmi;
              </li>
              <li>
                Memperoleh jaminan pelindungan keselamatan dan keamanan
                kepulangan pmi ke daerah asal;
              </li>
              <li>
                Memperoleh penjelasan mengenai hak dan kewajiban sebagaimana
                tertuang di perjanjian kerja;
              </li>
              <li>
                Berserikat dan berkumpul di negara tujuan penempatan sesuai
                dengan ketentuan perundangundangan yang berlaku di negara tujuan
                penempatan.
              </li>
            </div>
            <div>
              <h2 className="pb-4 text-xl font-semibold">
                KEWAJIBAN KEWAJIBAN PMI
              </h2>
              <li>
                Melaporkan kedatangan, keberadaan, dan kepulangan PMI kepada
                perwakilan RI di negara tujuan penempatan;
              </li>
              <li>
                Menaati dan melaksanakan pekerjaan sesuai perjanjian kerja;
              </li>
              <li>
                Menaati peraturan perundangundangan di dalam negeri dan di
                negara tujuan penempatan;
              </li>
              <li>
                Menghormati adat-istiadat atau kebiasaan yang berlaku di negara
                tujuan penempatan.
              </li>
            </div>
            <div>
              <h2 className="pb-4 text-xl font-semibold">
                HAK-HAK KELUARGA PMI
              </h2>
              <li>
                Memperoleh informasi mengenai kondisi, masalah, dan kepulangan
                PMI;
              </li>
              <li>Memperoleh akses berkomunikasi;</li>
              <li>
                Memperoleh salinan dokumen dan perjanjian kerja CPMI dan/atau
                PMI;
              </li>
              <li>
                Menerima seluruh harta benda PMI yang meninggal di luar negeri.
              </li>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="py-4 text-2xl font-semibold">
          PELINDUNGAN CPMI DAN PMI BERDASARKAN WAKTU
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">PELINDUNGAN CPMI DAN PMI</h2>
            <div>
              <p>
                Memberikan pelindungan CPMI dan PMI merupakan salah satu
                kewajiban yang diemban oleh pemerintah, mulai dari pemerintah
                pusat, pemerintah provinsi, pemerintah kabupaten/kota hingga
                pemerintah desa. Menurut UU PPMI, CPMI dan PMI diberikan
                perlindungan baik sebelum, selama maupun setelah bekerja.
                Pelindungan sebelum bekerja berlaku sejak pendaftaran sampai
                pemberangkatan dan meliputi pelindungan administratif dan
                teknis. Pelindungan administratif terdiri atas:
              </p>
              <li>Kelengkapan dan keabsahan dokumen penempatan;</li>
              <li>
                Penetapan kondisi dan syarat kerja Pelindungan teknis terdiri
                atas;
              </li>
              <li>Pemberian sosialisasi dan diseminasi informasi;</li>
              <li>
                Peningkatan kualitas calon pekerja migran melalui pendidikan dan
                pelatihan kerja;
              </li>
              <li>Jaminan sosial (jamsos);</li>
              <li>Fasilitas pemenuhan hak calon pekerja migran;</li>
              <li>Penguatan peran pegawai fungsional pengantar kerja;</li>
              <li>
                Pelayanan penempatan di layanan terpadu satu atap penempatan dan
                perlindungan pekerja migran;
              </li>
              <li>Pembinaan dan pengawasan.</li>
            </div>
            <div>
              <p>
                Pelindungan selama bekerja berlaku selama PMI dan anggota
                keluarganya berada di luar negeri. Pelindungan selama bekerja
                meliputi:
              </p>
              <li>Pendataan dan pendaftaran oleh atase ketenagakerjaan;</li>
              <li>
                Pemantauan dan evaluasi terhadap pemberi kerja, pekerjaan, dan
                kondisi kerja;
              </li>
              <li>Fasilitasi pemenuhan hak PMI;</li>
              <li>Penyelesaian kasus ketenagakerjaan;</li>
              <li>Pemberian layanan jasa kekonsuleran;</li>
              <li>
                Pendampingan, mediasi, advokasi, dan pemberian bantuan hukum
                berupa fasilitasi jasa advokat oleh pemerintah pusat dan/atau
                perwakilan RI serta perwalian sesuai dengan hukum negara
                setempat;
              </li>
              <li>Pembinaan terhadap PMI;</li>
              <li>Fasilitasi repatriasi.</li>
            </div>
            <div>
              <p>
                Pelindungan setelah bekerja berlaku sejak PMI dan anggota
                keluarganya tiba di debarkasi di Indonesia hingga kembali ke
                daerah asal (termasuk pelayanan lanjutan menjadi pekerja
                produktif). Pelindungan setelah bekerja meliputi:
              </p>
              <li>Fasilitasi kepulangan sampai daerah asal;</li>
              <li>Penyelesaian hak PMI yang belum terpenuhi;</li>
              <li>Fasilitasi pengurusan PMI yang sakit dan meninggal dunia;</li>
              <li>Rehabilitasi sosial dan reintegrasi sosial;</li>
              <li>Pemberdayaan PMI dan keluarganya.</li>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">
              PELINDUNGAN PMI BERDASARKAN BIDANG
            </h2>
            <p>
              Selain pelindungan sebelum, selama, dan setelah bekerja, UU PPMI
              juga memberikan beberapa bentuk pelindungan lain terhadap PMI
              yakni pelindungan hukum, sosial, dan ekonomi.
              <br />
              <br />
              Pelindungan hukum ditunjukkan dari adanya ketentuan yang
              menyatakan bahwa PMI hanya dapat bekerja ke negara tujuan
              penempatan yang:
              <li>
                Mempunyai peraturan perundang-undangan yang melindungi tenaga
                kerja asing (TKA);
              </li>
              <li>
                Telah memiliki perjanjian tertulis antara pemerintah negara
                tujuan penempatan dan pemerintah RI;
              </li>
              <li>
                Memiliki sistem jaminan sosial dan/atau asuransi yang melindungi
                pekerja asing.
              </li>
              <br />
              Sayangnya, belum ada database khusus terkait negara tujuan
              penempatan dengan tiga kategori tersebut. Bentuk pelindungan hukum
              lainnya yakni penghentian dan/atau pelarangan penempatan PMI untuk
              negara tertentu atau jabatan tertentu di luar negeri dengan
              pertimbangan keamanan, perlindungan hak asasi manusia (HAM),
              pemerataan kesempatan kerja dan/ atau kepentingan ketersediaan
              tenaga kerja sesuai dengan kebutuhan nasional.
              <br />
              <br />
              Dalam ayat lainnya, dijelaskan bahwa pelindungan hukum terhadap
              PMI diberikan sesuai dengan ketentuan peraturan
              perundang-undangan, hukum negara tujuan penempatan, serta hukum
              dan kebiasaan internasional. Lagi-lagi, sayangnya,
              ketentuan-ketentuan ini juga tidak dirinci lebih lanjut.
              Pelindungan sosial meliputi:
              <li>
                Peningkatan kualitas pendidikan dan pelatihan kerja melalui
                standardisasi kompetensi pelatihan kerja;
              </li>
              <li>Peningkatan peran lembaga akreditasi dan sertifikasi;</li>
              <li>Penyediaan tenaga pendidik dan pelatih yang kompeten;</li>
              <li>
                Reintegrasi sosial melalui layanan peningkatan keterampilan,
                baik terhadap PMI maupun keluarganya;
              </li>
              <li>Kebijakan perlindungan kepada perempuan dan anak;</li>
              <li>
                Penyediaan pusat perlindungan PMI di negara tujuan penempatan.
              </li>
              <br />
              <br />
              Pelindungan ekonomi meliputi:
              <li>
                Pengelolaan remitansi dengan melibatkan lembaga perbankan atau
                lembaga keuangan nonbank dalam negeri dan negara tujuan
                penempatan;
              </li>
              <li>Edukasi keuangan;</li>
              <li>Edukasi kewirausahaan.</li>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">
              LAYANAN TERPADU SATU ATAP (LTSA)
            </h2>
            <p>
              Pelayanan penempatan dan perlindungan PMI dilakukan oleh
              pemerintah pusat dan pemerintah daerah secara terkoordinasi dan
              terintegrasi melalui suatu lembaga yang disebut LTSA. LTSA ini
              bertujuan:
              <li>
                Mewujudkan efektivitas penyelenggaraan pelayanan penempatan dan
                perlindungan PMI;
              </li>
              <li>
                Memberikan efisiensi dan transparansi dalam pengurusan dokumen
                penempatan dan perlindungan CPMI dan/atau PMI;
              </li>
              <li>Mempercepat peningkatan kualitas pelayanan PMI.</li>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">PEMBINAAN DAN PENGAWASAN</h2>
            <p>
              Pembinaan dan pengawasan terhadap pelaksanaan penempatan dan
              perlindungan PMI dilakukan oleh pemerintah pusat dan pemerintah
              daerah. Dalam melakukan pengawasan, pemerintah pusat dan
              pemerintah daerah dapat mengikutsertakan masyarakat. Sayangnya,
              kata “dapat” dalam hal ini seringkali melemahkan posisi masyarakat
              untuk ikut serta dalam melakukan pengawasan karena pemerintah
              dapat menganggap hal ini sebagai sesuatu yang bersifat opsional
              (tidak wajib).
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">PENYELESAIAN PERSELISIHAN</h2>
            <p>
              Penyelesaian perselisihan antara PMI dengan pelaksana penempatan
              dilakukan secara bertingkat. Jika terjadi perselisihan antara PMI
              dengan pelaksana penempatan mengenai pelaksanaan perjanjian
              penempatan, penyelesaian dilakukan secara musyawarah. Seandainya
              musyawarah tidak tercapai, salah satu atau kedua belah pihak dapat
              meminta bantuan kepada instansi yang bertanggung jawab di bidang
              ketenagakerjaan di pemerintah daerah kabupaten/kota (pemkab/kot),
              pemerintah daerah provinsi (pemprov), atau pemerintah pusat.
              Selanjutnya, jika penyelesaian perselisihan tetap tidak tercapai,
              salah satu atau kedua belah pihak dapat mengajukan tuntutan
              dan/atau gugatan melalui pengadilan.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">PENUTUP</h2>
            <p>
              Berdasarkan paparan di atas, dapat dipahami bahwa UU PPMI sudah
              menjelaskan dengan cukup detil mengenai: siapa saja pihak-pihak
              dalam pelindungan CPMI dan PMI, perjanjian-perjanjian, dokumen dan
              persyaratan yang harus dipenuhi PMI, hak dan kewajiban PMI serta
              keluarga PMI, bentuk-bentuk pelindungan PMI, layanan terpadu satu
              atap (LTSA), pembinaan dan pengawasan, serta penyelesaian
              perselisihan. Secara spesifik, tegas dinyatakan bahwa pelaut awak
              kapal dan pelaut perikanan (awak kapal Indonesia) termasuk
              kategori pekerja migran dan dilindungi oleh undang-undang ini.
              Bentuk-bentuk pelindungannya pun telah dibagi berdasarkan waktu
              (sebelum, selama, dan setelah bekerja) maupun berdasarkan bidang
              (hukum, sosial, dan ekonomi) serta hak dan kewajiban CPMI dan PMI
              telah dirinci. Hak-hak PMI yang dalam UU PPTKILN hanya 8 item,
              kini telah ditambahkan menjadi 13 item dalam UU PPMI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UUPerlindunganPekerjaImigran;
