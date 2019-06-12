import React from 'react';

import Media from './Media';

class Medias extends React.Component {
  constructor (props) {
    super(props);
    this.refFigure = React.createRef();
  }
  componentDidMount () {
    document.querySelector('.gallery__modal').addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    document.querySelector('.gallery__modal').removeEventListener('scroll', this.handleScroll);
  }

  render () {
    return (
      <div className = "container">
        {this.props.mediaList.map((data, index) => {
          return (
            <Media
              currentMedia = {data}
              currentMediaIndex = {index}
              history = {this.history}
              key = {data.src}
              refFigure = {this.refFigure}
            />
          );
        })}
      </div>
    );
  }
}

export default Medias;
