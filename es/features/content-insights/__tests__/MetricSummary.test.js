function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            metric              | data                | header                   | period\n            ", "  | ", "  | ", "  | ", "\n            ", " | ", " | ", " | ", "\n            ", "     | ", "     | ", "   | ", "\n            ", "  | ", "  | ", "  | ", "\n            ", " | ", " | ", " | ", "\n            ", "     | ", "     | ", "   | ", "\n            ", "  | ", "  | ", "  | ", "\n            ", " | ", " | ", " | ", "\n            ", "     | ", "     | ", "   | ", "\n            ", "  | ", "  | ", "  | ", "\n            ", " | ", " | ", " | ", "\n            ", "     | ", "     | ", "   | ", "\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, screen } from '@testing-library/react'; // @ts-ignore: No ts definition

import localize from '../../../../test/support/i18n';
import messages from '../messages';
import MetricSummary from '../MetricSummary';
import { METRIC, PERIOD } from '../constants';
var mockPreviewData = [{
  start: 1,
  previewsCount: 0
}, {
  start: 2,
  previewsCount: 0
}, {
  start: 3,
  previewsCount: 0
}, {
  start: 4,
  previewsCount: 0
}, {
  start: 5,
  previewsCount: 0
}, {
  start: 6,
  previewsCount: 1
}, {
  start: 7,
  previewsCount: 1
}];
var mockDownloadData = [{
  start: 1,
  downloadsCount: 0
}, {
  start: 2,
  downloadsCount: 0
}, {
  start: 3,
  downloadsCount: 0
}, {
  start: 4,
  downloadsCount: 0
}, {
  start: 5,
  downloadsCount: 0
}, {
  start: 6,
  downloadsCount: 1
}, {
  start: 7,
  downloadsCount: 1
}];
var mockUserData = [{
  start: 1,
  users: []
}, {
  start: 2,
  users: []
}, {
  start: 3,
  users: []
}, {
  start: 4,
  users: []
}, {
  start: 5,
  users: []
}, {
  start: 6,
  users: [1, 2]
}, {
  start: 7,
  users: []
}];
describe('features/content-insights/MetricSummary', function () {
  var downloadHeaderMessage = localize(messages.downloadGraphType.id);
  var peopleHeaderMessage = localize(messages.peopleTitle.id);
  var previewHeaderMessage = localize(messages.previewGraphType.id);

  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return render(React.createElement(MetricSummary, _extends({
      data: mockPreviewData,
      metric: METRIC.PREVIEWS,
      period: PERIOD.WEEK,
      previousPeriodCount: 10,
      totalCount: 20
    }, props)));
  };

  describe('render', function () {
    test('should render correctly', function () {
      getWrapper();
      expect(screen.getByText(previewHeaderMessage)).toBeVisible();
    });
    test.each(_templateObject(), METRIC.PREVIEWS, mockPreviewData, previewHeaderMessage, PERIOD.WEEK, METRIC.DOWNLOADS, mockDownloadData, downloadHeaderMessage, PERIOD.WEEK, METRIC.USERS, mockUserData, peopleHeaderMessage, PERIOD.WEEK, METRIC.PREVIEWS, mockPreviewData, previewHeaderMessage, PERIOD.MONTH, METRIC.DOWNLOADS, mockDownloadData, downloadHeaderMessage, PERIOD.MONTH, METRIC.USERS, mockUserData, peopleHeaderMessage, PERIOD.MONTH, METRIC.PREVIEWS, mockPreviewData, previewHeaderMessage, PERIOD.THREEMONTHS, METRIC.DOWNLOADS, mockDownloadData, downloadHeaderMessage, PERIOD.THREEMONTHS, METRIC.USERS, mockUserData, peopleHeaderMessage, PERIOD.THREEMONTHS, METRIC.PREVIEWS, mockPreviewData, previewHeaderMessage, PERIOD.YEAR, METRIC.DOWNLOADS, mockDownloadData, downloadHeaderMessage, PERIOD.YEAR, METRIC.USERS, mockUserData, peopleHeaderMessage, PERIOD.YEAR)('should render correct metric summary for $metric', function (_ref) {
      var data = _ref.data,
          header = _ref.header,
          metric = _ref.metric,
          period = _ref.period;
      getWrapper({
        metric: metric,
        data: data,
        period: period
      });
      expect(screen.getByText(header)).toBeVisible();
      expect(screen.getByText('20')).toBeVisible();
      expect(screen.getByText('-80%')).toBeVisible();
    });
  });
});