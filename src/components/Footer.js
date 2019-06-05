import './Footer.css';

import React from 'react';

function Footer ({currentMedia, mediaList}) {
  return (
    <div className = "footer">
      {currentMedia.caption ? (
        <figcaption className = "footer__caption">
          {currentMedia.caption}
        </figcaption>
      ) : null}
      <div className = "footer__counter">
        {mediaList.indexOf(currentMedia) + 1} de {mediaList.length}
      </div>
    </div>
  );
}

export default Footer;
