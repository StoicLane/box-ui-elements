function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import uniqueId from 'lodash/uniqueId';
import AccessibleSVG from '../accessible-svg';
var ICON_CLASS = 'icon-iwork-trio';

var IconIWorkTrio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconIWorkTrio, _React$Component);

  function IconIWorkTrio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IconIWorkTrio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IconIWorkTrio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(IconIWorkTrio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          height = _this$props.height,
          title = _this$props.title,
          width = _this$props.width;
      return React.createElement(AccessibleSVG, {
        className: "".concat(ICON_CLASS, " ").concat(className),
        height: height,
        title: title,
        viewBox: "0 0 400 150",
        width: width
      }, React.createElement("defs", null, React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 0 152)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "g"),
        x1: "55.87",
        x2: "128.97",
        y1: "77.59",
        y2: "77.59"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fff"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#fff"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 0 152)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "h"),
        x1: "87.53",
        x2: "87.53",
        y1: "96.72",
        y2: "119.82"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fb960d"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#f98905"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 0 152)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "i"),
        x1: "99.29",
        x2: "100.38",
        y1: "36.02",
        y2: "35.52"
      }, React.createElement("stop", {
        offset: ".11",
        stopColor: "#686969"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#161717"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "j"),
        x1: "101.65",
        x2: "103.33",
        y1: "33.91",
        y2: "33.26"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#c2edff"
      }), React.createElement("stop", {
        offset: ".15",
        stopColor: "#def5ff"
      }), React.createElement("stop", {
        offset: ".55",
        stopColor: "#c2edff"
      }), React.createElement("stop", {
        offset: ".88",
        stopColor: "#607a7a"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "k"),
        x1: "101.55",
        x2: "108.43",
        y1: "38.1",
        y2: "38.1"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#c2edff"
      }), React.createElement("stop", {
        offset: ".11",
        stopColor: "#fff"
      }), React.createElement("stop", {
        offset: ".55",
        stopColor: "#c2edff"
      }), React.createElement("stop", {
        offset: ".88",
        stopColor: "#c2edff"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "a"),
        x1: "118.93",
        x2: "126.82",
        y1: "100.77",
        y2: "98.21"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#e28d0c"
      }), React.createElement("stop", {
        offset: ".18",
        stopColor: "#fedb65"
      }), React.createElement("stop", {
        offset: ".46",
        stopColor: "#f27d09"
      }), React.createElement("stop", {
        offset: ".73",
        stopColor: "#d05904"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#973e07"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "l"),
        x1: "115.01",
        x2: "124.98",
        y1: "101.65",
        y2: "101.65"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#ae988a"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#8a715e"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "m"),
        x1: "115.01",
        x2: "124.91",
        y1: "101.84",
        y2: "101.84"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#9ecdf7"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#cfe6ff"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "n"),
        x1: "115.01",
        x2: "124.91",
        y1: "101.78",
        y2: "101.78"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fff"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#e3f0ff"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "o"),
        x1: "104.11",
        x2: "111.05",
        y1: "51.08",
        y2: "49.08"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#363838"
      }), React.createElement("stop", {
        offset: ".18",
        stopColor: "#686969"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#161717"
      })), React.createElement("linearGradient", {
        id: "".concat(this.idPrefix, "p"),
        x1: "110.22",
        x2: "117.49",
        xlinkHref: "#a",
        y1: "72.24",
        y2: "69.88"
      }), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 0 152)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "q"),
        x1: "80.41",
        x2: "80.41",
        y1: "72.59",
        y2: "97.24"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#2dbffe"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#1b67f4"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "r"),
        x1: "84.98",
        x2: "84.98",
        y1: "89.03",
        y2: "76.11"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fdd500"
      }), React.createElement("stop", {
        offset: ".28",
        stopColor: "#fa8f00"
      }), React.createElement("stop", {
        offset: ".67",
        stopColor: "#f86900"
      }), React.createElement("stop", {
        offset: ".92",
        stopColor: "#f27d09"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "s"),
        x1: "81.42",
        x2: "81.42",
        y1: "85.76",
        y2: "76.79"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#dd5400"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#e54800"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "t"),
        x1: "79.42",
        x2: "79.42",
        y1: "89.08",
        y2: "84.64"
      }, React.createElement("stop", {
        offset: ".01",
        stopColor: "#fedb65"
      }), React.createElement("stop", {
        offset: ".31",
        stopColor: "#fdd500"
      }), React.createElement("stop", {
        offset: ".67",
        stopColor: "#fa8f00"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#f86900"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "u"),
        x1: "76.37",
        x2: "82.65",
        y1: "79.02",
        y2: "79.02"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fedb65"
      }), React.createElement("stop", {
        offset: ".24",
        stopColor: "#fdd200"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#fa8f00"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "v"),
        x1: "78.52",
        x2: "78.52",
        y1: "82.23",
        y2: "76.27"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fb970f"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#d05904"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "w"),
        x1: "79.01",
        x2: "79.01",
        y1: "88.87",
        y2: "75.98"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fdd500"
      }), React.createElement("stop", {
        offset: ".21",
        stopColor: "#fa8f00"
      }), React.createElement("stop", {
        offset: ".65",
        stopColor: "#f86900"
      }), React.createElement("stop", {
        offset: ".97",
        stopColor: "#f86900"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -2.48 149.27)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "x"),
        x1: "83.92",
        x2: "83.92",
        y1: "76.09",
        y2: "71.99"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#6b5411"
      }), React.createElement("stop", {
        offset: ".1",
        stopColor: "#515103"
      }), React.createElement("stop", {
        offset: ".26",
        stopColor: "#1c3c00"
      }), React.createElement("stop", {
        offset: ".59",
        stopColor: "#1b4406"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -6.64 147.65)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "y"),
        x1: "295.18",
        x2: "331.15",
        y1: "34.98",
        y2: "34.98"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#847b70"
      }), React.createElement("stop", {
        offset: ".08",
        stopColor: "#b5cfe1"
      }), React.createElement("stop", {
        offset: ".11",
        stopColor: "#b7d0e2"
      }), React.createElement("stop", {
        offset: ".23",
        stopColor: "#c5dae8"
      }), React.createElement("stop", {
        offset: ".31",
        stopColor: "#c5dae8"
      }), React.createElement("stop", {
        offset: ".47",
        stopColor: "#91a7b4"
      }), React.createElement("stop", {
        offset: ".63",
        stopColor: "#91a7b4"
      }), React.createElement("stop", {
        offset: ".69",
        stopColor: "#91a7b4"
      }), React.createElement("stop", {
        offset: ".84",
        stopColor: "#b8b19f"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#5e5851"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 0 152)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "z"),
        x1: "288.54",
        x2: "324.51",
        y1: "43.23",
        y2: "43.23"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#d0e6f5"
      }), React.createElement("stop", {
        offset: ".5",
        stopColor: "#fff"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#d0e6f5"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 0 152)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "A"),
        x1: "306.52",
        x2: "306.52",
        y1: "49.47",
        y2: "37.56"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#c5d9e6"
      }), React.createElement("stop", {
        offset: ".5",
        stopColor: "#b5cfe1"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#dfecf2"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -6.64 147.65)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "B"),
        x1: "310.34",
        x2: "315.99",
        y1: "61.08",
        y2: "61.08"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#847b70"
      }), React.createElement("stop", {
        offset: ".11",
        stopColor: "#c5dae8"
      }), React.createElement("stop", {
        offset: ".23",
        stopColor: "#c5dae8"
      }), React.createElement("stop", {
        offset: ".31",
        stopColor: "#c5dae8"
      }), React.createElement("stop", {
        offset: ".56",
        stopColor: "#91a7b4"
      }), React.createElement("stop", {
        offset: ".69",
        stopColor: "#91a7b4"
      }), React.createElement("stop", {
        offset: ".84",
        stopColor: "#6e6a65"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#5e5851"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -6.64 147.65)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "b"),
        x1: "313.09",
        x2: "313.09",
        y1: "80.12",
        y2: "83.09"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#00588a"
      }), React.createElement("stop", {
        offset: ".5",
        stopColor: "#0088b1"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#00588a"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -6.64 147.65)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "C"),
        x1: "313.08",
        x2: "313.08",
        y1: "114.89",
        y2: "81.77"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#00a0e8"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#4fc8ec"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -6.64 147.65)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "D"),
        x1: "313.09",
        x2: "313.09",
        y1: "113.4",
        y2: "81.8"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#00a9fa"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#7ce1fd"
      })), React.createElement("linearGradient", {
        id: "".concat(this.idPrefix, "E"),
        x1: "277.7",
        x2: "348.47",
        xlinkHref: "#b",
        y1: "84.36",
        y2: "84.36"
      }), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -3.7 145.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "F"),
        x1: "161.18",
        x2: "246.37",
        y1: "49.2",
        y2: "49.2"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#8c8c8c"
      }), React.createElement("stop", {
        offset: ".02",
        stopColor: "#939493"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -3.7 145.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "G"),
        x1: "203.78",
        x2: "203.78",
        y1: "33.22",
        y2: "66.41"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#e0e0e0"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#fff"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -3.7 145.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "H"),
        x1: "232.11",
        x2: "232.11",
        y1: "95.68",
        y2: "40.91"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#4dc4fc"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#0f67f7"
      })), React.createElement("linearGradient", {
        gradientTransform: "rotate(180 55.29 72.995)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "c"),
        x1: "-124.74",
        x2: "-124.74",
        y1: "41.2",
        y2: "93.93"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#0b55d3"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#409fcd"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -3.7 145.99)",
        id: "".concat(this.idPrefix, "I"),
        x1: "225.2",
        x2: "225.2",
        xlinkHref: "#c",
        y1: "41.2",
        y2: "93.93"
      }), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 0 152)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "J"),
        x1: "228.38",
        x2: "228.38",
        y1: "99.21",
        y2: "103.45"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#76cffd"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#4dc4fc"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -3.7 145.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "K"),
        x1: "198.92",
        x2: "198.92",
        y1: "85.9",
        y2: "40.91"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fba51e"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#e64e04"
      })), React.createElement("linearGradient", {
        gradientTransform: "rotate(180 55.29 72.995)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "d"),
        x1: "-91.55",
        x2: "-91.55",
        y1: "41.2",
        y2: "84.17"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#c83600"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#bc6a15"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -3.7 145.99)",
        id: "".concat(this.idPrefix, "L"),
        x1: "192.01",
        x2: "192.01",
        xlinkHref: "#d",
        y1: "41.2",
        y2: "84.17"
      }), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 0 152)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "M"),
        x1: "195.21",
        x2: "195.21",
        y1: "89.44",
        y2: "94.04"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#fcbf56"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#fcbd4a"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -3.7 145.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "N"),
        x1: "182.33",
        x2: "182.33",
        y1: "69.31",
        y2: "40.91"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#e93f54"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#d20b2f"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -3.7 145.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "e"),
        x1: "189.24",
        x2: "189.24",
        y1: "41.2",
        y2: "67.57"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#bb0e2b"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#ba2c3d"
      })), React.createElement("linearGradient", {
        id: "".concat(this.idPrefix, "O"),
        x1: "175.42",
        x2: "175.42",
        xlinkHref: "#e",
        y1: "41.2",
        y2: "67.57"
      }), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 0 152)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "P"),
        x1: "178.6",
        x2: "178.6",
        y1: "72.84",
        y2: "78.2"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#f87e7a"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#f3636b"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -3.7 145.99)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "Q"),
        x1: "215.52",
        x2: "215.52",
        y1: "108.96",
        y2: "40.91"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#54e56c"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#2ab203"
      })), React.createElement("linearGradient", {
        gradientTransform: "rotate(180 55.29 72.995)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "f"),
        x1: "-108.15",
        x2: "-108.15",
        y1: "41.26",
        y2: "108.23"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#2d9e20"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#43b656"
      })), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 -3.7 145.99)",
        id: "".concat(this.idPrefix, "R"),
        x1: "208.61",
        x2: "208.61",
        xlinkHref: "#f",
        y1: "41.26",
        y2: "108.23"
      }), React.createElement("linearGradient", {
        gradientTransform: "matrix(1 0 0 -1 0 152)",
        gradientUnits: "userSpaceOnUse",
        id: "".concat(this.idPrefix, "S"),
        x1: "211.79",
        x2: "211.79",
        y1: "113.5",
        y2: "116.97"
      }, React.createElement("stop", {
        offset: "0",
        stopColor: "#98e97d"
      }), React.createElement("stop", {
        offset: "1",
        stopColor: "#74f482"
      }))), React.createElement("path", {
        d: "M55.46 41.62l61.9-9.85 12.03 75.47-61.93 9.81-12-75.43z",
        fill: "#9b9b9b"
      }), React.createElement("path", {
        d: "M130.7 36.17a5.77 5.77 0 0 0-4.87-2.88h-.37a3.66 3.66 0 0 0-2.67.75 1.71 1.71 0 0 0-.69.79l-.28.78a1.42 1.42 0 0 0-.8.91L119.88 40l-1.14-7a1.44 1.44 0 0 0-1.57-1.14l-60.26 9.6a1.44 1.44 0 0 0-1.14 1.57l11.75 73.79a1.44 1.44 0 0 0 1.57 1.18l30.72-4.87v4.68l.2-.06a1.45 1.45 0 0 0 1.52 1.36 1.5 1.5 0 0 0 1-.51 1.05 1.05 0 0 0 .44-.49l.1-.16a1.1 1.1 0 0 0 .44-.36l3.87-5.6 22-3.49a1.43 1.43 0 0 0 1.14-1.57l-6.84-43 7.3-26a2.51 2.51 0 0 0-.28-1.76z",
        fill: "#9b9b9b",
        opacity: ".5"
      }), React.createElement("path", {
        d: "M67.68 117.92a1.17 1.17 0 0 1-1.16-1L54.61 42a1.17 1.17 0 0 1 1-1.33L117 30.9h.13a1.14 1.14 0 0 1 1.15 1l12 74.93a1.18 1.18 0 0 1-1 1.34l-61.47 9.73z",
        fill: "#b7b7b7"
      }), React.createElement("path", {
        d: "M55.88 41.92l11.88 74.71 61.21-9.69-11.91-74.76-61.18 9.74z",
        fill: "url(#".concat(this.idPrefix, "g)")
      }), React.createElement("path", {
        d: "M72.206 104.232l48.508-8.161.327 1.942-48.508 8.162zm1.295 2.973l23.512-4.038.335 1.95-23.512 4.038zm-1.914-6.33l48.526-8.051.323 1.943-48.527 8.051zm-.35-3.111l48.699-7.87.315 1.95-48.698 7.87zm-1.63-9.822l48.556-7.874.316 1.945-48.556 7.873zm.569 3.18l19.358-3.128.316 1.954-19.358 3.129zm-.936-6.192l48.698-7.87.315 1.95-48.698 7.87zm-.83-3.103l48.698-7.87.315 1.95-48.698 7.87zm29.442-8.247l18.619-3.009.316 1.955-18.619 3.009zm-.5-3.34l18.552-3.044.319 1.944-18.552 3.045zm-.476-3.052l18.618-3.009.316 1.955-18.619 3.009zm-.474-3.046l13.495-2.18.315 1.954-13.495 2.18zm-.626-3.478l14.358-2.357.319 1.944-14.358 2.357zm-.473-3.238l15.483-2.541.319 1.944-15.483 2.54zm-.572-3.245l15.868-2.604.319 1.944-15.868 2.604z",
        fill: "#e2e2e2"
      }), React.createElement("path", {
        d: "M119.25 45.87l-4.83 14.84a.57.57 0 0 0 0 .26l-1.59 5.36c0 .15 0 .39.09.46a1.26 1.26 0 0 0 .22.39.29.29 0 0 0 0 .13l-7.64 24.86-4.63 16.21v3l7-1.11 5.29-15.78 7.64-24.68c0-.12.06-.24.08-.36a1.28 1.28 0 0 0 .48-.09.35.35 0 0 0 .23-.23l.88-3.13z",
        fill: "#c4c4c4"
      }), React.createElement("path", {
        d: "M119.25 45.86l-2.12-13.32-61.2 9.74 2.12 13.36 61.2-9.78z",
        fill: "#f27d09"
      }), React.createElement("path", {
        d: "M119.19 45.5l-2.13-13.32-61.18 9.74 2.11 13.36 61.2-9.78z",
        fill: "url(#".concat(this.idPrefix, "h)")
      }), React.createElement("path", {
        d: "M64.92 43.82a2 2 0 0 1 1.44.26 1.86 1.86 0 0 1 .7 1.27 1.7 1.7 0 0 1-1.62 2.13l-1.89.29.45 2.52-.82.13-1-6.16zm.18 3a1.42 1.42 0 0 0 1-.44 1.11 1.11 0 0 0 .18-.9 1 1 0 0 0-.44-.79 1.53 1.53 0 0 0-1.07-.13l-1.61.24.36 2.34zm4.42-3.67l3.36 5.76-.91.15L71 47.3l-2.6.4-.41 2-.83.13 1.44-6.54zm1.12 3.53L69.2 44l-.6 3zm6.11 1.61a3 3 0 0 1-1 .38 3.07 3.07 0 0 1-1.28 0 3 3 0 0 1-1-.55 3.13 3.13 0 0 1-.75-1 3.55 3.55 0 0 1-.46-1.12 4.11 4.11 0 0 1 0-1.31 2.91 2.91 0 0 1 .39-1.15 2.67 2.67 0 0 1 .8-.87 2.93 2.93 0 0 1 1.24-.47 3.94 3.94 0 0 1 1 0 2.58 2.58 0 0 1 .85.24 2.3 2.3 0 0 1 .69.55 2.48 2.48 0 0 1 .46.88l-.82.13a1.65 1.65 0 0 0-.32-.58 1.51 1.51 0 0 0-.47-.36 1.86 1.86 0 0 0-.54-.24 2.43 2.43 0 0 0-.66 0 1.89 1.89 0 0 0-1.44 1.06 2.56 2.56 0 0 0-.24.9 3.22 3.22 0 0 0 0 1 3.14 3.14 0 0 0 .28.9 2.57 2.57 0 0 0 .54.72 1.86 1.86 0 0 0 .75.45 1.83 1.83 0 0 0 .93 0 2.27 2.27 0 0 0 .84-.29 1.76 1.76 0 0 0 .85-1.22 2.21 2.21 0 0 0 0-.81l-2 .3-.1-.69L78 44.7l.41 3.4-.52.09-.33-.73a2.13 2.13 0 0 1-.81.83zm5.74-7.13l.1.69-3.44.53.3 2 3.27-.49.1.7-3.21.41.23 2.1 3.47-.53.1.69-4.32.74-1-6.17zm3.77.22a1.71 1.71 0 0 0-1.09-.13 1.91 1.91 0 0 0-.51.13 1.3 1.3 0 0 0-.41.24.86.86 0 0 0-.25.38.92.92 0 0 0 0 .52.69.69 0 0 0 .24.44 1.26 1.26 0 0 0 .49.21 3.74 3.74 0 0 0 .66.09h.75l.75.08a2.58 2.58 0 0 1 .68.22 1.48 1.48 0 0 1 .53.43 1.77 1.77 0 0 1 .16 1.72 1.94 1.94 0 0 1-.47.66 2.65 2.65 0 0 1-.72.43 3.49 3.49 0 0 1-.84.23 3.42 3.42 0 0 1-1 0 2.31 2.31 0 0 1-.88-.27 1.87 1.87 0 0 1-.66-.59 2.23 2.23 0 0 1-.35-.94l.78-.11a1.46 1.46 0 0 0 .26.65 1.56 1.56 0 0 0 .48.4 1.63 1.63 0 0 0 .62.17 2.66 2.66 0 0 0 .69 0 3.7 3.7 0 0 0 .55-.14 1.66 1.66 0 0 0 .47-.26 1 1 0 0 0 .36-1 .84.84 0 0 0-.24-.49 1.37 1.37 0 0 0-.51-.26 3.63 3.63 0 0 0-.66-.1h-.75l-.77-.09a3.28 3.28 0 0 1-.68-.19 1.27 1.27 0 0 1-.79-1.07 1.67 1.67 0 0 1 0-.83 1.7 1.7 0 0 1 .42-.64 2.42 2.42 0 0 1 .66-.43 3.26 3.26 0 0 1 .81-.23 3.32 3.32 0 0 1 .89 0 1.94 1.94 0 0 1 .77.25 1.7 1.7 0 0 1 .57.53 2.22 2.22 0 0 1 .33.85l-.77.11a1.29 1.29 0 0 0-.57-.97z",
        fill: "#ee8100"
      }), React.createElement("path", {
        d: "M65.43 44.08a2 2 0 0 1 1.44.26 2.17 2.17 0 0 1 .42 2.71 1.88 1.88 0 0 1-1.34.69l-1.89.26.39 2.52-.82.13-1-6.16zm.17 3.06a1.47 1.47 0 0 0 1-.45 1.28 1.28 0 0 0-.28-1.69 1.51 1.51 0 0 0-1.06-.13l-1.62.24.36 2.23zm4.22-3.73l3.36 5.76-.91.14-1-1.75-2.57.44-.39 2-.84.13 1.44-6.54zM71 46.94l-1.44-2.73-.61 3zm6.07 1.64A2.81 2.81 0 0 1 76 49a2.77 2.77 0 0 1-1.28 0 2.87 2.87 0 0 1-1-.54 3.25 3.25 0 0 1-.72-.96 3.74 3.74 0 0 1-.33-1.23 4.79 4.79 0 0 1 0-1.31 3.41 3.41 0 0 1 .33-1.15 2.66 2.66 0 0 1 .81-.86 2.78 2.78 0 0 1 1.24-.48 3.85 3.85 0 0 1 1 0 2.26 2.26 0 0 1 .85.25 2.15 2.15 0 0 1 .69.54 2.5 2.5 0 0 1 .47.88l-.83.13a1.51 1.51 0 0 0-.31-.57 1.44 1.44 0 0 0-.48-.37 1.9 1.9 0 0 0-.59-.15 2.43 2.43 0 0 0-.66 0 1.89 1.89 0 0 0-1.44 1.06 2.57 2.57 0 0 0-.25.9 4 4 0 0 0 0 1 3.16 3.16 0 0 0 .29.9 2.36 2.36 0 0 0 .53.72 1.93 1.93 0 0 0 .75.45 1.87 1.87 0 0 0 .94 0 2.34 2.34 0 0 0 .84-.29 1.83 1.83 0 0 0 .85-1.22 2.21 2.21 0 0 0 0-.81l-2 .3-.19-.64 2.71-.42.51 3.25-.52.09-.33-.73a2 2 0 0 1-.81.84zm5.74-7.2l.1.69-3.45.53.38 2 3.21-.49.1.69-3.31.49.33 2.14 3.47-.54.1.7-4.32.66-1-6.17zm3.8.31a1.81 1.81 0 0 0-1.1-.13 2.83 2.83 0 0 0-.5.13 1.51 1.51 0 0 0-.42.25 1.08 1.08 0 0 0-.26.37 1.14 1.14 0 0 0 0 .52.62.62 0 0 0 .25.43 1.21 1.21 0 0 0 .49.22 3.74 3.74 0 0 0 .66.09h.75l.75.08a2.46 2.46 0 0 1 .68.22 1.57 1.57 0 0 1 .53.43 1.77 1.77 0 0 1 .2 1.61 2 2 0 0 1-.47.67 2.55 2.55 0 0 1-.73.43 3.29 3.29 0 0 1-.83.23 3.42 3.42 0 0 1-1 0 2.65 2.65 0 0 1-.88-.27 2.08 2.08 0 0 1-.66-.59 2.2 2.2 0 0 1-.35-.94l.78-.12a1.38 1.38 0 0 0 .26.65 1.46 1.46 0 0 0 .48.41 1.84 1.84 0 0 0 .62.17 2.66 2.66 0 0 0 .69 0 2.55 2.55 0 0 0 .54-.15 1.4 1.4 0 0 0 .48-.26.94.94 0 0 0 .36-1 .82.82 0 0 0-.24-.49 1.37 1.37 0 0 0-.51-.26 3 3 0 0 0-.66-.1h-.75l-.77-.03a2.64 2.64 0 0 1-.68-.19 1.43 1.43 0 0 1-.52-.39 1.4 1.4 0 0 1-.3-.68 1.67 1.67 0 0 1 0-.83 1.8 1.8 0 0 1 .41-.64 2.48 2.48 0 0 1 .67-.43 3.31 3.31 0 0 1 .8-.23 3.39 3.39 0 0 1 .9 0 1.85 1.85 0 0 1 .76.25 1.73 1.73 0 0 1 .58.53 2.22 2.22 0 0 1 .33.85l-.78.11a1.29 1.29 0 0 0-.56-.92z",
        fill: "#fff"
      }), React.createElement("path", {
        d: "M111 64.53a1.44 1.44 0 0 0 .36.91l7.64 2.23s.66 0 .78-.32c0 0 .3-2-3.6-2.88s-4.64-.36-5.18.06z",
        fill: "#973e07"
      }), React.createElement("circle", {
        cx: "99.84",
        cy: "116.23",
        fill: "url(#".concat(this.idPrefix, "i)"),
        r: ".61"
      }), React.createElement("path", {
        d: "M99.26 115.11v.69a.3.3 0 0 0 .22.2 1.16 1.16 0 0 1 .76.27.32.32 0 0 1 .1.2s.12.13.23-.13l.38-.59a.92.92 0 0 0-.62-.62 2 2 0 0 0-1.07-.02z",
        fill: "url(#".concat(this.idPrefix, "j)")
      }), React.createElement("path", {
        d: "M121.72 33.51s.36-.64 2.44-.55c0 0 3.41 0 4.32 2.8z",
        fill: "#b98421"
      }), React.createElement("path", {
        d: "M99.07 106.58v8.64a1.7 1.7 0 0 1 1.13.15c.65.28.57.54.57.54h.2a.18.18 0 0 0 .15-.08l4.81-6.93a7.19 7.19 0 0 0-6.86-2.32z",
        fill: "url(#".concat(this.idPrefix, "k)")
      }), React.createElement("path", {
        d: "M111 64.53l10.28-30.62s.34-.91 2.88-.82a5.2 5.2 0 0 1 3.74 1.64 2.31 2.31 0 0 1 .61 1.67l-8.76 30.91a.35.35 0 0 1-.23.23s.19-.19.17-.36a.58.58 0 0 0-.14-.33 5.31 5.31 0 0 0-1.11-1.11 10.68 10.68 0 0 0-5.39-1.7 3.67 3.67 0 0 0-1.73.3.5.5 0 0 0-.22.61s-.1-.26-.1-.42z",
        fill: "url(#".concat(this.idPrefix, "a)")
      }), React.createElement("path", {
        d: "M105.2 108.12a6.86 6.86 0 0 0-.77-.56 2.19 2.19 0 0 0-.43-.15l-3.59 8a.7.7 0 0 1 .36.36l4.59-7.54z",
        fill: "#4a5e5e"
      }), React.createElement("path", {
        d: "M122.49 36.49l-7.21 22.68c-.3 1-.86.82-.86.82l-.91-.11a2.8 2.8 0 0 1-.76-.41.39.39 0 0 1-.17-.54l7.59-23.3c.16-.46.46-.36.46-.36l1.23.1a.53.53 0 0 1 .5.39 3.9 3.9 0 0 1 .13.73z",
        fill: "url(#".concat(this.idPrefix, "l)")
      }), React.createElement("path", {
        d: "M112.75 59.47l1.28.16s.56.16.86-.82l7.55-23.05a.52.52 0 0 0-.5-.41l-1.22-.1s-.32-.16-.54.36l-7.59 23.3a.4.4 0 0 0 .14.55z",
        fill: "url(#".concat(this.idPrefix, "m)")
      }), React.createElement("path", {
        d: "M122.17 35.37l-7.54 23.05c-.3 1-.86.82-.86.82l-1.22-.14a.35.35 0 0 0 .21.34l1.28.16s.57.16.87-.82l7.55-23.05a.49.49 0 0 0-.29-.36z",
        fill: "url(#".concat(this.idPrefix, "n)")
      }), React.createElement("path", {
        d: "M106 108.84l5.4-16.14a4.25 4.25 0 0 0-2-1.53 10.26 10.26 0 0 0-2.36-.8 7.65 7.65 0 0 0-3.3 0l-4.63 16.21a7 7 0 0 1 3.63.4 6.91 6.91 0 0 1 3.26 1.86z",
        fill: "url(#".concat(this.idPrefix, "o)")
      }), React.createElement("path", {
        d: "M111.31 65.5s.15-1.1 1.77-1a11.11 11.11 0 0 1 3.51.78 6.16 6.16 0 0 1 2.34 1.44s.37.35 0 1.44l-7.64 24.68a4.9 4.9 0 0 0-2-1.52 8.28 8.28 0 0 0-2.3-.95 7.65 7.65 0 0 0-3.3 0z",
        fill: "url(#".concat(this.idPrefix, "p)")
      }), React.createElement("path", {
        d: "M100.51 115.39l-.39.81.11.1.51-.73z",
        fill: "#4a5e5e"
      }), React.createElement("path", {
        d: "M65.03 59.16l27.54-4.4 3.22 20.33-27.49 4.33-3.27-20.26z",
        fill: "url(#".concat(this.idPrefix, "q)")
      }), React.createElement("path", {
        d: "M82.46 60.91s1-1.44 2.16-1.44c0 0 .68 0 .58 1.05z",
        fill: "#f98905"
      }), React.createElement("path", {
        d: "M77.45 62.74a.74.74 0 0 1 .38-.69 8.33 8.33 0 0 0 2-1.14 1.44 1.44 0 0 1 1.28-.27c.89.16 1 0 1 0a3.29 3.29 0 0 1 1.32.16 2.49 2.49 0 0 0 1.16-.32 2.28 2.28 0 0 1 1.7-.07 4.19 4.19 0 0 0 .94.43s1.28.19 1 1a2 2 0 0 1-.51 1 13.38 13.38 0 0 0-1.78 3.9l-1.11 3.43s-.94 2.18-2.25 2.6l-.23.34-1-.06s-1.79-2.29-3.79-5.27a9.7 9.7 0 0 1-.74-3.64 1.48 1.48 0 0 1 .39-1 .71.71 0 0 0 .24-.4z",
        fill: "url(#".concat(this.idPrefix, "r)")
      }), React.createElement("path", {
        d: "M86.94 63.9s-1.08 1.81-2 3.17c0 0-.38.15-.43 1.44v2.37a5.45 5.45 0 0 0 .39-.76l1.05-3.49a18.83 18.83 0 0 1 1.05-2.7z",
        fill: "#dd5400"
      }), React.createElement("path", {
        d: "M80.17 66.61a12.8 12.8 0 0 1-3-3 .21.21 0 0 0-.26 0 1 1 0 0 0-.13.59 9.94 9.94 0 0 0 .73 3.65c1.44 2.1 2.72 3.86 3.37 4.71a28.46 28.46 0 0 0 .16-4.33 1.51 1.51 0 0 0-.87-1.62z",
        fill: "url(#".concat(this.idPrefix, "s)")
      }), React.createElement("path", {
        d: "M74.72 60.52a3.76 3.76 0 0 0 1.28-.21s.53-.38 1.34.21a6.13 6.13 0 0 1 1.86 1.65l-2 2.48z",
        fill: "url(#".concat(this.idPrefix, "t)")
      }), React.createElement("path", {
        d: "M73.89 67.57a5.29 5.29 0 0 1 2.16.22l4.12 5.07s-.59.43-1.77-.48a16.42 16.42 0 0 0-2.38-3 14.09 14.09 0 0 0-2.13-1.81z",
        fill: "url(#".concat(this.idPrefix, "u)")
      }), React.createElement("path", {
        d: "M72 67.43a1.4 1.4 0 0 0 .82-.26s.25-.39 1.08.26a26.21 26.21 0 0 1 2.58 2.24 12.89 12.89 0 0 1 1.11 1.55 4.15 4.15 0 0 0 2.21 1.67h.2s-.68.34-2-.74a18.81 18.81 0 0 1-1.54-1.68A7.62 7.62 0 0 0 73 67.76l-.61-.12a.27.27 0 0 1-.39-.21z",
        fill: "url(#".concat(this.idPrefix, "v)")
      }), React.createElement("path", {
        d: "M74.07 60.55a6.51 6.51 0 0 1-1.44 1l-.69.5a.71.71 0 0 0 0 .91A20.32 20.32 0 0 1 75 66.69l2.19 3.5a8.84 8.84 0 0 0 3.23 3.14l.85-.26-4.17-9.58a9.69 9.69 0 0 0-1.74-2.76 1.12 1.12 0 0 0-1.29-.18z",
        fill: "url(#".concat(this.idPrefix, "w)")
      }), React.createElement("path", {
        d: "M80 73.9s-.13-.83 1.52-1.08a1.42 1.42 0 0 1 1.44.62z",
        fill: "#522d2e"
      }), React.createElement("path", {
        d: "M82 74.14s-.17-.29.41-.49l.49-.1a.11.11 0 0 0 0-.16 2.72 2.72 0 0 0-1.57-.14c-1.08.19-1.36.55-1.36.55v.2h.52c.56 0 .59.4.59.4l.68 2.88.72-.11z",
        fill: "url(#".concat(this.idPrefix, "x)")
      }), React.createElement("path", {
        d: "M324.51 111c0 3.51-8.06 6.35-18 6.35s-17.93-2.84-17.93-6.35v-2.19h35.92z",
        fill: "#565653"
      }), React.createElement("path", {
        d: "M324.51 110.65c0 3.43-8.06 6.2-18 6.2s-17.93-2.77-17.93-6.2v-2.16h35.92z",
        fill: "url(#".concat(this.idPrefix, "y)")
      }), React.createElement("ellipse", {
        cx: "306.52",
        cy: "108.77",
        fill: "url(#".concat(this.idPrefix, "z)"),
        rx: "17.98",
        ry: "5.95"
      }), React.createElement("ellipse", {
        cx: "306.52",
        cy: "108.49",
        fill: "url(#".concat(this.idPrefix, "A)"),
        rx: "17.98",
        ry: "5.95"
      }), React.createElement("path", {
        d: "M309.23 107.62c0 .52-1.23 1-2.77 1s-2.76-.44-2.76-1V64.56h5.73z",
        fill: "url(#".concat(this.idPrefix, "B)")
      }), React.createElement("path", {
        d: "M344.22 64.56v.28c0 2-1.16 2.69-2.12 2.69h-70.92a2.35 2.35 0 0 1-2.49-2.2 2.29 2.29 0 0 1 0-.37v-.33z",
        fill: "url(#".concat(this.idPrefix, "b)")
      }), React.createElement("path", {
        d: "M342.64 66.15h-72.23a1.49 1.49 0 0 1-1.69-1.25 1.6 1.6 0 0 1 0-.49L275 33.7c.15-.67 1.07-1 2-1h59.55c.52 0 1.81 0 1.95 1l5.71 30.73a1.48 1.48 0 0 1-1.21 1.69 1.66 1.66 0 0 1-.36.03z",
        fill: "#00588a"
      }), React.createElement("path", {
        d: "M342.83 65.82H270.2c-.58 0-1.49-.7-1.29-1.49l6.2-30.63c.14-.61.93-.94 1.83-.94h59.55c.52 0 1.62-.09 1.86 1L344 64.47c.17.65-.65 1.35-1.17 1.35z",
        fill: "url(#".concat(this.idPrefix, "C)")
      }), React.createElement("path", {
        d: "M342.41 65.85h-72.16c-.26 0-.73 0-.7-.56l5.85-30.1c.09-.61.92-.94 1.83-.94h58.47c.52 0 1.67 0 1.86 1l5.79 30.12c0 .44-.41.48-.94.48z",
        fill: "url(#".concat(this.idPrefix, "D)")
      }), React.createElement("path", {
        d: "M328.38 37.39a.39.39 0 0 0-.39-.34H285a.43.43 0 0 0-.43.37l-3 22.33v.4h49.73v-.4z",
        fill: "#0098c1"
      }), React.createElement("path", {
        d: "M330.82 59.44h-48.87l2.96-22.02H328l2.82 22.02z",
        fill: "#fff"
      }), React.createElement("ellipse", {
        cx: "310.99",
        cy: "45.37",
        fill: "#06bff8",
        rx: "1.04",
        ry: ".61"
      }), React.createElement("ellipse", {
        cx: "311.09",
        cy: "47.59",
        fill: "#f19cf8",
        rx: "1.04",
        ry: ".61"
      }), React.createElement("ellipse", {
        cx: "311.09",
        cy: "49.86",
        fill: "#ff6d65",
        rx: "1.04",
        ry: ".61"
      }), React.createElement("ellipse", {
        cx: "311.18",
        cy: "52.28",
        fill: "#ffe65f",
        rx: "1.04",
        ry: ".7"
      }), React.createElement("ellipse", {
        cx: "311.26",
        cy: "54.7",
        fill: "#98e87c",
        rx: "1.04",
        ry: ".74"
      }), React.createElement("path", {
        d: "M313.62 44.94h7.89v.82h-7.89zm0 2.24h7.61V48h-7.61zm.14 2.27h9.05v.82h-9.05zm.07 2.42h7.53v.82h-7.53zm.09 2.42h10.38v.82h-10.38z",
        fill: "#c8cdd6"
      }), React.createElement("path", {
        d: "M297.23 56.44a11.87 11.87 0 0 0 6.26-1.63l-6-4.56-8.48 2.64c1.32 2.11 4.28 3.55 8.22 3.55z",
        fill: "#98e87c"
      }), React.createElement("path", {
        d: "M306.45 51l-8.93-.7 6 4.55a5.94 5.94 0 0 0 2.93-3.85z",
        fill: "#ffe65f"
      }), React.createElement("path", {
        d: "M304.72 46.77l-7.2 3.5 8.93.7a5.31 5.31 0 0 0 .09-.79 4.47 4.47 0 0 0-1.82-3.41z",
        fill: "#ff6d65"
      }), React.createElement("path", {
        d: "M299.3 44.67l-1.78 5.6 7.26-3.5a10.6 10.6 0 0 0-5.48-2.1z",
        fill: "#f09df8"
      }), React.createElement("path", {
        d: "M298.19 44.12c-.51 0-1-.08-1.49-.08-4.93 0-9.36 2.52-9.36 6a4.92 4.92 0 0 0 .61 2.37l8.41-2.76z",
        fill: "#00a9fa"
      }), React.createElement("path", {
        d: "M287.78 39h.54l-.09 1 .36-.27 1.35-.76h.67l-1.61.83 1.66 1.2h-.73l-1.34-1-.42.22V41h-.54zm5.79 1h-1.78v.73h2V41h-2.54l.1-2h2.41v.23h-1.87v.64h1.78zm1.95 1v-.85L294.2 39h.61l.59.55.42.42c.12-.13.27-.27.42-.42l.61-.55h.67L296 40.11V41zm2.48 0v-2h.57l1.28 1a7.3 7.3 0 0 1 .71.65 5.75 5.75 0 0 1 0-.83V39h.5v2h-.55l-1.29-1a7.85 7.85 0 0 1-.74-.67 5.75 5.75 0 0 1 0 .83V41zm7.17-1.06c0 .69-.85 1.05-1.88 1.05s-1.81-.41-1.81-1 .8-1.06 1.87-1.06 1.82.41 1.82 1.01zM302 40c0 .43.47.81 1.3.81s1.29-.38 1.29-.83-.41-.82-1.29-.82-1.3.36-1.3.84zm4.45-.82h-1.28V39h3.11v.23H307V41h-.55zm4.47.82h-1.76v.73h2V41h-2.55v-2h2.46v.23h-1.92v.62h1.76z"
      }), React.createElement("path", {
        d: "M287.1 42.29h38.62v.13H287.1z",
        fill: "#1e1e1e"
      }), React.createElement("path", {
        d: "M271.24 61.79l-.18.92s0 .11.18.11h70.4s.21 0 .21-.14l-.22-.89z",
        fill: "#8ae7fb"
      }), React.createElement("path", {
        d: "M271.3 63.66s0 .24.21.24h69.86a.31.31 0 0 0 .24-.24l.22-1h-70.77z",
        fill: "url(#".concat(this.idPrefix, "E)")
      }), React.createElement("path", {
        d: "M159.36 115a1.88 1.88 0 0 1-1.88-1.82v-1.51l1.73-31.19a2 2 0 0 1 2-1.84h77.53a2 2 0 0 1 2 1.89l1.94 31.11v1.51a1.87 1.87 0 0 1-1.88 1.85z",
        fill: "url(#".concat(this.idPrefix, "F)")
      }), React.createElement("path", {
        d: "M240.53 112.77h-80.9a1.14 1.14 0 0 1-1.13-1.13l1.69-30.93a1.14 1.14 0 0 1 1.13-1.13h77.31a1.14 1.14 0 0 1 1.13 1.13l1.9 30.93a1.14 1.14 0 0 1-1.13 1.13z",
        fill: "url(#".concat(this.idPrefix, "G)")
      }), React.createElement("path", {
        d: "M236 50.31v52.38a2.39 2.39 0 0 1-2.39 2.39h-10.36a2.39 2.39 0 0 1-2.38-2.39V50.31z",
        fill: "url(#".concat(this.idPrefix, "H)")
      }), React.createElement("path", {
        d: "M234.69 53.22h.11a1.16 1.16 0 0 0 1.2-1.16v50.63a2.39 2.39 0 0 1-1.27 2.1z",
        fill: "url(#".concat(this.idPrefix, "c)")
      }), React.createElement("path", {
        d: "M222.14 53.22H222a1.16 1.16 0 0 1-1.16-1.16v50.63a2.38 2.38 0 0 0 1.27 2.1z",
        fill: "url(#".concat(this.idPrefix, "I)")
      }), React.createElement("path", {
        d: "M234.8 52.78H222a1.16 1.16 0 0 1-1.16-1.16v.43a1.16 1.16 0 0 0 1.16 1.16h12.8a1.16 1.16 0 0 0 1.2-1.16v-.44a1.15 1.15 0 0 1-1.15 1.17z",
        fill: "#8ddfff"
      }), React.createElement("path", {
        d: "M222.35 48.61h12.07a1.51 1.51 0 0 1 1.51 1.5v1.51a1.16 1.16 0 0 1-1.16 1.16H222a1.15 1.15 0 0 1-1.19-1.13v-1.54a1.51 1.51 0 0 1 1.54-1.5z",
        fill: "url(#".concat(this.idPrefix, "J)")
      }), React.createElement("path", {
        d: "M202.77 60.09v43a2.37 2.37 0 0 1-2.39 2h-10.32a2.37 2.37 0 0 1-2.38-2v-43z",
        fill: "url(#".concat(this.idPrefix, "K)")
      }), React.createElement("path", {
        d: "M201.5 63h.11a1.16 1.16 0 0 0 1.16-1.16v40.87a2.39 2.39 0 0 1-1.27 2.1z",
        fill: "url(#".concat(this.idPrefix, "d)")
      }), React.createElement("path", {
        d: "M189 63h-.11a1.16 1.16 0 0 1-1.16-1.16v40.87a2.38 2.38 0 0 0 1.27 2.1z",
        fill: "url(#".concat(this.idPrefix, "L)")
      }), React.createElement("path", {
        d: "M201.61 62.56h-12.77a1.16 1.16 0 0 1-1.16-1.16v.42a1.16 1.16 0 0 0 1.16 1.18h12.77a1.16 1.16 0 0 0 1.16-1.16v-.44a1.16 1.16 0 0 1-1.16 1.16z",
        fill: "#fccb88"
      }), React.createElement("path", {
        d: "M189.16 58h12.07a1.51 1.51 0 0 1 1.51 1.51v1.89a1.16 1.16 0 0 1-1.16 1.16h-12.74a1.16 1.16 0 0 1-1.16-1.16v-1.93a1.51 1.51 0 0 1 1.51-1.47z",
        fill: "url(#".concat(this.idPrefix, "M)")
      }), React.createElement("path", {
        d: "M186.17 76.68v26.37a2.37 2.37 0 0 1-2.38 2h-10.32a2.36 2.36 0 0 1-2.38-2V76.68z",
        fill: "url(#".concat(this.idPrefix, "N)")
      }), React.createElement("path", {
        d: "M184.9 79.58h.1a1.16 1.16 0 0 0 1.16-1.16v24.27a2.38 2.38 0 0 1-1.27 2.1z",
        fill: "url(#".concat(this.idPrefix, "e)")
      }), React.createElement("path", {
        d: "M172.35 79.58h-.1a1.16 1.16 0 0 1-1.16-1.16v24.27a2.39 2.39 0 0 0 1.26 2.1z",
        fill: "url(#".concat(this.idPrefix, "O)")
      }), React.createElement("path", {
        d: "M185 79.16h-12.75a1.16 1.16 0 0 1-1.16-1.16v.43a1.16 1.16 0 0 0 1.16 1.16H185a1.16 1.16 0 0 0 1.16-1.16V78a1.16 1.16 0 0 1-1.16 1.16z",
        fill: "#f7a6a6"
      }), React.createElement("path", {
        d: "M172.56 73.8h12.07a1.51 1.51 0 0 1 1.51 1.51V78a1.16 1.16 0 0 1-1.14 1.16h-12.75a1.16 1.16 0 0 1-1.19-1.16v-2.69a1.52 1.52 0 0 1 1.5-1.51z",
        fill: "url(#".concat(this.idPrefix, "P)")
      }), React.createElement("path", {
        d: "M219.36 37v64.88c0 2.08-1.07 3.17-2.38 3.17h-10.32c-1.31 0-2.38-1.08-2.38-3.17V37z",
        fill: "url(#".concat(this.idPrefix, "Q)")
      }), React.createElement("path", {
        d: "M218.1 38.92h.1a1.16 1.16 0 0 0 1.16-1.16v64.87a2.39 2.39 0 0 1-1.26 2.1z",
        fill: "url(#".concat(this.idPrefix, "f)")
      }), React.createElement("path", {
        d: "M205.54 38.92h-.1a1.16 1.16 0 0 1-1.16-1.16v64.87a2.39 2.39 0 0 0 1.26 2.1z",
        fill: "url(#".concat(this.idPrefix, "R)")
      }), React.createElement("path", {
        d: "M218.2 38.48h-12.76a1.16 1.16 0 0 1-1.16-1.16v.42a1.16 1.16 0 0 0 1.16 1.16h12.76a1.16 1.16 0 0 0 1.16-1.16v-.42a1.16 1.16 0 0 1-1.16 1.16z",
        fill: "#a3f4ac"
      }), React.createElement("path", {
        d: "M205.75 35h12.07a1.5 1.5 0 0 1 1.51 1.51v.8a1.16 1.16 0 0 1-1.16 1.16h-12.73a1.16 1.16 0 0 1-1.19-1.13v-.83a1.5 1.5 0 0 1 1.5-1.51z",
        fill: "url(#".concat(this.idPrefix, "S)")
      }), React.createElement("path", {
        d: "M164.27 82.87h.9l.3-.17a.35.35 0 0 0 .17-.15h.63v1.86h-.8v-1.32h-1.2zm2.64 7.48h-3.26a.52.52 0 0 1 .31-.45 2.7 2.7 0 0 1 .76-.33l.48-.14.47-.15a1.62 1.62 0 0 0 .35-.17.28.28 0 0 0 .13-.21.24.24 0 0 0 0-.12.34.34 0 0 0-.12-.12 1 1 0 0 0-.24-.09h-.41a1.15 1.15 0 0 0-.37 0 .8.8 0 0 0-.25.11.51.51 0 0 0-.13.16.67.67 0 0 0 0 .2h-.89a.51.51 0 0 1 .1-.32.93.93 0 0 1 .32-.24 2.35 2.35 0 0 1 .51-.17 4.21 4.21 0 0 1 .71 0 4.45 4.45 0 0 1 .73 0 1.77 1.77 0 0 1 .46.15.86.86 0 0 1 .26.2.38.38 0 0 1 0 .21.32.32 0 0 1-.09.23 1.08 1.08 0 0 1-.24.18l-.35.15-.39.14-.29.13-.37.11-.31.12a.36.36 0 0 0-.18.12h2.3zm-2.45 4.53h.73a.76.76 0 0 0 .28-.15.18.18 0 0 0 .09-.15c0-.1 0-.16-.21-.22a1.58 1.58 0 0 0-.53-.07h-.34l-.24.09a.51.51 0 0 0-.16.13.43.43 0 0 0 0 .16h-.87a.44.44 0 0 1 .14-.28 1 1 0 0 1 .31-.21 2.13 2.13 0 0 1 .49-.15 3.42 3.42 0 0 1 .64 0h.55l.48.11a1.23 1.23 0 0 1 .35.16.31.31 0 0 1 .13.24.32.32 0 0 1-.16.28 1.21 1.21 0 0 1-.52.16 1.6 1.6 0 0 1 .64.17.39.39 0 0 1 .22.33.33.33 0 0 1-.13.26 1.24 1.24 0 0 1-.36.19 2.57 2.57 0 0 1-.55.12 4.49 4.49 0 0 1-1.37 0 2.12 2.12 0 0 1-.51-.13.9.9 0 0 1-.32-.23.45.45 0 0 1-.12-.33h.88c0 .12 0 .23.22.3a1.53 1.53 0 0 0 .67.12 1.84 1.84 0 0 0 .62 0 .26.26 0 0 0 .26-.27.19.19 0 0 0-.14-.11 1 1 0 0 0-.28-.11h-.85zm1.99 6.51h-.6v.49h-.74v-.49h-2v-.33l2-1.17h.74v1.28h.62zm-2.79-.21h1.51v-.89zm-.47 4.65h2.46v.3h-1.88l-.24.51a1.58 1.58 0 0 1 .43-.1h.49a3.32 3.32 0 0 1 .63 0 1.93 1.93 0 0 1 .47.13.67.67 0 0 1 .28.22.39.39 0 0 1 0 .52.78.78 0 0 1-.29.25 2.16 2.16 0 0 1-.51.16 3.14 3.14 0 0 1-.75 0h-.65a2.31 2.31 0 0 1-.52-.12 1.07 1.07 0 0 1-.36-.2.39.39 0 0 1-.15-.27h.77a.37.37 0 0 0 .27.26 1.64 1.64 0 0 0 .62.09h.41a1 1 0 0 0 .25-.15.36.36 0 0 0 .16-.14.54.54 0 0 0 0-.18.43.43 0 0 0 0-.16.46.46 0 0 0-.17-.14l-.29-.09h-.86a.51.51 0 0 0-.31.15h-.79z",
        fill: "#868786"
      }));
    }
  }]);

  return IconIWorkTrio;
}(React.Component);

_defineProperty(IconIWorkTrio, "defaultProps", {
  height: 150,
  width: 400
});

export default IconIWorkTrio;
//# sourceMappingURL=IconIWorkTrio.js.map