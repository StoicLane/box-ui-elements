function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';
import './Bar.scss';
var DEFAULT_SIZE = 50;

function Bar(_ref) {
  var color = _ref.color,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'vertical' : _ref$direction,
      _ref$onMouseEnter = _ref.onMouseEnter,
      onMouseEnter = _ref$onMouseEnter === void 0 ? noop : _ref$onMouseEnter,
      _ref$onMouseLeave = _ref.onMouseLeave,
      onMouseLeave = _ref$onMouseLeave === void 0 ? noop : _ref$onMouseLeave,
      label = _ref.label,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? DEFAULT_SIZE : _ref$size;
  var isHorizontal = direction === 'horizontal';
  var cssProperty = direction === 'horizontal' ? 'width' : 'height';

  var _React$useState = React.useState(_defineProperty({
    backgroundColor: color
  }, cssProperty, '0%')),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      style = _React$useState2[0],
      setStyle = _React$useState2[1];

  var adjustedSize = Math.max(0, size);
  var barRef = React.useRef(null);
  var handleMouseEnter = React.useCallback(function () {
    var offsetPosition = {
      top: 0,
      left: 0
    };

    if (barRef === null || barRef === void 0 ? void 0 : barRef.current) {
      var boundingClientRect = barRef.current.getBoundingClientRect();
      offsetPosition.top = boundingClientRect.top;
      offsetPosition.left = boundingClientRect.left + boundingClientRect.width / 2;
    }

    onMouseEnter(offsetPosition);
  }, [onMouseEnter]);
  React.useEffect(function () {
    setStyle(_defineProperty({
      backgroundColor: color
    }, cssProperty, adjustedSize === 0 ? '2px' : "".concat(adjustedSize, "%")));
  }, [adjustedSize, color, cssProperty]);
  return React.createElement("div", {
    ref: barRef,
    className: classNames('ca-Bar', {
      'is-horizontal': isHorizontal
    }),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: onMouseLeave,
    role: "presentation"
  }, React.createElement("div", {
    className: "ca-Bar-value",
    style: style
  }), label && React.createElement("div", {
    className: "ca-Bar-label"
  }, label));
}

export default Bar;
//# sourceMappingURL=Bar.js.map