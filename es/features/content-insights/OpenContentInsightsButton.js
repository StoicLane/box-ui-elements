import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import Button, { ButtonType } from '../../components/button';
import messages from './messages';

var OpenContentInsightsButton = function OpenContentInsightsButton(_ref) {
  var onClick = _ref.onClick;
  return React.createElement(Button, {
    className: "OpenContentInsightsButton",
    onClick: onClick,
    type: ButtonType.BUTTON
  }, React.createElement(FormattedMessage, messages.openContentInsightsButton));
};

export default OpenContentInsightsButton;
//# sourceMappingURL=OpenContentInsightsButton.js.map