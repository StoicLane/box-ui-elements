function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Modal, ModalActions } from '../../components/modal';
import Button from '../../components/button';
import PrimaryButton from '../../components/primary-button';
import commonMessages from '../../common/messages';
import messages from './messages';

var RemoveLinkConfirmModal =
/*#__PURE__*/
function (_Component) {
  _inherits(RemoveLinkConfirmModal, _Component);

  function RemoveLinkConfirmModal() {
    _classCallCheck(this, RemoveLinkConfirmModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(RemoveLinkConfirmModal).apply(this, arguments));
  }

  _createClass(RemoveLinkConfirmModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onLoad = this.props.onLoad;

      if (onLoad) {
        onLoad();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          onRequestClose = _this$props.onRequestClose,
          removeLink = _this$props.removeLink,
          submitting = _this$props.submitting,
          okayButtonProps = _this$props.okayButtonProps,
          modalProps = _this$props.modalProps,
          cancelButtonProps = _this$props.cancelButtonProps;
      return React.createElement(Modal, _extends({
        className: "be-modal",
        focusElementSelector: ".btn-primary",
        isOpen: isOpen,
        onRequestClose: submitting ? undefined : onRequestClose,
        title: React.createElement(FormattedMessage, messages.removeLinkConfirmationTitle),
        type: "alert"
      }, modalProps), React.createElement(FormattedMessage, messages.removeLinkConfirmationDescription), React.createElement(ModalActions, null, React.createElement(Button, _extends({
        isDisabled: submitting,
        onClick: onRequestClose
      }, cancelButtonProps), React.createElement(FormattedMessage, commonMessages.cancel)), React.createElement(PrimaryButton, _extends({
        isDisabled: submitting,
        isLoading: submitting,
        onClick: removeLink
      }, okayButtonProps), React.createElement(FormattedMessage, commonMessages.okay))));
    }
  }]);

  return RemoveLinkConfirmModal;
}(Component);

export default RemoveLinkConfirmModal;
//# sourceMappingURL=RemoveLinkConfirmModal.js.map