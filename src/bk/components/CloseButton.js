import './CloseButton.css';

import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from './SvgIcon';

function CloseButton ({onClick}) {
  return (
    <button className = "close" onClick = {onClick}>
      <SvgIcon name = "feather-x"/>
    </button>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
};

export default CloseButton;