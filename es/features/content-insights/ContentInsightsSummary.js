import * as React from 'react';
import ContentAnalyticsErrorState from './ContentAnalyticsErrorState';
import ContentInsightsSummaryGhostState from './ContentInsightsSummaryGhostState';
import GraphCardPreviewsSummary from './GraphCardPreviewsSummary';
import OpenContentInsightsButton from './OpenContentInsightsButton';
import './ContentInsightsSummary.scss';

var ContentInsightsSummary = function ContentInsightsSummary(_ref) {
  var error = _ref.error,
      graphData = _ref.graphData,
      isLoading = _ref.isLoading,
      previousPeriodCount = _ref.previousPeriodCount,
      onClick = _ref.onClick,
      totalCount = _ref.totalCount;

  var renderContentAnalyticsSummary = function renderContentAnalyticsSummary() {
    if (error) {
      return React.createElement(ContentAnalyticsErrorState, {
        error: error
      });
    }

    if (isLoading) {
      return React.createElement(ContentInsightsSummaryGhostState, null);
    }

    return React.createElement(React.Fragment, null, React.createElement(GraphCardPreviewsSummary, {
      graphData: graphData,
      previousPeriodCount: previousPeriodCount,
      totalCount: totalCount
    }), React.createElement(OpenContentInsightsButton, {
      onClick: onClick
    }));
  };

  return React.createElement("div", {
    className: "ContentInsightsSummary"
  }, renderContentAnalyticsSummary());
};

export default ContentInsightsSummary;
//# sourceMappingURL=ContentInsightsSummary.js.map