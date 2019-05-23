import styles from './index.module.css';

import React, {useCallback, useEffect, useRef} from 'react';
import MountTransition from 'mount-transition';
import PropTypes from 'prop-types';
import Arrow from '../components/Arrow';

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

  const handleClose = useCallback((e) => {
    if (e.target.contains(refLeftArrow.current) || e.target.contains(refRightArrow.current)) {
      onClose();
    }
  }, [onClose]);
  
  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [isOpen, handleClose])

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
  currentImage: PropTypes.instanceOf(Object).isRequired,
  images: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Lightbox;
