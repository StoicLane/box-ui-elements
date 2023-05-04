function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PlainButton from '../../../../components/plain-button';
import './RepliesToggle.scss';

var RepliesToggle = function RepliesToggle(_ref) {
  var onShowReplies = _ref.onShowReplies,
      onHideReplies = _ref.onHideReplies,
      repliesShownCount = _ref.repliesShownCount,
      repliesTotalCount = _ref.repliesTotalCount;

  if (repliesTotalCount <= 1) {
    return null;
  }

  var hasMoreRepliesToShow = repliesTotalCount > repliesShownCount;
  var toggleMessage = hasMoreRepliesToShow ? messages.showReplies : messages.hideReplies;
  var repliesToLoadCount = Math.max(repliesTotalCount - repliesShownCount, 0);

  var handleToggle = function handleToggle() {
    if (hasMoreRepliesToShow) {
      onShowReplies();
    } else if (repliesShownCount) {
      onHideReplies(repliesShownCount - 1);
    }
  };

  return React.createElement(PlainButton, {
    className: "bcs-RepliesToggle",
    onClick: handleToggle,
    type: "button",
    "data-testid": "replies-toggle"
  }, React.createElement(FormattedMessage, _extends({
    values: {
      repliesToLoadCount: repliesToLoadCount
    }
  }, toggleMessage)));
};

export default RepliesToggle;
//# sourceMappingURL=RepliesToggle.js.map