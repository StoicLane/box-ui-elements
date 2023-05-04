function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from '@testing-library/react';
import ActivityThreadReplies from '../ActivityThreadReplies.js';
import { replies } from '../fixtures';
describe('src/elements/content-sidebar/activity-feed/activity-feed/ActivityThreadReplies', function () {
  var getWrapper = function getWrapper(props) {
    return render(React.createElement(ActivityThreadReplies, _extends({
      replies: replies,
      isExpanded: false
    }, props)));
  };

  test('should render all replies', function () {
    var _getWrapper = getWrapper(),
        queryByText = _getWrapper.queryByText;

    expect(queryByText(replies[1].message)).toBeVisible();
    expect(queryByText(replies[0].message)).toBeVisible();
  });
  test('should render loading indicator if isRepliesLoading is true', function () {
    var _getWrapper2 = getWrapper({
      isRepliesLoading: true
    }),
        queryByTestId = _getWrapper2.queryByTestId;

    expect(queryByTestId('activity-thread-replies-loading')).toBeInTheDocument();
  });
  test('should not render loading indicator if isRepliesLoading is false', function () {
    var _getWrapper3 = getWrapper({
      isRepliesLoading: false
    }),
        queryByTestId = _getWrapper3.queryByTestId;

    expect(queryByTestId('activity-thread-replies-loading')).not.toBeInTheDocument();
  });
});