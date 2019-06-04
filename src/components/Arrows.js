import './Arrows.css';

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import SvgIcon from './SvgIcon';

function Arrows (props) {
  const {
    currentMedia,
    mediaList,
    onClickNext,
    onClickPrev,
  } = props;
  const hasLeftArrow = mediaList[0] !== currentMedia;
  const hasRightArrow = mediaList[mediaList.length - 1] !== currentMedia;
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
  currentMedia: PropTypes.instanceOf(Object),
  mediaList: PropTypes.arrayOf(Object),
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
};

export default Arrows;
