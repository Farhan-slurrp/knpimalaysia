import React from 'react';

const MyIframe: React.FC = () => {
  return (
    <div className="px-2 md:px-24">
      <h1 className="pt-16 pb-8 md:text-xl font-semibold text-center">
        GALERI FOTO BP KNPI MALAYSIA
      </h1>
    
    <iframe
      src="https://drive.google.com/embeddedfolderview?id=1bb9d91Lw7ceW8rD1OwDwzzdZHEOfYzki#grid"
      width="1080"
      height="1080"
      title="Gdrive embed"
      allow="accelerometer; encrypted-media; gyroscope"
      referrerPolicy="strict-origin-when-cross-origin"
    />

    </div>
  );
};

export default MyIframe;