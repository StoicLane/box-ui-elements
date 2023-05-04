import React from 'react';
import noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';
import InfoBadge16 from '../../icon/fill/InfoBadge16'; // @ts-ignore flow import

import Toggle from '../../components/toggle';
import Tooltip from '../../components/tooltip';
import messages from './messages';
import './AdvancedContentInsightsToggle.scss';

var AdvancedContentInsightsToggle = function AdvancedContentInsightsToggle(_ref) {
  var hasDescription = _ref.hasDescription,
      _ref$hasTooltip = _ref.hasTooltip,
      hasTooltip = _ref$hasTooltip === void 0 ? true : _ref$hasTooltip,
      _ref$isChecked = _ref.isChecked,
      isChecked = _ref$isChecked === void 0 ? false : _ref$isChecked,
      isDisabled = _ref.isDisabled,
      _ref$onChange = _ref.onChange,
      _onChange = _ref$onChange === void 0 ? noop : _ref$onChange;

  var description = React.createElement(FormattedMessage, messages.advancedContentInsightsDescription);
  var label = React.createElement(React.Fragment, null, React.createElement(FormattedMessage, isChecked ? messages.advancedContentInsightsTitleEnabled : messages.advancedContentInsightsTitleDisabled), hasTooltip && React.createElement(Tooltip, {
    text: description
  }, React.createElement("div", {
    className: "AdvancedContentInsightsToggle-icon"
  }, React.createElement(InfoBadge16, {
    height: 14,
    width: 14
  }))));
  return React.createElement(Toggle, {
    className: "AdvancedContentInsightsToggle",
    "data-testid": "insights-toggle",
    description: !hasTooltip && hasDescription && description,
    isDisabled: isDisabled,
    isOn: isChecked,
    label: label,
    onChange: function onChange() {
      return _onChange(!isChecked);
    }
  });
};

export default AdvancedContentInsightsToggle;
//# sourceMappingURL=AdvancedContentInsightsToggle.js.map