import React from 'react';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';
import LabelPill from '../../components/label-pill';
import messages from './messages';
import './TrendPill.scss';

var getTrendStatus = function getTrendStatus(trend) {
  if (trend === 0) {
    return 'neutral';
  }

  return trend > 0 ? 'up' : 'down';
};

var getTrendByPeriod = function getTrendByPeriod(period) {
  switch (period) {
    case 'month':
      return messages.trendMonth;

    case 'threemonths':
      return messages.trendThreeMonths;

    case 'year':
      return messages.trendYear;

    case 'week':
    default:
      return messages.trendWeek;
  }
};

function TrendPill(_ref) {
  var intl = _ref.intl,
      period = _ref.period,
      trend = _ref.trend;

  var getTrendLabel = function getTrendLabel(value) {
    return intl.formatMessage(value > 0 ? messages.trendUp : messages.trendDown);
  };

  var trendStatus = getTrendStatus(trend);
  var trendLabel = getTrendLabel(trend);
  return React.createElement(LabelPill.Pill, {
    className: classNames('TrendPill', {
      'TrendPill--up': trendStatus === 'up',
      'TrendPill--down': trendStatus === 'down'
    })
  }, React.createElement(React.Fragment, null, trendStatus !== 'neutral' && React.createElement("span", {
    "aria-label": trendLabel,
    className: "TrendPill-trend",
    role: "img"
  }), React.createElement(LabelPill.Text, null, React.createElement(React.Fragment, null, React.createElement("span", {
    className: "TrendPill-percentage"
  }, intl.formatNumber(trend, {
    style: 'percent'
  })), React.createElement(FormattedMessage, getTrendByPeriod(period))))));
}

export default injectIntl(TrendPill);
//# sourceMappingURL=TrendPill.js.map