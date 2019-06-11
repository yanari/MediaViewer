import './index.css';

import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import MountTransition from 'mount-transition';
import PropTypes from 'prop-types';
import CloseButton from '../components/CloseButton';
import Media from '../components/Media';
import Portal from '../components/Portal';
import {queryStringParse} from '../utils/helper';

class Lightbox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
  }

  componentDidMount () {
    const history = createBrowserHistory();
    const queryStringParams = queryStringParse(history.location.search);
    if (queryStringParams['gallery'] === '1') {
      this.setState({isOpen: true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      if (this.props.isOpen) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'auto';
      this.setState({isOpen: this.props.isOpen});
    }
  }

  handleClose = () => {
    this.props.onClose();
    this.setState({isOpen: false});
  };

  render () {
    const {mediaList} = this.props;
    return (
      <MountTransition
        className = "modal"
        isMounted = {this.state.isOpen}
        preset = "fade"
      >
        <div className = "container">
          {mediaList.map((data) => {
            return (
              <Media currentMedia = {data} key = {data.src}/>
            );
          })}
        </div>
        <div className = "close__button">
          <CloseButton onClick = {this.handleClose}/>
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
