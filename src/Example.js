import React, {Fragment, useState} from 'react';
import Lightbox from './Lightbox/index';

import './Example.css';

function Example () {
  const [show, setShow] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const mediaList = [
    {caption: 'sa;daslkdha;klsdh salkdhalsd sahdfdsf ds  sa das das das das das das das das das das ds fas', src: 'https://images.unsplash.com/photo-1556909172-8c2f041fca1e'},
    {caption: 'aslkjd lskja lksjd jal', src: 'https://images.unsplash.com/photo-1558208846-f197910b7707'},
    {caption: 'Linda imagem parabéns!!!!', src: 'https://images.unsplash.com/photo-1558197385-575ecbf37bef'},
    {caption: 'Outra maravilhosa imagem', src: 'https://images.unsplash.com/photo-1558239184-be7815bc8965'},
  ];
  return (
    <Fragment>
      {mediaList.map((data, index) => {
        const handleOpenMedia = () => {
          setCurrentMediaIndex(index);
          setShow(!show);
        };
        return (
          <button
            className = "thumbnail"
            key = {data.src}
            onClick = {() => handleOpenMedia()}
          >
            <img alt = {data.caption} src = {data.src}/>
          </button>
        );
      })}
      <Lightbox
        currentMediaIndex = {currentMediaIndex}
        mediaList = {mediaList}
        onClickNext = {() => setCurrentMediaIndex(currentMediaIndex + 1)}
        onClickPrev = {() => setCurrentMediaIndex(currentMediaIndex - 1)}
        onClose = {() => setShow(false)}
        isOpen = {show}
      />
    </Fragment>
  );
}

export default Example;
