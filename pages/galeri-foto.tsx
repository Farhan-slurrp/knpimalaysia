import React, { useState } from 'react';

type Folder = {
  name: string;
  images: string[]; // file IDs
};

const folders: Folder[] = [
  {
    name: 'Jubli Intan 75 Tahun MBM',
    images: [
        `1-l0EaM8epoNqqlEq9J3TZkv8Xml_4vWt`,
        `1nPBt5ns887K1MDy437pY6KIpAEZq84TX`,
        `1AMqDEWK9ouQbb4neOyIux6TB8-156QQO`,
        `1-Du7hKRa7QoftlVnCWdQUuuCYVini_0E`,
        `1LE7sr4fdz8uyN_ozVqXpxCImVbJvx6zI`,
        `1TVoBWRGkDaSkj0VDRnTxmrLeUP-j2eFp`,
        `1iOMvdQqBzQlKI7vKJwLIV6zkwj_aQZWO`,
        `16pPkOQGw3wo1JkCAE5VxRHbQop1tkj7J`,
    ],
  },
  {
    name: 'MPAT MBM 73 ',
    images: [
        `10XokjQaFvZbk6p5UETVotEr_h-p2W5Rq`,
        `10fUlSB1jkDw8ASj7Boegw7_7B-8EYoWu`,
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
  const [expandedFolder, setExpandedFolder] = useState<string | null>(null);
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const toggleFolder = (folderName: string) => {
    setExpandedFolder((prev) => (prev === folderName ? null : folderName));
  };

  return (
    <div className="p-4 max-w-3xl mx-auto relative">
      <h1 className="text-2xl font-bold mb-4">GALERI FOTO BP KNPI MALAYSIA</h1>

      <div className="border rounded shadow-sm">
        {folders.map((folder) => {
          const isExpanded = expandedFolder === folder.name;
          return (
            <div key={folder.name} className="border-b last:border-b-0">
              <div
                className="flex items-center justify-between px-4 py-2 bg-gray-100 cursor-pointer hover:bg-gray-200"
                onClick={() => toggleFolder(folder.name)}
              >
                <span className="font-medium">{folder.name}</span>
                <span className="text-sm">{isExpanded ? '▲' : '▼'}</span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white">
                  {folder.images.map((id) => (
                    <div
                      key={id}
                      className="overflow-hidden rounded shadow aspect-video cursor-pointer hover:scale-105 transition"
                      onClick={() => setLightboxId(id)}
                    >
                      <iframe
                        src={getIframeUrl(id)}
                        width="100%"
                        height="240"
                        allow="autoplay"
                        className="w-full rounded pointer-events-none"
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxId && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxId(null)}
        >
          <div className="relative w-full max-w-3xl p-4">
            <iframe
              src={getIframeUrl(lightboxId)}
              width="100%"
              height="500"
              allow="autoplay"
              className="w-full rounded shadow-lg"
            ></iframe>
            <button
              onClick={() => setLightboxId(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
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