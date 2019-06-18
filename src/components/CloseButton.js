import './CloseButton.css';

import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from './SvgIcon';

function CloseButton ({handleClick}) {
  return (
    <button className = "my-media-viewer__close-btn" onClick = {handleClick}>
      <SvgIcon name = "feather-x"/>
    </button>
  );
}

CloseButton.propTypes = {
  handleClick: PropTypes.func,
};

export default CloseButton;