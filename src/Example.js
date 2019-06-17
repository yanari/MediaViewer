import React, {Fragment, useState} from 'react';
import LightBox from './LightBox/index';

import './Example.css';

function Example () {
  const [show, setShow] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const mediaList = [
    {caption: ' das das das das das das das das das das ds fas', src: 'https://images.unsplash.com/photo-1559894204-ac18b01b7b50'},
    {caption: 'aslkjd lskja lksjd jal', src: 'https://images.unsplash.com/photo-1558208846-f197910b7707'},
    {caption: 'Linda imagem parabéns!!!!', src: 'https://images.unsplash.com/photo-1558197385-575ecbf37bef'},
    {caption: 'legenda mkj sakdj askjd askj dkjas dkas dkjas dkjs adkj sakj dksa dkj sdkja sdjka sdkja sdkj asdjk askjd asjk dkjas dkjas dk sadkjsd jks akj dkj akjd kjsa djkas dkjsa djks dkj sajkd sakj dkajs dasld askd asdklas dlkas sdksa dksaj daskjd sakld kalsj dkas dkjas dkjasdkjsa dla dla skdj aksljd aslkjd laksjd alskj ', src: '//www.youtube.com/watch?v=BvDisMpMzxU'},
    {caption: 'Outra maravilhosa imagem', src: 'https://images.unsplash.com/photo-1558239184-be7815bc8965'},
    {src: 'https://images.unsplash.com/photo-1559638790-bfaef0fbbe2e'},
    {src: 'https://images.unsplash.com/photo-1559826182-8f80ffd900ff'},
    {caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non nisl turpis. Aliquam erat volutpat. Donec varius pellentesque tellus. Praesent ac fringilla felis, quis lobortis diam. Curabitur convallis, odio id euismod tempus, urna purus porta ex, vitae pharetra tellus nulla sit amet tellus. Donec imperdiet consequat leo, quis luctus nunc laoreet at. Donec purus velit, tempus vel erat sed, euismod laoreet tellus. In lectus ligula, lobortis ut condimentum et, ullamcorper eu lacus.', src: 'https://images.unsplash.com/photo-1559831695-c0d78f7c50af'},
    {src: 'https://images.unsplash.com/photo-1559793706-41a63b644d26'},
    {src: 'https://images.unsplash.com/photo-1559813023-ad0b2d30b1c6'},
    {src: 'https://images.unsplash.com/photo-1555423020-bb90a0ed52ed'},
    {caption: 'alfhal khfalshfl hsal kfdsafhla ;sh;f askdf sa fhds kfhlk sahdl fkaskhsl flks hfkllsa flkshfsd ', src: 'data:image/png;base64,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'}
  ];
  return (
    <Fragment>
      {mediaList.map((data, index) => {
        const handleOpenMedia = () => {
          setCurrentMediaIndex(index);
          setShow(!show);
        };
        return (
          <a
            className = "thumbnail"
            href = {'#' + index}
            key = {data.src}
            onClick = {() => handleOpenMedia()}
          >
            <img alt = {data.caption} src = {data.src}/>
          </a>
        );
      })}
      <LightBox
        currentMediaIndex = {currentMediaIndex}
        isOpen = {show}
        mediaList = {mediaList}
        onClose = {() => setShow(false)}
      />
    </Fragment>
  );
}

export default Example;
