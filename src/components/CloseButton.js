import './CloseButton.css';

import React from 'react';
import SvgIcon from './SvgIcon';

function CloseButton ({onClick}) {
  return (
    <button className = "close-button" onClick = {onClick}>
      <SvgIcon name = "feather-x"/>
    </button>
  );
}

export default CloseButton;