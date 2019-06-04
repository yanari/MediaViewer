import './Media.css';

import React from 'react';

function Media ({currentMedia}) {
  return (
    <figure className = "figure">
      <img
        alt = {currentMedia.caption}
        className = "img"
        src = {currentMedia.src}
      />
    </figure>
  );
}

export default Media;
