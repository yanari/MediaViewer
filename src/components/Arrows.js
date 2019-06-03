import './Arrows.css';

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import SvgIcon from './SvgIcon';

function Arrows (props) {
  const {
    currentImage,
    images,
    onClickNext,
    onClickPrev,
  } = props;
  const hasLeftArrow = images[0] !== currentImage;
  const hasRightArrow = images[images.length - 1] !== currentImage;
  return (
    <Fragment>
      {hasLeftArrow ? (
        <button className = "arrow-button left" onClick = {onClickPrev}>
          <SvgIcon name = {'feather-chevron-left'}/>
        </button>
      ) : null}
      {hasRightArrow ? (
        <button className = "arrow-button right" onClick = {onClickNext}>
          <SvgIcon name = {'feather-chevron-right'}/>
        </button>
      ) : null}
    </Fragment>
  );
}

Arrows.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
};

export default Arrows;
