import styles from './Lightbox.module.css';

import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import MountTransition from './MountTransition';
import {isOutsideClick} from '../utils/helper';

function Lightbox (props) {
  const {
    currentImage,
    images,
    isOpen,
    onClickNext,
    onClickPrev,
    onClose,
  } = props;
  const refImage = useRef();
  
  const handleClose = (e) => {
    if (refImage.current && isOutsideClick(e, refImage.current)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () => document.removeEventListener('click', handleClose);
  }, [isOpen]);

  return (
    <MountTransition
      className = {styles.wrapper}
      preset = "fadeInOut"
      show = {isOpen}
    >
      <figure>
        <img
          alt = {currentImage.caption}
          ref = {refImage}
          src = {currentImage.src}
        />
      </figure>
    </MountTransition>
  );
}

Lightbox.propTypes = {
  currentImage: PropTypes.number,
  images: PropTypes.array,
  isOpen: PropTypes.bool,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  onClose: PropTypes.func,
}

Lightbox.defaultProps = {
  currentImage: 0,
};

export default Lightbox;
