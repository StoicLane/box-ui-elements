function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { IntlProvider } from 'react-intl';
import { render, fireEvent } from '@testing-library/react';
import contentInsightsMessages from '../../../features/content-insights/messages'; // @ts-ignore Module is written in Flow

import localize from '../../../../test/support/i18n'; // @ts-ignore Module is written in Flow

import messages from '../../common/messages';
import SidebarContentInsights from '../SidebarContentInsights';
jest.unmock('react-intl');
describe('elements/content-sidebar/SidebarContentInsights', function () {
  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return render(React.createElement(SidebarContentInsights, _extends({
      contentInsights: {
        graphData: [],
        isLoading: true,
        previousPeriodCount: 0,
        totalCount: 0
      },
      onContentInsightsClick: jest.fn()
    }, props)), {
      wrapper: function wrapper(_ref) {
        var children = _ref.children;
        return React.createElement(IntlProvider, {
          locale: "en-US"
        }, children);
      }
    });
  };

  describe('render()', function () {
    test('should render correctly', function () {
      var wrapper = getWrapper();
      expect(wrapper.getByText(localize(messages.sidebarContentInsights.id))).toBeVisible();
      expect(wrapper.queryByTestId('ContentAnalyticsErrorState-image')).toBe(null);
    });
    test('should call click handler when ContentInsightsSummary button is clicked', function () {
      var onContentInsightsClick = jest.fn();
      var wrapper = getWrapper({
        contentInsights: {
          graphData: [],
          isLoading: false,
          previousPeriodCount: 0,
          totalCount: 0
        },
        onContentInsightsClick: onContentInsightsClick
      });
      fireEvent.click(wrapper.getByText(localize(contentInsightsMessages.openContentInsightsButton.id)));
      expect(onContentInsightsClick).toBeCalledTimes(1);
    });
    test('should render error state', function () {
      var contentInsights = {
        error: new Error()
      };
      var wrapper = getWrapper({
        contentInsights: contentInsights
      });
      expect(wrapper.getByTestId('ContentAnalyticsErrorState-image')).toBeVisible();
    });
  });
});