import './Media.css';

import React from 'react';
import {getVimeoOrYoutubeSrc} from 'dev-analise';
import Footer from './Footer';

function Media ({currentMedia, mediaList}) {
  const vimeoOrYoutubeSrc = getVimeoOrYoutubeSrc(currentMedia.src);
  return (
    <figure className = {vimeoOrYoutubeSrc ? 'video__container' : 'image__container'}>
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
          className = "image"
          src = {currentMedia.src}
        />
      )}
      <Footer
        currentMedia = {currentMedia}
        mediaList = {mediaList}
      />
    </figure>
  );
}

export default Media;
