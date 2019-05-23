import styles from './Lightbox.module.css';

import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import MountTransition from './MountTransition';
import Arrow from './Arrow';

function Lightbox (props) {
  const {
    currentImage,
    images,
    isOpen,
    onClickNext,
    onClickPrev,
    onClose,
  } = props;
  const refLeftArrow = useRef();
  const refRightArrow = useRef();
  const hasLeftArrow = images[0] !== currentImage;
  const hasRightArrow = images[images.length - 1] !== currentImage;

  const handleClose = (e) => {
    if (e.target.contains(refLeftArrow.current) || e.target.contains(refRightArrow.current)) {
      onClose();
    }
  }
  
  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [isOpen])

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
            src = {currentImage.src}
          />
        </figure>
      </div>
      {hasLeftArrow ? (
        <Arrow
          direction = "left"
          onClick = {onClickPrev}
          refArrow = {refLeftArrow}
        />
      ) : null}
      {hasRightArrow ? (
        <Arrow
          direction = "right"
          onClick = {onClickNext}
          refArrow = {refRightArrow}
        />
      ) : null}
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
