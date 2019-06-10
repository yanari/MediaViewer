import './Media.css';

import React from 'react';
import PropTypes from 'prop-types';
import {getVimeoOrYoutubeSrc} from 'dev-analise';

function Media ({currentMedia}) {
  const vimeoOrYoutubeSrc = getVimeoOrYoutubeSrc(currentMedia.src);
  return (
    <figure className = "container">
      {vimeoOrYoutubeSrc ? (
        <div className = 'aspect__ratio__container'>
          <iframe
            allowFullScreen = {true}
            className = "aspect__ratio__element"
            src = {vimeoOrYoutubeSrc}
            title = {currentMedia.src}
          />
        </div>
      ) : (
        <img
          alt = {currentMedia.caption}
          className = "image"
          src = {currentMedia.src}
        />
      )}
      {currentMedia.caption ? (
        <figcaption className = "footer__caption">
          {currentMedia.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

Media.propTypes = {
  currentMedia: PropTypes.instanceOf(Object),
};

export default Media;
