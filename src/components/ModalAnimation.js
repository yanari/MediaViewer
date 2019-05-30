import React from 'react';
import {Transition} from 'react-spring/renderprops';

function ModalAnimation ({children, className, isOpen}) {
  return (
    <Transition
      enter = {{transform: 'scale(1)'}}
      items = {isOpen}
      from = {{transform: 'scale(0)'}}
      leave = {{transform: 'scale(0)'}}
    >
      {(isOpen) => {
        return isOpen ? (
          (style) => {
            return <div className = {className} style = {style}>{children}</div>
          }
        ) : null;
      }}
    </Transition>
  );
}

export default ModalAnimation;
