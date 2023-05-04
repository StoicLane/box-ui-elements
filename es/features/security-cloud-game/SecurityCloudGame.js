function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import PropTypes from 'prop-types';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Tooltip from '../../components/tooltip';
import DragCloud from './DragCloud';
import DropCloud from './DropCloud';
import messages from './messages';
import { checkOverlap, getGridPosition, getRandomCloudPosition } from './utils';
import './SecurityCloudGame.scss'; // pick these numbers to balance accessibility and game complexity

var CLOUD_SIZE_RATIO = 4;
var GRID_TRACK_SIZE_RATIO = 16;

var SecurityCloudGame = function SecurityCloudGame(_ref) {
  var height = _ref.height,
      formatMessage = _ref.intl.formatMessage,
      onValidDrop = _ref.onValidDrop,
      width = _ref.width;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      dropCloudPosition = _useState2[0],
      setDropCloudPosition = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      dragCloudPosition = _useState4[0],
      setDragCloudPosition = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      layout = _useState6[0],
      setLayout = _useState6[1]; // game interaction states


  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      liveText = _useState8[0],
      setLiveText = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isOverlap = _useState10[0],
      setIsOverlap = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isValidDrop = _useState12[0],
      setIsValidDrop = _useState12[1];

  var messageElementRef = useRef(); // to handle resize events

  var gameBoardSizeRef = useRef({});
  var cloudSize = layout.cloudSize,
      gameBoardHeight = layout.gameBoardHeight,
      gridTrackSize = layout.gridTrackSize;
  useLayoutEffect(function () {
    var messageElement = messageElementRef.current;
    var newGameBoardHeight = height - messageElement.getBoundingClientRect().height; // guardrail to prevent further rendering if the game board height is not positive

    if (newGameBoardHeight <= 0) return;
    var minGameBoardLength = Math.min(newGameBoardHeight, width);
    setLayout({
      gameBoardHeight: newGameBoardHeight,
      cloudSize: minGameBoardLength / CLOUD_SIZE_RATIO,
      gridTrackSize: minGameBoardLength / GRID_TRACK_SIZE_RATIO
    });
  }, [height, width]);
  useEffect(function () {
    if (!gameBoardHeight) {
      return;
    }

    var _gameBoardSizeRef$cur = gameBoardSizeRef.current,
        prevHeight = _gameBoardSizeRef$cur.height,
        prevWidth = _gameBoardSizeRef$cur.width;
    var heightRatio = prevHeight ? gameBoardHeight / prevHeight : 1;
    var widthRatio = prevWidth ? width / prevWidth : 1; // declare and update this variable first in order to generate the starting position for drag cloud

    var newDropCloudPosition; // use prevState => {} to avoid referencing and updating the state at the same time

    setDropCloudPosition(function (prevPos) {
      newDropCloudPosition = prevPos ? {
        x: prevPos.x * widthRatio,
        y: prevPos.y * heightRatio
      } // on board resize
      : getRandomCloudPosition(cloudSize, gameBoardHeight, width); // initial render

      return newDropCloudPosition;
    });
    setDragCloudPosition(function (prevPos) {
      // on board resize
      if (prevPos) {
        return {
          x: prevPos.x * widthRatio,
          y: prevPos.y * heightRatio
        };
      }

      var nextPos = getRandomCloudPosition(cloudSize, gameBoardHeight, width); // keep generating new random position until there is no overlap

      while (checkOverlap(nextPos, newDropCloudPosition, cloudSize)) {
        nextPos = getRandomCloudPosition(cloudSize, gameBoardHeight, width);
      }

      return nextPos;
    }); // update previous height and width for ratio calculation

    gameBoardSizeRef.current = {
      height: gameBoardHeight,
      width: width
    };
  }, [cloudSize, gameBoardHeight, width]);
  /**
   * Update real-time instructional messages for screen reader users.
   * @param {string}} text - assistive text for screen readers
   * @param {boolean} includeTargetPosition - if target/drop cloud position should be included
   */

  var updateLiveText = function updateLiveText(text) {
    var includeTargetPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (includeTargetPosition) {
      var targetPositionText = formatMessage(messages.targetPosition, getGridPosition(dropCloudPosition, gridTrackSize));
      text += " ".concat(targetPositionText);
    }

    setLiveText(text);
  };
  /**
   * DragCloud drop event handler. Checks if it's valid drop and handles valid drop if it is.
   * @returns {void}
   */


  var onDrop = function onDrop() {
    if (isOverlap) {
      setIsValidDrop(true);
      updateLiveText(formatMessage(messages.success));

      if (onValidDrop) {
        // call onValidDrop if passed in through props
        onValidDrop();
      }
    }
  };
  /**
   * Pass along to the drag cloud to set position on moving.
   * @param {number} newPosition - new drag cloud position
   * @param {boolean} shouldUpdateLiveText - default to false
   * @returns {void}
   */


  var updatePosition = function updatePosition(newPosition) {
    var shouldUpdateLiveText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setDragCloudPosition(newPosition);
    var hasOverlap = checkOverlap(newPosition, dropCloudPosition, cloudSize);
    setIsOverlap(hasOverlap);

    if (shouldUpdateLiveText) {
      var newliveText = hasOverlap ? formatMessage(messages.targetInRange) : formatMessage(messages.currentPosition, getGridPosition(newPosition, gridTrackSize));
      updateLiveText(newliveText, !hasOverlap);
    }
  };
  /**
   * Get aria label for the message element.
   * @returns {string|undefined}
   */


  var getAccessibilityInstructions = function getAccessibilityInstructions() {
    return gameBoardHeight && cloudSize && gridTrackSize && formatMessage(messages.accessibilityInstructions, getGridPosition({
      x: width - cloudSize,
      y: gameBoardHeight - cloudSize
    }, gridTrackSize));
  };
  /**
   * Renders the drop cloud.
   * @returns {JSX}
   */


  var renderDropCloud = function renderDropCloud() {
    if (dropCloudPosition && !isValidDrop) {
      return React.createElement(DropCloud, {
        className: isOverlap ? 'is-over' : '',
        cloudSize: cloudSize,
        position: dropCloudPosition
      });
    }

    return null;
  };
  /**
   * Renders the drag cloud.
   * @returns {JSX}
   */


  var renderDragCloud = function renderDragCloud() {
    var gameBoardSize = gameBoardSizeRef.current;

    if (dragCloudPosition) {
      return React.createElement(DragCloud, {
        cloudSize: cloudSize,
        disabled: isValidDrop,
        gameBoardSize: gameBoardSize,
        gridTrackSize: gridTrackSize,
        onDrop: onDrop,
        position: dragCloudPosition,
        updateLiveText: updateLiveText,
        updatePosition: updatePosition
      });
    }

    return null;
  };
  /**
   * Renders the message shown to the user
   * @returns {JSX}
   */


  var renderMessage = function renderMessage() {
    if (isValidDrop) {
      return React.createElement(FormattedMessage, messages.success);
    }

    return React.createElement(FormattedMessage, messages.instructions);
  };
  /**
   * Renders the cloud game
   * @returns {JSX}
   */


  return React.createElement("div", null, React.createElement("div", {
    className: "bdl-SecurityCloudGame-liveText",
    "aria-live": "polite"
  }, liveText), React.createElement("div", {
    className: "bdl-SecurityCloudGame",
    style: {
      height: "".concat(height, "px"),
      width: "".concat(width, "px")
    }
  }, React.createElement(Tooltip, {
    ariaHidden: true,
    className: "bdl-SecurityCloudGame-tooltip",
    constrainToWindow: false,
    position: "bottom-center",
    text: renderMessage()
  }, React.createElement("div", {
    ref: messageElementRef,
    className: "bdl-SecurityCloudGame-message",
    "aria-label": getAccessibilityInstructions()
  }, renderMessage())), React.createElement("div", {
    className: "bdl-SecurityCloudGame-board"
  }, renderDropCloud(), renderDragCloud())));
};

SecurityCloudGame.displayName = 'SecurityCloudGame';
SecurityCloudGame.propTypes = {
  /** Height to set the game to */
  height: PropTypes.number.isRequired,

  /* Intl object */
  intl: PropTypes.any,

  /** Function to call when the `DragCloud` is successfully dropped onto the `DropCloud` */
  onValidDrop: PropTypes.func,

  /** Width to set the game to */
  width: PropTypes.number.isRequired
};
export { SecurityCloudGame as SecurityCloudGameBase };
export default injectIntl(SecurityCloudGame);
//# sourceMappingURL=SecurityCloudGame.js.map