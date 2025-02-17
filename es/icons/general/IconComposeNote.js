import * as React from 'react';
import AccessibleSVG from '../accessible-svg';

var IconComposeNote = function IconComposeNote(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#777' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "icon-compose-note ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, React.createElement("path", {
    className: "fill-color",
    d: "M0 1h10l-.7 1H0z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M0 5h7.7L7 6H0z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M0 9h5l-.6 1H0z",
    fill: color
  }), React.createElement("path", {
    className: "fill-color",
    d: "M14.9 1.8c0-.4-.2-.8-.8-1.2-.4-.3-.8-.5-1.3-.4-.9.2-1.5 1.2-1.7 1.5l-5.2 8c-.2.3-.3.7-.4 1l-.4 2c-.1.5.2.9.4 1.1.1.1.3.1.5.1s.5-.1.7-.3l1.4-1.1.7-.7 4.8-7.4.4-.6c.2-.2 1-1.1.9-2zm-6.8 9.5c-.1.2-.3.4-.5.5l-1.4 1.1c-.1.2-.2.1-.2-.1l.4-2c0-.2.2-.5.3-.7l4.8-7.4s.1.3.6.7c.5.4.8.4.8.4l-4.8 7.5zm5.4-8.2s-.5 0-.8-.3S12 2 12 2s.8-1.6 1.6-.8c1 .7-.1 1.9-.1 1.9z",
    fill: color
  }));
};

export default IconComposeNote;
//# sourceMappingURL=IconComposeNote.js.map