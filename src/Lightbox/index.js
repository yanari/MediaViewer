import './index.css';

import React, {useEffect} from 'react';
import MountTransition from 'mount-transition';
import PropTypes from 'prop-types';
import Arrows from '../components/Arrows';
import CloseButton from '../components/CloseButton';
import Media from '../components/Media';
import MediaCaption from '../components/MediaCaption';
import Portal from '../components/Portal';

function Lightbox (props) {
  const {
    currentMediaIndex,
    mediaList,
    isOpen,
    onClickNext,
    onClickPrev,
    onClose,
  } = props;
  const currentMedia = mediaList[currentMediaIndex];
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);
  return (
    <MountTransition
      className = "wrapper"
      preset = "fade"
      isMounted = {isOpen}
    >
      <Media currentMedia = {currentMedia}/>
      <MediaCaption
        className = "media-caption"
        currentMedia = {currentMedia}
        mediaList = {mediaList}
      />
      <CloseButton onClick = {onClose}/>
      <Arrows
        currentMedia = {currentMedia}
        mediaList = {mediaList}
        onClickNext = {onClickNext}
        onClickPrev = {onClickPrev}
      />
    </MountTransition>
  );
}

Lightbox.propTypes = {
  currentImageIndex: PropTypes.number,
  imagesList: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Portal('portal')(Lightbox);
