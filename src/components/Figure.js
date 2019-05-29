import styles from './Figure.module.css';

import React from 'react';

function Figure ({image}) {
  return (
    <figure className = {styles.wrapper}>
      <img
        alt = {image.caption}
        src = {image.src}
      />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

export default Figure;
