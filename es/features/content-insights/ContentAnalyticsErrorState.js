import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import MetricsReview56 from '../../illustration/MetricsReview56';
import messages from './messages';
import './ContentAnalyticsErrorState.scss';

var ContentAnalyticsErrorState = function ContentAnalyticsErrorState(_ref) {
  var error = _ref.error;

  var renderErrorMessage = function renderErrorMessage(responseError) {
    var isPermissionError = !!responseError && responseError.status === 403;

    if (isPermissionError) {
      return React.createElement("div", {
        className: "ContentAnalyticsErrorState-text--permission",
        "data-testid": "ContentAnalyticsErrorState-text--permission"
      }, React.createElement(FormattedMessage, messages.contentAnalyticsPermissionError));
    }

    return React.createElement("div", {
      className: "ContentAnalyticsErrorState-text",
      "data-testid": "ContentAnalyticsErrorState-text"
    }, React.createElement(FormattedMessage, messages.contentAnalyticsErrorText));
  };

  return React.createElement("div", {
    className: "ContentAnalyticsErrorState",
    "data-testid": "ContentAnalyticsErrorState"
  }, React.createElement(MetricsReview56, {
    "data-testid": "ContentAnalyticsErrorState-image"
  }), renderErrorMessage(error));
};

export default ContentAnalyticsErrorState;
//# sourceMappingURL=ContentAnalyticsErrorState.js.map