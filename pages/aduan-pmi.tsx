/* eslint-disable react/jsx-no-target-blank */
import React from "react";

interface Props {}

const AduanPMI = (props: Props) => {
  const [emailType, setEmailType] = React.useState("ADUAN");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [docType, setDocType] = React.useState("PASPOR");
  const [docNum, setDocNum] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      emailType,
      name,
      docType,
      docNum,
      message,
    };

    console.log(data);
    fetch("/api/aduan", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setEmailType("ADUAN");
        setName("");
        setMessage("");
        setDocType("PASPOR");
        setDocNum("");
      }
    });
  };

  return (
    <div className="p-12">
      <h2 className="pb-8 text-2xl font-semibold text-center">
        BOX ADUAN DAN ASPIRASI PMI
      </h2>
      <form
        action="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-16 border border-gray-300 rounded-md"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="doctype">Tipe Pesan:</label>
          <select
            name="emailtype"
            id="emailtype"
            required
            value={emailType}
            onChange={(e) => setEmailType(e.target.value)}
            className="p-1 bg-transparent border border-gray-300 outline-none"
          >
            <option value="ADUAN">ADUAN</option>
            <option value="ASPIRASI">ASPIRASI</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="nama">Nama Pengirim:</label>
          <input
            type="text"
            value={name}
            name="nama"
            className="p-2 bg-transparent border border-gray-300 outline-none"
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="doctype">Tipe Dokumen:</label>
          <select
            name="doctype"
            id="doctype"
            required
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
            className="p-1 bg-transparent border border-gray-300 outline-none"
          >
            <option value="PASPOR">PASPOR</option>
            <option value="KTP">KTP</option>
            <option value="SPLP">SPLP</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="nama">Nomor Dokumen:</label>
          <input
            type="text"
            value={docNum}
            name="nama"
            className="p-2 bg-transparent border border-gray-300 outline-none"
            onChange={(e) => setDocNum(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="message">Pesan:</label>
          <textarea
            value={message}
            name="message"
            className="p-2 bg-transparent border border-gray-300 outline-none min-h-2"
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 text-white bg-green-600 rounded-md"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default AduanPMI;
