import './MediaItem.css';

import React, {Component} from 'react';
import {getVimeoOrYoutubeSrc} from 'dev-analise';
import PropTypes from 'prop-types';
import {isInViewportPercentage} from '../utils/helper';

class MediaItem extends Component {
  constructor (props) {
    super(props);
    this.refFigure = React.createRef();
  }

  componentDidMount () {
    document.querySelector('.my-media-viewer__media-viewer').addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    document.querySelector('.my-media-viewer__media-viewer').removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const {currentMediaIndex, history} = this.props;
    if (isInViewportPercentage(this.refFigure, .4)) {
      // se for 20% a url da ultima imagem (se for pequena) nunca vai ser dela, por isso optamos por fingir que não vimos
      history.push({search: '?gallery=1#' + currentMediaIndex});
    }
  };

  render () {
    const {currentMedia, currentMediaIndex} = this.props;
    const vimeoOrYoutubeSrc = getVimeoOrYoutubeSrc(currentMedia.src);
    return (
      <figure
        className = "my-media-viewer__figure-container"
        id = {currentMediaIndex}
        ref = {this.refFigure}
      >
        {vimeoOrYoutubeSrc ? (
          <div className = "my-media-viewer__aspect__ratio__container">
            <iframe
              allowFullScreen = {true}
              className = "my-media-viewer__aspect__ratio__element"
              src = {vimeoOrYoutubeSrc}
              title = {currentMedia.src}
            />
          </div>
        ) : (
          <img
            alt = {currentMedia.caption}
            className = "my-media-viewer__img"
            src = {currentMedia.src}
          />
        )}
        <figcaption className = "my-media-viewer__figcaption-img">
          {currentMedia.caption}
        </figcaption>
      </figure>
    );
  }
}

MediaItem.propTypes = {
  currentMediaIndex: PropTypes.number,
  history: PropTypes.instanceOf(Object), // React Router
};

export default MediaItem;
