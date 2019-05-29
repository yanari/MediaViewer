import styles from './CloseButton.module.css';

import React from 'react';
import SvgIcon from './SvgIcon';

function CloseButton ({onClick}) {
  return (
    <div className = {styles.wrapper}>
      <button onClick = {onClick}>
        <SvgIcon name = "feather-x"/>
      </button>
    </div>
  );
}

export default CloseButton;