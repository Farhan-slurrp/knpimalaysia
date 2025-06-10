import React, { useState } from 'react';

type Folder = {
  name: string;
  images: string[]; // file IDs
};

const folders: Folder[] = [
  {
    name: 'Jubli Intan 75 Tahun MBM',
    images: [
        `1TVoBWRGkDaSkj0VDRnTxmrLeUP-j2eFp`,
        `1-l0EaM8epoNqqlEq9J3TZkv8Xml_4vWt`,
        `1nPBt5ns887K1MDy437pY6KIpAEZq84TX`,
        `1AMqDEWK9ouQbb4neOyIux6TB8-156QQO`,
        `1-Du7hKRa7QoftlVnCWdQUuuCYVini_0E`,
        `1LE7sr4fdz8uyN_ozVqXpxCImVbJvx6zI`,
        `1iOMvdQqBzQlKI7vKJwLIV6zkwj_aQZWO`,
        `16pPkOQGw3wo1JkCAE5VxRHbQop1tkj7J`,
    ],
  },
  {
    name: 'MPAT MBM 73 ',
    images: [
        `10fUlSB1jkDw8ASj7Boegw7_7B-8EYoWu`,
        `10XokjQaFvZbk6p5UETVotEr_h-p2W5Rq`,
        `10WesrFL11i2RLaUNHf7GvHV92WabVM_O`,
        `10s6-WBPegK5o2BPoQxxGFiFXQ-jkuYvX`,
        `10FXA2R7po7t-h72XgXjupDT0i4LWA2O0`,
        `10G0BfiALlBg3l31uAFfkUMEKZaIbbbQU`,
        `10K_bRGKyXM4xSeUIJYb56lhJI-r-2wIq`,
    ],
  },
];


const getIframeUrl = (id: string) =>
  `https://drive.google.com/file/d/${id}/preview`;

const GoogleDriveExplorer: React.FC = () => {
  const [lightboxFolder, setLightboxFolder] = useState<Folder | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const openAlbum = (folder: Folder, index: number) => {
    setLightboxFolder(folder);
    setLightboxIndex(index);
  };

  const closeAlbum = () => {
    setLightboxFolder(null);
    setLightboxIndex(0);
  };

  const nextImage = () => {
    if (!lightboxFolder) return;
    setLightboxIndex((prev) =>
      prev + 1 < lightboxFolder.images.length ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    if (!lightboxFolder) return;
    setLightboxIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : lightboxFolder.images.length - 1
    );
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GALERI FOTO BP KNPI MALAYSIA</h1>

      {/* Album Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {folders.map((folder) => (
          <div
            key={folder.name}
            className="bg-gray-900 rounded overflow-hidden shadow cursor-pointer hover:shadow-md transition"
            onClick={() => openAlbum(folder, 0)}
          >
            {/* Album Cover (first image as iframe) */}
            <div className="aspect-video bg-black">
              <iframe
                src={getIframeUrl(folder.images[0])}
                width="100%"
                height="200"
                allow="autoplay"
                className="w-full h-full rounded-t pointer-events-none"
              ></iframe>
            </div>
            {/* Album Info */}
            <div className="p-3 text-white">
              <div className="font-medium">{folder.name}</div>
              <div className="text-sm text-gray-400">
                {folder.images.length} item{folder.images.length > 1 && 's'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxFolder && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeAlbum}
        >
          <div
            className="relative w-full max-w-4xl p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={getIframeUrl(lightboxFolder.images[lightboxIndex])}
              width="100%"
              height="600"
              allow="autoplay"
              className="w-full rounded shadow-lg aspect-video"
            ></iframe>
            {/* Album Navigation */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl"
            >
              ›
            </button>
            <button
              onClick={closeAlbum}
              className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white text-2xl p-1 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleDriveExplorer;