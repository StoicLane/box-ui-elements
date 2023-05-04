import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import LabelPill from '../../../../../components/label-pill';
import { COMMENT_STATUS_RESOLVED } from '../../../../../constants';
import messages from './messages';
import './ActivityStatus.scss';

var ActivityStatus = function ActivityStatus(_ref) {
  var status = _ref.status;

  if (status !== COMMENT_STATUS_RESOLVED) {
    return null;
  }

  return React.createElement("div", {
    className: "bcs-ActivityStatus",
    "data-testid": "bcs-ActivityStatus"
  }, React.createElement(LabelPill.Pill, {
    type: "success"
  }, React.createElement(LabelPill.Text, null, React.createElement(FormattedMessage, messages.activityStatusResolved))));
};

export default ActivityStatus;
//# sourceMappingURL=ActivityStatus.js.map