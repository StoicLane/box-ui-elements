function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        index\n        ", "\n        ", "\n        ", "\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        modified_at                 | status\n        ", "                | ", "\n        ", "                | ", "\n        ", " | ", "\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        status        | menuItemTestId         | expectedNewStatus\n        ", "     | ", "   | ", "\n        ", " | ", " | ", "\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        activityItem  | activityItemType\n        ", "    | ", "\n        ", " | ", "\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        permissions                                                    | onEdit\n        ", " | ", "\n        ", " | ", "\n        ", "  | ", "\n        ", "  | ", "\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        permissions                                                  | onCommentEdit | showDelete | showEdit | showResolve\n        ", "   | ", "  | ", "    | ", "  | ", "\n        ", "  | ", "  | ", "    | ", " | ", "\n        ", "  | ", "  | ", "   | ", "  | ", "\n        ", "  | ", "  | ", "    | ", " | ", "\n        ", "  | ", "  | ", "   | ", "  | ", "\n        ", "   | ", "  | ", "    | ", "  | ", "\n        ", "  | ", "  | ", "    | ", "  | ", "\n        ", " | ", "  | ", "    | ", " | ", "\n        ", " | ", "  | ", "   | ", "  | ", "\n        ", " | ", "  | ", "    | ", " | ", "\n        ", " | ", "  | ", "   | ", "  | ", "\n        ", "  | ", "  | ", "    | ", "  | ", "\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        annotationType               | linkText\n        ", "                | ", "\n        ", " | ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        activityItem\n        ", "\n        ", "\n    "]);

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
import { fireEvent, render, screen } from '@testing-library/react';
import { ContentState, EditorState } from 'draft-js';
import { BaseComment } from '../BaseComment';
import { annotation, annotationPreviousVersion, comment, currentUser, reply1, reply2, replies, TIME_STRING_SEPT_27_2017, TIME_STRING_SEPT_28_2017 } from '../stories/common';
import messages from '../messages';
import localize from '../../../../../../test/support/i18n';
jest.mock('react-intl', function () {
  return _objectSpread({}, jest.requireActual('react-intl'), {
    FormattedMessage: function FormattedMessage(_ref) {
      var defaultMessage = _ref.defaultMessage;
      return React.createElement("span", null, defaultMessage);
    }
  });
});
var replyCreate = jest.fn();
var onSelect = jest.fn();
var hideReplies = jest.fn();
var showReplies = jest.fn();
var repliesProps = {
  hasReplies: true,
  onReplyCreate: replyCreate,
  replies: replies,
  onHideReplies: hideReplies,
  onShowReplies: showReplies
}; // eslint-disable-next-line import/prefer-default-export

export var getWrapper = function getWrapper(props) {
  return render(React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(BaseComment, _extends({
    id: "1"
  }, comment, {
    approverSelectorContacts: [],
    currentUser: currentUser,
    mentionSelectorContacts: [],
    onSelect: onSelect
  }, props))));
};
describe('elements/content-sidebar/ActivityFeed/comment/BaseComment', function () {
  test.each(_templateObject(), annotation, comment)("should render activity item with replies", function (_ref2) {
    var activityItem = _ref2.activityItem;
    getWrapper(_objectSpread({}, activityItem, {}, repliesProps));
    expect(screen.getByText(activityItem.tagged_message)).toBeInTheDocument();
    expect(screen.getByText(activityItem.created_by.name)).toBeInTheDocument();
    expect(screen.getByText('Sep 27, 2017')).toBeInTheDocument();
    expect(screen.getByText(reply1.tagged_message)).toBeInTheDocument();
    expect(screen.getByText(reply1.created_by.name)).toBeInTheDocument();
    expect(screen.getByText('Sep 28, 2017')).toBeInTheDocument();
    expect(screen.getByText(reply2.tagged_message)).toBeInTheDocument();
    expect(screen.getByText(reply2.created_by.name)).toBeInTheDocument();
    expect(screen.getByText('Sep 29, 2017')).toBeInTheDocument();
  });
  test('should render annotation badge when annotationActivityLink prop is defined', function () {
    getWrapper(_objectSpread({}, annotation, {}, repliesProps));
    expect(screen.getByText(localize(messages.annotationBadge.id))).toBeInTheDocument();
  });
  test.each(_templateObject2(), annotation, 'Page 1', annotationPreviousVersion, 'Version 1')("should properly render AnnotationActivityLink", function (_ref3) {
    var annotationType = _ref3.annotationType,
        linkText = _ref3.linkText;
    getWrapper(_objectSpread({}, annotationType, {}, repliesProps));
    expect(screen.getByText(linkText)).toBeInTheDocument();
  });
  test('should correctly render comment when translation is enabled', function () {
    var translations = {
      translationEnabled: true,
      onTranslate: jest.fn()
    };
    getWrapper({
      translations: translations
    });
    expect(screen.getByText(comment.tagged_message)).toBeInTheDocument();
    expect(screen.getByText(comment.created_by.name)).toBeInTheDocument();
    expect(screen.getByText('Sep 27, 2017')).toBeInTheDocument();
  });
  test('should render commenter as a link',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var getUserProfileUrl;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getUserProfileUrl = jest.fn().mockResolvedValue('https://www.test.com/');
            getWrapper({
              getUserProfileUrl: getUserProfileUrl
            });
            _context.next = 4;
            return expect(screen.getByText(comment.created_by.name)).toBeInTheDocument();

          case 4:
            _context.next = 6;
            return expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.test.com/');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test.each(_templateObject3(), {
    can_delete: true,
    can_edit: true,
    can_resolve: true
  }, jest.fn(), true, true, true, {
    can_delete: true,
    can_edit: false,
    can_resolve: true
  }, jest.fn(), true, false, true, {
    can_delete: false,
    can_edit: true,
    can_resolve: true
  }, jest.fn(), false, true, true, {
    can_delete: true,
    can_edit: false,
    can_resolve: true
  }, undefined, true, false, true, {
    can_delete: false,
    can_edit: true,
    can_resolve: true
  }, undefined, false, true, true, {
    can_delete: true,
    can_edit: true,
    can_resolve: true
  }, undefined, true, true, true, {
    can_delete: true,
    can_edit: true,
    can_resolve: false
  }, jest.fn(), true, true, false, {
    can_delete: true,
    can_edit: false,
    can_resolve: false
  }, jest.fn(), true, false, false, {
    can_delete: false,
    can_edit: true,
    can_resolve: false
  }, jest.fn(), false, true, false, {
    can_delete: true,
    can_edit: false,
    can_resolve: false
  }, undefined, true, false, false, {
    can_delete: false,
    can_edit: true,
    can_resolve: false
  }, undefined, false, true, false, {
    can_delete: true,
    can_edit: true,
    can_resolve: false
  }, undefined, true, true, false)("show menu for a comment with permissions $permissions and onCommentEdit ($onCommentEdit), should showDelete: $showDelete, showEdit: $showEdit, showResolve: $showResolve", function (_ref5) {
    var permissions = _ref5.permissions,
        onCommentEdit = _ref5.onCommentEdit,
        showDelete = _ref5.showDelete,
        showEdit = _ref5.showEdit,
        showResolve = _ref5.showResolve;
    getWrapper({
      onCommentEdit: onCommentEdit,
      permissions: permissions
    });
    var menuItem = screen.queryByTestId('comment-actions-menu');
    expect(menuItem).toBeInTheDocument();
    fireEvent.click(menuItem);
    showDelete ? expect(screen.getByTestId('delete-comment')).toBeInTheDocument() : expect(screen.queryByTestId('delete-comment')).not.toBeInTheDocument();
    showEdit ? expect(screen.getByTestId('edit-comment')).toBeInTheDocument() : expect(screen.queryByTestId('edit-comment')).not.toBeInTheDocument();
    showResolve ? expect(screen.getByTestId('resolve-comment')).toBeInTheDocument() : expect(screen.queryByTestId('resolve-comment')).not.toBeInTheDocument();
  });
  test.each(_templateObject4(), {
    can_delete: false,
    can_edit: false,
    show_resolve: false
  }, undefined, {
    can_delete: false,
    can_edit: false,
    show_resolve: false
  }, jest.fn(), {
    can_delete: false,
    can_edit: false,
    show_resolve: true
  }, undefined, {
    can_delete: false,
    can_edit: false,
    show_resolve: true
  }, jest.fn())("show not show menu for a comment with permissions $permissions and onEdit ($onEdit)", function (_ref6) {
    var permissions = _ref6.permissions,
        onEdit = _ref6.onEdit;
    getWrapper({
      onEdit: onEdit,
      permissions: permissions
    });
    var menuItem = screen.queryByTestId('comment-actions-menu');
    expect(menuItem).not.toBeInTheDocument();
    expect(screen.queryByTestId('delete-comment')).not.toBeInTheDocument();
    expect(screen.queryByTestId('edit-comment')).not.toBeInTheDocument();
  });
  test('should render unresolve menu option', function () {
    getWrapper({
      status: 'resolved'
    });
    var menuItem = screen.queryByTestId('comment-actions-menu');
    expect(menuItem).toBeInTheDocument();
    fireEvent.click(menuItem);
    expect(screen.getByTestId('unresolve-comment')).toBeInTheDocument();
    expect(screen.queryByTestId('resolve-comment')).not.toBeInTheDocument();
  });
  test('should not show actions menu when comment is pending', function () {
    getWrapper({
      isPending: true
    });
    var menuItem = screen.queryByTestId('comment-actions-menu');
    expect(menuItem).not.toBeInTheDocument();
  });
  test.each(_templateObject5(), comment, 'comment', annotation, 'annotation')('should allow user to edit if they have edit permissions on the $activityItemType and edit handler is defined',
  /*#__PURE__*/
  function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(_ref8) {
      var activityItem, activityItemType, mockOnCommentEdit, mockOnAnnotationEdit, isComment, isAnnotation, menuItem;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              activityItem = _ref8.activityItem, activityItemType = _ref8.activityItemType;
              mockOnCommentEdit = jest.fn();
              mockOnAnnotationEdit = jest.fn();
              isComment = activityItemType === 'comment';
              isAnnotation = activityItemType === 'annotation';
              getWrapper(_objectSpread({}, activityItem, {
                onCommentEdit: isComment ? mockOnCommentEdit : undefined,
                onAnnotationEdit: isAnnotation ? mockOnAnnotationEdit : undefined
              }));
              menuItem = screen.queryByTestId('comment-actions-menu');
              fireEvent.click(menuItem);
              expect(screen.getByTestId('edit-comment')).toBeInTheDocument();
              fireEvent.click(screen.getByTestId('edit-comment'));
              expect(screen.queryByTestId('edit-comment')).not.toBeInTheDocument();
              expect(screen.getByTestId('bcs-CommentForm-body')).toBeInTheDocument();
              _context2.next = 14;
              return fireEvent.click(screen.getByRole('button', {
                name: 'Post'
              }));

            case 14:
              if (isComment) {
                expect(mockOnCommentEdit).toBeCalledWith({
                  hasMention: false,
                  id: '1',
                  permissions: {
                    can_delete: true,
                    can_edit: true,
                    can_resolve: true,
                    can_reply: true
                  },
                  text: comment.tagged_message
                });
                expect(mockOnAnnotationEdit).not.toBeCalled();
              }

              if (isAnnotation) {
                expect(mockOnAnnotationEdit).toBeCalledWith({
                  id: '1',
                  permissions: {
                    can_delete: true,
                    can_edit: true,
                    can_resolve: true,
                    can_reply: true
                  },
                  text: comment.tagged_message
                });
                expect(mockOnCommentEdit).not.toBeCalled();
              }

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref7.apply(this, arguments);
    };
  }());
  test.each(_templateObject6(), 'open', 'resolve-comment', 'resolved', 'resolved', 'unresolve-comment', 'open')("should allow user to resolve / unresolve if they have resolve permissions, edit handler is defined and given status is $status", function (_ref9) {
    var status = _ref9.status,
        menuItemTestId = _ref9.menuItemTestId,
        expectedNewStatus = _ref9.expectedNewStatus;
    var mockOnEdit = jest.fn();
    getWrapper({
      hasMention: false,
      permissions: {
        can_resolve: true,
        can_edit: false,
        can_delete: false
      },
      type: 'task',
      status: status,
      onCommentEdit: mockOnEdit
    });
    var menuItem = screen.queryByTestId('comment-actions-menu');
    fireEvent.click(menuItem);
    expect(screen.getByTestId(menuItemTestId)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId(menuItemTestId));
    expect(screen.queryByTestId(menuItemTestId)).not.toBeInTheDocument();
    expect(mockOnEdit).toBeCalledWith({
      hasMention: false,
      id: '1',
      permissions: {
        can_delete: false,
        can_edit: false,
        can_resolve: true
      },
      status: expectedNewStatus
    });
  });
  test('should render an error when one is defined', function () {
    getWrapper({
      error: {
        title: {
          defaultMessage: 'Test Error'
        },
        message: {
          defaultMessage: 'An error has occurred.'
        }
      }
    });
    expect(screen.getByText(comment.tagged_message)).toBeInTheDocument();
    expect(screen.getByText(comment.created_by.name)).toBeInTheDocument();
    expect(screen.getByText('Sep 27, 2017')).toBeInTheDocument();
    expect(screen.getByText('Test Error')).toBeInTheDocument();
    expect(screen.getByText('An error has occurred.')).toBeInTheDocument();
  });
  test('should render an error cta when an action is defined', function () {
    var onAction = jest.fn();
    getWrapper({
      error: {
        title: {
          defaultMessage: 'Test Error'
        },
        message: {
          defaultMessage: 'An error has occurred.'
        },
        action: {
          text: 'Action Button',
          onAction: onAction
        }
      }
    });
    expect(screen.getByText(comment.tagged_message)).toBeInTheDocument();
    expect(screen.getByText('Test Error')).toBeInTheDocument();
    expect(screen.getByText('An error has occurred.')).toBeInTheDocument();
    expect(screen.getByText('Action Button')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Action Button'));
    expect(onAction).toHaveBeenCalledTimes(1);
  });
  test('should show edited in ActivityMessage', function () {
    getWrapper({
      modified_at: TIME_STRING_SEPT_28_2017,
      status: 'open'
    });
    expect(screen.getByText('\\ (edited)')).toBeInTheDocument();
  });
  test.each(_templateObject7(), undefined, 'open', undefined, 'resolved', TIME_STRING_SEPT_27_2017, 'resolved')("given modified_at = $modified_at and status = $status, edited should not be shown in ActivityMessage", function (_ref10) {
    var modified_at = _ref10.modified_at,
        status = _ref10.status;
    getWrapper({
      modified_at: modified_at,
      status: status
    });
    expect(screen.queryByText('\\ (edited)')).not.toBeInTheDocument();
  });
  test.each(_templateObject8(), 0, 1, 2)("should call onSelect when More Options is clicked for comment/reply #$index", function (_ref11) {
    var index = _ref11.index;
    getWrapper(_objectSpread({}, repliesProps));
    expect(screen.getByText(comment.tagged_message)).toBeInTheDocument();
    fireEvent.click(screen.getByText(comment.tagged_message));
    expect(onSelect).not.toBeCalled();
    expect(screen.getAllByTestId('comment-actions-menu').length).toBe(3);
    fireEvent.click(screen.getAllByTestId('comment-actions-menu')[index]);
    expect(onSelect).toBeCalledTimes(1);
    expect(onSelect).toBeCalledWith(true);
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
    getWrapper(_objectSpread({}, repliesProps));
    var replyButton = screen.getByRole('button', {
      name: 'Reply'
    });
    expect(replyButton).toBeVisible();
    fireEvent.click(replyButton);
    expect(onSelect).toBeCalledTimes(1);
    expect(onSelect).toBeCalledWith(true);
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
    getWrapper(_objectSpread({}, repliesProps, {
      repliesTotalCount: 2
    }));
    expect(screen.getByText('Hide replies')).toBeVisible();
    fireEvent.click(screen.getByText('Hide replies'));
    expect(hideReplies).toBeCalledTimes(1);
    expect(hideReplies).toBeCalledWith([reply2]);
    expect(showReplies).not.toBeCalled();
  });
  test('should show Show Replies and call onShowReplies when clicked', function () {
    var totalCount = 5;
    getWrapper(_objectSpread({}, repliesProps, {
      repliesTotalCount: totalCount
    })); // react-intl mocking problem with variables

    expect(screen.getByText(/See/i)).toBeVisible();
    expect(screen.queryByText('Hide replies')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText(/See/i));
    expect(showReplies).toBeCalledTimes(1);
    expect(hideReplies).not.toBeCalled();
  });
});