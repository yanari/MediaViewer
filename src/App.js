import React, {Fragment, useState} from 'react';
import Lightbox from './components/Lightbox';

import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const imagesList = [
    {caption: 'panela', src: 'https://images.unsplash.com/photo-1556909172-8c2f041fca1e'},
    {caption: 'das', src: 'https://images.unsplash.com/photo-1558208846-f197910b7707'},
    {caption: 'pansafasfela', src: 'https://images.unsplash.com/photo-1558197385-575ecbf37bef'},
    {caption: 'fdf', src: 'https://images.unsplash.com/photo-1558239184-be7815bc8965'},
  ];

  const handleOpenImage = (index) => {
    setCurrentImage(index);
    setShow(!show);
  };

  return (
    <Fragment>
      {imagesList.map((data, index) => {
        return (
          <button className = "thumbnail" onClick = {() => handleOpenImage(index)}>
            <img alt = {data.caption} src = {data.src}/>
          </button>
        );
      })}
      <Lightbox
        currentImage = {imagesList[currentImage]}
        images = {imagesList}
        onClose = {() => setShow(false)}
        isOpen = {show}
      />
    </Fragment>
  );
}

export default App;
