function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentInsightsSummary from '../ContentInsightsSummary'; // @ts-ignore: no ts definition

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
var baseError = new Error('An error has occured');
describe('features/content-insights/ContentInsightsSummary', function () {
  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return render(React.createElement(ContentInsightsSummary, _extends({
      graphData: mockData,
      error: undefined,
      isLoading: false,
      onClick: jest.fn(),
      previousPeriodCount: 1,
      totalCount: 10
    }, props)));
  };

  describe('render', function () {
    test('should show the ghost state when isLoading is true', function () {
      getWrapper({
        isLoading: true
      });
      expect(screen.getByTestId('GraphCardGhostState')).toBeVisible();
      expect(screen.queryByLabelText(localize(messages.previewGraphLabel.id))).toBeNull();
    });
    test('should render correctly when isLoading is false and error is null', function () {
      getWrapper();
      expect(screen.queryByTestId('ContentAnalyticsErrorState')).toBeNull();
      expect(screen.queryByTestId('GraphCardGhostState')).toBeNull();
      expect(screen.getByLabelText(localize(messages.previewGraphLabel.id))).toBeVisible();
    });
    test('should show the error state when error exists', function () {
      getWrapper({
        error: baseError
      });
      expect(screen.getByTestId('ContentAnalyticsErrorState-text')).toBeVisible();
      expect(screen.queryByTestId('ContentAnalyticsErrorState-text--permission')).not.toBeInTheDocument();
      expect(screen.queryByTestId('GraphCardGhostState')).toBeNull();
      expect(screen.queryByLabelText(localize(messages.previewGraphLabel.id))).toBeNull();
    });
    test('should show the permission error state when error exists and is a permission error', function () {
      getWrapper({
        error: _objectSpread({}, baseError, {
          status: 403
        })
      });
      expect(screen.getByTestId('ContentAnalyticsErrorState-text--permission')).toBeVisible();
      expect(screen.queryByTestId('ContentAnalyticsErrorState-text')).not.toBeInTheDocument();
      expect(screen.queryByTestId('GraphCardGhostState')).toBeNull();
      expect(screen.queryByLabelText(localize(messages.previewGraphLabel.id))).toBeNull();
    });
    test('should call the onClick callback', function () {
      var onClick = jest.fn();
      getWrapper({
        onClick: onClick
      });
      expect(onClick).toBeCalledTimes(0);
      screen.getByRole('button').click();
      expect(onClick).toBeCalledTimes(1);
    });
  });
});