import './index.css';

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import MountTransition from 'mount-transition';
import Portal from '../components/Portal';
import CloseButton from "../components/CloseButton";
import Media from "../components/Media";

function Lightbox (props) {
  const {
    isOpen,
    mediaList,
    onClose,
  } = props;
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);
  return (
    <MountTransition
      className = "modal"
      isMounted = {isOpen}
      preset = "fade"
    >
      <div className = "container">
        {mediaList.map((data) => {
          return (
            <Media currentMedia = {data}/>
          );
        })}
      </div>
      <div className = "close__button">
        <CloseButton onClick = {onClose}/>
      </div>
    </MountTransition>
  );
}

Lightbox.propTypes = {
  currentMediaIndex: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  mediaList: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

Lightbox.defaultProps = {
  currentMediaIndex: 0,
};

export default Portal('portal')(Lightbox);
