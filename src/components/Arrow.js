import './Arrow.css';

import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import SvgIcon from './SvgIcon';

function Arrow ({direction, onClick}) {
  return (
    <button className = {cn('arrow__button', direction)} onClick = {onClick}>
      <SvgIcon name = {'feather-chevron-' + direction}/>
    </button>
  );
}

Arrow.propTypes = {
  direction: PropTypes.string,
  onClick: PropTypes.func,
};

export default Arrow;
