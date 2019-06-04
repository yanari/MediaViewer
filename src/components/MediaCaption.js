import './MediaCaption.css';

import React from 'react';
import cn from 'classnames';

function MediaCaption ({className, currentMedia, mediaList}) {
  const currentImageIndex = mediaList.indexOf(currentMedia) + 1;
  // TODO mudar o counter de acordo com o idioma
  return (
    <div className = {cn(className, 'caption')}>
      <figcaption>{currentMedia.caption}</figcaption>
      <div className = "counter">
        {currentImageIndex} de {mediaList.length}
      </div>
    </div>
  );
}

export default MediaCaption;
