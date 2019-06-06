import './index.css';

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Arrow from '../components/Arrow';
import CloseButton from '../components/CloseButton';
import Media from '../components/Media';
import Portal from '../components/Portal';

function Lightbox (props) {
  const {
    currentMediaIndex,
    isOpen,
    mediaList,
    onClickNext,
    onClickPrev,
    onClose,
  } = props;
  const currentMedia = mediaList[currentMediaIndex];
  const hasLeftArrow = mediaList[0] !== currentMedia;
  const hasRightArrow = mediaList[mediaList.length - 1] !== currentMedia;
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);
  return (
    <div className = "modal">
      <div className = "arrow__button__container left">
        {hasLeftArrow ? <Arrow direction = "left" onClick = {onClickPrev}/> : null}
      </div>
      <div className = "media__container">
        <Media
          currentMedia = {currentMedia}
          mediaList = {mediaList}
        />
      </div>
      <div className = "arrow__button__container right">
        {hasRightArrow ? <Arrow direction = "right" onClick = {onClickNext}/> : null}
      </div>
      <CloseButton onClick = {onClose}/>
    </div>
  );
}

Lightbox.propTypes = {
  currentMediaIndex: PropTypes.number,
  hasThumbnails: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  mediaList: PropTypes.array.isRequired,
  onClickNext: PropTypes.func.isRequired,
  onClickPrev: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

Lightbox.defaultProps = {
  currentMediaIndex: 0,
};

export default Portal('portal')(Lightbox);
