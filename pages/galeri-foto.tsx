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
    ],
  },
];

const getImageUrl = (id: string) =>
  `https://drive.usercontent.google.com/download?id=${id}&export=view&authuser=0`;


const GoogleDriveGallery: React.FC = () => {
  // Track which folders are expanded
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({});

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GALERI FOTO BP KNPI MALAYSIA</h1>

      {folders.map((folder) => {
        const isExpanded = expandedFolders[folder.name];

        return (
          <div key={folder.name} className="mb-4 border rounded shadow">
            <div
              className="flex justify-between items-center p-2 cursor-pointer bg-gray-100"
              onClick={() => toggleFolder(folder.name)}
            >
              <h2 className="text-lg font-semibold">{folder.name}</h2>
              <span>{isExpanded ? '▲' : '▼'}</span>
            </div>

            {isExpanded && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2 bg-white">
                {folder.images.map((id) => (
                    <div key={id} className="overflow-hidden rounded shadow">
                        <iframe
                        src={`https://drive.google.com/file/d/${id}/preview`}
                        width="100%"
                        height="240"
                        allow="autoplay"
                        ></iframe>
                    </div>
                    ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GoogleDriveGallery;