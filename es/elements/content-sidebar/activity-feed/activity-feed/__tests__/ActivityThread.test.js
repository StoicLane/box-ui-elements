function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        repliesTotalCount | replies\n        ", "              | ", "\n        ", "              | ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import ActivityThread from '../ActivityThread.js';
import localize from '../../../../../../test/support/i18n';
import { replies as repliesMock } from '../fixtures';
import messages from '../messages';
jest.mock('react-intl', function () {
  return jest.requireActual('react-intl');
});
describe('src/elements/content-sidebar/activity-feed/activity-feed/ActivityThread', function () {
  var Wrapper = function Wrapper(_ref) {
    var children = _ref.children;
    return React.createElement(IntlProvider, {
      locale: "en"
    }, children);
  };

  Wrapper.propTypes = {
    children: function children() {
      return (typeof (React.ReactNode == null ? {} : React.ReactNode) === "function" ? PropTypes.instanceOf(React.ReactNode == null ? {} : React.ReactNode) : PropTypes.any).apply(this, arguments);
    }
  };

  var getWrapper = function getWrapper(props) {
    var replies = cloneDeep(repliesMock);
    return render(React.createElement(ActivityThread, _extends({
      replies: replies,
      repliesTotalCount: 2,
      hasReplies: true
    }, props), "Test"), {
      wrapper: Wrapper
    });
  };

  test('should render children component wrapped in ActivityThread if hasReplies is true', function () {
    getWrapper();
    expect(screen.queryByTestId('activity-thread')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeVisible();
  });
  test('should render children component if hasReplies is false', function () {
    var _getWrapper = getWrapper({
      hasReplies: false
    }),
        getByText = _getWrapper.getByText;

    expect(screen.queryByTestId('activity-thread')).not.toBeInTheDocument();
    expect(getByText('Test')).toBeVisible();
  });
  test('should render button and call onShowReplies on click if total replies is greater than the number of replies in Feed', function () {
    var onShowReplies = jest.fn();
    var replies = [cloneDeep(repliesMock[0])];

    var _getWrapper2 = getWrapper({
      onShowReplies: onShowReplies,
      replies: replies
    }),
        getByText = _getWrapper2.getByText;

    var button = getByText(localize(messages.showReplies.id, {
      repliesToLoadCount: 1
    }));
    expect(button).toBeVisible();
    fireEvent.click(button);
    expect(onShowReplies).toBeCalled();
  });
  test('should render button and call onHideReplies on click if total replies is equal to the number of replies in Feed', function () {
    var onHideReplies = jest.fn();
    var lastReply = cloneDeep(repliesMock[repliesMock.length - 1]);

    var _getWrapper3 = getWrapper({
      onHideReplies: onHideReplies
    }),
        getByText = _getWrapper3.getByText;

    var button = getByText(localize(messages.hideReplies.id));
    expect(button).toBeVisible();
    fireEvent.click(button);
    expect(onHideReplies).toBeCalledWith(lastReply);
  });
  test.each(_templateObject(), 0, [], 1, [{
    id: 1
  }])('should not render button if repliesTotalCount = $repliesTotalCount and replies = $replies', function (_ref2) {
    var replies = _ref2.replies,
        repliesTotalCount = _ref2.repliesTotalCount;

    var _getWrapper4 = getWrapper({
      replies: replies,
      repliesTotalCount: repliesTotalCount
    }),
        queryByTestId = _getWrapper4.queryByTestId;

    expect(queryByTestId('activity-thread-button')).not.toBeInTheDocument();
  });
  test('should not render replies if there is no replies', function () {
    var _getWrapper5 = getWrapper({
      replies: []
    }),
        queryByTestId = _getWrapper5.queryByTestId;

    expect(queryByTestId('activity-thread-replies')).not.toBeInTheDocument();
  });
  test('should render LoadingIndicator and do not render button if repliesLoading is true', function () {
    var _getWrapper6 = getWrapper({
      isRepliesLoading: true
    }),
        queryByTestId = _getWrapper6.queryByTestId;

    expect(queryByTestId('activity-thread-button')).not.toBeInTheDocument();
    expect(queryByTestId('activity-thread-replies-loading')).toBeInTheDocument();
  });
  test('should NOT have reply button when onReplyCreate is not passed', function () {
    getWrapper({
      onReplyCreate: undefined
    });
    expect(screen.queryByRole('button', {
      name: localize(messages.reply.id)
    })).not.toBeInTheDocument();
  });
  test('should have reply button when onReplyCreate is passed', function () {
    getWrapper({
      onReplyCreate: function someFunction() {}
    });
    expect(screen.getByRole('button', {
      name: localize(messages.reply.id)
    })).toBeInTheDocument();
  });
  test('should disable reply button when ietm is in pending state', function () {
    getWrapper({
      isPending: true,
      onReplyCreate: jest.fn()
    });
    var replyButton = screen.getByRole('button', {
      name: localize(messages.reply.id)
    });
    expect(replyButton).toHaveAttribute('aria-disabled', 'true');
  });
});
import PropTypes from "prop-types";