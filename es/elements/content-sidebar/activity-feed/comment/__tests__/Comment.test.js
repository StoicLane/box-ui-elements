function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        created_at                  | modified_at                 | status        | expectedIsEdited\n        ", " | ", "                | ", "     | ", "\n        ", " | ", " | ", "     | ", "\n        ", " | ", " | ", "     | ", "\n        ", " | ", "                | ", " | ", "\n        ", " | ", " | ", " | ", "\n        ", " | ", " | ", " | ", "\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        status        | menuItemTestId         | expectedNewStatus\n        ", "     | ", "   | ", "\n        ", " | ", " | ", "\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        status        | expectedResolveMenuExistance | expectedUnresolvedMenuExistance\n        ", "     | ", "                      | ", "\n        ", " | ", "                     | ", "\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        can_resolve | onEdit       | expectedResolveMenuExistance\n        ", "    | ", "      | ", "\n        ", "    | ", " | ", "\n        ", "     | ", "      | ", "\n        ", "     | ", " | ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        permissions                               | onEdit       | showMenu | showDelete | showEdit\n        ", "  | ", " | ", "  | ", "    | ", "\n        ", "  | ", " | ", "  | ", "   | ", "\n        ", "  | ", " | ", " | ", "   | ", "\n        ", " | ", " | ", " | ", "   | ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { mount, shallow } from 'enzyme';
import noop from 'lodash/noop';
import Comment from '../Comment';
import CommentForm from '../../comment-form/CommentForm';
import { FEED_ITEM_TYPE_TASK } from '../../../../../constants';
jest.mock('../../Avatar', function () {
  return function () {
    return 'Avatar';
  };
});
var currentUser = {
  name: 'testuser',
  id: 11
};
var approverSelectorContacts = [];
var mentionSelectorContacts = [];
var TIME_STRING_SEPT_27_2017 = '2017-09-27T10:40:41-07:00';
var TIME_STRING_SEPT_28_2017 = '2017-09-28T10:40:41-07:00';
var allHandlers = {
  tasks: {
    edit: jest.fn()
  },
  contacts: {
    getApproverWithQuery: jest.fn(),
    getMentionWithQuery: jest.fn()
  }
};
describe('elements/content-sidebar/ActivityFeed/comment/Comment', function () {
  beforeEach(function () {
    CommentForm.default = jest.fn().mockReturnValue(React.createElement("div", null));
  });
  test('should correctly render comment', function () {
    var unixTime = new Date(TIME_STRING_SEPT_27_2017).getTime();
    var comment = {
      created_at: TIME_STRING_SEPT_27_2017,
      tagged_message: 'test',
      created_by: {
        name: '50 Cent',
        id: 10
      },
      permissions: {
        can_delete: true,
        can_edit: true
      }
    };
    var wrapper = shallow(React.createElement(Comment, _extends({
      id: "123"
    }, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts
    }))); // validating that the Tooltip and the comment posted time are properly set

    expect(wrapper.find('ActivityTimestamp').prop('date')).toEqual(unixTime);
    expect(wrapper).toMatchSnapshot();
  });
  test('should correctly render comment when translation is enabled', function () {
    var translations = {
      translationEnabled: true,
      onTranslate: jest.fn()
    };
    var comment = {
      created_at: TIME_STRING_SEPT_27_2017,
      tagged_message: 'test',
      created_by: {
        name: '50 Cent',
        id: 10
      }
    };
    var wrapper = shallow(React.createElement(Comment, _extends({
      id: "123"
    }, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts,
      translations: translations
    })));
    expect(wrapper).toMatchSnapshot();
  });
  test('should render commenter as a link', function () {
    var comment = {
      created_at: TIME_STRING_SEPT_27_2017,
      tagged_message: 'test',
      created_by: {
        name: '50 Cent',
        id: 10
      }
    };
    var wrapper = shallow(React.createElement(Comment, _extends({
      id: "123"
    }, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts
    })));
    expect(wrapper).toMatchSnapshot();
  });
  test.each(_templateObject(), {
    can_delete: true,
    can_edit: false
  }, jest.fn(), true, true, false, {
    can_delete: false,
    can_edit: true
  }, jest.fn(), true, false, true, {
    can_delete: false,
    can_edit: true
  }, undefined, false, false, false, {
    can_delete: false,
    can_edit: false
  }, jest.fn(), false, false, false)("for a comment with permissions $permissions and onEdit ($onEdit), should showMenu: $showMenu, showDelete: $showDelete, showEdit: $showEdit", function (_ref) {
    var permissions = _ref.permissions,
        onEdit = _ref.onEdit,
        showMenu = _ref.showMenu,
        showDelete = _ref.showDelete,
        showEdit = _ref.showEdit;
    var comment = {
      created_at: TIME_STRING_SEPT_27_2017,
      tagged_message: 'test',
      created_by: {
        name: '50 Cent',
        id: 10
      }
    };
    var wrapper = shallow(React.createElement(Comment, _extends({
      id: "123"
    }, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts,
      onDelete: jest.fn(),
      onEdit: onEdit,
      permissions: permissions
    })));
    expect(wrapper.find('[data-testid="delete-comment"]').length).toEqual(showDelete ? 1 : 0);
    expect(wrapper.find('[data-testid="edit-comment"]').length).toEqual(showEdit ? 1 : 0);
    expect(wrapper.find('[data-testid="comment-actions-menu"]').length).toEqual(showMenu ? 1 : 0);
  });
  test.each(_templateObject2(), false, noop, false, false, jest.fn(), false, true, noop, false, true, jest.fn(), true)("given can_resolve permission = $can_resolve and onEdit prop = $onEdit, resolve menu existance should be: $expectedResolveMenuExistance", function (_ref2) {
    var can_resolve = _ref2.can_resolve,
        onEdit = _ref2.onEdit,
        expectedResolveMenuExistance = _ref2.expectedResolveMenuExistance;
    var comment = {
      created_at: TIME_STRING_SEPT_27_2017,
      created_by: {
        name: '50 Cent',
        id: 10
      },
      id: '123',
      status: 'open',
      tagged_message: 'test'
    };
    var wrapper = shallow(React.createElement(Comment, _extends({}, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts,
      onDelete: jest.fn(),
      onEdit: onEdit,
      permissions: {
        can_resolve: can_resolve
      }
    })));
    expect(wrapper.find('[data-testid="resolve-comment"]').exists()).toBe(expectedResolveMenuExistance);
  });
  test.each(_templateObject3(), 'open', true, false, 'resolved', false, true)("given status = $status, resolve menu existance should be: $expectedResolveMenuExistance and unresolve menu existance should be: $expectedUnresolvedMenuExistance", function (_ref3) {
    var status = _ref3.status,
        expectedResolveMenuExistance = _ref3.expectedResolveMenuExistance,
        expectedUnresolvedMenuExistance = _ref3.expectedUnresolvedMenuExistance;
    var comment = {
      created_at: TIME_STRING_SEPT_27_2017,
      created_by: {
        name: '50 Cent',
        id: 10
      },
      id: '123',
      permissions: {
        can_resolve: true
      },
      tagged_message: 'test',
      status: status
    };
    var wrapper = shallow(React.createElement(Comment, _extends({}, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts,
      onDelete: jest.fn(),
      onEdit: jest.fn()
    })));
    expect(wrapper.find('[data-testid="resolve-comment"]').exists()).toBe(expectedResolveMenuExistance);
    expect(wrapper.find('[data-testid="unresolve-comment"]').exists()).toBe(expectedUnresolvedMenuExistance);
  });
  test('should not show actions menu when comment is pending', function () {
    var comment = {
      created_at: TIME_STRING_SEPT_27_2017,
      tagged_message: 'test',
      created_by: {
        name: '50 Cent',
        id: 10
      },
      permissions: {
        can_delete: true
      },
      isPending: true
    };
    var wrapper = shallow(React.createElement(Comment, _extends({
      id: "123"
    }, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts,
      onDelete: jest.fn()
    })));
    expect(wrapper.find('[data-testid="comment-actions-menu"]').length).toEqual(0);
  });
  test('should allow user to edit if they have edit permissions on the task and edit handler is defined', function () {
    var comment = {
      created_at: TIME_STRING_SEPT_27_2017,
      tagged_message: 'test',
      created_by: {
        name: '50 Cent',
        id: 10
      },
      type: FEED_ITEM_TYPE_TASK,
      permissions: {
        can_edit: true,
        can_delete: true
      }
    };
    var mockOnEdit = jest.fn();
    var mockOnSelect = jest.fn();
    var wrapper = mount(React.createElement(Comment, _extends({
      id: "123"
    }, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts,
      onEdit: mockOnEdit,
      onSelect: mockOnSelect
    })));
    var instance = wrapper.instance();
    expect(wrapper.find('CommentForm').length).toEqual(0);
    expect(wrapper.find('ActivityMessage').length).toEqual(1);
    expect(wrapper.state('isEditing')).toBe(false);
    expect(wrapper.state('isEditing')).toBe(false);
    wrapper.find('button[data-testid="comment-actions-menu"]').simulate('click');
    wrapper.find('MenuItem[data-testid="edit-comment"]').simulate('click');
    wrapper.update();
    expect(wrapper.find('ActivityMessage').length).toEqual(0);
    expect(wrapper.state('isEditing')).toBe(true);
    instance.commentFormFocusHandler();
    expect(wrapper.state('isInputOpen')).toBe(true);
    var updateMessagePayload = {
      id: '000',
      hasMention: true,
      text: 'updated message'
    };
    instance.handleMessageUpdate(updateMessagePayload);
    expect(wrapper.state('isEditing')).toBe(false);
    expect(wrapper.state('isInputOpen')).toBe(false);
    expect(mockOnEdit).toHaveBeenCalledWith({
      hasMention: updateMessagePayload.hasMention,
      id: updateMessagePayload.id,
      permissions: comment.permissions,
      text: updateMessagePayload.text
    });
  });
  test.each(_templateObject4(), 'open', 'resolve-comment', 'resolved', 'resolved', 'unresolve-comment', 'open')("should allow user to resolve / unresolve if they have resolve permissions, edit handler is defined and given status is $status", function (_ref4) {
    var status = _ref4.status,
        menuItemTestId = _ref4.menuItemTestId,
        expectedNewStatus = _ref4.expectedNewStatus;
    var comment = {
      created_at: TIME_STRING_SEPT_27_2017,
      created_by: {
        name: '50 Cent',
        id: 10
      },
      hasMention: false,
      id: '123',
      permissions: {
        can_resolve: true,
        can_edit: false,
        can_delete: false
      },
      tagged_message: 'test',
      type: FEED_ITEM_TYPE_TASK
    };
    var onEdit = jest.fn();
    var onSelect = jest.fn();
    var wrapper = mount(React.createElement(Comment, _extends({}, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts,
      onEdit: onEdit,
      onSelect: onSelect,
      status: status
    })));
    wrapper.find('button[data-testid="comment-actions-menu"]').simulate('click');
    wrapper.find("MenuItem[data-testid=\"".concat(menuItemTestId, "\"]")).simulate('click');
    expect(onEdit).toBeCalledWith({
      hasMention: comment.hasMention,
      id: comment.id,
      permissions: comment.permissions,
      status: expectedNewStatus
    });
  });
  test('should render an error when one is defined', function () {
    var comment = {
      created_at: TIME_STRING_SEPT_27_2017,
      tagged_message: 'test',
      created_by: {
        name: '50 Cent',
        id: 10
      }
    };
    var wrapper = shallow(React.createElement(Comment, _extends({
      id: "123"
    }, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      error: {
        title: 'error',
        message: 'errorrrrr'
      },
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts,
      onDelete: jest.fn()
    })));
    expect(wrapper).toMatchSnapshot();
  });
  test('should render an error cta when an action is defined', function () {
    var comment = {
      created_at: TIME_STRING_SEPT_27_2017,
      tagged_message: 'test',
      created_by: {
        name: '50 Cent',
        id: 10
      }
    };
    var onActionSpy = jest.fn();
    var wrapper = mount(React.createElement(Comment, _extends({
      id: "123"
    }, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      error: {
        title: 'error',
        message: 'errorrrrr',
        action: {
          text: 'click',
          onAction: onActionSpy
        }
      },
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts,
      onDelete: jest.fn()
    })));
    var inlineErrorActionLink = wrapper.find('InlineError').find('button.bcs-ActivityError-action');
    expect(inlineErrorActionLink.length).toEqual(1);
    inlineErrorActionLink.simulate('click');
    expect(onActionSpy).toHaveBeenCalledTimes(1);
  });
  test.each(_templateObject5(), TIME_STRING_SEPT_27_2017, undefined, 'open', false, TIME_STRING_SEPT_27_2017, TIME_STRING_SEPT_27_2017, 'open', false, TIME_STRING_SEPT_27_2017, TIME_STRING_SEPT_28_2017, 'open', true, TIME_STRING_SEPT_27_2017, undefined, 'resolved', false, TIME_STRING_SEPT_27_2017, TIME_STRING_SEPT_27_2017, 'resolved', false, TIME_STRING_SEPT_27_2017, TIME_STRING_SEPT_28_2017, 'resolved', false)("given created_at = $created_at, modified_at = $modified_at and status = $status, isEdited prop on ActivityMessage should be: $expectedIsEdited", function (_ref5) {
    var created_at = _ref5.created_at,
        modified_at = _ref5.modified_at,
        status = _ref5.status,
        expectedIsEdited = _ref5.expectedIsEdited;
    var comment = {
      created_at: created_at,
      modified_at: modified_at,
      tagged_message: 'test',
      created_by: {
        name: '50 Cent',
        id: 10
      },
      permissions: {
        can_delete: true,
        can_edit: true
      }
    };
    var wrapper = shallow(React.createElement(Comment, _extends({
      id: "123"
    }, comment, {
      approverSelectorContacts: approverSelectorContacts,
      currentUser: currentUser,
      handlers: allHandlers,
      mentionSelectorContacts: mentionSelectorContacts,
      status: status
    })));
    expect(wrapper.find('ForwardRef(withFeatureConsumer(ActivityMessage))').prop('isEdited')).toEqual(expectedIsEdited);
  });
});