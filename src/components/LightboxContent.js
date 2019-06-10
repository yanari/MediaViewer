import './LightboxContent.css';

import React, {Fragment, useState} from 'react';
import ArrowButtons from '../components/ArrowButtons';
import CloseButton from '../components/CloseButton';
import Media from '../components/Media';
import PropTypes from "prop-types";

function LightboxContent (props) {
  const {
    currentIndex,
    mediaList,
    onClose,
  } = props;
  const [index, setIndex] = useState(currentIndex);
  const hasLeftArrow = mediaList[0] !== mediaList[index];
  const hasRightArrow = mediaList[mediaList.length - 1] !== mediaList[index];
  const currentMediaCount = mediaList.indexOf(mediaList[index]) + 1;
  const handleClickPrev = () => setIndex(index - 1);
  const handleClickNext = () => setIndex(index + 1);
  return (
    <Fragment>
      <div className = "arrow__button__container left">
        {hasLeftArrow ? <ArrowButtons direction = "left" onClick = {handleClickPrev}/> : null}
      </div>
      <div className = "media__container">
        <Media currentMedia = {mediaList[index]} mediaList = {mediaList}/>
      </div>
      <div className = "arrow__button__container right">
        {hasRightArrow ? <ArrowButtons direction = "right" onClick = {handleClickNext}/> : null}
      </div>
      <div className = "close__button">
        <CloseButton onClick = {onClose}/>
      </div>
      <div className = "media__counter">
        {currentMediaCount}/{mediaList.length}
      </div>
    </Fragment>
  );
}

LightboxContent.propTypes = {
  currentIndex: PropTypes.number,
  mediaList: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LightboxContent;
