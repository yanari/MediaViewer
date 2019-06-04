import './index.css';

import React, {useEffect} from 'react';
import MountTransition from 'mount-transition';
import PropTypes from 'prop-types';
import Arrows from '../components/Arrows';
import CloseButton from '../components/CloseButton';
import Figure from '../components/Figure';
import ImageCaption from '../components/ImageCaption';
import Portal from '../components/Portal';

function Lightbox (props) {
  const {
    currentImageIndex,
    imagesList,
    isOpen,
    onClickNext,
    onClickPrev,
    onClose,
  } = props;
  const currentImage = imagesList[currentImageIndex];
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
      <Figure image = {currentImage}/>
      <ImageCaption
        className = "image-caption"
        image = {currentImage}
        images = {imagesList}
      />
      <CloseButton onClick = {onClose}/>
      <Arrows
        currentImage = {currentImage}
        images = {imagesList}
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
