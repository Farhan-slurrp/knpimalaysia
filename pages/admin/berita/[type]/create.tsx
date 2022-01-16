import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import AdminLayout from "../../../../components/AdminLayout";
import { db } from "../../../../firebase/init";
import dynamic from "next/dynamic";

const importJodit = () => import("jodit-react");

const JoditEditor = dynamic(importJodit, {
  ssr: false,
});

interface Props {}

const CreateNews = (props: Props) => {
  const router = useRouter();
  const [content, setContent] = React.useState("");

  console.log(router.query);

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (router.query["sumber"] == "external") {
      const data = {
        judul: e.target["judul"].value,
        sumber: e.target["sumber"].value,
        publisher: e.target["publisher"].value,
        publishDate: e.target["publish-date"].value,
        thumbnailImage: e.target["thumbnail-image"].value,
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
            className="p-4 border border-gray-200 flex flex-col items-center w-2/3 gap-6"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center text-2xl">Berita Baru</h1>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="judul">Judul:</label>
              <input
                className="bg-transparent border p-1 border-gray-400 outline-none rounded-md"
                name="judul"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="sumber">Sumber:</label>
              <input
                className="bg-transparent border p-1 border-gray-400 outline-none rounded-md"
                name="sumber"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="publisher">Penerbit:</label>
              <input
                className="bg-transparent border p-1 border-gray-400 outline-none rounded-md"
                name="publisher"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="publish-date">Tanggal Terbit:</label>
              <input
                className="bg-transparent border p-1 border-gray-400 outline-none rounded-md"
                name="publish-date"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="thumbnail-image">Gambar Thumbnail (Link):</label>
              <input
                className="bg-transparent border p-1 border-gray-400 outline-none rounded-md"
                name="thumbnail-image"
                type="text"
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
            className="p-4 border border-gray-200 flex flex-col items-center w-2/3 gap-6"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center text-2xl">Berita Baru</h1>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="judul">Judul:</label>
              <input
                className="bg-transparent border p-1 border-gray-400 outline-none rounded-md"
                name="judul"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="publish-date">Tanggal Terbit:</label>
              <input
                className="bg-transparent border p-1 border-gray-400 outline-none rounded-md"
                name="publish-date"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="thumbnail-image">
                Gambar Thumbnail & Banner:
              </label>
              <input
                className="bg-transparent border p-1 border-gray-400 outline-none rounded-md"
                name="thumbnail-image"
                type="file"
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
