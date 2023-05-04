var _METRIC_MAP;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import * as React from 'react';
import isFinite from 'lodash/isFinite';
import isNaN from 'lodash/isNaN';
import { injectIntl } from 'react-intl';
import HeaderWithCount from './HeaderWithCount';
import messages from './messages';
import TrendPill from './TrendPill';
import { formatCount } from './numberUtils';
import { METRIC } from './constants';
import './MetricSummary.scss';
var METRIC_MAP = (_METRIC_MAP = {}, _defineProperty(_METRIC_MAP, METRIC.PREVIEWS, {
  headerMessage: messages.previewGraphType,
  getPeriodCount: function getPeriodCount(data) {
    return data.reduce(function (count, _ref) {
      var previewsCount = _ref.previewsCount;
      return count + previewsCount;
    }, 0);
  }
}), _defineProperty(_METRIC_MAP, METRIC.DOWNLOADS, {
  getPeriodCount: function getPeriodCount(data) {
    return data.reduce(function (count, _ref2) {
      var downloadsCount = _ref2.downloadsCount;
      return count + downloadsCount;
    }, 0);
  },
  headerMessage: messages.downloadGraphType
}), _defineProperty(_METRIC_MAP, METRIC.USERS, {
  getPeriodCount: function getPeriodCount(data) {
    var periodUsers = data.reduce(function (totalUsers, _ref3) {
      var users = _ref3.users;
      return new Set([].concat(_toConsumableArray(Array.from(totalUsers)), _toConsumableArray(Array.from(users))));
    }, new Set());
    return periodUsers.size;
  },
  headerMessage: messages.peopleTitle
}), _METRIC_MAP); // Limit the trend to a finite number (in case the previous period count was 0 and the calculated trend is Infinity)

var formatTrend = function formatTrend(calculatedTrend) {
  return !isFinite(calculatedTrend) ? 1 : calculatedTrend;
};

function MetricSummary(_ref4) {
  var _ref4$data = _ref4.data,
      data = _ref4$data === void 0 ? [] : _ref4$data,
      intl = _ref4.intl,
      metric = _ref4.metric,
      period = _ref4.period,
      _ref4$previousPeriodC = _ref4.previousPeriodCount,
      previousPeriodCount = _ref4$previousPeriodC === void 0 ? 0 : _ref4$previousPeriodC,
      totalCount = _ref4.totalCount;
  var _METRIC_MAP$metric = METRIC_MAP[metric],
      getPeriodCount = _METRIC_MAP$metric.getPeriodCount,
      headerMessage = _METRIC_MAP$metric.headerMessage;
  var periodCount = getPeriodCount(data);
  var calculatedTrend = (periodCount - previousPeriodCount) / previousPeriodCount;
  var trend = isNaN(calculatedTrend) ? 0 : formatTrend(calculatedTrend);
  return React.createElement("div", {
    className: "MetricSummary"
  }, React.createElement(HeaderWithCount, {
    title: intl.formatMessage(headerMessage),
    totalCount: totalCount
  }), React.createElement("div", {
    className: "MetricSummary-period"
  }, React.createElement("span", {
    className: "MetricSummary-periodCount"
  }, formatCount(periodCount, intl)), React.createElement(TrendPill, {
    period: period,
    trend: trend
  })));
}

export default injectIntl(MetricSummary);
//# sourceMappingURL=MetricSummary.js.map