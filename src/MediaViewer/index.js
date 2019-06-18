import './index.css';

import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import MountTransition from 'mount-transition';
import PropTypes from 'prop-types';
import CloseButton from '../components/CloseButton';
import MediaList from '../components/MediaList';
import Portal from '../components/Portal';
import {queryStringParse} from '../utils/helper';

class MediaViewer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
    };
    this.history = createBrowserHistory();
    // usando createBrowserHistory pq não da pra usar o withRouter fora de um Router
  }

  componentDidMount () {
    if (queryStringParse(this.history.location.search)['gallery'] === '1') {
      this.setState({isOpen: true});
    }
  }

  componentDidUpdate (prevProps) {
    const {isOpen} = this.props;
    if (isOpen !== prevProps.isOpen) {
      this.setState({isOpen});
      this.history.push({
        search: isOpen ? '?gallery=1' : null
      });
    }
  }

  handleClose = () => {
    this.props.handleClose();
    this.setState({isOpen: this.props.isOpen});
  };

  render () {
    const {mediaList} = this.props;
    return (
      <MountTransition
        className = "my-media-viewer__media-viewer"
        isMounted = {this.state.isOpen}
        preset = "fade"
      >
        <div className = "my-media-viewer__media__container">
          <MediaList history = {this.history} mediaList = {mediaList}/>
        </div>
        <div className = "my-media-viewer__close__button">
          <CloseButton handleClick = {this.handleClose}/>
        </div>
      </MountTransition>
    );
  }
}

MediaViewer.propTypes = {
  isOpen: PropTypes.bool,
  mediaList: PropTypes.arrayOf(Object),
  handleClose: PropTypes.func,
};

export default Portal('portal')(MediaViewer);
