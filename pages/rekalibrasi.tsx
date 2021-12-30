/* eslint-disable @next/next/no-img-element */
import { SignalWifiStatusbarNullRounded } from "@mui/icons-material";
import React from "react";
import SuccessPage from "../components/Sukses";
import Head from "next/head";

interface Props {}

const Rekalibrasi = (props: Props) => {
  const [data, setData] = React.useState({});
  const [name, setName] = React.useState("");
  const [submitBtn, setSubmitBtn] = React.useState("DAFTAR");
  const [sent, setSent] = React.useState(false);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value.toUpperCase() });
    if (e.target.name == "entry.39251784") {
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
    const id = "1FAIpQLSerUcwlkvPhheEhvZ7-eZmLbhdhJazWtzu0mC_LPiMoqWYaDA"; //YOUR FORM ID
    e.preventDefault();
    const formUrl =
      "https://docs.google.com/forms/u/6/d/e/" + id + "/formResponse";
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
      setSubmitBtn("DAFTAR");
    }, 5000);
  };

  if (sent) {
    return <SuccessPage type="pendaftaran" name={name} />;
  }

  return (
    <div className="flex flex-col items-center w-full p-6 my-4">
      <Head>
        <meta
          property="og:title"
          content="Program Pendampingan Rekalibrasi Pulang"
        />
        <meta
          property="og:description"
          content="Formulir Pendaftaran Calon Peserta."
        />
        <meta property="og:image" content="/rekalibrasi.jpeg" />
        <link rel="icon" href="/rekalibrasi.jpeg" />
      </Head>
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
            Nama Lengkap: <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.39251784"
            id="nama-lengkap"
            onChange={handleChange}
            required
          />
        </div>
        {/* jenis kelamin */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-700">
            Jenis Kelamin: <span className="text-red-500">&#42;</span>
          </p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="LAKI-LAKI"
              name="entry.1664538433"
              value="LAKI-LAKI"
              onChange={handleChange}
              required
            />
              <label htmlFor="LAKI-LAKI">LAKI-LAKI</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="PEREMPUAN"
              name="entry.1664538433"
              value="PEREMPUAN"
              onChange={handleChange}
            />
              <label htmlFor="PEREMPUAN">PEREMPUAN</label>
          </div>
        </div>
        {/* tempat lahir */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="tempat-lahir">
            Tempat Lahir: <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1613817072"
            id="tempat-lahir"
            onChange={handleChange}
            required
          />
        </div>
        {/* tanggal lahir */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-gray-700"
            htmlFor="tanggal-lahir"
          >
            Tanggal Lahir: <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="date"
            name="entry.824568806"
            id="tanggal-lahir"
            onChange={handleChange}
            required
          />
        </div>
        {/* jenis dokumen */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-700">
            Jenis Dokumen Yang Dimiliki:{" "}
            <span className="text-red-500">&#42;</span>
          </p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="PASPOR"
              name="entry.1338916289"
              value="PASPOR"
              onChange={handleChange}
              required
            />
              <label htmlFor="PASPOR">PASPOR</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="SPLP"
              name="entry.1338916289"
              value="SPLP"
              onChange={handleChange}
            />
              <label htmlFor="SPLP">SPLP</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="KTP"
              name="entry.1338916289"
              value="KTP"
              onChange={handleChange}
            />
              <label htmlFor="KTP">KTP</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="KARTU KELUARGA"
              name="entry.1338916289"
              value="KARTU KELUARGA"
              onChange={handleChange}
            />
              <label htmlFor="KARTU KELUARGA">KARTU KELUARGA</label>
          </div>
        </div>
        {/* nomor dokumen */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="no-dokumen">
            NOMOR DOKUMEN YANG DIMILIKI SAAT INI (SESUAI PILIHAN DIATAS):{" "}
            <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1123142711"
            id="no-dokumen"
            onChange={handleChange}
            required
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
            className="p-2 bg-transparent border border-gray-400 outline-none"
            type="date"
            name="entry.1520960194"
            id="habis-masa-berlaku"
            onChange={handleChange}
          />
        </div>
        {/* data anak */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="data-anak">
            JIKA MEMBAWA ANAK, TULISKAN NAMA LENGKAP ANAK, TEMPAT LAHIR, TANGGAL
            LAHIR SERTA NOMOR DOKUMEN ANAK:
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1319785188"
            id="data-anak"
            onChange={handleChange}
          />
        </div>
        {/* nomor hp/wa */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="nomor-hp">
            NOMOR HP/WA <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1524905898"
            id="nomor-hp"
            onChange={handleChange}
            required
          />
        </div>
        {/* alamat malaysia */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-gray-700"
            htmlFor="alamat-di-malaysia"
          >
            ALAMAT DI MALAYSIA (NOMOR RUMAH DAN NAMA JALAN):{" "}
            <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.622320924"
            id="alamat-di-malaysia"
            onChange={handleChange}
            required
          />
        </div>
        {/* bandar */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="bandar">
            bandar: <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.2141538284"
            id="bandar"
            onChange={handleChange}
            required
          />
        </div>
        {/* negeri */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="negeri">
            negeri: <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1537761018"
            id="negeri"
            onChange={handleChange}
            required
          />
        </div>
        {/* destinasi kepulangan */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-700">
            destinasi kepulangan: <span className="text-red-500">&#42;</span>
          </p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="SURABAYA"
              name="entry.1201072392"
              value="SURABAYA"
              onChange={handleChange}
              required
            />
              <label htmlFor="SURABAYA">SURABAYA</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="MEDAN"
              name="entry.1201072392"
              value="MEDAN"
              onChange={handleChange}
            />
              <label htmlFor="MEDAN">MEDAN</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="JAKARTA"
              name="entry.1201072392"
              value="JAKARTA"
              onChange={handleChange}
            />
              <label htmlFor="JAKARTA">JAKARTA</label>
          </div>
        </div>
        {/* RENCANA PULANG */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-700">
            RENCANA PULANG: <span className="text-red-500">&#42;</span>
          </p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="FEBRUARI 2020"
              name="entry.502113277"
              value="FEBRUARI 2022"
              onChange={handleChange}
              required
            />
              <label htmlFor="FEBRUARI 2022">FEBRUARI 2022</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="MARET 2020"
              name="entry.502113277"
              value="MARET 2022"
              onChange={handleChange}
              required
            />
              <label htmlFor="MARET 2022">MARET 2022</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="APRIL 2020"
              name="entry.502113277"
              value="APRIL 2022"
              onChange={handleChange}
              required
            />
              <label htmlFor="APRIL 2022">APRIL 2022</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="MEI 2020"
              name="entry.502113277"
              value="MEI 2022"
              onChange={handleChange}
              required
            />
              <label htmlFor="MEI 2022">MEI 2022</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="JUNI 2020"
              name="entry.502113277"
              value="JUNI 2022"
              onChange={handleChange}
              required
            />
              <label htmlFor="JUNI 2022">JUNI 2022</label>
          </div>
        </div>
        {/* alamat indonesia */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-gray-700"
            htmlFor="alamat-di-indonesia"
          >
            ALAMAT DI indonesia (NOMOR RUMAH, NAMA JALAN, NAMA DESA/KELURAHAN):{" "}
            <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.2092018895"
            id="alamat-di-indonesia"
            onChange={handleChange}
            required
          />
        </div>
        {/* kabupaten/kota */}
        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-gray-700"
            htmlFor="kabupaten-kota"
          >
            kabupaten/kota: <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.2111923876"
            id="kabupaten-kota"
            onChange={handleChange}
            required
          />
        </div>
        {/* provinsi */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700" htmlFor="provinsi">
            provinsi: <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.2013971010"
            id="provinsi"
            onChange={handleChange}
            required
          />
        </div>
        {/* status kesehatan */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-700">
            status kesehatan: <span className="text-red-500">&#42;</span>
          </p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="SAKIT"
              name="entry.134450213"
              value="SAKIT"
              onChange={handleChange}
            />
              <label htmlFor="SAKIT">SAKIT</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="HAMIL"
              name="entry.134450213"
              value="HAMIL"
              onChange={handleChange}
              required
            />
              <label htmlFor="HAMIL">HAMIL</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              id="SEHAT"
              name="entry.134450213"
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
            alasan pulang: <span className="text-red-500">&#42;</span>
          </label>
          <input
            className="p-2 uppercase bg-transparent border border-gray-400 outline-none"
            type="text"
            name="entry.1035142121"
            id="alasan-pulang"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          disabled={submitBtn == "DAFTAR" ? false : true}
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
