/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

interface Props {}

const PerwakilanRIMalaysia = (props: Props) => {
  const router = useRouter();

  return (
    <div className="p-12">
      {/* kbri */}
      <div className="flex items-center w-3/4 gap-3 px-6 py-6 mb-6 border border-gray-400">
        <img
          onClick={() => router.push("/berita-umum/0")}
          src="/dubes.jfif"
          alt="poster"
          width="200"
          height="205"
          className="cursor-pointer"
        />
        <p className="text-justify">
          Dubes Hermono, Diplomat Pembela Pekerja Migran Dia pernah dijuluki
          sebagai diplomat spesialis urusan pekerja migran. Maklum, selain
          pernah selama tiga tahun menjadi Sekretaris Utama BNP2TKI, dia
          terlibat penuh dalam penyusunan RUU tentang Pelindungan Pekerja Migran
          Indonesia. RUU itu disahkan menjadi Undang Undang No. 18 Tahun 2017
          <br />
          <span className="text-blue-500">(Sumber: detiknews)</span>
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">
          1. KEDUTAAN BESAR REPUBLIK INDONESIA (KBRI) KUALA LUMPUR, MALAYSIA
        </h2>
        {/* info */}
        <div className="flex flex-col gap-1 py-6">
          <p className="flex items-center gap-1">
            <img
              src="https://w7.pngwing.com/pngs/169/109/png-transparent-black-and-red-location-app-icon-drawing-pin-world-map-logo-push-heart-pin-world.png"
              alt="location"
              width="20"
              height="20"
            />
            233, Jalan Tun Razak, Kuala Lumpur 50400, Malaysia.
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
              alt="phone"
              width="20"
              height="20"
            />
            +603 2116 4016 / +603 2116 4017
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn0.iconfinder.com/data/icons/cosmo-work/40/mail-512.png"
              alt="email"
              width="20"
              height="20"
            />
            kualalumpur.kbri@kemlu.go.id / info@kbrikualalumpur.org
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://www.freeiconspng.com/thumbs/fax-icon-png/fax-icon-png-11.png"
              alt="fax"
              width="20"
              height="20"
            />
            +603 21417908, +603 2142 3878
          </p>
          <p className="flex items-center gap-1">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_542923.png"
              alt="website"
              width="20"
              height="20"
            />
            <a
              target="_blank"
              className="hover:underline hover:text-blue-700"
              href="https://kemlu.go.id/kualalumpur/id"
            >
              https://kemlu.go.id/kualalumpur/id
            </a>
          </p>
        </div>
        {/* contact */}
        <div>
          <h3 className="font-semibold">
            Hotline WhatsApp Aduan KBRI Kuala Lumpur:
          </h3>
          <table>
            <tr>
              <td>Keimigrasian</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />
                  +60 17 736 2331
                </span>
              </td>
            </tr>
            <tr>
              <td>Kekonsuleran</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />
                  +60 17 668 8032
                </span>
              </td>
            </tr>
            <tr>
              <td>Ketenagakerjaan</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 17 624 0500
                </span>
              </td>
            </tr>
            <tr>
              <td>Hukum</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 17 266 0792
                </span>
              </td>
            </tr>
            <tr>
              <td>Lain-lain</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 17 500 7047
                </span>
              </td>
            </tr>
          </table>
        </div>
        {/* janji temu */}
        <div className="py-6">
          <h3 className="font-semibold">
            Daftar Temu Janji Pelayanan KBRI Kuala Lumpur:
            <a
              target="_blank"
              className="ml-2 hover:underline hover:text-blue-700"
              href="https://antrean.kbrikl.id"
            >
              https://antrean.kbrikl.id
            </a>
          </h3>
          <div>
            <li>Perpanjangan Paspor untuk WNI yang memiliki Ijin Tinggal</li>
            <li>Pembuatan Surat Perjalanan Laksana Paspor (SPLP)</li>
            <li>
              Pendaftaran Permohonan Surat Keterangan Catatan Kepolisian (SKCK)
              Bagi WNI
            </li>
            <li>
              Pendaftaran Permohonan Surat Keterangan Catatan Kepolisian (SKCK)
              Warga Negara Asing yang Pernah Menetap Di Indonesia
            </li>
          </div>
        </div>
        {/* cara daftar */}
        <div className="flex items-center gap-2">
          <p className="font-semibold">
            Cara Daftar Temu Janji Pelayanan KBRI Kuala Lumpur:
          </p>
          <a
            target="_blank"
            className="ml-2 hover:text-blue-700"
            href="https://fb.watch/1TeGcl5PHu/"
          >
            https://fb.watch/1TeGcl5PHu/{" "}
            <span className="text-blue-700">(Klik disini!)</span>
          </a>
        </div>
        {/* socmed */}
        <div className="py-6">
          <h3 className="font-semibold">Sosial Media KBRI Kuala Lumpur:</h3>
          <div className="flex flex-col gap-2 pt-3">
            <p className="flex items-center gap-2">
              <img
                src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                alt="fb"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.facebook.com/IndonesianEmbassyKualaLumpur"
              >
                https://www.facebook.com/IndonesianEmbassyKualaLumpur
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
                alt="ig"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.instagram.com/indonesiainkualalumpur"
              >
                https://www.instagram.com/indonesiainkualalumpur
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
                alt="tw"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://twitter.com/IndonesiaInKL"
              >
                https://twitter.com/IndonesiaInKL
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png"
                alt="yt"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.youtube.com/user/kbrikualalumpur"
              >
                https://www.youtube.com/user/kbrikualalumpur
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-8"></div>
      {/* kjri penang */}
      <div>
        <h2 className="text-xl font-semibold">
          2. KONSULAT JENDERAL REPUBLIK INDONESIA (KJRI) PENANG
        </h2>
        {/* info */}
        <div className="flex flex-col gap-1 py-6">
          <p className="flex items-center gap-1">
            <img
              src="https://w7.pngwing.com/pngs/169/109/png-transparent-black-and-red-location-app-icon-drawing-pin-world-map-logo-push-heart-pin-world.png"
              alt="location"
              width="20"
              height="20"
            />
            467, Jln. Burma, 10350 Pulau Pinang, Malaysia.
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
              alt="phone"
              width="20"
              height="20"
            />
            +604 2267412, +604 2274686, +604 227 4955
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn0.iconfinder.com/data/icons/cosmo-work/40/mail-512.png"
              alt="email"
              width="20"
              height="20"
            />
            penang.kjri@kemlu.go.id
          </p>
          <p className="flex items-center gap-1">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_542923.png"
              alt="website"
              width="20"
              height="20"
            />
            <a
              target="_blank"
              className="hover:underline hover:text-blue-700"
              href="https://kemlu.go.id/penang/id"
            >
              https://kemlu.go.id/penang/id
            </a>
          </p>
        </div>
        {/* contact */}
        <div className="">
          <h3 className="font-semibold">Hotline WhatsApp Aduan KJRI Penang:</h3>
          <table>
            <tr>
              <td>Keimigrasian</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 11 124 60970
                </span>
              </td>
            </tr>
            <tr>
              <td>Kekonsuleran</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 17 497 0046
                </span>
              </td>
            </tr>
            <tr>
              <td>Lain-lain</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 17 544 5100
                </span>
              </td>
            </tr>
          </table>
        </div>
        {/* janji temu */}
        <div className="py-6">
          <h3 className="font-semibold">
            Daftar Temu Janji Pelayanan KJRI Penang:
            <a
              target="_blank"
              className="ml-2 font-normal hover:text-blue-700"
              href="https://layananonline.kjripenang.my"
            >
              https://layananonline.kjripenang.my
              <span className="text-blue-700">(Klik disini!)</span>
            </a>
          </h3>
          <div>
            <li>Sistem Nomor Antrian Imigrasi (SINAMI)</li>
            <li>Sistem Nomor Antrian Konsuler (SINAKO)</li>
            <li>Cek Status / Pembatalan Antrian Layanan</li>
          </div>
        </div>
        {/* cara daftar */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold">
            Cara Daftar Temu Janji Pelayanan KJRI Penang:
          </p>
          <a
            target="_blank"
            className="ml-2 hover:text-blue-700"
            href="https://www.youtube.com/watch?v=aD-ABP2u0aE"
          >
            https://www.youtube.com/watch?v=aD-ABP2u0aE
            <span className="text-blue-700">(Klik disini!)</span>
          </a>
        </div>
        {/* socmed */}
        <div className="py-6">
          <h3 className="font-semibold">Sosial Media KJRI Penang:</h3>
          <div className="flex flex-col gap-2 pt-3">
            <p className="flex items-center gap-2">
              <img
                src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                alt="fb"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.facebook.com/indonesiainpenang"
              >
                https://www.facebook.com/indonesiainpenang
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
                alt="ig"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.instagram.com/indonesiainpenang"
              >
                https://www.instagram.com/indonesiainpenang
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
                alt="tw"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://twitter.com/IndonesiaPenang"
              >
                https://twitter.com/IndonesiaPenang
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png"
                alt="yt"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.youtube.com/channel/UC0ObKT56xhXjqTo8cKhZCgQ"
              >
                https://www.youtube.com/channel/UC0ObKT56xhXjqTo8cKhZCgQ
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-8"></div>
      {/* kjri johor bahru */}
      <div>
        <h2 className="text-xl font-semibold">
          3. KONSULAT JENDERAL REPUBLIK INDONESIA (KJRI) JOHOR BAHRU
        </h2>
        {/* info */}
        <div className="flex flex-col gap-1 py-6">
          <p className="flex items-center gap-1">
            <img
              src="https://w7.pngwing.com/pngs/169/109/png-transparent-black-and-red-location-app-icon-drawing-pin-world-map-logo-push-heart-pin-world.png"
              alt="location"
              width="20"
              height="20"
            />
            46, Jln. Taat, Off Jalan Tun Abdul Razak 80100 Johor Bahru, Malaysia
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
              alt="phone"
              width="20"
              height="20"
            />
            +607 227 4188
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn0.iconfinder.com/data/icons/cosmo-work/40/mail-512.png"
              alt="email"
              width="20"
              height="20"
            />
            johorbahru.kjri@kemlu.go.id
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://www.freeiconspng.com/thumbs/fax-icon-png/fax-icon-png-11.png"
              alt="fax"
              width="20"
              height="20"
            />
            +607 227 4288, +607 221 3246
          </p>
          <p className="flex items-center gap-1">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_542923.png"
              alt="website"
              width="20"
              height="20"
            />
            <a
              target="_blank"
              className="hover:underline hover:text-blue-700"
              href="https://kemlu.go.id/johorbahru/id"
            >
              https://kemlu.go.id/johorbahru/id
            </a>
          </p>
        </div>
        {/* contact */}
        <div>
          <h3 className="font-semibold">
            Hotline WhatsApp Aduan KJRI Johor Bahru:
          </h3>
          <table>
            <tr>
              <td>Keimigrasian</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 17 771 6866
                </span>
              </td>
            </tr>
            <tr>
              <td>Kekonsuleran</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 16 770 0378
                </span>
              </td>
            </tr>
          </table>
        </div>
        {/* janji temu */}
        <div className="py-6">
          <h3 className="font-semibold">
            Daftar Temu Janji Pelayanan KJRI Johor Bahru:
          </h3>
          <div>
            <li>
              Sistem Nomor Antrian SPLP:{" "}
              <a
                target="_blank"
                className="ml-2 hover:text-blue-700"
                href="https://splp.kjrijb.com"
              >
                https://splp.kjrijb.com
                <span className="text-blue-700">(Klik disini!)</span>
              </a>
            </li>
            <li>
              Sistem Nomor Antrian Paspor:{" "}
              <a
                target="_blank"
                className="ml-2 hover:text-blue-700"
                href="https://paspor.kjrijb.com"
              >
                https://paspor.kjrijb.com
                <span className="text-blue-700">(Klik disini!)</span>
              </a>
            </li>
          </div>
        </div>
        {/* cara daftar */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold">
            Cara Daftar Temu Janji Pelayanan KJRI Johor Bahru:
          </p>
          <a
            target="_blank"
            className="ml-2 hover:text-blue-700"
            href="https://www.youtube.com/watch?v=aD-ABP2u0aE"
          >
            https://www.youtube.com/watch?v=aD-ABP2u0aE
            <span className="text-blue-700">(Klik disini!)</span>
          </a>
        </div>
        {/* socmed */}
        <div className="py-6">
          <h3 className="font-semibold">Sosial Media KJRI Johor Bahru:</h3>
          <div className="flex flex-col gap-2 pt-3">
            <p className="flex items-center gap-2">
              <img
                src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                alt="fb"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.facebook.com/IndonesianInJohorBahru"
              >
                https://www.facebook.com/IndonesianInJohorBahru
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
                alt="ig"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.instagram.com/indonesiainjb"
              >
                https://www.instagram.com/indonesiainjb
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
                alt="tw"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://twitter.com/indonesiainjb"
              >
                https://twitter.com/indonesiainjb
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png"
                alt="yt"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.youtube.com/channel/UCcqMN5IRhG5zs6W89atgZbQ"
              >
                https://www.youtube.com/channel/UCcqMN5IRhG5zs6W89atgZbQ
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-8"></div>
      {/* kjri kuching */}
      <div>
        <h2 className="text-xl font-semibold">
          4. KONSULAT JENDERAL REPUBLIK INDONESIA (KJRI) KUCHING
        </h2>
        {/* info */}
        <div className="flex flex-col gap-1 py-6">
          <p className="flex items-center gap-1">
            <img
              src="https://w7.pngwing.com/pngs/169/109/png-transparent-black-and-red-location-app-icon-drawing-pin-world-map-logo-push-heart-pin-world.png"
              alt="location"
              width="20"
              height="20"
            />
            No. 21, Lot 16557, Block 11, Jln. Stutong, MTLD, 93350 Kuching,
            Serawak, Malaysia.
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
              alt="phone"
              width="20"
              height="20"
            />
            (+60)82 46-0734, 46-1734
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn0.iconfinder.com/data/icons/cosmo-work/40/mail-512.png"
              alt="email"
              width="20"
              height="20"
            />
            kjrikuching@gmail.com
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://www.freeiconspng.com/thumbs/fax-icon-png/fax-icon-png-11.png"
              alt="fax"
              width="20"
              height="20"
            />
            (+60)82 45-6734
          </p>
          <p className="flex items-center gap-1">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_542923.png"
              alt="website"
              width="20"
              height="20"
            />
            <a
              target="_blank"
              className="hover:underline hover:text-blue-700"
              href="https://kemlu.go.id/kuching/id"
            >
              https://kemlu.go.id/kuching/id
            </a>
          </p>
        </div>
        {/* contact */}
        <div>
          <h3 className="font-semibold">
            Hotline WhatsApp Aduan KJRI Kuching:
          </h3>
          <table>
            <tr>
              <td>Pengaduan WNI</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 16 886 6734
                </span>
              </td>
            </tr>
            <tr>
              <td>Kematian WNI</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 16 889 9734
                </span>
              </td>
            </tr>
            <tr>
              <td>Covid-19</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 14 393 3199
                </span>
              </td>
            </tr>
            <tr>
              <td>Kekonsuleran</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 12 880 1288
                </span>
              </td>
            </tr>
            <tr>
              <td>Keimigrasian</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 16 892 5037
                </span>
              </td>
            </tr>
          </table>
        </div>
        {/* janji temu */}
        <div className="py-6">
          <h3 className="font-semibold">
            Aplikasi Pendaftaran Online Whatsapp Keimigrasian (APOWAKIM) KJRI
            Kuching:
          </h3>
          <div className="flex gap-3">
            <p>Tutorial:</p>
            <a
              target="_blank"
              className="ml-2 hover:text-blue-700"
              href="https://www.facebook.com/kjrikuching/videos/tutorial-apowakim-aplikasi-pendaftaran-online-whatsapp-keimigrasian-kjri-kuching/908880299630166/"
            >
              https://www.facebook.com/kjrikuching/videos/tutorial-apowakim-aplikasi-pendaftaran-online-whatsapp-keimigrasian-kjri-kuching/908880299630166/
              <span className="text-blue-700">(Klik disini!)</span>
            </a>
          </div>
        </div>
        {/* socmed */}
        <div className="py-6">
          <h3 className="font-semibold">Sosial Media KJRI Kuching:</h3>
          <div className="flex flex-col gap-2 pt-3">
            <p className="flex items-center gap-2">
              <img
                src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                alt="fb"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.facebook.com/kjrikuching"
              >
                https://www.facebook.com/kjrikuching
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
                alt="ig"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.instagram.com/kjrikuching"
              >
                https://www.instagram.com/kjrikuching
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
                alt="tw"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://twitter.com/kjrikuching"
              >
                https://twitter.com/kjrikuching
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png"
                alt="yt"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.youtube.com/channel/UCuYsNARXP6zSJvWJhtOYTWQ"
              >
                https://www.youtube.com/channel/UCuYsNARXP6zSJvWJhtOYTWQ
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-8"></div>
      {/* kjri kinabalu */}
      <div>
        <h2 className="text-xl font-semibold">
          5. KONSULAT JENDERAL REPUBLIK INDONESIA (KJRI) KOTA KINABALU
        </h2>
        {/* info */}
        <div className="flex flex-col gap-1 py-6">
          <p className="flex items-center gap-1">
            <img
              src="https://w7.pngwing.com/pngs/169/109/png-transparent-black-and-red-location-app-icon-drawing-pin-world-map-logo-push-heart-pin-world.png"
              alt="location"
              width="20"
              height="20"
            />
            Lorong Kemajuan, Karamunsing, 88817 Kota Kinabalu, Sabah, Malaysia
            P.O. Box 11595
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
              alt="phone"
              width="20"
              height="20"
            />
            (+60)88 21-9110, 21-8600
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn0.iconfinder.com/data/icons/cosmo-work/40/mail-512.png"
              alt="email"
              width="20"
              height="20"
            />
            kotakinabalu.kjri@kemlu.go.id
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://www.freeiconspng.com/thumbs/fax-icon-png/fax-icon-png-11.png"
              alt="fax"
              width="20"
              height="20"
            />
            (+60)88 21-5170
          </p>
          <p className="flex items-center gap-1">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_542923.png"
              alt="website"
              width="20"
              height="20"
            />
            <a
              target="_blank"
              className="hover:underline hover:text-blue-700"
              href="https://kemlu.go.id/kotakinabalu/id"
            >
              https://kemlu.go.id/kotakinabalu/id
            </a>
          </p>
        </div>
        {/* contact */}
        <div>
          <h3 className="font-semibold">
            Hotline WhatsApp Aduan KJRI Kota Kinabalu:
          </h3>
          <table>
            <tr>
              <td>Keimigrasian</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 16 237 6525
                </span>
              </td>
            </tr>
            <tr>
              <td>Pengaduan</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 14 606 0067
                </span>
              </td>
            </tr>
          </table>
        </div>
        {/* cara daftar */}
        <div className="flex flex-col gap-2 py-6">
          <p className="font-semibold">
            Daftar Temu Janji Pelayanan KJRI Kota Kinabalu:
          </p>
          <a
            target="_blank"
            className="ml-2 hover:text-blue-700"
            href="https://paspor.kjrikk.com/"
          >
            https://paspor.kjrikk.com/
            <span className="text-blue-700">(Klik disini!)</span>
          </a>
        </div>
        {/* socmed */}
        <div>
          <h3 className="font-semibold">Sosial Media KJRI Kota Kinabalu:</h3>
          <div className="flex flex-col gap-2 pt-3">
            <p className="flex items-center gap-2">
              <img
                src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                alt="fb"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.facebook.com/kjrikotakinabalu"
              >
                https://www.facebook.com/kjrikotakinabalu
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
                alt="ig"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.instagram.com/indonesiainkotakinabalu"
              >
                https://www.instagram.com/indonesiainkotakinabalu
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
                alt="tw"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://twitter.com/indonesiainkk"
              >
                https://twitter.com/indonesiainkk
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png"
                alt="yt"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.youtube.com/channel/UCdUmig1xs_ibKTvFay8MzuQ"
              >
                https://www.youtube.com/channel/UCdUmig1xs_ibKTvFay8MzuQ
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-8"></div>
      {/* kjri tawau */}
      <div>
        <h2 className="text-xl font-semibold">
          6. KONSULAT REPUBLIK INDONESIA (KRI) TAWAU
        </h2>
        {/* info */}
        <div className="flex flex-col gap-1 py-6">
          <p className="flex items-center gap-1">
            <img
              src="https://w7.pngwing.com/pngs/169/109/png-transparent-black-and-red-location-app-icon-drawing-pin-world-map-logo-push-heart-pin-world.png"
              alt="location"
              width="20"
              height="20"
            />
            Bangunan Yun Fah, Batu 2 1/2 (Mile 2.5) Jln. Sin On, 91000 Sabah,
            Malaysia P.O. Box 742
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
              alt="phone"
              width="20"
              height="20"
            />
            (+60)89 75-2969, 77-2052
          </p>
          <p className="flex items-center gap-1">
            <img
              src="https://cdn0.iconfinder.com/data/icons/cosmo-work/40/mail-512.png"
              alt="email"
              width="20"
              height="20"
            />
            tawau.kri@kemlu.go.id
          </p>
          <p className="flex items-center gap-1">
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_542923.png"
              alt="website"
              width="20"
              height="20"
            />
            <a
              target="_blank"
              className="hover:underline hover:text-blue-700"
              href="https://kemlu.go.id/tawau/id"
            >
              https://kemlu.go.id/tawau/id
            </a>
          </p>
        </div>
        {/* contact */}
        <div>
          <h3 className="font-semibold">
            Hotline WhatsApp Aduan KJRI Kota Kinabalu:
          </h3>
          <table>
            <tr>
              <td>Keimigrasian</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 11 162 30800
                </span>
              </td>
            </tr>
            <tr>
              <td>Kekonsuleran</td>
              <td>
                <span className="flex items-center gap-1">
                  <p>:</p>
                  <img
                    src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png"
                    width="20"
                    height="20"
                    alt="wa"
                  />{" "}
                  +60 19 822 8800
                </span>
              </td>
            </tr>
          </table>
        </div>
        {/* cara daftar */}
        <div className="flex flex-col gap-2 py-6">
          <p className="font-semibold">
            Daftar Temu Janji Pelayanan KRI Tawau:
          </p>
          <a
            target="_blank"
            className="ml-2 hover:text-blue-700"
            href="https://www.temujanjiantrianpelayanankritawau.org/mohon-temu-janji"
          >
            https://www.temujanjiantrianpelayanankritawau.org/mohon-temu-janji
            <span className="text-blue-700">(Klik disini!)</span>
          </a>
        </div>
        {/* socmed */}
        <div>
          <h3 className="font-semibold">Sosial Media KRI Tawau:</h3>
          <div className="flex flex-col gap-2 pt-3">
            <p className="flex items-center gap-2">
              <img
                src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
                alt="fb"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.facebook.com/konsulatritawau"
              >
                https://www.facebook.com/konsulatritawau
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png"
                alt="ig"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.instagram.com/indonesiaintawau"
              >
                https://www.instagram.com/indonesiaintawau
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
                alt="tw"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://twitter.com/kritawau"
              >
                https://twitter.com/kritawau
              </a>
            </p>
            <p className="flex items-center gap-2">
              <img
                src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png"
                alt="yt"
                width="20"
                height="20"
              />
              <a
                target="_blank"
                className="ml-2 hover:underline hover:text-blue-700"
                href="https://www.youtube.com/channel/UCQquJ4wBetIiJPasZG6oglw"
              >
                https://www.youtube.com/channel/UCQquJ4wBetIiJPasZG6oglw
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-6"></div>
    </div>
  );
};

export default PerwakilanRIMalaysia;
