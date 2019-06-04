import './ImageCaption.css';

import React from 'react';
import cn from 'classnames';

function ImageCaption ({className, image, images}) {
  const currentImageIndex = images.indexOf(image) + 1;
  // TODO mudar o counter de acordo com o idioma
  return (
    <div className = {cn(className, 'caption')}>
      <figcaption>{image.caption}</figcaption>
      <div className = "counter">
        {currentImageIndex} de {images.length}
      </div>
    </div>
  );
}

export default ImageCaption;
