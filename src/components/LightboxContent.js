import './LightboxContent.css';

import React, {Fragment, useState} from 'react';
import ArrowButtons from '../components/ArrowButtons';
import CloseButton from '../components/CloseButton';
import Media from '../components/Media';
import PropTypes from "prop-types";

function LightboxContent ({currentIndex, mediaList, onClose}) {
  const [index, setIndex] = useState(currentIndex);
  const currentMedia = mediaList[index];
  const hasLeftArrow = mediaList[0] !== currentMedia;
  const hasRightArrow = mediaList[mediaList.length - 1] !== currentMedia;
  const handleClickPrev = () => setIndex(index - 1);
  const handleClickNext = () => setIndex(index + 1);
  return (
    <Fragment>
      <div className = "arrow__button__container left">
        {hasLeftArrow ? <ArrowButtons direction = "left" onClick = {handleClickPrev}/> : null}
      </div>
      <div className = "media__container">
        <Media
          currentMedia = {currentMedia}
          mediaList = {mediaList}
        />
      </div>
      <div className = "arrow__button__container right">
        {hasRightArrow ? <ArrowButtons direction = "right" onClick = {handleClickNext}/> : null}
      </div>
      <CloseButton onClick = {onClose}/>
    </Fragment>
  );
}

LightboxContent.propTypes = {
  currentIndex: PropTypes.number,
  mediaList: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LightboxContent;
