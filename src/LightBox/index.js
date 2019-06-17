import './index.css';

import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import MountTransition from 'mount-transition';
import CloseButton from '../components/CloseButton';
import Media from '../components/Media';
import Portal from '../components/Portal';
import {queryStringParse} from '../utils/helper';

class LightBox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
    this.history = createBrowserHistory();
  }

  componentDidMount() {
    if (queryStringParse(this.history.location.search)['gallery'] === '1') {
      this.setState({isOpen: true});
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
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
        <div className = "media__container">
          {mediaList.map((data, index) => {
            return (
              <Media
                key = {data.src}
                currentMedia = {data}
                currentMediaIndex = {index}
                history = {this.history}
              />
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

export default Portal('portal')(LightBox);
