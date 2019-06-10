import './index.css';

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import MountTransition from 'mount-transition';
import LightboxContent from '../components/LightboxContent';
import Portal from '../components/Portal';

function Lightbox (props) {
  const {
    currentMediaIndex,
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
      <LightboxContent
        currentIndex = {currentMediaIndex}
        mediaList = {mediaList}
        onClose = {onClose}
      />
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
