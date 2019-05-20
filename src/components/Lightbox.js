import styles from './Lightbox.module.css';

import React, {useState, useEffect, useRef} from 'react';
import cn from 'classnames';
import MountTransition from './MountTransition';
import {isOutsideClick} from '../utils/helper';

function Lightbox ({handleRequestClose, image, open}) {
  const refImage = useRef();
  
  const handleClick = (e) => {
    console.log(123);
    if (refImage.current && isOutsideClick(e, refImage.current)) {
      handleRequestClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [open]);

  return (
    <MountTransition
      className = {styles.wrapper}
      preset = "fadeInOut"
      show = {open}
    >
      <img
        alt = {image.caption}
        ref = {refImage}
        src = {image.src}
      />
      <caption>asldhlkash</caption>
    </MountTransition>
  );
}

export default Lightbox;
