function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import Checkbox from '../../../components/checkbox/Checkbox';
import Tooltip from '../../../components/tooltip';
import messages from '../messages';

var ContentExplorerSelectAll = function ContentExplorerSelectAll(_ref) {
  var handleSelectAllClick = _ref.handleSelectAllClick,
      intl = _ref.intl,
      isLabelHidden = _ref.isLabelHidden,
      isSelectAllChecked = _ref.isSelectAllChecked,
      _ref$numTotalItems = _ref.numTotalItems,
      numTotalItems = _ref$numTotalItems === void 0 ? 0 : _ref$numTotalItems;
  return React.createElement("div", {
    className: "content-explorer-select-all-container"
  }, !isLabelHidden && React.createElement("label", {
    className: "content-explorer-select-all-items-counter"
  }, numTotalItems === 1 ? React.createElement(FormattedMessage, _extends({}, messages.result, {
    values: {
      itemsCount: intl.formatNumber(numTotalItems)
    }
  })) : React.createElement(FormattedMessage, _extends({}, messages.results, {
    values: {
      itemsCount: intl.formatNumber(numTotalItems)
    }
  }))), !isLabelHidden && React.createElement("label", {
    className: "content-explorer-select-all-checkbox-label"
  }, React.createElement(FormattedMessage, messages.selectAll)), React.createElement(Tooltip, {
    isShown: isLabelHidden ? undefined : false,
    text: React.createElement(FormattedMessage, messages.selectAll)
  }, React.createElement(Checkbox, {
    hideLabel: true,
    className: "content-explorer-select-all-checkbox",
    onChange: handleSelectAllClick,
    isChecked: isSelectAllChecked
  })));
};

ContentExplorerSelectAll.propTypes = {
  handleSelectAllClick: PropTypes.func,
  intl: PropTypes.any,
  isSelectAllChecked: PropTypes.bool,
  isLabelHidden: PropTypes.bool,
  numTotalItems: PropTypes.number
};
export { ContentExplorerSelectAll as ContentExplorerSelectAllBase };
export default injectIntl(ContentExplorerSelectAll);
//# sourceMappingURL=ContentExplorerSelectAll.js.map