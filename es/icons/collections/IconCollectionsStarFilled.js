import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../accessible-svg';
import { bdlGray50 } from '../../styles/variables';

var IconCollectionsStarFilled = function IconCollectionsStarFilled(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlGray50 : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: classNames('bdl-IconCollectionsStarFilled', className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M4.112 1h9.776C14.502 1 15 1.498 15 2.112v9.776c0 .614-.498 1.112-1.112 1.112H4.112A1.112 1.112 0 0 1 3 11.888V2.112C3 1.498 3.498 1 4.112 1zm3.443 8.955c-.281.153-.604-.105-.549-.44l.273-1.653L6.121 6.69c-.234-.237-.11-.66.208-.708l1.613-.244.718-1.513a.37.37 0 0 1 .68 0l.719 1.513 1.612.244c.317.048.442.471.208.708l-1.158 1.173.273 1.653c.055.335-.268.594-.549.44L9 9.165l-1.445.79zM1.5 7c.25 0 .5.135.5.5v5.103C2 13.504 2.5 14 3.397 14H8.5c.358.01.5.25.5.5s-.142.49-.5.5H3.154A2.154 2.154 0 0 1 1 12.847V7.5c0-.364.25-.5.5-.5z",
    fill: color,
    fillRule: "evenodd"
  }));
};

export default IconCollectionsStarFilled;
//# sourceMappingURL=IconCollectionsStarFilled.js.map