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
var ICON_CLASS = 'file-circle-illustration';

var FileCircleIllustration =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(FileCircleIllustration, _React$PureComponent);

  function FileCircleIllustration() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FileCircleIllustration);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FileCircleIllustration)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(FileCircleIllustration, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          height = _this$props.height,
          title = _this$props.title,
          width = _this$props.width;
      return React.createElement(AccessibleSVG, {
        className: "".concat(ICON_CLASS, " ").concat(className),
        height: height,
        title: title,
        viewBox: "0 0 140 140",
        width: width
      }, React.createElement("defs", null, React.createElement("rect", {
        height: 18,
        id: "b",
        rx: 2,
        width: 18
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "272.2%",
        id: "a",
        width: "272.2%",
        x: "-86.1%",
        y: "-80.6%"
      }, React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: 5
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
      })), React.createElement("rect", {
        height: 18,
        id: "d",
        rx: 2,
        width: 18
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "272.2%",
        id: "c",
        width: "272.2%",
        x: "-86.1%",
        y: "-80.6%"
      }, React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: 5
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
      })), React.createElement("rect", {
        height: 18,
        id: "f",
        rx: 2,
        width: 18
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "272.2%",
        id: "e",
        width: "272.2%",
        x: "-86.1%",
        y: "-80.6%"
      }, React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: 5
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
      })), React.createElement("rect", {
        height: 18,
        id: "h",
        rx: 2,
        width: 18
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "272.2%",
        id: "g",
        width: "272.2%",
        x: "-86.1%",
        y: "-80.6%"
      }, React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: 5
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
      })), React.createElement("rect", {
        height: 18,
        id: "j",
        rx: 2,
        width: 18
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "272.2%",
        id: "i",
        width: "272.2%",
        x: "-86.1%",
        y: "-80.6%"
      }, React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: 5
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
      })), React.createElement("rect", {
        height: 18,
        id: "l",
        rx: 2,
        width: 18
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "272.2%",
        id: "k",
        width: "272.2%",
        x: "-86.1%",
        y: "-80.6%"
      }, React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: 5
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
      })), React.createElement("rect", {
        height: 18,
        id: "n",
        rx: 2,
        width: 18
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "272.2%",
        id: "m",
        width: "272.2%",
        x: "-86.1%",
        y: "-80.6%"
      }, React.createElement("feOffset", {
        dy: 1,
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: 5
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
      })), React.createElement("rect", {
        height: 9,
        id: "o",
        rx: ".78",
        width: "4.29",
        x: ".86"
      })), React.createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(10 10)"
      }, React.createElement("circle", {
        cx: 60,
        cy: 60,
        fill: "#FC627A",
        r: 60
      }), React.createElement("path", {
        d: "M36.6 41.4a1 1 0 0 0 .81.44h35.6a1 1 0 0 1 .99 1.01V82a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1.01V38a1 1 0 0 1 1-1h18.05a1 1 0 0 1 .82.47l2.73 3.94z",
        fill: "#F7D271",
        fillRule: "nonzero"
      }), React.createElement("g", {
        transform: "translate(20 49)"
      }, React.createElement("rect", {
        fill: "#FFF",
        height: 28,
        opacity: ".24",
        rx: 14,
        width: 28
      }), React.createElement("path", {
        d: "M19.7 17a5.7 5.7 0 1 0-11.4 0 5.7 5.7 0 0 0 11.4 0z",
        stroke: "#FFF",
        strokeWidth: ".6"
      }), React.createElement("path", {
        d: "M10 12.8v-2.57C10 7.89 11.8 6 14 6s4 1.9 4 4.23v2.57M14 15v4",
        stroke: "#FFF",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: ".6"
      })), React.createElement("g", {
        transform: "translate(54 8)"
      }, React.createElement("g", {
        transform: "translate(44 44)"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#a)",
        xlinkHref: "#b"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#b"
      })), React.createElement("path", {
        d: "M56.81 55v-2.95H51.1v4.29a1.43 1.43 0 1 1-1.43-1.43c.17-.02.33.01.48.1v-6.77h7.62v8.1a1.43 1.43 0 1 1-1.42-1.43c.16-.02.33.01.47.1zm-5.72-3.9h5.72v-1.91H51.1v1.9z",
        fill: "#980DE0",
        fillOpacity: ".6",
        fillRule: "nonzero"
      }), React.createElement("g", {
        transform: "translate(0 44)"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#c)",
        xlinkHref: "#d"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#d"
      })), React.createElement("g", {
        fill: "#FC627A",
        fillRule: "nonzero"
      }, React.createElement("path", {
        d: "M3.18 55.65h11.64v1.06H3.18v-1.06zm0 2.11h11.64v1.06H3.18v-1.06zm5.3-9.52a3.12 3.12 0 0 0-3.19 3.17c0 1.8 1.38 3.18 3.18 3.18 1.8 0 3.18-1.38 3.18-3.18H8.47v-3.17z"
      }), React.createElement("path", {
        d: "M9.53 47.18v3.17h3.18c0-1.8-1.38-3.17-3.18-3.17z"
      })), React.createElement("g", {
        transform: "translate(10 66)"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#e)",
        xlinkHref: "#f"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#f"
      })), React.createElement("path", {
        d: "M15.76 79.7c-.26.15-.47 0-.47-.29V70.6c0-.3.22-.44.47-.3l7.8 4.41c.12.04.2.15.2.27 0 .12-.08.23-.2.26l-7.8 4.48z",
        fill: "#22A7F0",
        fillRule: "nonzero"
      }), React.createElement("g", {
        transform: "translate(32 66)"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#g)",
        xlinkHref: "#h"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#h"
      })), React.createElement("path", {
        d: "M43.24 73.62c-.99 0-1.8-.75-1.8-1.7 0-.93.81-1.68 1.8-1.68s1.8.75 1.8 1.69-.81 1.7-1.8 1.7zm-.54 3.47l-2.8-3.14a.38.38 0 0 0-.52-.05l-.05.05-4.15 4.76h11.64l-2.43-3.05a.32.32 0 0 0-.27-.15.32.32 0 0 0-.27.15l-1.15 1.43z",
        fill: "#3FB87F",
        fillRule: "nonzero"
      }), React.createElement("g", {
        transform: "translate(22 44)"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#i)",
        xlinkHref: "#j"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#j"
      })), React.createElement("path", {
        d: "M25.18 48.24h11.64v1.36H25.18v-1.36zm0 2.72h11.64v1.36H25.18v-1.36zm0 2.72h11.64v1.36H25.18v-1.36zm0 2.72h8.47v1.36h-8.47V56.4z",
        fill: "#4083F7",
        fillRule: "nonzero"
      }), React.createElement("g", {
        transform: "translate(13 22)"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#k)",
        xlinkHref: "#l"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#l"
      })), React.createElement("path", {
        d: "M26.85 25.18h-9.7c-.54 0-.97.52-.97 1.16v9.32c0 .64.43 1.16.97 1.16h9.7c.54 0 .97-.52.97-1.16v-9.32c0-.64-.43-1.16-.97-1.16zm-9.7 1.16h2.9v2.33h-2.9v-2.33zm0 3.5h2.9v2.32h-2.9v-2.32zm0 5.82v-2.33h2.9v2.33h-2.9zm9.7 0h-5.82v-2.33h5.82v2.33zm0-3.5h-5.82v-2.32h5.82v2.32zm-5.82-3.49v-2.33h5.82v2.33h-5.82z",
        fill: "#3FB87F",
        fillRule: "nonzero"
      }), React.createElement("g", {
        transform: "translate(35 22)"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#m)",
        xlinkHref: "#n"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#n"
      })), React.createElement("g", {
        transform: "rotate(45 -9.1 67.5)"
      }, React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#o"
      }), React.createElement("rect", {
        fill: "#BDC3C7",
        fillOpacity: ".05",
        height: "9.78",
        rx: ".78",
        stroke: "#FFF",
        strokeWidth: ".78",
        width: "5.06",
        x: ".47",
        y: "-.39"
      }), React.createElement("rect", {
        height: "9.78",
        rx: ".78",
        stroke: "#737F8B",
        strokeWidth: ".78",
        width: "5.06",
        x: ".47",
        y: "-.39"
      })), React.createElement("path", {
        d: "M42.17 29.09l4.24 4.24-.7.7-4.25-4.23z",
        fill: "#FBFCFC"
      }), React.createElement("path", {
        d: "M45.15 29.75l.7.7-2.89 2.9-.7-.71z",
        fill: "#737F8B"
      }), React.createElement("rect", {
        fill: "#FFF",
        height: 18,
        opacity: ".2",
        rx: 2,
        width: 18,
        x: 22
      }), React.createElement("rect", {
        fill: "#FFF",
        height: 18,
        opacity: ".2",
        rx: 2,
        width: 18,
        x: 44
      }), React.createElement("rect", {
        fill: "#FFF",
        height: 18,
        opacity: ".2",
        rx: 2,
        width: 18,
        x: 57,
        y: 22
      }), React.createElement("rect", {
        fill: "#FFF",
        height: 18,
        opacity: ".2",
        rx: 2,
        width: 18,
        x: 54,
        y: 66
      }), React.createElement("rect", {
        fill: "#FFF",
        height: 18,
        opacity: ".2",
        rx: 2,
        width: 18,
        x: 57,
        y: 88
      }), React.createElement("rect", {
        fill: "#FFF",
        height: 18,
        opacity: ".2",
        rx: 2,
        width: 18,
        x: 66,
        y: 44
      }), React.createElement("rect", {
        fill: "#FFF",
        height: 18,
        opacity: ".2",
        rx: 2,
        width: 18,
        x: 35,
        y: 88
      }), React.createElement("rect", {
        fill: "#FFF",
        height: 18,
        opacity: ".2",
        rx: 2,
        width: 18,
        x: 13,
        y: 88
      }), React.createElement("rect", {
        fill: "#FFF",
        height: 18,
        opacity: ".2",
        rx: 2,
        width: 18,
        x: 21,
        y: 110
      }))));
    }
  }]);

  return FileCircleIllustration;
}(React.PureComponent);

_defineProperty(FileCircleIllustration, "defaultProps", {
  className: '',
  height: 200,
  width: 200
});

export default FileCircleIllustration;
//# sourceMappingURL=FileCircleIllustration.js.map