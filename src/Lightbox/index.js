import './index.css';

import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import MountTransition from 'mount-transition';
import PropTypes from 'prop-types';
import CloseButton from '../components/CloseButton';
import Medias from '../components/Medias';
import Portal from '../components/Portal';
import {queryStringParse} from '../utils/helper';

class Lightbox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
    this.history = createBrowserHistory();
    this.refDiv = React.createRef();
    this.queryStringParams = queryStringParse(this.history.location.search);
  }

  componentDidMount () {
    if (this.queryStringParams['gallery'] === '1') {
      this.setState({isOpen: true});
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidUpdate(prevProps) {
    const {isOpen} = this.props;
    if (isOpen !== prevProps.isOpen) {
      this.setState({isOpen});
      this.history.push({
        search: isOpen ? '?gallery=1' : null
      });
      if (isOpen) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'auto';
    }
  }

  handleClose = () => {
    this.props.onClose();
    this.setState({isOpen: this.props.isOpen});
    document.body.style.overflow = 'auto';
  };

  render () {
    const {mediaList} = this.props;
    return (
      <MountTransition
        className = "gallery__modal"
        isMounted = {this.state.isOpen}
        preset = "fade"
      >
        <Medias
          currentMediaIndex = {this.props.currentMediaIndex}
          history = {this.history}
          mediaList = {mediaList}
        />
        <div className = "close__button">
          <CloseButton onClick = {this.handleClose}/>
        </div>
      </MountTransition>
    );
  }
}

Lightbox.propTypes = {
  currentMediaIndex: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  mediaList: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Portal('portal')(Lightbox);
