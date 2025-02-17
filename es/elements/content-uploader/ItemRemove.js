function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Item remove component
 */
import React from 'react';
import { injectIntl } from 'react-intl';
import PlainButton from '../../components/plain-button/PlainButton';
import Tooltip from '../../components/tooltip';
import IconClose from '../../icons/general/IconClose';
import messages from '../common/messages';
import { STATUS_ERROR, STATUS_IN_PROGRESS, STATUS_STAGED } from '../../constants';

var ItemRemove = function ItemRemove(_ref) {
  var intl = _ref.intl,
      onClick = _ref.onClick,
      status = _ref.status;
  var resin = {};
  var target = null;

  if (status === STATUS_IN_PROGRESS) {
    target = 'uploadcancel';
  } else if (status === STATUS_ERROR) {
    target = 'remove-failed';
  }

  if (target) {
    resin['data-resin-target'] = target;
  }

  var isDisabled = status === STATUS_STAGED;
  var tooltipText = intl.formatMessage(messages.remove);
  return React.createElement("div", {
    className: "bcu-item-action"
  }, React.createElement(Tooltip, {
    position: "top-left",
    text: tooltipText
  }, React.createElement(PlainButton, _extends({
    "aria-label": tooltipText,
    isDisabled: isDisabled,
    onClick: onClick,
    type: "button"
  }, resin), React.createElement(IconClose, null))));
};

export { ItemRemove as ItemRemoveBase };
export default injectIntl(ItemRemove);
//# sourceMappingURL=ItemRemove.js.map