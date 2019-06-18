import React, {Fragment, useState} from 'react';
import MediaViewer from './MediaViewer/index';

import './Example.css';

function Example () {
  const [show, setShow] = useState(false);
  const mediaList = [
    {caption: ' das das das das das das das das das das ds fas', src: 'https://images.unsplash.com/photo-1559894204-ac18b01b7b50', type: 'image'},
    {caption: 'aslkjd lskja lksjd jal', src: 'https://images.unsplash.com/photo-1558208846-f197910b7707', type: 'image'},
    {caption: 'alshdlasj dasd as das das lkdahs', src: 'https://fotografiamais.com.br/wp-content/uploads/2018/08/foto-panoramica-180.jpg', type: 'image'},
    {caption: 'Linda imagem parabéns!!!!', src: 'https://images.unsplash.com/photo-1558197385-575ecbf37bef', type: 'image'},
    {caption: 'alskhdl kash', src: 'http://i.mlcdn.com.br/portaldalu/fotosconteudo/7938.jpg', type: 'image'},
    {caption: 'legenda mkj sakdj askjd askj dkjas dkas dkjas dkjsd jks akj dkj ad sakld kalsj dkas dkjas dkjasdkjsa dla dla skdj aksljd aslkjd laksjd alskj ', src: '//www.youtube.com/watch?v=BvDisMpMzxU', type: 'video'},
    {caption: 'Outra maravilhosa imagem', src: 'https://images.unsplash.com/photo-1558239184-be7815bc8965', type: 'image'},
    {src: 'https://images.unsplash.com/photo-1559638790-bfaef0fbbe2e', type: 'image'},
    {src: 'https://images.unsplash.com/photo-1559826182-8f80ffd900ff', type: 'image'},
    {caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisl turpis. Aliquam erat volutpat. Donec varius pe nulla sit amet tellus. Donec imperdiet consequat leo, quis luctus nunc laoreet at. Donec purus velit, tempus vel erat sed, euismod laoreet tellus. In lectus ligula, lobortis ut condimentum et, ullamcorper eu lacus.', src: 'https://images.unsplash.com/photo-1559831695-c0d78f7c50af', type: 'image'},
    {src: 'https://images.unsplash.com/photo-1559793706-41a63b644d26', type: 'image'},
    {src: 'https://images.unsplash.com/photo-1559813023-ad0b2d30b1c6', type: 'image'},
    {src: 'https://images.unsplash.com/photo-1555423020-bb90a0ed52ed', type: 'image'},
  ];
  return (
    <Fragment>
      {mediaList.map((data, index) => {
        return (
          <a
            className = "my-media-viewer__thumbnail-example"
            href = {'#' + index}
            key = {data.src}
            onClick = {() => setShow(!show)}
          >
            <img
              alt = {data.caption}
              className = "my-media-viewer__thumbnail-example__img"
              src = {data.src}
            />
          </a>
        );
      })}
      <MediaViewer
        isOpen = {show}
        mediaList = {mediaList}
        handleClose = {() => setShow(false)}
      />
    </Fragment>
  );
}

export default Example;
