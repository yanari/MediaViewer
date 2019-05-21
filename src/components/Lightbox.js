import styles from './Lightbox.module.css';

import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import MountTransition from './MountTransition';
import SvgIcon from './SvgIcon';
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
  }, []);

  return (
    <MountTransition
      className = {styles.wrapper}
      preset = "fadeInOut"
      show = {isOpen}
    >
      <div className = {styles.content}>
        <figure className = {styles.figure}>
          <img
            alt = {currentImage.caption}
            ref = {refImage}
            src = {currentImage.src}
          />
        </figure>
        <button className = {styles.buttonLeft} onClick = {onClickPrev}>
          <SvgIcon name = "feather-chevron-left"/>
        </button>
        <button className = {styles.buttonRight} onClick = {onClickNext}>
          <SvgIcon name = "feather-chevron-right"/>
        </button>
      </div>
    </MountTransition>
  );
}

Lightbox.propTypes = {
  currentImage: PropTypes.instanceOf(Object),
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
