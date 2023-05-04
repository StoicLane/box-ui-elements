import React from 'react';
import noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';
import ContentInsightsSummary from '../../features/content-insights/ContentInsightsSummary';
// @ts-ignore Module is written in Flow
import messages from '../common/messages'; // @ts-ignore Module is written in Flow

import SidebarSection from './SidebarSection'; // @ts-ignore Module is written in Flow
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member

import withErrorHandling from './withErrorHandling'; // Above eslint rules disabled because typescript chokes on flow type import in withErrorHandling

import './SidebarContentInsights.scss';
var defaultContentInsights = {
  graphData: [],
  isLoading: true,
  previousPeriodCount: 0,
  totalCount: 0
};

var SidebarContentInsights = function SidebarContentInsights(_ref) {
  var _ref$contentInsights = _ref.contentInsights,
      contentInsights = _ref$contentInsights === void 0 ? defaultContentInsights : _ref$contentInsights,
      _ref$onContentInsight = _ref.onContentInsightsClick,
      onContentInsightsClick = _ref$onContentInsight === void 0 ? noop : _ref$onContentInsight;
  var error = contentInsights.error,
      graphData = contentInsights.graphData,
      isLoading = contentInsights.isLoading,
      previousPeriodCount = contentInsights.previousPeriodCount,
      totalCount = contentInsights.totalCount;
  return React.createElement(SidebarSection, {
    className: "bcs-SidebarContentInsights",
    title: React.createElement(FormattedMessage, messages.sidebarContentInsights)
  }, React.createElement(ContentInsightsSummary, {
    error: error,
    graphData: graphData,
    isLoading: isLoading,
    onClick: onContentInsightsClick,
    previousPeriodCount: previousPeriodCount,
    totalCount: totalCount
  }));
};

export default withErrorHandling(SidebarContentInsights);
//# sourceMappingURL=SidebarContentInsights.js.map