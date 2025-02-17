function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Base class for the Content Uploader ES6 wrapper
 * @author Box
 */
import React from 'react';
import { render as _render } from 'react-dom';
import ES6Wrapper from './ES6Wrapper';
import ContentUploaderPopup from '../content-uploader/ContentUploaderPopup';
import WrappedContentUploaderComponent from '../content-uploader/ContentUploader';

var ContentUploader =
/*#__PURE__*/
function (_ES6Wrapper) {
  _inherits(ContentUploader, _ES6Wrapper);

  function ContentUploader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContentUploader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContentUploader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      _this.emit('close');
    });

    _defineProperty(_assertThisInitialized(_this), "onComplete", function (data) {
      _this.emit('complete', data);
    });

    _defineProperty(_assertThisInitialized(_this), "onError", function (data) {
      _this.emit('error', data);
    });

    _defineProperty(_assertThisInitialized(_this), "onBeforeUpload", function (data) {
      _this.emit('beforeupload', data);
    });

    _defineProperty(_assertThisInitialized(_this), "onUpload", function (data) {
      _this.emit('upload', data);
    });

    return _this;
  }

  _createClass(ContentUploader, [{
    key: "render",

    /** @inheritdoc */
    value: function render() {
      var _this$options = this.options,
          modal = _this$options.modal,
          rest = _objectWithoutProperties(_this$options, ["modal"]);

      var UploaderComponent = modal ? ContentUploaderPopup : WrappedContentUploaderComponent;

      _render(React.createElement(UploaderComponent, _extends({
        language: this.language,
        messages: this.messages,
        componentRef: this.setComponent,
        rootFolderId: this.id,
        token: this.token,
        onClose: this.onClose,
        onComplete: this.onComplete,
        onError: this.onError,
        onBeforeUpload: this.onBeforeUpload,
        onUpload: this.onUpload,
        modal: modal
      }, rest)), this.container);
    }
  }]);

  return ContentUploader;
}(ES6Wrapper);

global.Box = global.Box || {};
global.Box.ContentUploader = ContentUploader;
export default ContentUploader;
//# sourceMappingURL=ContentUploader.js.map