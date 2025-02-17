function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import IconInfo from '../../icons/general/IconInfo';
import Tooltip from '../tooltip';
import Label from '../label';
import PlainButton from '../plain-button';
import messages from './messages';
import './Select.scss';

var Select = function Select(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      error = _ref.error,
      infoTooltip = _ref.infoTooltip,
      infoIconProps = _ref.infoIconProps,
      isDisabled = _ref.isDisabled,
      label = _ref.label,
      name = _ref.name,
      labelTooltip = _ref.labelTooltip,
      onChange = _ref.onChange,
      _ref$showErrorOutline = _ref.showErrorOutline,
      showErrorOutline = _ref$showErrorOutline === void 0 ? false : _ref$showErrorOutline,
      _ref$showLabel = _ref.showLabel,
      showLabel = _ref$showLabel === void 0 ? true : _ref$showLabel,
      rest = _objectWithoutProperties(_ref, ["children", "className", "error", "infoTooltip", "infoIconProps", "isDisabled", "label", "name", "labelTooltip", "onChange", "showErrorOutline", "showLabel"]);

  var classes = classNames(className, 'select-input-container', {
    'show-error': !!error || showErrorOutline,
    'is-disabled': isDisabled,
    'bdl-is-disabled': isDisabled
  });

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      infoTooltipIsOpen = _React$useState2[0],
      setInfoTooltipIsOpen = _React$useState2[1];

  return React.createElement("div", {
    className: classes
  }, React.createElement(Label, {
    hideLabel: !showLabel,
    text: label,
    tooltip: labelTooltip
  }, React.createElement(Tooltip, {
    isShown: !!error,
    position: "middle-right",
    text: error || '',
    theme: "error"
  }, React.createElement("span", {
    className: "select-container"
  }, React.createElement("span", {
    className: "select-container-inner"
  }, React.createElement("select", _extends({
    disabled: isDisabled,
    name: name,
    onChange: onChange
  }, rest), children), React.createElement("span", {
    className: "select-overlay"
  })), infoTooltip && React.createElement(Tooltip, {
    isShown: infoTooltipIsOpen,
    position: "middle-right",
    text: infoTooltip
  }, React.createElement(PlainButton, {
    type: "button",
    className: "tooltip-icon-container",
    onClick: function onClick() {
      return setInfoTooltipIsOpen(!infoTooltipIsOpen);
    }
  }, React.createElement(IconInfo, _extends({
    height: 16,
    width: 16,
    title: React.createElement(FormattedMessage, messages.moreInfo)
  }, infoIconProps))))))));
};

export default Select;
//# sourceMappingURL=Select.js.map