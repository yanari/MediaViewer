import './Footer.css';

import React from 'react';

function Footer ({currentMedia, mediaList}) {
  const currentMediaCount = mediaList.indexOf(currentMedia) + 1;
  return (
    <div className = "footer" >
      <figcaption className = "footer__caption">
        {currentMedia.caption || null}
      </figcaption>
      <div className = "footer__counter">
        {currentMediaCount} de {mediaList.length}
      </div>
    </div>
  );
}

export default Footer;
