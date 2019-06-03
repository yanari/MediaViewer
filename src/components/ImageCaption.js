import './ImageCaption.css';

import React from 'react';
import cn from 'classnames';

function ImageCaption ({className, image, images}) {
  return (
    <div className = {cn(className, 'caption')}>
      <figcaption>{image.caption}</figcaption>
      <div className = "counter">{images.indexOf(image) + 1} de {images.length}</div>
    </div>
  );
}

export default ImageCaption;
