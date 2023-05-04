function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import classNames from 'classnames';
import CollapsableMessageToggle from './CollapsableMessageToggle';
import './ActivityMessage.scss';
export default function CollapsableMessage(_ref) {
  var children = _ref.children;

  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isCollapsed = _React$useState2[0],
      setIsCollapsed = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      shouldCollapse = _React$useState4[0],
      setShouldCollapse = _React$useState4[1];

  var messageContainer = React.useRef(null);
  React.useLayoutEffect(function () {
    if (messageContainer.current) {
      var _messageContainer$cur = messageContainer.current,
          clientHeight = _messageContainer$cur.clientHeight,
          scrollHeight = _messageContainer$cur.scrollHeight;
      setShouldCollapse(clientHeight !== scrollHeight);
    }
  }, []);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: classNames({
      'bcs-ActivityMessage-collapsed': isCollapsed
    }),
    ref: messageContainer
  }, children), shouldCollapse && React.createElement(CollapsableMessageToggle, {
    isMore: isCollapsed,
    onClick: function onClick() {
      return setIsCollapsed(function (prevState) {
        return !prevState;
      });
    }
  }));
}
//# sourceMappingURL=CollapsableMessage.js.map