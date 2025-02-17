import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var ExpirationBadge = function ExpirationBadge(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "expiration-badge ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("g", {
    fill: "#ED3757",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M15 8c0-3.866-3.134-7-7-7S1 4.134 1 8s3.134 7 7 7 7-3.134 7-7zM0 8c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z"
  }), React.createElement("path", {
    d: "M7.5 9.57c0 .276.224.5.5.5s.5-.224.5-.5V3c0-.276-.224-.5-.5-.5s-.5.224-.5.5v6.57z"
  }), React.createElement("path", {
    d: "M11.66 7.478c.263-.08.412-.36.33-.624-.08-.264-.36-.413-.623-.332L5.854 8.207c-.264.08-.413.36-.332.624.08.266.36.414.624.333l5.513-1.685zM4 8.5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5H3c-.276 0-.5.224-.5.5s.224.5.5.5h1zM8.5 12c0-.276-.224-.5-.5-.5s-.5.224-.5.5v.874c0 .276.224.5.5.5s.5-.224.5-.5V12z"
  })));
};

export default ExpirationBadge;
//# sourceMappingURL=ExpirationBadge.js.map