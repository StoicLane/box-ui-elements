import * as React from 'react';
import { bdlYellorange, white } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

var IconAnnotation = function IconAnnotation(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "bdl-IconAnnotation ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("circle", {
    className: "background-color",
    fill: bdlYellorange,
    cx: "16.162",
    cy: "16.162",
    r: "16"
  }), React.createElement("path", {
    d: "M8.8 14.31c0 5.272 4.8 7.19 7.2 7.19v1.798a1.088 1.088 0 0 0 1.8.838c2.16-1.917 5.4-5.512 5.4-9.826 0-2.518-2.4-6.71-7.2-6.71-4.2 0-7.2 3.595-7.2 6.71Z",
    className: "foreground-color",
    fill: white
  })));
};

export default IconAnnotation;
//# sourceMappingURL=IconAnnotation.js.map