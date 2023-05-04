function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Sort Button component
 * @author Box
 */
import React from 'react';
import { injectIntl } from 'react-intl';
import Button from '../../../components/button';
import IconSort from '../../../icons/general/IconSort';
import Tooltip from '../Tooltip';
import { bdlGray65 } from '../../../styles/variables';
import messages from '../messages';
import './SortButton.scss';

var SortButton = function SortButton(_ref) {
  var intl = _ref.intl,
      rest = _objectWithoutProperties(_ref, ["intl"]);

  var sortMessage = intl.formatMessage(messages.sort);
  return React.createElement(Tooltip, {
    text: sortMessage
  }, React.createElement(Button, _extends({
    "aria-label": sortMessage,
    className: "be-btn-sort",
    type: "button"
  }, rest), React.createElement(IconSort, {
    color: bdlGray65
  })));
};

export { SortButton as SortButtonBase };
export default injectIntl(SortButton);
//# sourceMappingURL=SortButton.js.map