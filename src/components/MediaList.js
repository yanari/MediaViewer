import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MediaItem from './MediaItem';

class MediaList extends Component {
  componentDidMount () {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount () {
    document.body.style.overflow = 'auto';
  }

  render () {
    const {history, mediaList} = this.props;
    return mediaList.map((data, index) => {
      return (
        <MediaItem
          currentMedia = {data}
          currentMediaIndex = {index}
          history = {history}
          key = {data.src}
        />
      );
    });
  }
}

MediaList.propTypes = {
  history: PropTypes.instanceOf(Object), // React Router
  mediaList: PropTypes.arrayOf(Object),
};

export default MediaList;
