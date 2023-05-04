/**
 * 
 * @file Show more/less button
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import PlainButton from '../../../../../components/plain-button';
import messages from './messages';

var CollapsableMessageToggle = function CollapsableMessageToggle(_ref) {
  var isMore = _ref.isMore,
      onClick = _ref.onClick;
  return React.createElement(PlainButton, {
    className: "bcs-ActivityMessage-toggleMoreLess",
    onClick: onClick,
    type: "button"
  }, React.createElement(FormattedMessage, isMore ? messages.activityMessageSeeMore : messages.activityMessageSeeLess));
};

export default CollapsableMessageToggle;
//# sourceMappingURL=CollapsableMessageToggle.js.map