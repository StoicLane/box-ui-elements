import * as React from 'react';
import { injectIntl } from 'react-intl';
import BarChart from './charts/bar/BarChart';
import messages from './messages';
import MetricSummary from './MetricSummary';
import { METRIC, PERIOD } from './constants';
import './GraphCardPreviewsSummary.scss';

function GraphCardPreviewsSummary(_ref) {
  var graphData = _ref.graphData,
      intl = _ref.intl,
      previousPeriodCount = _ref.previousPeriodCount,
      totalCount = _ref.totalCount;
  return React.createElement(React.Fragment, null, React.createElement(MetricSummary, {
    data: graphData,
    metric: METRIC.PREVIEWS,
    period: PERIOD.WEEK,
    previousPeriodCount: previousPeriodCount,
    totalCount: totalCount
  }), React.createElement(BarChart, {
    className: "GraphCardPreviewsSummary-chart",
    data: graphData,
    label: intl.formatMessage(messages.previewGraphLabel),
    labelAccessor: "start",
    valueAccessor: "previewsCount"
  }));
}

export default injectIntl(GraphCardPreviewsSummary);
//# sourceMappingURL=GraphCardPreviewsSummary.js.map