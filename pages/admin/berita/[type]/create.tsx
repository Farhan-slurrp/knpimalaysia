import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import AdminLayout from "../../../../components/AdminLayout";
import { db } from "../../../../firebase/init";
import dynamic from "next/dynamic";
import { storage } from "../../../../firebase/init";
import ToggleOff from "@mui/icons-material/ToggleOff";
import ToggleOn from "@mui/icons-material/ToggleOn";

const importJodit = () => import("jodit-react");

const JoditEditor = dynamic(importJodit, {
  ssr: false,
});

interface Props {}

const CreateNews = (props: Props) => {
  const router = useRouter();
  const [content, setContent] = React.useState("");
  const [linkIMG, setLinkIMG] = React.useState(false);

  console.log(router.query);

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (router.query["sumber"] == "internal") {
      let fileURL = "";
      if (!linkIMG) {
        const tImage = e.target["thumbnail-image"].files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child(e.target["judul"].value);
        await fileRef.put(tImage);
        fileURL = await fileRef.getDownloadURL();
      }

      console.log(fileURL);

      const data: any = {
        judul: e.target["judul"].value,
        publishDate: e.target["publish-date"].value,
        thumbnailImage: linkIMG ? e.target["thumbnail-image"].value : fileURL,
        content,
        type: router.query["sumber"],
      };

      const res = await db
        .collection(router.query["type"]!.toString())
        .doc()
        .set(data);

      console.log(res);
      e.target.reset();
    }
    if (router.query["sumber"] == "external") {
      const data: any = {
        judul: e.target["judul"].value,
        publisher: e.target["penerbit"].value,
        publishDate: e.target["publish-date"].value,
        thumbnailImage: e.target["thumbnailImage"].value,
        sumber: e.target["sumber"].value,
        type: router.query["sumber"],
      };

      const res = await db
        .collection(router.query["type"]!.toString())
        .doc()
        .set(data);

      console.log(res);
      e.target.reset();
    }
  };

  if (!router.query["sumber"]) {
    return (
      <AdminLayout>
        <div className="flex flex-col gap-8 p-12">
          <h1 className="text-2xl text-center">Pilih Sumber Berita: </h1>
          <div className="flex gap-12 w-auto justify-center py-8">
            <Link
              href={`/admin/berita/${router.query["type"]}/create?sumber=external`}
            >
              <p className="min-w-1 cursor-pointer text-center p-4 hover:bg-blue-700 bg-blue-500 uppercase rounded-md text-white font-semibold">
                External
              </p>
            </Link>
            <Link
              href={`/admin/berita/${router.query["type"]}/create?sumber=internal`}
            >
              <p className="min-w-1 cursor-pointer text-center p-4 hover:bg-blue-700 bg-blue-500 uppercase rounded-md text-white font-semibold">
                Internal
              </p>
            </Link>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      {router.query["sumber"] == "external" && (
        <div className="p-12 flex justify-center">
          <form
            className="p-4 border border-gray-200 flex flex-col items-center w-2/3 gap-10"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center text-2xl">Berita Baru</h1>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="judul">Judul:</label>
              <input
                className="bg-transparent border p-1 border-gray-300 outline-none rounded-md"
                name="judul"
                type="text"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="penerbit">Penerbit:</label>
              <input
                className="bg-transparent border p-1 border-gray-300 outline-none rounded-md"
                name="penerbit"
                type="text"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="publish-date">Tanggal Terbit:</label>
              <input
                className="bg-transparent border px-2 p-1 border-gray-300 outline-none rounded-md"
                name="publish-date"
                type="date"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="thumbnailImage">Gambar Thumbnail (Link):</label>
              <input
                className="bg-transparent border p-1 border-gray-300 outline-none rounded-md"
                name="thumbnailImage"
                type="text"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="sumber">Link Berita:</label>
              <input
                className="bg-transparent border p-1 border-gray-300 outline-none rounded-md"
                name="sumber"
                type="text"
                autoComplete="off"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-green-500 w-1/3 text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {router.query["sumber"] == "internal" && (
        <div className="p-12 flex justify-center">
          <form
            className="p-4 border border-gray-200 flex flex-col items-center w-2/3 gap-10"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center text-2xl">Berita Baru</h1>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="judul">Judul:</label>
              <input
                className="bg-transparent border p-1 border-gray-300 outline-none rounded-md"
                name="judul"
                type="text"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="publish-date">Tanggal Terbit:</label>
              <input
                className="bg-transparent border px-2 p-1 border-gray-300 outline-none rounded-md"
                name="publish-date"
                type="date"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between">
                <label htmlFor="thumbnail-image">
                  Gambar Thumbnail & Banner:
                </label>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setLinkIMG(!linkIMG);
                  }}
                >
                  {linkIMG ? (
                    <ToggleOn fontSize="large" />
                  ) : (
                    <ToggleOff fontSize="large" />
                  )}
                </button>
              </div>
              <input
                className="bg-transparent border px-2 p-1 border-gray-300 outline-none rounded-md"
                name="thumbnail-image"
                type={linkIMG ? "text" : "file"}
                placeholder="Image Link Here"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p>Konten:</p>
              <JoditEditor
                value={content}
                config={config}
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-green-500 w-1/3 text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </AdminLayout>
  );
};

export default CreateNews;
