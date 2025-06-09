import React from 'react';

const MyIframe: React.FC = () => {
  return (
    <iframe
      src="https://drive.google.com/embeddedfolderview?id=1L3jwLc7UHJ8KBPjO8_yp8kzPDxzL5VjW#grid"
      width="600"
      height="600"
      title="Gdrive embed"
      allow="accelerometer; encrypted-media; gyroscope"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};

export default MyIframe;