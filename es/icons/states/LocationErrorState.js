import * as React from 'react';
import classNames from 'classnames';
import AccessibleSVG from '../accessible-svg';
import { bdlBoxBlue, white } from '../../styles/variables';

var LocationErrorState = function LocationErrorState(_ref) {
  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? bdlBoxBlue : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 111 : _ref$height,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? 0.1 : _ref$opacity,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 130 : _ref$width;
  return React.createElement(AccessibleSVG, {
    className: classNames('bdl-LocationErrorState', className),
    height: height,
    title: title,
    viewBox: "0 0 140 111",
    width: width
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    className: "fill-color",
    fill: color,
    d: "M87 1.134V.492a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-85.5 83.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629A1.005 1.005 0 0 1 1.134 86H.49a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm126 15v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-24-81.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-80-2.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm99 18v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zM17.937 23.709v-.402a.313.313 0 0 1 .625 0v.402a.628.628 0 0 1 .23.229h.401c.17 0 .307.144.307.312a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.229.228v.402a.313.313 0 0 1-.625.004v-.406a.628.628 0 0 1-.228-.229h-.402A.313.313 0 0 1 17 24.25c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .229-.228zm-9.5 75v-.402a.313.313 0 0 1 .626 0v.402a.628.628 0 0 1 .228.228h.402c.17 0 .307.145.307.313a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.229.228v.402a.313.313 0 0 1-.624.004v-.406a.628.628 0 0 1-.23-.228h-.401a.313.313 0 0 1-.307-.313c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .229-.228zm105 8.5v-.402a.313.313 0 0 1 .626 0v.402a.628.628 0 0 1 .228.228h.402c.17 0 .307.145.307.313a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.228.228v.402a.313.313 0 0 1-.626.004v-.406a.628.628 0 0 1-.228-.228h-.402a.313.313 0 0 1-.307-.313c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .228-.228z"
  }), React.createElement("path", {
    className: "stroke-color",
    fill: white,
    stroke: color,
    strokeWidth: "2",
    d: "M66.5 109.884c17.95 0 32.5-14.613 32.5-32.64 0-18.026-14.55-32.639-32.5-32.639S34 59.218 34 77.245c0 18.026 14.55 32.64 32.5 32.64z"
  }), React.createElement("path", {
    className: "fill-color",
    fill: color,
    d: "M82.907 52.127c-1.78 1.684-1.815 5.267.045 8.489 2.062 3.572 5.673 5.348 8.064 3.967.715-.413 1.24-1.061 1.57-1.863a29.967 29.967 0 0 1 3.658 14.396c0 16.568-13.374 30-29.872 30-16.498 0-29.872-13.432-29.872-30 0-16.569 13.374-30 29.872-30 6.115 0 11.8 1.845 16.535 5.011z",
    fillOpacity: opacity
  }), React.createElement("path", {
    className: "stroke-color",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M97.414 88.821c.69 1.79.745 3.33.062 4.514-2.99 5.18-18.986 1.544-35.726-8.12-16.74-9.666-27.887-21.7-24.896-26.88.739-1.28 2.272-2.021 4.414-2.267"
  }), React.createElement("ellipse", {
    className: "stroke-color",
    cx: "50.5",
    cy: "60.674",
    fill: white,
    stroke: color,
    strokeWidth: "2",
    rx: "4",
    ry: "6.026",
    transform: "rotate(37 50.5 60.674)"
  }), React.createElement("ellipse", {
    className: "stroke-color",
    cx: "42.805",
    cy: "82.968",
    fill: white,
    stroke: color,
    strokeWidth: "2",
    rx: "3",
    ry: "5.021",
    transform: "scale(1 -1) rotate(11 904.463 0)"
  }), React.createElement("rect", {
    className: "stroke-color",
    width: "4",
    height: "30",
    x: "65.5",
    y: "20",
    fill: white,
    stroke: color,
    strokeWidth: "2",
    rx: "1.5"
  }), React.createElement("path", {
    className: "stroke-color",
    fill: white,
    stroke: color,
    strokeWidth: "2",
    d: "M77.5 26.517c0-.826.664-1.496 1.504-1.496h11.555c.83 0 1.176.587.775 1.302l-2.632 4.698 2.632 4.699c.403.719.065 1.301-.775 1.301H79.004c-.83 0-1.504-.68-1.504-1.495v-9.009z"
  }), React.createElement("path", {
    className: "stroke-color",
    fill: white,
    stroke: color,
    strokeWidth: "2",
    d: "M77.5 23.004c0-.827.668-1.498 1.505-1.498h4.99a1.5 1.5 0 0 1 1.505 1.502v9.048c0 .83-.601 1.804-1.339 2.174l-5.322 2.673c-.74.371-1.339.002-1.339-.825V23.004z"
  }), React.createElement("rect", {
    className: "stroke-color",
    width: "17",
    height: "12",
    x: "68.5",
    y: "21.506",
    fill: white,
    stroke: color,
    strokeWidth: "2",
    rx: "1.5"
  })));
};

export default LocationErrorState;
//# sourceMappingURL=LocationErrorState.js.map