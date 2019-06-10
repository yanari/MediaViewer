import './ArrowButtons.css';

import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from './SvgIcon';

function ArrowButtons ({direction, onClick}) {
  return (
    <button className = "arrow__button" onClick = {onClick}>
      <SvgIcon name = {'feather-chevron-' + direction}/>
    </button>
  );
}

ArrowButtons.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
};

export default ArrowButtons;
