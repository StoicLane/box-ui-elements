function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Add Button component
 * @author Box
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../../components/button';
import IconAddThin from '../../../icons/general/IconAddThin';
import messages from '../messages';
import Tooltip from '../Tooltip';
import { bdlGray65 } from '../../../styles/variables';
import './AddButton.scss';

var AddButton = function AddButton(props) {
  return React.createElement(Tooltip, {
    text: React.createElement(FormattedMessage, messages.add)
  }, React.createElement(Button, _extends({
    className: "be-btn-add",
    "aria-label": messages.add.defaultMessage,
    type: "button"
  }, props), React.createElement(IconAddThin, {
    color: bdlGray65
  })));
};

export default AddButton;
//# sourceMappingURL=AddButton.js.map