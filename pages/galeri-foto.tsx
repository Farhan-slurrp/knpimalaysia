import React from 'react';

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

const getImageUrl = (id: string) => `https://drive.google.com/uc?export=view&id=${id}`;

const GoogleDriveGallery: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GALERI FOTO BP KNPI MALAYSIA</h1>

      {folders.map((folder) => (
        <div key={folder.name} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{folder.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {folder.images.map((id) => (
              <div key={id} className="overflow-hidden rounded shadow">
                <img
                  src={getImageUrl(id)}
                  alt="Gallery image"
                  className="object-cover w-full h-48"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoogleDriveGallery;
