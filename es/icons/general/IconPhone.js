import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconPhone = function IconPhone(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-phone ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M2.8 6.067c1.089 2.177 2.956 3.966 5.133 5.133l1.711-1.711c.234-.233.545-.311.778-.156.856.311 1.79.467 2.8.467.467 0 .778.311.778.778v2.644c0 .467-.311.778-.778.778C5.912 14 0 8.089 0 .778 0 .31.311 0 .778 0H3.5c.467 0 .778.311.778.778 0 .933.155 1.866.466 2.8.078.233 0 .544-.155.778L2.8 6.066z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconPhone;
//# sourceMappingURL=IconPhone.js.map