import './Media.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getVimeoOrYoutubeSrc} from 'dev-analise';
import {isInViewPort} from '../utils/helper';

class Media extends Component {
  constructor (props) {
    super(props);
    this.refFigure = React.createRef();
  }

  componentDidMount () {
    document.querySelector('.gallery__modal').addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    document.querySelector('.gallery__modal').removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const {currentMediaIndex, history} = this.props;
    if (isInViewPort(this.refFigure)) {
      history.push({search: '?gallery=1#' + currentMediaIndex});
    }
  };

  render () {
    const {currentMedia, currentMediaIndex} = this.props;
    const vimeoOrYoutubeSrc = getVimeoOrYoutubeSrc(currentMedia.src);
    return (
      <figure
        className = "figure"
        id = {currentMediaIndex}
        ref = {this.refFigure}
      >
        {vimeoOrYoutubeSrc ? (
          <div className = "aspect__ratio__container">
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
          <figcaption className = "caption">
            {currentMedia.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }
}

Media.propTypes = {
  currentMedia: PropTypes.instanceOf(Object).isRequired,
  currentMediaIndex: PropTypes.number.isRequired,
};

export default Media;
