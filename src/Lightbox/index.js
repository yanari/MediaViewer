import styles from './index.module.css';

import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../components/Arrow';
import CloseButton from '../components/CloseButton';
import Figure from '../components/Figure';

function Lightbox (props) {
  const {
    currentImage,
    images,
    isOpen,
    onClickNext,
    onClickPrev,
    onClose,
  } = props;
  const hasLeftArrow = images[0] !== currentImage;
  const hasRightArrow = images[images.length - 1] !== currentImage;

  return isOpen ? (
    <div className = {styles.wrapper}>
      <div className = {styles.content}>
        <CloseButton onClick = {onClose}/>
        <Figure image = {currentImage}/>
      </div>
      {hasLeftArrow ? (
        <Arrow
          direction = "left"
          onClick = {onClickPrev}
        />
      ) : null}
      {hasRightArrow ? (
        <Arrow
          direction = "right"
          onClick = {onClickNext}
        />
      ) : null}
    </div>
  ) : null;
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
