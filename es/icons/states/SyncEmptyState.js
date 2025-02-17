import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue } from '../../styles/variables';

var SyncEmptyState = function SyncEmptyState(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 150 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 150 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "sync-empty-state ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 150 150",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    transform: "translate(30 41.5)"
  }, React.createElement("path", {
    className: "stroke-color",
    d: "M0 1.5C0 .66.67 0 1.5 0h28.27c.83 0 1.8.6 2.14 1.37l3.22 6.94c.35.76-.04 1.37-.86 1.37H1.5A1.5 1.5 0 0 1 0 8.17V1.5z",
    fill: "#FFF",
    stroke: color,
    strokeWidth: "2"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M1.8 3.42c0-.82.66-1.5 1.48-1.5h25.17c.82 0 1.75.63 2.06 1.4l2.88 6.9c.32.77-.1 1.4-.93 1.4H3.3a1.5 1.5 0 0 1-1.5-1.5v-6.7z",
    fill: color,
    fillOpacity: ".1"
  }), React.createElement("rect", {
    className: "stroke-color",
    fill: "#FFF",
    height: "53.2",
    rx: "1.5",
    stroke: color,
    strokeWidth: "2",
    width: "80",
    y: "5.8"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M2 45.22c0-.83.66-1.34 1.47-1.2 0 0 3.62 1.28 23.86 1.28 12.6 0 18.17 3.3 25.34 3.3 14.5 0 23.95-4.32 23.95-4.32.76-.3 1.38.12 1.38.94V55.5c0 .83-.68 1.5-1.5 1.5h-73A1.5 1.5 0 0 1 2 55.5V45.22z",
    fill: color,
    fillOpacity: ".1"
  })), React.createElement("g", {
    className: "stroke-color",
    fill: "#FFF",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M129.85 50.38c.73-.1.76 0 .05.23L92.63 62.36c-.7.22-1.76.05-2.35-.38l-6.5-4.68c-.6-.44-.5-.87.24-.96l45.83-5.96z"
  }), React.createElement("path", {
    d: "M129.9 50.6c.7-.22.77-.08.14.32l-36.3 22.9c-.63.38-1.2.1-1.3-.62l-1.12-9.28c-.1-.73.4-1.5 1.1-1.7l37.5-11.62z"
  }), React.createElement("path", {
    d: "M129.97 50.76c.66-.3.7-.24.07.16L93.7 73.7c-.63.4-.92.15-.65-.52l2.12-5.4c.27-.7 1.03-1.5 1.68-1.8l33.12-15.22z"
  }), React.createElement("path", {
    d: "M129.97 50.75c.66-.3.78-.13.25.4l-23.03 22.7c-.54.52-1.43.57-2 .12l-8.5-6.7c-.57-.46-.5-1.07.16-1.37l33.1-15.15z"
  })), React.createElement("path", {
    className: "stroke-color",
    d: "M28.92 65.1c-40.64 20.1-6.82 20.35 3.44 18.83C42.6 82.4 74.8 75.47 75.1 73.88",
    stroke: color,
    strokeDasharray: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }), React.createElement("ellipse", {
    className: "fill-color",
    cx: "70",
    cy: "137",
    fill: color,
    fillOpacity: ".1",
    rx: "32.5",
    ry: "3"
  }), React.createElement("path", {
    className: "fill-color",
    d: "M120.44 43.2v-.4c0-.16.14-.3.3-.3.18 0 .32.13.32.3v.4c.1.06.18.14.23.24h.4c.16 0 .3.14.3.3 0 .18-.13.32-.3.32h-.4a.59.59 0 0 1-.24.23v.4a.3.3 0 0 1-.3.3c-.18 0-.32-.14-.32-.3v-.4a.59.59 0 0 1-.23-.24h-.4a.3.3 0 0 1-.3-.3c0-.18.13-.32.3-.32h.4c.06-.1.14-.18.24-.23zm-107 30.5v-.4c0-.16.14-.3.3-.3.18 0 .32.13.32.3v.4c.1.06.18.14.23.24h.4c.16 0 .3.14.3.3 0 .18-.13.32-.3.32h-.4a.59.59 0 0 1-.24.23v.4a.3.3 0 0 1-.3.3c-.18 0-.32-.14-.32-.3v-.4a.59.59 0 0 1-.23-.24h-.4a.3.3 0 0 1-.3-.3c0-.18.13-.32.3-.32h.4c.06-.1.14-.18.24-.23zm6.5-35v-.4c0-.16.14-.3.3-.3.18 0 .32.13.32.3v.4c.1.06.18.14.23.24h.4c.16 0 .3.14.3.3 0 .18-.13.32-.3.32h-.4a.59.59 0 0 1-.24.23v.4a.3.3 0 0 1-.3.3c-.18 0-.32-.14-.32-.3v-.4a.59.59 0 0 1-.23-.24h-.4a.3.3 0 0 1-.3-.3c0-.18.13-.32.3-.32h.4c.06-.1.14-.18.24-.23zM129 50.63V50c0-.28.23-.5.5-.5.28 0 .5.22.5.5v.63c.15.1.28.22.37.37h.64c.28 0 .5.23.5.5a.5.5 0 0 1-.5.5h-.63c-.1.15-.22.28-.37.37V53a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-.63c-.15-.1-.28-.22-.37-.37H128a.5.5 0 0 1-.5-.5c0-.28.22-.5.5-.5h.63c.1-.15.22-.28.37-.37zm-98.5-25V25c0-.28.23-.5.5-.5.28 0 .5.22.5.5v.63c.15.1.28.22.37.37h.64c.28 0 .5.23.5.5a.5.5 0 0 1-.5.5h-.63c-.1.15-.22.28-.37.37V28a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-.63c-.15-.1-.28-.22-.37-.37h-.64a.5.5 0 0 1-.5-.5c0-.28.22-.5.5-.5h.63c.1-.15.22-.28.37-.37zm65-5.5v-.64c0-.28.23-.5.5-.5.28 0 .5.22.5.5v.63c.15.1.28.22.37.37h.64c.28 0 .5.23.5.5a.5.5 0 0 1-.5.5h-.63c-.1.15-.22.28-.37.37v.64a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-.63c-.15-.1-.28-.22-.37-.37h-.64a.5.5 0 0 1-.5-.5c0-.28.22-.5.5-.5h.63c.1-.15.22-.28.37-.37zm42 59.5V79c0-.28.23-.5.5-.5.28 0 .5.22.5.5v.63c.15.1.28.22.37.37h.64c.28 0 .5.23.5.5a.5.5 0 0 1-.5.5h-.63c-.1.15-.22.28-.37.37V82a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-.63c-.15-.1-.28-.22-.37-.37h-.64a.5.5 0 0 1-.5-.5c0-.28.22-.5.5-.5h.63c.1-.15.22-.28.37-.37zm-136 5V84c0-.28.23-.5.5-.5.28 0 .5.22.5.5v.63c.15.1.28.22.37.37h.64c.28 0 .5.23.5.5a.5.5 0 0 1-.5.5h-.63c-.1.15-.22.28-.37.37V87a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-.63c-.15-.1-.28-.22-.37-.37H.5a.5.5 0 0 1-.5-.5c0-.28.22-.5.5-.5h.63c.1-.15.22-.28.37-.37zM64 1.13V.5c0-.28.23-.5.5-.5.28 0 .5.22.5.5v.63c.15.1.28.22.37.37H66c.28 0 .5.23.5.5a.5.5 0 0 1-.5.5h-.63c-.1.15-.22.28-.37.37v.64a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-.63c-.15-.1-.28-.22-.37-.37H63a.5.5 0 0 1-.5-.5c0-.28.22-.5.5-.5h.63c.1-.15.22-.28.37-.37z",
    fill: color
  })));
};

export default SyncEmptyState;
//# sourceMappingURL=SyncEmptyState.js.map