import './Image.css';

import React from 'react';

function Image ({image}) {
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

export default Image;
