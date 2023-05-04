function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import './ActivityItem.scss';

function ActivityItem(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      isFocused = _ref.isFocused,
      _ref$isHoverable = _ref.isHoverable,
      isHoverable = _ref$isHoverable === void 0 ? false : _ref$isHoverable,
      _ref$hasNewThreadedRe = _ref.hasNewThreadedReplies,
      hasNewThreadedReplies = _ref$hasNewThreadedRe === void 0 ? false : _ref$hasNewThreadedRe,
      rest = _objectWithoutProperties(_ref, ["children", "className", "isFocused", "isHoverable", "hasNewThreadedReplies"]);

  return React.createElement("li", _extends({
    className: classNames('bcs-ActivityItem', className, {
      'bcs-is-focused': isFocused,
      'bcs-is-hoverable': isHoverable && hasNewThreadedReplies,
      hasNewThreadedReplies: hasNewThreadedReplies
    }),
    ref: ref
  }, rest), children);
}

export default React.forwardRef(ActivityItem);
//# sourceMappingURL=ActivityItem.js.map