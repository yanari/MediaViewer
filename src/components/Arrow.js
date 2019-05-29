import styles from './Arrow.module.css';

import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import SvgIcon from './SvgIcon';

function Arrow (props) {
  const {direction, onClick} = props;
  const classSet = cn(
    styles.wrapper,
    direction === 'left' ? styles.left : styles.right
  );
  return (
    <button className = {classSet} onClick = {onClick}>
      <SvgIcon name = {`feather-chevron-${direction}`}/>
    </button>
  );
}

Arrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
};

export default Arrow;
