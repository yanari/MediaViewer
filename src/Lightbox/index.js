import './index.css';

import React, {useEffect} from 'react';
import MountTransition from 'mount-transition';
import PropTypes from 'prop-types';
import Arrows from '../components/Arrows';
import CloseButton from '../components/CloseButton';
import Media from '../components/Media';
import Portal from '../components/Portal';

function Lightbox (props) {
  const {
    currentMediaIndex,
    isOpen,
    mediaList,
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
      <Media
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
  currentMediaIndex: PropTypes.number,
  hasThumbnails: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  mediaList: PropTypes.array.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

Lightbox.defaultProps = {
  currentMediaIndex: 0,
};

export default Portal('portal')(Lightbox);
