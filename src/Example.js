import React, {Fragment, useState} from 'react';
import Lightbox from './Lightbox/index';

import './Example.css';

function Example () {
  const [show, setShow] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesList = [
    {caption: 'sa;daslkdha;klsdh salkdhalsd sahdfdsf ds  sa das das das das das das das das das das ds fas', src: 'https://images.unsplash.com/photo-1556909172-8c2f041fca1e'},
    {caption: 'aslkjd lskja lksjd jal', src: 'https://images.unsplash.com/photo-1558208846-f197910b7707'},
    {caption: 'Linda imagem parabéns!!!!', src: 'https://images.unsplash.com/photo-1558197385-575ecbf37bef'},
    {caption: 'Outra maravilhosa imagem', src: 'https://images.unsplash.com/photo-1558239184-be7815bc8965'},
  ];

  return (
    <Fragment>
      {imagesList.map((data, index) => {
        const handleOpenImage = () => {
          setCurrentImageIndex(index);
          setShow(!show);
        };
        return (
          <button
            className = "thumbnail"
            key = {data.src}
            onClick = {() => handleOpenImage()}
          >
            <img alt = {data.caption} src = {data.src}/>
          </button>
        );
      })}
      <Lightbox
        currentImageIndex = {currentImageIndex}
        imagesList = {imagesList}
        onClickNext = {() => setCurrentImageIndex(currentImageIndex + 1)}
        onClickPrev = {() => setCurrentImageIndex(currentImageIndex - 1)}
        onClose = {() => setShow(false)}
        isOpen = {show}
      />
    </Fragment>
  );
}

export default Example;
