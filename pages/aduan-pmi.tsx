/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SuccessPage from "../components/Sukses";

interface Props {}

interface IFile {
  filename: string;
  file: object;
  contentType: string;
}

const AduanPMI = (props: Props) => {
  const [emailType, setEmailType] = React.useState("");
  const [name, setName] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [docType, setDocType] = React.useState("");
  const [docNum, setDocNum] = React.useState("");
  const [attachedFile, setAttachedFile] = React.useState<FileList | null>(null);
  const [buttonText, setButtonText] = React.useState("Kirim");
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Sending");

    const files: IFile[] | null = [];

    if (attachedFile && attachedFile.length > 0) {
      for (let i = 0; i < attachedFile.length; i++) {
        files.push({
          filename: attachedFile[i].name,
          file: attachedFile[i],
          contentType: attachedFile[i].type,
        });
      }
    }

    let data = {
      emailType,
      name,
      phoneNum,
      docType,
      docNum,
      message,
      files,
    };

    fetch("/api/aduan", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
        }
      })
      .catch((err) => console.log(err));

    setSent(true);
    setPhoneNum("");
    setMessage("");
    setDocNum("");
    setAttachedFile(null);
    setButtonText("Terkirim!");

    setTimeout(() => {
      setButtonText("Kirim");
    }, 500);
  };

  if (sent) {
    return <SuccessPage type={emailType} name={name} />;
  }

  return (
    <div className="px-1 py-8 md:p-12">
      <h2 className="pb-8 text-2xl font-semibold text-center">
        BOX ADUAN DAN ASPIRASI PMI
      </h2>
      <form
        action="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-2 border border-gray-300 rounded-md md:p-16 md:min-w-2"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="doctype">
            Tipe Pesan: <span className="text-red-500">&#42;</span>
          </label>
          <select
            name="emailtype"
            id="emailtype"
            required
            value={emailType}
            onChange={(e) => setEmailType(e.target.value)}
            className="p-1 bg-transparent border border-gray-300 outline-none"
          >
            <option value=""></option>
            <option value="ADUAN">ADUAN</option>
            <option value="ASPIRASI">ASPIRASI</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="nama">
            Nama Pengirim: <span className="text-red-500">&#42;</span>
          </label>
          <input
            type="text"
            value={name}
            name="nama"
            className="p-2 bg-transparent border border-gray-300 outline-none"
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="nama">
            Nomor HP/WA: <span className="text-red-500">&#42;</span>
          </label>
          <input
            type="number"
            value={phoneNum}
            name="nama"
            className="p-2 bg-transparent border border-gray-300 outline-none"
            onChange={(e) => setPhoneNum(e.target.value)}
            autoComplete="off"
            placeholder="Cth: 60xxxxxxxx"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="doctype">
            Tipe Dokumen: <span className="text-red-500">&#42;</span>
          </label>
          <select
            name="doctype"
            id="doctype"
            required
            value={docType}
            onChange={(e) => setDocType(e.target.value)}
            className="p-1 bg-transparent border border-gray-300 outline-none"
          >
            <option value=""></option>
            <option value="PASPOR">PASPOR</option>
            <option value="KTP">KTP</option>
            <option value="SPLP">SPLP</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="nama">
            Nomor Dokumen: <span className="text-red-500">&#42;</span>
          </label>
          <input
            type="text"
            value={docNum}
            name="nama"
            className="p-2 bg-transparent border border-gray-300 outline-none"
            onChange={(e) => setDocNum(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col-reverse items-center justify-between w-full gap-2 md:flex-row">
            <label htmlFor="message">
              Pesan: <span className="text-red-500">&#42;</span>
            </label>
            <div>
              <label htmlFor="attachedFile">
                {attachedFile ? (
                  <p className="p-1 text-sm border border-gray-400 rounded-lg cursor-pointer hover:text-blue-700 hover:border-blue-600">
                    <AttachFileIcon fontSize="small" /> File Dipautkan!
                  </p>
                ) : (
                  <p className="p-1 text-sm border border-gray-400 rounded-lg cursor-pointer hover:text-blue-700 hover:border-blue-600">
                    <AttachFileIcon fontSize="small" /> Pautkan File (Gambar /
                    Dokumen)
                  </p>
                )}
              </label>
              <input
                onChange={(e) => {
                  setAttachedFile(e.target.files);
                }}
                name="attachedFile"
                id="attachedFile"
                type="file"
                className="hidden"
                multiple
              />
            </div>
          </div>
          <textarea
            value={message}
            name="message"
            className="p-2 bg-transparent border border-gray-300 outline-none min-h-2"
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 text-white bg-green-600 rounded-md"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default AduanPMI;
