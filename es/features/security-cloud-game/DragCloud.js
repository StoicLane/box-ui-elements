function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import throttle from 'lodash/throttle';
import Draggable from 'react-draggable';
import IconCloud from '../../icons/general/IconCloud';
import messages from './messages';
import { getGridPosition } from './utils';

var DropShadowFilter = function DropShadowFilter() {
  return React.createElement("filter", {
    id: "drop-shadow"
  }, React.createElement("feGaussianBlur", {
    in: "SourceAlpha",
    stdDeviation: "2"
  }), React.createElement("feOffset", {
    dx: "2",
    dy: "2",
    result: "offsetblur"
  }), React.createElement("feFlood", {
    floodColor: "black",
    floodOpacity: "0.3"
  }), React.createElement("feComposite", {
    in2: "offsetblur",
    operator: "in"
  }), React.createElement("feMerge", null, React.createElement("feMergeNode", null), React.createElement("feMergeNode", {
    in: "SourceGraphic"
  })));
};

var DragCloud = function DragCloud(_ref) {
  var cloudSize = _ref.cloudSize,
      disabled = _ref.disabled,
      _ref$gameBoardSize = _ref.gameBoardSize,
      height = _ref$gameBoardSize.height,
      width = _ref$gameBoardSize.width,
      gridTrackSize = _ref.gridTrackSize,
      formatMessage = _ref.intl.formatMessage,
      onDrop = _ref.onDrop,
      position = _ref.position,
      updateLiveText = _ref.updateLiveText,
      updatePosition = _ref.updatePosition;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMoving = _useState2[0],
      setIsMoving = _useState2[1];

  var dragCloudClasses = classNames('bdl-DragCloud', {
    'is-moving': isMoving
  });

  var moveLeft = function moveLeft() {
    var newX = position.x - gridTrackSize;
    updatePosition(_objectSpread({}, position, {
      x: Math.max(newX, 0)
    }), true);

    if (newX < 0) {
      updateLiveText(formatMessage(messages.reachLeftEdge));
    }
  };

  var moveRight = function moveRight() {
    var maxX = width - cloudSize;
    var newX = position.x + gridTrackSize;
    updatePosition(_objectSpread({}, position, {
      x: Math.min(newX, maxX)
    }), true);

    if (newX > maxX) {
      updateLiveText(formatMessage(messages.reachRightEdge));
    }
  };

  var moveUp = function moveUp() {
    var newY = position.y - gridTrackSize;
    updatePosition(_objectSpread({}, position, {
      y: Math.max(newY, 0)
    }), true);

    if (newY < 0) {
      updateLiveText(formatMessage(messages.reachTopEdge));
    }
  };

  var moveDown = function moveDown() {
    var maxY = height - cloudSize;
    var newY = position.y + gridTrackSize;
    updatePosition(_objectSpread({}, position, {
      y: Math.min(newY, maxY)
    }), true);

    if (newY > maxY) {
      updateLiveText(formatMessage(messages.reachBottomEdge));
    }
  };

  var handleSpacebar = function handleSpacebar() {
    var cloudStatusText = formatMessage(isMoving ? messages.cloudDropped : messages.cloudGrabbed);
    var currentPositionText = formatMessage(messages.currentPosition, getGridPosition(position, gridTrackSize));
    updateLiveText("".concat(cloudStatusText, " ").concat(currentPositionText), true);

    if (isMoving) {
      onDrop();
    }

    setIsMoving(!isMoving);
  };
  /**
   * DragCloud keyboard event handler. Supports Up/Down/Left/Right arrow keys and Spacebar
   * @param {KeyboardEvent} event - The drag event
   * @returns {void}
   */


  var onKeyDown = function onKeyDown(event) {
    if (disabled) {
      return;
    }

    if (isMoving) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (event.key === ' ') {
      handleSpacebar();
    } else if (isMoving) {
      switch (event.key) {
        case 'ArrowUp':
          moveUp();
          break;

        case 'ArrowDown':
          moveDown();
          break;

        case 'ArrowLeft':
          moveLeft();
          break;

        case 'ArrowRight':
          moveRight();
          break;

        default:
          break;
      }
    }
  };
  /**
   * Reset isMoving state when DragCloud loses focus
   * @returns {void}
   */


  var onBlur = function onBlur() {
    return setIsMoving(false);
  };
  /**
   * DragCloud drag event handler. Updates current position.
   * @param {MouseEvent} e - The drag event
   * @param {object} { x, y } - Object which contains x and y coordinate of the drag event.
   * @returns {void}
   */


  var onDrag = throttle(function (e, _ref2) {
    var x = _ref2.x,
        y = _ref2.y;
    return updatePosition({
      x: x,
      y: y
    });
  }, 100, {
    leading: true,
    trailing: true
  });
  return React.createElement(Draggable, {
    bounds: "parent",
    disabled: disabled,
    onDrag: onDrag,
    onStop: onDrop,
    position: position
  }, React.createElement("div", {
    className: dragCloudClasses,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    role: "button",
    tabIndex: 0
  }, React.createElement(IconCloud, {
    filter: {
      id: 'drop-shadow',
      definition: React.createElement(DropShadowFilter, null)
    },
    height: cloudSize,
    title: formatMessage(messages.cloudObject),
    width: cloudSize
  })));
};

DragCloud.displayName = 'DragCloud';
DragCloud.propTypes = {
  cloudSize: PropTypes.number,
  disabled: PropTypes.bool,
  gameBoardSize: PropTypes.objectOf(PropTypes.number),
  gridTrackSize: PropTypes.number,
  intl: PropTypes.any,
  position: PropTypes.objectOf(PropTypes.number).isRequired,
  onDrop: PropTypes.func,
  updateLiveText: PropTypes.func,
  updatePosition: PropTypes.func
}; // Actual export

export { DragCloud as DragCloudBase };
export default injectIntl(DragCloud);
//# sourceMappingURL=DragCloud.js.map