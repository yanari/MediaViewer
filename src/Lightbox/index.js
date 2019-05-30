import styles from './index.module.css';

import React, {useEffect} from 'react';
import MountTransition from 'mount-transition';
import PropTypes from 'prop-types';
import Arrows from '../components/Arrows';
import CloseButton from '../components/CloseButton';
import Figure from '../components/Figure';
import Portal from '../components/Portal';
import ModalAnimation from '../components/ModalAnimation';

/**
 * @return {null}
 */
function Lightbox (props) {
  const {
    currentImage,
    images,
    isOpen,
    onClickNext,
    onClickPrev,
    onClose,
  } = props;
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);
  return (
    <MountTransition
      className = {styles.wrapper}
      preset = "fadeInOut"
      show = {isOpen}
    >
      <ModalAnimation isOpen = {isOpen}>
        <CloseButton onClick = {onClose}/>
        <Figure image = {currentImage}/>
      </ModalAnimation>
      <Arrows
        currentImage = {currentImage}
        images = {images}
        onClickNext = {onClickNext}
        onClickPrev = {onClickPrev}
      />
    </MountTransition>
  );
}

Lightbox.propTypes = {
  currentImage: PropTypes.instanceOf(Object).isRequired,
  images: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Portal('portal')(Lightbox);
