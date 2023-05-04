function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Footer list component
 * @author Box
 */
import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import Button from '../../components/button';
import ButtonGroup from '../../components/button-group';
import IconCheck from '../../icons/general/IconCheck';
import IconClose from '../../icons/general/IconClose';
import messages from '../common/messages';
import PrimaryButton from '../../components/primary-button';
import Tooltip from '../common/Tooltip';
import './Footer.scss';

var Footer = function Footer(_ref) {
  var currentCollection = _ref.currentCollection,
      selectedCount = _ref.selectedCount,
      selectedItems = _ref.selectedItems,
      onSelectedClick = _ref.onSelectedClick,
      hasHitSelectionLimit = _ref.hasHitSelectionLimit,
      intl = _ref.intl,
      isSingleSelect = _ref.isSingleSelect,
      onCancel = _ref.onCancel,
      onChoose = _ref.onChoose,
      chooseButtonLabel = _ref.chooseButtonLabel,
      cancelButtonLabel = _ref.cancelButtonLabel,
      children = _ref.children,
      renderCustomActionButtons = _ref.renderCustomActionButtons,
      showSelectedButton = _ref.showSelectedButton;
  var cancelMessage = intl.formatMessage(messages.cancel);
  var chooseMessage = intl.formatMessage(messages.choose);
  var isChooseButtonDisabled = !selectedCount;
  return React.createElement("footer", {
    className: "bcp-footer"
  }, React.createElement("div", {
    className: "bcp-footer-left"
  }, showSelectedButton && !isSingleSelect && React.createElement(Button, {
    className: "bcp-selected",
    onClick: onSelectedClick,
    type: "button"
  }, React.createElement(FormattedMessage, _extends({
    className: "bcp-selected-count"
  }, messages.selected, {
    values: {
      count: selectedCount
    }
  })), hasHitSelectionLimit && React.createElement("span", {
    className: "bcp-selected-max"
  }, "(", React.createElement(FormattedMessage, messages.max), ")"))), React.createElement("div", {
    className: "bcp-footer-right"
  }, children, renderCustomActionButtons ? renderCustomActionButtons({
    currentFolderId: currentCollection.id,
    currentFolderName: currentCollection.name,
    onCancel: onCancel,
    onChoose: onChoose,
    selectedCount: selectedCount,
    selectedItems: selectedItems
  }) : React.createElement(ButtonGroup, {
    className: "bcp-footer-actions"
  }, React.createElement(Tooltip, {
    text: cancelButtonLabel || cancelMessage
  }, React.createElement(Button, {
    "aria-label": cancelMessage,
    onClick: onCancel,
    type: "button"
  }, React.createElement(IconClose, {
    height: 16,
    width: 16
  }))), React.createElement(Tooltip, {
    isDisabled: isChooseButtonDisabled,
    text: chooseButtonLabel || chooseMessage
  }, React.createElement(PrimaryButton, {
    "aria-label": chooseMessage,
    disabled: isChooseButtonDisabled // sets disabled attribute
    ,
    isDisabled: isChooseButtonDisabled // used in Button component
    ,
    onClick: onChoose,
    type: "button"
  }, React.createElement(IconCheck, {
    color: "#fff",
    height: 16,
    width: 16
  }))))));
};

export default injectIntl(Footer);
//# sourceMappingURL=Footer.js.map