import React, {Fragment, useState} from 'react';
import Lightbox from './components/Lightbox';

function App() {
  const [show, setShow] = useState(false);
  const imagesList = [
    {caption: 'panela', src: 'https://images.unsplash.com/photo-1556909172-8c2f041fca1e'},
    {caption: 'das', src: 'https://images.unsplash.com/photo-1558208846-f197910b7707'},
    {caption: 'pansafasfela', src: 'https://images.unsplash.com/photo-1558197385-575ecbf37bef'},
    {caption: 'fdf', src: 'https://images.unsplash.com/photo-1558239184-be7815bc8965'},
  ];
  return (
    <Fragment>
      <button onClick = {() => setShow(!show)}>show/hide</button>
      <Lightbox
        image = {imagesList[1]}
        handleRequestClose = {() => setShow(false)}
        open = {show}
      />
    </Fragment>
  );
}

export default App;
