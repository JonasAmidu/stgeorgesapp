// src/components/VideoPlayer.js

import React from 'react';

const VideoPlayer = () => {
  const videoUrl = 'https://www.youtube.com/embed/cln70_PfDgU';

  return (
    <div>
      <h1>The History of St George</h1>
      <div>
        <iframe
          title="video player"
          width="560"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
