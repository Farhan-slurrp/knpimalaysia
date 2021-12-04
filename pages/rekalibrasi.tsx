/* eslint-disable @next/next/no-img-element */
import { SignalWifiStatusbarNullRounded } from "@mui/icons-material";
import React from "react";
import SuccessPage from "../components/Sukses";

interface Props {}

const Rekalibrasi = (props: Props) => {
  const [data, setData] = React.useState({});
  const [name, setName] = React.useState("");
  const [submitBtn, setSubmitBtn] = React.useState("SUBMIT");
  const [sent, setSent] = React.useState(false);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.name == "entry.1388067542") {
      setName(e.target.value);
    }
  };

  const handleRequest = async (url: string) => {
    let response;
    try {
      response = await fetch(url, {
        method: "POST",
      });
    } catch (e) {
      response = e;
    }
    console.log(response);
  };

  const handleSubmit = async (e: any) => {
    const id = "1F_MXFNs2Wpb8bvCOKRakuDj4A3_2DPJRD_Dy6WEM2QI"; //YOUR FORM ID
    e.preventDefault();
    const formUrl = "https://docs.google.com/forms/d/" + id + "/formResponse";
    const queryString = require("query-string");
    const q = queryString.stringifyUrl({
      url: formUrl,
      query: data,
    });
    await handleRequest(q);
    setSent(true);
    setSubmitBtn("SUKSES!!");
    // e.target.reset();
    // setData({});
    setTimeout(() => {
      setSubmitBtn("SUBMIT");
    }, 5000);
  };

  if (sent) {
    return <SuccessPage type="pendaftaran" name={name} />;
  }

  return (
    <div className="flex flex-col items-center w-full p-6 my-4">
      <img src="/rekalibrasi.jpeg" alt="info" width="250" height="250" />
      <h2 className="mt-8 mb-12 text-2xl font-bold text-center text-gray-800">
        Formulir Pendaftaran Rekalibrasi Pulang
      </h2>
      <form
        method="POST"
        onSubmit={handleSubmit}
        action="https://docs.google.com/forms/d/1F_MXFNs2Wpb8bvCOKRakuDj4A3_2DPJRD_Dy6WEM2QI/formResponse"
        className="flex flex-col gap-12 p-8 uppercase border border-gray-300 rounded-md"
      >
        {/* nama lengkap */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="nama-lengkap">
            Nama Lengkap:{" "}
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1388067542"
            id="nama-lengkap"
            onChange={handleChange}
          />
        </div>
        {/* jenis kelamin */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-700">Jenis Kelamin: </p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="LAKI-LAKI"
              name="entry.1861933517"
              value="LAKI-LAKI"
              onChange={handleChange}
            />
              <label htmlFor="LAKI-LAKI">LAKI-LAKI</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="PEREMPUAN"
              name="entry.1861933517"
              value="PEREMPUAN"
              onChange={handleChange}
            />
              <label htmlFor="PEREMPUAN">PEREMPUAN</label>
          </div>
        </div>
        {/* tempat lahir */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="tempat-lahir">
            Tempat Lahir:{" "}
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.561409861"
            id="tempat-lahir"
            onChange={handleChange}
          />
        </div>
        {/* tanggal lahir */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-gray-700"
            htmlFor="tanggal-lahir"
          >
            Tanggal Lahir:{" "}
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="date"
            name="entry.422346054"
            id="tanggal-lahir"
            onChange={handleChange}
          />
        </div>
        {/* jenis dokumen */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-700">
            Jenis Dokumen Yang Dimiliki:{" "}
          </p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="PASPOR"
              name="entry.713031867"
              value="PASPOR"
              onChange={handleChange}
            />
              <label htmlFor="PASPOR">PASPOR</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="SPLP"
              name="entry.713031867"
              value="SPLP"
              onChange={handleChange}
            />
              <label htmlFor="SPLP">SPLP</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="KTP"
              name="entry.713031867"
              value="KTP"
              onChange={handleChange}
            />
              <label htmlFor="KTP">KTP</label>
          </div>
        </div>
        {/* nomor dokumen */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="no-dokumen">
            NOMOR DOKUMEN YANG DIMILIKI SAAT INI (SESUAI PILIHAN DIATAS):
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1241030908"
            id="no-dokumen"
            onChange={handleChange}
          />
        </div>
        {/* tanggal habis masa berlaku */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-gray-700"
            htmlFor="habis-masa-berlaku"
          >
            TANGGAL HABIS BERLAKU PASPOR ATAU SPLP:
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none "
            type="date"
            name="entry.916558265"
            id="habis-masa-berlaku"
            onChange={handleChange}
          />
        </div>
        {/* nomor hp/wa */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="nomor-hp">
            nomor hp/wa:
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.2019658140"
            id="nomor-hp"
            onChange={handleChange}
          />
        </div>
        {/* data anak */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="data-anak">
            JIKA MEMBAWA ANAK: TULISKAN NAMA LENGKAP ANAK, TEMPAT LAHIR, TANGGAL
            LAHIR SERTA NOMOR DOKUMEN ANAK:
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1617980304"
            id="data-anak"
            onChange={handleChange}
          />
        </div>
        {/* destinasi kepulangan */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-700">destinasi kepulangan: </p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="SURABAYA"
              name="entry.2133735545"
              value="SURABAYA"
              onChange={handleChange}
            />
              <label htmlFor="SURABAYA">SURABAYA</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="MEDAN"
              name="entry.2133735545"
              value="MEDAN"
              onChange={handleChange}
            />
              <label htmlFor="MEDAN">MEDAN</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="JAKARTA"
              name="entry.2133735545"
              value="JAKARTA"
              onChange={handleChange}
            />
              <label htmlFor="JAKARTA">JAKARTA</label>
          </div>
        </div>
        {/* alamat malaysia */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-gray-700"
            htmlFor="alamat-di-malaysia"
          >
            ALAMAT DI MALAYSIA (Nomor Rumah & Nama Jalan):
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1792253764"
            id="alamat-di-malaysia"
            onChange={handleChange}
          />
        </div>
        {/* bandar */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="bandar">
            bandar:
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.529814437"
            id="bandar"
            onChange={handleChange}
          />
        </div>
        {/* negeri */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="negeri">
            negeri:
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1168985113"
            id="negeri"
            onChange={handleChange}
          />
        </div>
        {/* alamat indonesia */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-gray-700"
            htmlFor="alamat-di-indonesia"
          >
            ALAMAT DI indonesia (Nomor Rumah & Nama Jalan):
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.76524181"
            id="alamat-di-indonesia"
            onChange={handleChange}
          />
        </div>
        {/* kabupaten/kota */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-gray-700"
            htmlFor="kabupaten-kota"
          >
            kabupaten/kota:
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1848295780"
            id="kabupaten-kota"
            onChange={handleChange}
          />
        </div>
        {/* provinsi */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="provinsi">
            provinsi:
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.458209569"
            id="provinsi"
            onChange={handleChange}
          />
        </div>
        {/* status kesehatan */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-700">status kesehatan: </p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="SAKIT"
              name="entry.624850740"
              value="SAKIT"
              onChange={handleChange}
            />
              <label htmlFor="SAKIT">SAKIT</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="HAMIL"
              name="entry.624850740"
              value="HAMIL"
              onChange={handleChange}
            />
              <label htmlFor="HAMIL">HAMIL</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="SEHAT"
              name="entry.624850740"
              value="SEHAT"
              onChange={handleChange}
            />
              <label htmlFor="SEHAT">SEHAT</label>
          </div>
        </div>
        {/* alasan-pulang */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-gray-700"
            htmlFor="alasan-pulang"
          >
            alasan pulang:
          </label>
          <input
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.840994159"
            id="alasan-pulang"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          disabled={submitBtn == "SUBMIT" ? false : true}
          className={`py-2 mt-4 font-semibold text-white uppercase rounded-md ${
            submitBtn == "SUBMIT" ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {submitBtn}
        </button>
      </form>
    </div>
  );
};

export default Rekalibrasi;
