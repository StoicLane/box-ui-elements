import * as React from 'react';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue } from '../../styles/variables';

var FeedEmptyState = function FeedEmptyState(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 140 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 140 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: "feed-empty-state ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 140 140",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    className: "fill-color",
    fill: color,
    d: "M92 1.134V.492a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-90.5 83.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629A1.005 1.005 0 0 1 1.134 86H.49a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm136 5.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-29-78v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-74 13.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm3 111.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm20.938-13.925v-.402a.313.313 0 0 1 .624 0v.402a.628.628 0 0 1 .23.228h.401c.17 0 .307.145.307.313a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.228.228v.402a.313.313 0 0 1-.626.004v-.406a.628.628 0 0 1-.228-.228h-.402a.313.313 0 0 1-.307-.313c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .228-.228zm69.062-5.575v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zM28.937 33.709v-.402a.313.313 0 0 1 .625 0v.402a.628.628 0 0 1 .23.228h.401c.17 0 .307.145.307.313a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.229.228v.402a.313.313 0 0 1-.625.004v-.406a.628.628 0 0 1-.228-.228h-.402A.313.313 0 0 1 28 34.25c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .229-.228zm-17.5 69v-.402a.313.313 0 0 1 .626 0v.402a.628.628 0 0 1 .228.228h.402c.17 0 .307.145.307.313a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.229.228v.402a.313.313 0 0 1-.624.004v-.406a.628.628 0 0 1-.23-.228h-.401a.313.313 0 0 1-.307-.313c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .229-.228zm107 10.5v-.402a.313.313 0 0 1 .626 0v.402a.628.628 0 0 1 .228.228h.402c.17 0 .307.145.307.313a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.228.228v.402a.313.313 0 0 1-.626.004v-.406a.628.628 0 0 1-.228-.228h-.402a.313.313 0 0 1-.307-.313c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .228-.228zM20.48 98.175l-2.305-1.934a1 1 0 0 0-1.401.129.993.993 0 0 0 .116 1.403l3.078 2.583a.985.985 0 0 0 .721.224.988.988 0 0 0 .679-.351l3.86-4.601a1.003 1.003 0 0 0-.125-1.407.996.996 0 0 0-1.407.121l-3.216 3.833zM14 97c0-3.866 3.135-7 7.002-7h50.996A7.006 7.006 0 0 1 79 97c0 3.866-3.135 7-7.002 7H21.002A7.006 7.006 0 0 1 14 97zM30.48 77.175l-2.305-1.934a1 1 0 0 0-1.401.129.993.993 0 0 0 .116 1.403l3.078 2.583a.985.985 0 0 0 .721.224.988.988 0 0 0 .679-.351l3.86-4.601a1.003 1.003 0 0 0-.125-1.407.996.996 0 0 0-1.407.121l-3.216 3.833zM24 76c0-3.866 3.14-7 6.99-7h78.02c3.86 0 6.99 3.142 6.99 7 0 3.866-3.14 7-6.99 7H30.99C27.13 83 24 79.858 24 76z"
  }), React.createElement("path", {
    className: "fill-color",
    fill: color,
    fillOpacity: ".07",
    d: "M59 79.095c0-.828.64-1.275 1.445-1.07 0 0 1.3.926 12.222.926 6.789 0 9.799 2.837 13.666 2.837 7.822 0 12.4-3.403 12.4-3.403.7-.436 1.267-.111 1.267.71v8.38c0 .827-.677 1.498-1.508 1.498H60.508A1.508 1.508 0 0 1 59 87.474v-8.379z"
  }), React.createElement("rect", {
    className: "stroke-color",
    width: "52.382",
    height: "33.084",
    x: "49",
    y: "65",
    fill: "#FFF",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    rx: "2"
  }), React.createElement("rect", {
    className: "fill-color",
    width: "30.327",
    height: "2.757",
    x: "60",
    y: "76",
    fill: color,
    opacity: ".825",
    rx: "1.378"
  }), React.createElement("rect", {
    className: "fill-color",
    width: "14.943",
    height: "2.757",
    x: "60",
    y: "84",
    fill: color,
    opacity: ".825",
    rx: "1.378"
  }), React.createElement("rect", {
    className: "fill-color",
    width: "6.065",
    height: "2.757",
    x: "77",
    y: "84",
    fill: color,
    opacity: ".825",
    rx: "1.378"
  }), React.createElement("rect", {
    className: "stroke-color",
    width: "52.382",
    height: "24.084",
    x: "49",
    y: "35",
    fill: "#FFF",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    rx: "2"
  }), React.createElement("rect", {
    className: "fill-color",
    width: "14.943",
    height: "2.757",
    x: "60",
    y: "48",
    fill: color,
    opacity: ".825",
    rx: "1.378"
  }), React.createElement("path", {
    className: "fill-color",
    fill: color,
    d: "M49 49.176c0-.828.64-1.317 1.458-1.14 0 0 2.024.995 15.875.995 8.61 0 12.429 2.838 17.334 2.838 9.92 0 16-3.528 16-3.528.736-.367 1.333.013 1.333.835v8.379c0 .828-.676 1.499-1.5 1.499h-49c-.828 0-1.5-.678-1.5-1.5v-8.378z",
    opacity: ".16"
  }), React.createElement("rect", {
    className: "fill-color",
    width: "30.327",
    height: "2.757",
    x: "60",
    y: "42",
    fill: color,
    opacity: ".825",
    rx: "1.378"
  })));
};

export default FeedEmptyState;
//# sourceMappingURL=FeedEmptyState.js.map