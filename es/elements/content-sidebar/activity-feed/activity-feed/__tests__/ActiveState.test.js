function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        hasNewThreadedReplies | component\n        ", "               | ", "\n        ", "              | ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        currentFileVersionId | isCurrentVersion\n        ", "             | ", "\n        ", "             | ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { shallow } from 'enzyme';
import ActiveState from '../ActiveState';
import AnnotationActivity from '../../annotations';
import { FEED_ITEM_TYPE_ANNOTATION, FEED_ITEM_TYPE_APP_ACTIVITY, FEED_ITEM_TYPE_COMMENT, FEED_ITEM_TYPE_TASK, FEED_ITEM_TYPE_VERSION } from '../../../../../constants';
var currentUser = {
  id: 'user_123445',
  name: 'Rihanna'
};
var otherUser = {
  name: 'Akon',
  id: 11
};
var annotation = {
  type: FEED_ITEM_TYPE_ANNOTATION,
  id: 'anno_123',
  created_at: '2018-07-03T14:43:52-07:00',
  description: {
    message: 'This is an annotation'
  },
  file_version: {
    id: '123'
  },
  target: {
    location: {
      type: 'page',
      value: 1
    },
    type: 'region'
  },
  created_by: currentUser
};
var comment = {
  type: FEED_ITEM_TYPE_COMMENT,
  id: 'c_123',
  created_at: '2018-07-03T14:43:52-07:00',
  tagged_message: 'test @[123:Jeezy] @[10:Kanye West]',
  created_by: otherUser
};
var fileVersion = {
  type: FEED_ITEM_TYPE_VERSION,
  id: 'f_123',
  created_at: '2018-07-03T14:43:52-07:00',
  trashed_at: '2018-07-03T14:43:52-07:00',
  modified_at: '2018-07-03T14:43:52-07:00',
  modified_by: otherUser
};
var taskWithAssignment = {
  type: FEED_ITEM_TYPE_TASK,
  id: 't_345',
  created_at: '2018-07-03T14:43:52-07:00',
  created_by: {
    target: otherUser
  },
  modified_at: '2018-07-03T14:43:52-07:00',
  description: 'test',
  due_at: '2018-07-03T14:43:52-07:00',
  assigned_to: {
    entries: [{
      id: 'ta_123',
      permissions: {
        can_delete: true,
        can_update: true
      },
      role: 'ASSIGNEE',
      status: 'NOT_STARTED',
      target: otherUser,
      type: 'task_collaborator'
    }],
    limit: 20,
    next_marker: null
  },
  status: 'NOT_STARTED',
  permissions: {
    can_create_task_collaborator: true,
    can_create_task_link: true,
    can_delete: true,
    can_update: true
  },
  task_type: 'GENERAL',
  task_links: {
    entries: [{
      target: {
        id: 'f_123',
        type: 'file'
      }
    }]
  }
};
var appActivity = {
  activity_template: {
    id: 'template_09887654'
  },
  app: {
    id: 'app_123456',
    icon_url: 'foo.jpg',
    name: 'My App'
  },
  created_at: '2018-07-03T14:43:52-07:00',
  created_by: {
    id: 'user_12345567'
  },
  id: 'app_activity_12344556',
  permissions: {
    can_delete: true
  },
  rendered_text: 'this is text and a <a>link</a>',
  type: FEED_ITEM_TYPE_APP_ACTIVITY,
  currentUser: currentUser
};
var activityFeedError = {
  title: 't',
  content: 'm'
};

var getShallowWrapper = function getShallowWrapper() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(React.createElement(ActiveState, _extends({
    items: [annotation, comment, fileVersion, taskWithAssignment, appActivity],
    currentUser: currentUser,
    currentFileVersionId: "123",
    onAnnotationSelect: function onAnnotationSelect() {
      return null;
    }
  }, params)));
};

describe('elements/content-sidebar/ActiveState/activity-feed/ActiveState', function () {
  test('should render empty state', function () {
    var wrapper = getShallowWrapper({
      items: []
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should render items', function () {
    var wrapper = getShallowWrapper().dive();
    expect(wrapper).toMatchSnapshot();
  });
  test('should render card for item type', function () {
    var wrapper = getShallowWrapper().dive();
    expect(wrapper.find('[data-testid="comment"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="version"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="task"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="app-activity"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="annotation-activity"]')).toHaveLength(1);
  });
  test('should correctly render ActivityThread for annotations and comments if has replies', function () {
    var wrapper = getShallowWrapper({
      hasReplies: true
    }).dive();
    expect(wrapper.find('[data-testid="activity-thread"]')).toHaveLength(2);
  });
  test('should correctly render with an inline error if some feed items fail to fetch', function () {
    var wrapper = getShallowWrapper({
      inlineError: activityFeedError,
      items: []
    });
    expect(wrapper).toMatchSnapshot();
  });
  test.each(_templateObject(), '123', true, '456', false)('should correctly reflect annotation activity isCurrentVersion as $isCurrentVersion based on file version id as $currentFileVersionId', function (_ref) {
    var currentFileVersionId = _ref.currentFileVersionId,
        isCurrentVersion = _ref.isCurrentVersion;
    var wrapper = getShallowWrapper({
      currentFileVersionId: currentFileVersionId
    });
    expect(wrapper.dive().find(AnnotationActivity).prop('isCurrentVersion')).toBe(isCurrentVersion);
  });
  test.each(_templateObject2(), true, 'BaseComment', false, 'Comment')('should show $component when hasNewThreadedReplies is $hasNewThreadedReplies', function (_ref2) {
    var hasNewThreadedReplies = _ref2.hasNewThreadedReplies;
    var wrapper = getShallowWrapper({
      hasNewThreadedReplies: hasNewThreadedReplies
    }).dive();
    expect(wrapper.find('BaseComment')).toHaveLength(hasNewThreadedReplies ? 2 : 0);
    expect(wrapper.find('Comment')).toHaveLength(hasNewThreadedReplies ? 0 : 1);
    expect(wrapper.find('AnnotationActivity')).toHaveLength(hasNewThreadedReplies ? 0 : 1);
  });
});