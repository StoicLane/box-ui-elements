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
var ICON_CLASS = 'across-devices-illustration';

var AcrossDevicesIllustration =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AcrossDevicesIllustration, _React$PureComponent);

  function AcrossDevicesIllustration() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AcrossDevicesIllustration);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AcrossDevicesIllustration)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(uniqueId(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(AcrossDevicesIllustration, [{
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
        viewBox: "0 0 420 130",
        width: width
      }, React.createElement("defs", null, React.createElement("path", {
        d: "M153.12 90.671c0 2.612-3.013 4.729-6.731 4.729H89.451c-3.718 0-6.731-2.117-6.731-4.729V5.53c0-2.613 3.013-4.73 6.731-4.73h56.938c3.718 0 6.731 2.117 6.731 4.73V90.67z",
        id: "b"
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "123.3%",
        id: "a",
        width: "134.1%",
        x: "-8.5%",
        y: "-11.6%"
      }, React.createElement("feOffset", {
        dx: "7",
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: "2.5"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0.160784314 0 0 0 0 0.278431373 0 0 0 0.28 0"
      })), React.createElement("path", {
        d: "M199.76 91.617a3.784 3.784 0 0 1-3.786 3.783h-32.028a3.784 3.784 0 0 1-3.786-3.783V23.504a3.785 3.785 0 0 1 3.786-3.784h32.028a3.785 3.785 0 0 1 3.786 3.784v68.113z",
        id: "d"
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "129.1%",
        id: "c",
        width: "160.6%",
        x: "-15.2%",
        y: "-14.5%"
      }, React.createElement("feOffset", {
        dx: "7",
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: "2.5"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0.160784314 0 0 0 0 0.278431373 0 0 0 0.28 0"
      })), React.createElement("path", {
        d: "M76.12 92.43c0 1.64-1.318 2.97-2.945 2.97h-24.91c-1.627 0-2.945-1.33-2.945-2.97V38.97c0-1.64 1.318-2.97 2.945-2.97h24.91c1.627 0 2.945 1.33 2.945 2.97v53.46z",
        id: "f"
      }), React.createElement("filter", {
        filterUnits: "objectBoundingBox",
        height: "137%",
        id: "e",
        width: "177.9%",
        x: "-19.5%",
        y: "-18.5%"
      }, React.createElement("feOffset", {
        dx: "7",
        in: "SourceAlpha",
        result: "shadowOffsetOuter1"
      }), React.createElement("feGaussianBlur", {
        in: "shadowOffsetOuter1",
        result: "shadowBlurOuter1",
        stdDeviation: "2.5"
      }), React.createElement("feColorMatrix", {
        in: "shadowBlurOuter1",
        values: "0 0 0 0 0 0 0 0 0 0.160784314 0 0 0 0 0.278431373 0 0 0 0.28 0"
      }))), React.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, React.createElement("path", {
        d: "M65.54 72.36c32.168.65 47.207 43.765 77.61 43.597 30.402-.167 42.076-81.228 83.902-80.956 41.826.271 53.893 65.3 83.651 65.823 29.758.523 31.445-10.99 57.276-10.817 17.22.116 34.56 11.78 52.021 34.993H0c22.248-35.526 44.095-53.073 65.54-52.64z",
        fill: "#74D2D8"
      }), React.createElement("path", {
        d: "M354.46 54.814c-32.168.866-47.207 58.352-77.61 58.129-30.402-.223-42.076-108.304-83.902-107.942-41.826.362-53.893 87.068-83.651 87.765-29.758.697-31.445-14.655-57.276-14.424C34.801 78.497 17.461 94.05 0 125h420c-22.248-47.368-44.095-70.764-65.54-70.186z",
        fill: "#74D2D8",
        opacity: ".42"
      }), React.createElement("g", {
        transform: "translate(90 26)"
      }, React.createElement("use", {
        fill: "#000",
        filter: "url(#a)",
        xlinkHref: "#b"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#b"
      }), React.createElement("path", {
        d: "M82.72 7.4h70.4v80.121h-70.4z",
        fill: "#002947",
        fillRule: "nonzero"
      }), React.createElement("use", {
        fill: "#000",
        filter: "url(#c)",
        xlinkHref: "#d"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#d"
      }), React.createElement("use", {
        fill: "#000",
        filter: "url(#e)",
        xlinkHref: "#f"
      }), React.createElement("use", {
        fill: "#FFF",
        xlinkHref: "#f"
      }), React.createElement("path", {
        d: "M45.32 43.48h30.8v44.249h-30.8zM160.16 28.96h39.542v58.76H160.16z",
        fill: "#002947",
        fillRule: "nonzero"
      }), React.createElement("path", {
        d: "M109.56 88.448V71.2M58.08 54.48v34.209M70.84 69.44v18.988M96.8 57.56v30.282M109.56 47.88v39.862M122.76 38.64v49.27M135.52 34.68v53.197M148.28 36.44v51.367M174.24 51.84v36.268M187 38.2v50.108",
        stroke: "#FFF",
        strokeWidth: ".5"
      }), React.createElement("path", {
        d: "M.102 46.854c6.063 1.28 10.08 5.436 14.64 9.235C28.331 67.415 46.557 72.595 64.1 70.8c15.432-1.593 28.779-9.331 40.329-19.308 13.526-11.665 28.273-21.559 46.64-14.191 9.67 3.882 17.415 11.364 26.465 16.532a50.76 50.76 0 0 0 34.151 6.043 49.884 49.884 0 0 0 8.103-2.168",
        stroke: "#5FC9CF",
        strokeWidth: ".5"
      }), React.createElement("path", {
        d: "M90.513 30.002h15.963v1.445H90.513z",
        fill: "#FFF",
        fillRule: "nonzero"
      }), React.createElement("path", {
        d: "M90.513 33.296h7.981v1.445h-7.981z",
        fill: "#F7647D",
        fillRule: "nonzero"
      }), React.createElement("path", {
        d: "M60.385 54.202h9.99v1.445h-9.99z",
        fill: "#FFF",
        fillRule: "nonzero"
      }), React.createElement("path", {
        d: "M60.385 57.502h4.995v1.445h-4.995z",
        fill: "#F7647D",
        fillRule: "nonzero"
      }), React.createElement("path", {
        d: "M171.517 37.907h12.893v1.445h-12.893z",
        fill: "#FFF",
        fillRule: "nonzero"
      }), React.createElement("path", {
        d: "M171.517 41.201h6.447v1.445h-6.447z",
        fill: "#F7647D",
        fillRule: "nonzero"
      }), React.createElement("circle", {
        cx: "58.083",
        cy: "71.144",
        fill: "#F7647D",
        fillRule: "nonzero",
        r: "3.185"
      }), React.createElement("circle", {
        cx: "109.655",
        cy: "47.347",
        fill: "#F7647D",
        fillRule: "nonzero",
        r: "3.185"
      }), React.createElement("circle", {
        cx: "187.013",
        cy: "57.733",
        fill: "#F7647D",
        fillRule: "nonzero",
        r: "3.185"
      }))));
    }
  }]);

  return AcrossDevicesIllustration;
}(React.PureComponent);

_defineProperty(AcrossDevicesIllustration, "defaultProps", {
  className: '',
  height: 130,
  width: 420
});

export default AcrossDevicesIllustration;
//# sourceMappingURL=AcrossDevicesIllustration.js.map