import './Media.css';

import React from 'react';
import {getVimeoOrYoutubeSrc} from 'dev-analise';

function Media ({currentMedia}) {
  const vimeoOrYoutubeSrc = getVimeoOrYoutubeSrc(currentMedia.src);
  return (
    <figure className = {vimeoOrYoutubeSrc ? 'video-container' : null}>
      {vimeoOrYoutubeSrc ? (
        <div className = 'aspect__ratio__container'>
          <iframe
            allowFullScreen = {true}
            className = "aspect__ratio__element"
            frameBorder = {0}
            src = {vimeoOrYoutubeSrc}
            title = {currentMedia.src}
          />
        </div>
      ) : (
        <img
          alt = {currentMedia.caption}
          className = "img"
          src = {currentMedia.src}
        />
      )}
      {currentMedia.caption ? <figcaption>{currentMedia.caption}</figcaption> : null}
    </figure>
  );
}

export default Media;
