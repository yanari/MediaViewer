import React, {Fragment, useState} from 'react';
import Lightbox from './Lightbox/index';

import './Example.css';

function Example () {
  const [show, setShow] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const mediaList = [
    {caption: ' das das das das das das das das das das ds fas', src: 'https://images.unsplash.com/photo-1559894204-ac18b01b7b50'},
    {caption: 'aslkjd lskja lksjd jal', src: 'https://images.unsplash.com/photo-1558208846-f197910b7707'},
    {caption: 'Linda imagem parabéns!!!!', src: 'https://images.unsplash.com/photo-1558197385-575ecbf37bef'},
    {caption: 'Outra maravilhosa imagem', src: 'https://images.unsplash.com/photo-1558239184-be7815bc8965'},
    {caption: 'legenda monstruosaaaa a a a a a a a a aa a a a a aa a a a  a a aa  aa  aa a  sakd aks daks dkasda skd askjd ask dkjsa dk asdkj sakdj askjd askj dkjas dkas dkjas dkjs adkj sakj dksa dkj sdkja sdjka sdkja sdkj asdjk askjd asjk dkjas dkjas dk sadkjsd jks akj dkj akjd kjsa djkas dkjsa djks dkj sajkd sakj dkajs dasld askd asdklas dlkas sdksa dksaj daskjd sakld kalsj dkas dkjas dkjasdkjsa dla dla skdj aksljd aslkjd laksjd alskj ', src: '//www.youtube.com/watch?v=BvDisMpMzxU'},
    {src: 'https://images.unsplash.com/photo-1559638790-bfaef0fbbe2e'},
    {src: 'https://images.unsplash.com/photo-1559826182-8f80ffd900ff'},
    {caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisl turpis. Aliquam erat volutpat. Donec varius pellentesque tellus. Praesent ac fringilla felis, quis lobortis diam. Curabitur convallis, odio id euismod tempus, urna purus porta ex, vitae pharetra tellus nulla sit amet tellus. Donec imperdiet consequat leo, quis luctus nunc laoreet at. Donec purus velit, tempus vel erat sed, euismod laoreet tellus. In lectus ligula, lobortis ut condimentum et, ullamcorper eu lacus.', src: 'https://images.unsplash.com/photo-1559831695-c0d78f7c50af'},
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
