'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexModule = require('./index.module.css');

var _indexModule2 = _interopRequireDefault(_indexModule);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mountTransition = require('mount-transition');

var _mountTransition2 = _interopRequireDefault(_mountTransition);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Arrow = require('../components/Arrow');

var _Arrow2 = _interopRequireDefault(_Arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Lightbox(props) {
  var currentImage = props.currentImage,
      images = props.images,
      isOpen = props.isOpen,
      onClickNext = props.onClickNext,
      onClickPrev = props.onClickPrev,
      onClose = props.onClose;

  var refLeftArrow = (0, _react.useRef)();
  var refRightArrow = (0, _react.useRef)();
  var hasLeftArrow = images[0] !== currentImage;
  var hasRightArrow = images[images.length - 1] !== currentImage;

  var handleClose = (0, _react.useCallback)(function (e) {
    if (e.target.contains(refLeftArrow.current) || e.target.contains(refRightArrow.current)) {
      onClose();
    }
  }, [onClose]);

  (0, _react.useEffect)(function () {
    document.addEventListener('click', handleClose);
    return function () {
      document.removeEventListener('click', handleClose);
    };
  }, [isOpen, handleClose]);

  return _react2.default.createElement(
    _mountTransition2.default,
    {
      className: _indexModule2.default.wrapper,
      preset: 'fadeInOut',
      show: isOpen
    },
    _react2.default.createElement(
      'div',
      { className: _indexModule2.default.content },
      _react2.default.createElement(
        'figure',
        { className: _indexModule2.default.figure },
        _react2.default.createElement('img', {
          alt: currentImage.caption,
          src: currentImage.src
        })
      )
    ),
    hasLeftArrow ? _react2.default.createElement(_Arrow2.default, {
      direction: 'left',
      onClick: onClickPrev,
      refArrow: refLeftArrow
    }) : null,
    hasRightArrow ? _react2.default.createElement(_Arrow2.default, {
      direction: 'right',
      onClick: onClickNext,
      refArrow: refRightArrow
    }) : null
  );
}

Lightbox.propTypes = {
  currentImage: _propTypes2.default.instanceOf(Object).isRequired,
  images: _propTypes2.default.array.isRequired,
  isOpen: _propTypes2.default.bool.isRequired,
  onClickNext: _propTypes2.default.func.isRequired,
  onClickPrev: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func.isRequired
};

exports.default = Lightbox;