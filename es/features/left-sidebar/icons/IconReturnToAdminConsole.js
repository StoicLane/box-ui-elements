import * as React from 'react';
import AccessibleSVG from '../../../icons/accessible-svg';
var iconName = 'icon-return-to-admin-console';

var IconReturnToAdminConsole = function IconReturnToAdminConsole(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#c4c4c4' : _ref$color,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "".concat(iconName, " ").concat(className),
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M11.9 14H2.1C.9 14 0 13.1 0 11.9V2.1C0 .9.9 0 2.1 0h9.8c1.2 0 2.1.9 2.1 2.1v9.8c0 1.2-.9 2.1-2.1 2.1zM8.2 4.1L7.1 3 3 7l4.1 4 1.1-1.1-2.1-2.1H14V6.2H6.1l2.1-2.1z",
    fill: color
  }));
};

export default IconReturnToAdminConsole;
//# sourceMappingURL=IconReturnToAdminConsole.js.map