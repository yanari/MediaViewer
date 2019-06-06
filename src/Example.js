import React, {Fragment, useState} from 'react';
import Lightbox from './Lightbox/index';

import './Example.css';

function Example () {
  const [show, setShow] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const mediaList = [
    {caption: 'sa;daslkdha; fjhf h fjhkf kf jhg jhk gh kf  hjghf ghj fjgh fjhg fgh fhjhf jhk fjh fjhf kjh fhjfk   jhf hjf gjhf hgd ghjd klsdh salkdhalsd sahdfdsf ds  sa das das das das das das das das das das ds fas', src: 'https://images.unsplash.com/photo-1559656428-6f31733e0937'},
    {caption: 'aslkjd lskja lksjd jal', src: 'https://images.unsplash.com/photo-1558208846-f197910b7707'},
    {caption: 'Linda imagem parabéns!!!!', src: 'https://images.unsplash.com/photo-1558197385-575ecbf37bef'},
    {caption: 'Outra maravilhosa imagem', src: 'https://images.unsplash.com/photo-1558239184-be7815bc8965'},
    {caption: 'videooooo', src: '//www.youtube.com/watch?v=BvDisMpMzxU'},
    {src: 'https://images.unsplash.com/photo-1559638790-bfaef0fbbe2e'},
    {src: 'https://images.unsplash.com/photo-1559826182-8f80ffd900ff'},
    {src: 'https://images.unsplash.com/photo-1559831695-c0d78f7c50af'},
    {src: 'https://images.unsplash.com/photo-1559793706-41a63b644d26'},
    {src: 'https://images.unsplash.com/photo-1559813023-ad0b2d30b1c6'},
    {src: 'https://images.unsplash.com/photo-1555423020-bb90a0ed52ed'},
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
        isOpen = {show}
        mediaList = {mediaList}
        onClickNext = {() => setCurrentMediaIndex(currentMediaIndex + 1)}
        onClickPrev = {() => setCurrentMediaIndex(currentMediaIndex - 1)}
        onClose = {() => setShow(false)}
      />
    </Fragment>
  );
}

export default Example;
