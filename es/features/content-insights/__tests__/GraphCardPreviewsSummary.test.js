function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import GraphCardPreviewsSummary from '../GraphCardPreviewsSummary'; // @ts-ignore: No ts definition

import localize from '../../../../test/support/i18n';
import messages from '../messages';
var mockData = [{
  start: 1,
  previewsCount: 0,
  type: 'day'
}, {
  start: 2,
  previewsCount: 0,
  type: 'day'
}, {
  start: 3,
  previewsCount: 0,
  type: 'day'
}, {
  start: 4,
  previewsCount: 0,
  type: 'day'
}, {
  start: 5,
  previewsCount: 0,
  type: 'day'
}, {
  start: 6,
  previewsCount: 1,
  type: 'day'
}, {
  start: 7,
  previewsCount: 1,
  type: 'day'
}];
describe('features/content-insights/GraphCardPreviewsSummary', function () {
  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return render(React.createElement(GraphCardPreviewsSummary, _extends({
      graphData: mockData,
      previousPeriodCount: 1,
      totalCount: 10
    }, props)));
  };

  describe('render()', function () {
    test('should render correctly', function () {
      getWrapper();
      expect(screen.getByLabelText(localize(messages.previewGraphLabel.id))).toBeVisible();
      expect(screen.getByText('2')).toBeVisible(); // current period count

      expect(screen.getByText('10')).toBeVisible(); // total count

      expect(screen.getByText('100%')).toBeVisible(); // trend
    });
  });
});