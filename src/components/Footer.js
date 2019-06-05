import './Footer.css';

import React from 'react';

function Footer ({currentMedia, mediaList}) {
  return (
    <div className = "footer">
      <figcaption className = "footer__caption">
        {currentMedia.caption}
      </figcaption>
      <div className = "footer__counter">
        {mediaList.indexOf(currentMedia) + 1} de {mediaList.length}
      </div>
    </div>
  );
}

export default Footer;
