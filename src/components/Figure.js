import './Figure.css';

import React from 'react';

function Figure ({image}) {
  return (
    <figure className = "figure">
      <img
        alt = {image.caption}
        className = "img"
        src = {image.src}
      />
    </figure>
  );
}

export default Figure;
