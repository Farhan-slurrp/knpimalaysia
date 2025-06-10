import React, { useState } from 'react';

type Folder = {
  name: string;
  images: string[]; // file IDs
};

const folders: Folder[] = [
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
    name: 'Formasita Goes International',
    images: [
        `1av9-UHHEe0oeJdqIkABjSnY-CvXR6raB`,
        `1GTvybTftW4S5eX_qsNgjt5drV2GVehZ7`,
        `16JF_715VO-SHYVxTepYnNv__MAQUYHGg`,
        `1uUi150WVeMskgw9cX4Mx2os5cKB5a_D6`,
        `1POKh_WEZoTRRfPMs7Uqyc89KkyEOeVKY`,
        `10XWSj4Rc1uJyLDlgQ6nznm6vsJinFoLk`,
        `1uuOkfIF6pbKHul1PJzoAAHPefiTBx-HT`,
    ],
  },
];

const getIframeUrl = (id: string) =>
  `https://drive.google.com/file/d/${id}/preview`;

const GoogleDriveExplorer: React.FC = () => {
  const [lightboxFolder, setLightboxFolder] = useState<Folder | null>(null);
  const [viewMode, setViewMode] = useState<'album' | 'single'>('album');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openAlbum = (folder: Folder) => {
    setLightboxFolder(folder);
    setViewMode('album');
    setSelectedIndex(0);
  };

  const openSingleView = (index: number) => {
    setSelectedIndex(index);
    setViewMode('single');
  };

  const closeModal = () => {
    setLightboxFolder(null);
    setSelectedIndex(0);
  };

  const nextImage = () => {
    if (!lightboxFolder) return;
    setSelectedIndex((prev) =>
      prev + 1 < lightboxFolder.images.length ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    if (!lightboxFolder) return;
    setSelectedIndex((prev) =>
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
            onClick={() => openAlbum(folder)}
          >
            <div className="aspect-video bg-black">
              <iframe
                src={getIframeUrl(folder.images[0])}
                width="100%"
                height="200"
                allow="autoplay"
                className="w-full h-full rounded-t pointer-events-none"
              ></iframe>
            </div>
            <div className="p-3 text-white">
              <div className="font-medium">{folder.name}</div>
              <div className="text-sm text-gray-400">
                {folder.images.length} item
                {folder.images.length > 1 && 's'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {lightboxFolder && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {viewMode === 'album' ? (
              // Album Thumbnail Grid in Modal
              <div>
                <h2 className="text-xl text-white font-semibold mb-4">
                  {lightboxFolder.name}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {lightboxFolder.images.map((id, idx) => (
                    <div
                      key={id}
                      className="aspect-video overflow-hidden rounded shadow cursor-pointer hover:scale-105 transition"
                      onClick={() => openSingleView(idx)}
                    >
                      <iframe
                        src={getIframeUrl(id)}
                        width="100%"
                        height="160"
                        allow="autoplay"
                        className="w-full h-full pointer-events-none rounded"
                      ></iframe>
                    </div>
                  ))}
                </div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white text-2xl p-1 rounded-full"
                >
                  ✕
                </button>
              </div>
            ) : (
              // Single Image View
              <div className="flex flex-col items-center">
                <iframe
                  src={getIframeUrl(
                    lightboxFolder.images[selectedIndex]
                  )}
                  width="100%"
                  height="600"
                  allow="autoplay"
                  className="w-full rounded shadow aspect-video"
                ></iframe>

                {/* Navigation & Back */}
                <div className="flex justify-between w-full mt-4">
                  <button
                    onClick={() => setViewMode('album')}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
                  >
                    ← Back to Album
                  </button>
                  <div className="flex space-x-4">
                    <button
                      onClick={prevImage}
                      className="text-white text-2xl"
                    >
                      ‹
                    </button>
                    <button
                      onClick={nextImage}
                      className="text-white text-2xl"
                    >
                      ›
                    </button>
                  </div>
                  <button
                    onClick={closeModal}
                    className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white text-2xl p-1 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleDriveExplorer;