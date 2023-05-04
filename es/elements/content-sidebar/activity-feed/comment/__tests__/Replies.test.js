function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        onShowReplies  | onHideReplies\n        ", " | ", "\n        ", "   | ", "\n        ", "   | ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        replyIndex\n        ", "\n        ", "\n        ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { IntlProvider } from 'react-intl';
import { ContentState, EditorState } from 'draft-js';
import { fireEvent, render, screen } from '@testing-library/react';
import { Replies } from '../BaseComment';
jest.mock('../../Avatar', function () {
  return function () {
    return 'Avatar';
  };
});
jest.mock('react-intl', function () {
  return _objectSpread({}, jest.requireActual('react-intl'));
});
var TIME_STRING_SEPT_27_2017 = '2017-09-27T10:40:41-07:00';
var TIME_STRING_SEPT_28_2017 = '2017-09-28T10:40:41-07:00';
var comment = {
  id: 1,
  type: 'comment',
  created_at: TIME_STRING_SEPT_27_2017,
  tagged_message: 'test',
  created_by: {
    name: '50 Cent',
    id: 10
  },
  permissions: {
    can_delete: true,
    can_edit: true,
    can_resolve: true
  }
};
var comment2 = {
  id: 2,
  type: 'comment',
  created_at: TIME_STRING_SEPT_27_2017,
  tagged_message: 'test 2',
  created_by: {
    name: 'Eminem',
    id: 11
  },
  permissions: {
    can_delete: true,
    can_edit: true,
    can_resolve: true
  }
};
var comment3 = {
  id: 3,
  type: 'comment',
  created_at: TIME_STRING_SEPT_28_2017,
  tagged_message: 'test 3',
  created_by: {
    name: 'Snoop Dogg',
    id: 12
  },
  permissions: {
    can_delete: true,
    can_edit: true,
    can_resolve: true
  }
};
var replies = [comment, comment2, comment3];
var currentUser = {
  name: 'testuser',
  id: 9
};
var mockUserProfileUrl = jest.fn();
var replySelect = jest.fn();
var replyCreate = jest.fn();
var showReplies = jest.fn();
var hideReplies = jest.fn();
var commentProps = {
  currentUser: currentUser,
  getAvatarUrl: jest.fn(),
  getMentionWithQuery: jest.fn(),
  getUserProfileUrl: mockUserProfileUrl,
  mentionSelectorContacts: [],
  translations: jest.fn()
};

var getWrapper = function getWrapper(props) {
  return render(React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(Replies, _extends({}, commentProps, {
    parentID: "123",
    hasReplies: true,
    isRepliesLoading: false,
    isParentPending: false,
    replies: replies,
    onReplySelect: replySelect,
    onReplyCreate: replyCreate,
    onShowReplies: showReplies,
    onHideReplies: hideReplies
  }, props))));
};

describe('elements/content-sidebar/ActivityFeed/comment/Replies', function () {
  beforeAll(function () {
    mockUserProfileUrl.mockResolvedValue('https://www.test.com/');
  });
  afterEach(function () {
    jest.restoreAllMocks();
  });
  test('should correctly render replies', function () {
    getWrapper();
    expect(screen.getByText(comment.tagged_message)).toBeVisible();
    expect(screen.getByText(comment.created_by.name)).toBeVisible();
    expect(screen.getByText(comment2.tagged_message)).toBeVisible();
    expect(screen.getByText(comment2.created_by.name)).toBeVisible();
    expect(screen.getByText(comment3.tagged_message)).toBeVisible();
    expect(screen.getByText(comment3.created_by.name)).toBeVisible();
    expect(screen.getAllByText('Sep 27, 2017').length).toBe(2);
    expect(screen.getByText('Sep 28, 2017')).toBeVisible();
    expect(screen.getByRole('button', {
      name: 'Reply'
    })).toBeVisible();
    expect(screen.queryByTestId('replies-loading')).not.toBeInTheDocument();
  });
  test('should render loading spinner with replies', function () {
    getWrapper({
      isRepliesLoading: true
    });
    expect(screen.getByText(comment.tagged_message)).toBeVisible();
    expect(screen.getByText(comment2.tagged_message)).toBeVisible();
    expect(screen.getByText(comment3.tagged_message)).toBeVisible();
    expect(screen.getByTestId('replies-loading')).toBeVisible();
  });
  test.each(_templateObject(), 0, 1, 2)("should be able to select reply #$replyIndex", function (_ref) {
    var replyIndex = _ref.replyIndex;
    getWrapper();
    expect(screen.getByText(comment.tagged_message)).toBeVisible();
    expect(screen.getByText(comment2.tagged_message)).toBeVisible();
    expect(screen.getByText(comment3.tagged_message)).toBeVisible();
    expect(screen.getAllByTestId('comment-actions-menu').length).toBe(3);
    fireEvent.click(screen.getAllByTestId('comment-actions-menu')[replyIndex]);
    expect(replySelect).toBeCalledTimes(1);
    expect(replySelect).toBeCalledWith(true);
  });
  test('should not be able to click reply if parent is pending', function () {
    getWrapper({
      isParentPending: true
    });
    var replyButton = screen.getByRole('button', {
      name: 'Reply'
    });
    expect(replyButton).toHaveAttribute('aria-disabled', 'true');
    expect(replyButton).toBeVisible();
    fireEvent.click(replyButton);
    expect(replySelect).not.toBeCalled();
  });
  test('should call onReplyCreate when reply is created', function () {
    // Mock DraftJS editor and intercept onChange since DraftJS doesn't have a value setter
    var draftjs = require('draft-js');

    draftjs.Editor = jest.fn(function (props) {
      var modifiedOnchange = function modifiedOnchange(e) {
        var text = e.target.value;
        var content = ContentState.createFromText(text);
        props.onChange(EditorState.createWithContent(content));
      };

      return React.createElement("input", {
        className: "editor",
        onChange: function onChange(e) {
          return modifiedOnchange(e);
        }
      });
    });
    getWrapper();
    var replyButton = screen.getByRole('button', {
      name: 'Reply'
    });
    expect(replyButton).toBeVisible();
    fireEvent.click(replyButton);
    expect(replySelect).toBeCalledTimes(1);
    expect(replySelect).toBeCalledWith(true);
    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'Batman'
      }
    });
    fireEvent.click(screen.getByText('Post'));
    expect(replyCreate).toBeCalledTimes(1);
    expect(replyCreate).toBeCalledWith('Batman');
  });
  test('should show Hide Replies and call onHideReplies when clicked', function () {
    getWrapper({
      repliesTotalCount: 3
    });
    expect(screen.getByTestId('replies-toggle')).toBeVisible();
    expect(screen.getByText('Hide replies')).toBeVisible();
    fireEvent.click(screen.getByText('Hide replies'));
    expect(hideReplies).toBeCalledTimes(1);
    expect(hideReplies).toBeCalledWith([comment3]);
    expect(showReplies).not.toBeCalled();
  });
  test('should show Show Replies and call onShowReplies when clicked', function () {
    var totalCount = 5;
    var countDifference = totalCount - replies.length;
    getWrapper({
      repliesTotalCount: totalCount
    });
    expect(screen.getByTestId('replies-toggle')).toBeVisible();
    expect(screen.getByText("See ".concat(countDifference, " replies"))).toBeVisible();
    expect(screen.queryByText('Hide replies')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("See ".concat(countDifference, " replies")));
    expect(showReplies).toBeCalledTimes(1);
    expect(hideReplies).not.toBeCalled();
  });
  test.each(_templateObject2(), showReplies, undefined, undefined, undefined, undefined, hideReplies)("should not show replies toggle when onShowReplies is $onShowReplies and onHideReplies is $onHideReplies", function (_ref2) {
    var onShowReplies = _ref2.onShowReplies,
        onHideReplies = _ref2.onHideReplies;
    getWrapper({
      onShowReplies: onShowReplies,
      onHideReplies: onHideReplies
    });
    expect(screen.queryByTestId('replies-toggle')).not.toBeInTheDocument();
  });
  test('should not be able to see reply button when onReplyCreate is undefined', function () {
    getWrapper({
      onReplyCreate: undefined
    });
    expect(screen.queryByRole('button', {
      name: 'Reply'
    })).not.toBeInTheDocument();
  });
});