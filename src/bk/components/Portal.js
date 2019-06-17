import React from 'react';
import ReactDOM from 'react-dom';

export default (id) => {
  return (ComposedComponent) => {
    function ModalPortal (props) {
      return ReactDOM.createPortal(<ComposedComponent {...props}/>, document.getElementById(id));
    }
    return ModalPortal;
  };
};