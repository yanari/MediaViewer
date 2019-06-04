'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./index.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mountTransition = require('mount-transition');

var _mountTransition2 = _interopRequireDefault(_mountTransition);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Arrows = require('../components/Arrows');

var _Arrows2 = _interopRequireDefault(_Arrows);

var _CloseButton = require('../components/CloseButton');

var _CloseButton2 = _interopRequireDefault(_CloseButton);

var _Image = require('../components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _ImageCaption = require('../components/ImageCaption');

var _ImageCaption2 = _interopRequireDefault(_ImageCaption);

var _Portal = require('../components/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Lightbox(props) {
  var currentImage = props.currentImage,
      images = props.images,
      isOpen = props.isOpen,
      onClickNext = props.onClickNext,
      onClickPrev = props.onClickPrev,
      onClose = props.onClose;

  (0, _react.useEffect)(function () {
    if (isOpen) document.body.style.overflow = 'hidden';else document.body.style.overflow = 'auto';
  }, [isOpen]);
  return _react2.default.createElement(
    _mountTransition2.default,
    {
      className: 'wrapper',
      preset: 'fade',
      isMounted: isOpen
    },
    _react2.default.createElement(_Image2.default, { image: currentImage }),
    _react2.default.createElement(_ImageCaption2.default, {
      className: 'image-caption',
      image: currentImage,
      images: images
    }),
    _react2.default.createElement(_CloseButton2.default, { onClick: onClose }),
    _react2.default.createElement(_Arrows2.default, {
      currentImage: currentImage,
      images: images,
      onClickNext: onClickNext,
      onClickPrev: onClickPrev
    })
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

exports.default = (0, _Portal2.default)('portal')(Lightbox);