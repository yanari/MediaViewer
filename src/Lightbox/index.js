import './index.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MountTransition from 'mount-transition';
import Portal from '../components/Portal';
import CloseButton from "../components/CloseButton";
import Media from "../components/Media";

class Lightbox extends Component {
  componentDidMount () {
    const {isOpen} = this.props;
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      if (this.props.isOpen) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'auto';
    }
  }

  render () {
    const {
      isOpen,
      mediaList,
      onClose,
    } = this.props;
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
}

Lightbox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  mediaList: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Portal('portal')(Lightbox);
