import React from 'react';
import PropTypes from 'prop-types';
import {animated, Transition} from 'react-spring/renderprops';

function TransitionRenderProps (props) {
  const {
    children,
    className,
    handleClick,
    measurementUnit,
    openHeight,
    preset,
    show,
    tag,
  } = props;
  const presets = {
    fadeInOut: {
      atEnter: {opacity: 1},
      atFrom: {opacity: 0},
      atLeave: {opacity: 0},
    },
    toggle: {
      atEnter: {height: openHeight + measurementUnit},
      atFrom: {height: 0 + measurementUnit},
      atInitial: {height: 0 + measurementUnit},
      atLeave: {height: 0 + measurementUnit},
    },
    toggleFadeInOut: {
      atEnter: {height: openHeight + measurementUnit, opacity: 1},
      atFrom: {height: 0 + measurementUnit, opacity: 0},
      atInitial: {height: 0 + measurementUnit},
      atLeave: {height: 0 + measurementUnit, opacity: 0},
    },
  };
  return (
    <Transition
      enter = {presets[preset].atEnter}
      from = {presets[preset].atFrom}
      initial = {presets[preset].atInitial}
      items = {show}
      leave = {presets[preset].atLeave}
      native = {true}
    >
      {(isShowing) => (isShowing
        ? (style) => {
          if (tag === 'ul') {
            return <animated.ul className = {className} style = {style}>{children}</animated.ul>;
          } else if (tag === 'nav') {
            return <animated.nav className = {className} style = {style}>{children}</animated.nav>;
          } else if (tag === 'figure') {
            return <animated.figure className = {className} style = {style}>{children}</animated.figure>;
          } else {
            return <animated.div className = {className} onClick = {handleClick} style = {style}>{children}</animated.div>;
          }
        }
        : null)
      }
    </Transition>
  );
}

TransitionRenderProps.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  measurementUnit: PropTypes.string,
  openHeight: PropTypes.number,
  preset: PropTypes.oneOf(['fadeInOut', 'toggle', 'toggleFadeInOut']).isRequired,
  show: PropTypes.bool,
  tag: PropTypes.oneOf(['div', 'figure', 'nav', 'ul']),
};

TransitionRenderProps.defaultProps = {
  measurementUnit: '%',
  openHeight: 100,
  tag: 'div',
};

export default TransitionRenderProps;
