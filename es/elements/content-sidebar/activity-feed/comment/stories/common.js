function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import AnnotationActivityLinkProvider from '../../activity-feed/AnnotationActivityLinkProvider';
export var TIME_STRING_SEPT_27_2017 = '2017-09-27T10:40:41-07:00';
export var TIME_STRING_SEPT_28_2017 = '2017-09-28T10:40:41-07:00';
export var TIME_STRING_SEPT_29_2017 = '2017-09-29T10:40:41-07:00';
export var user1 = {
  name: 'William James',
  id: '10',
  type: 'user'
};
var annotationDescription = {
  created_at: TIME_STRING_SEPT_27_2017,
  created_by: user1,
  id: '11',
  message: 'hello?',
  parent: {
    id: '1',
    type: 'annotation'
  },
  type: 'reply'
};
var fileVersion1 = {
  id: '1',
  type: 'version',
  version_number: '1'
};
var fileVersion2 = {
  id: '2',
  type: 'version',
  version_number: '2'
};
var annotationPermission = {
  can_delete: true,
  can_edit: true,
  can_reply: true,
  can_resolve: true
};
var page = {
  type: 'page',
  value: 1
};
var rect = {
  fill: {
    color: 'yellow'
  },
  height: 10,
  stroke: {
    color: 'black',
    size: 1
  },
  type: 'rect',
  width: 100,
  x: 10,
  y: 10
};
var annotationTarget = {
  location: page,
  shape: rect,
  type: 'region'
};
var annotationCommentIntersection = {
  created_at: TIME_STRING_SEPT_27_2017,
  created_by: user1,
  id: '1',
  modified_at: TIME_STRING_SEPT_27_2017,
  permissions: annotationPermission,
  // I don't see tagged_message in the Annotation type, and I'm a little confused why flow isn't complaining...
  tagged_message: 'There is only one thing a philosopher can be relied upon to do, and that is to contradict other philosophers.'
};
export var annotationBase = _objectSpread({}, annotationCommentIntersection, {
  description: annotationDescription,
  file_version: fileVersion1,
  hasMention: false,
  modified_by: user1,
  target: annotationTarget,
  type: 'annotation'
});
var annotationActivityLinkProviderProps = {
  isCurrentVersion: true,
  item: annotationBase,
  onSelect: function onSelect() {
    // eslint-disable-next-line no-alert
    alert('meow');
  }
};
export var annotation = _objectSpread({
  annotationActivityLink: React.createElement(AnnotationActivityLinkProvider, annotationActivityLinkProviderProps),
  hasVersions: true
}, annotationBase, {
  item: annotationBase
});
export var annotationPreviousVersion = _objectSpread({}, annotation, {
  file_version: fileVersion2,
  annotationActivityLink: React.createElement(AnnotationActivityLinkProvider, _extends({}, annotationActivityLinkProviderProps, {
    isCurrentVersion: false,
    item: _objectSpread({}, annotationBase, {
      file_version: fileVersion1
    })
  }))
});
export var comment = _objectSpread({}, annotationCommentIntersection, {
  created_at: TIME_STRING_SEPT_27_2017,
  created_by: user1,
  file_version: 1,
  type: 'comment'
});
export var reply1 = {
  id: '2',
  type: 'comment',
  created_at: TIME_STRING_SEPT_28_2017,
  tagged_message: 'I am wiser than this man, for neither of us appears to know anything great and good; but he fancies he knows something, although he knows nothing; whereas I, as I do not know anything, so I do not fancy I do. In this trifling particular, then, I appear to be wiser than he, because I do not fancy I know what I do not know.',
  created_by: {
    name: 'Socrates',
    id: '11',
    type: 'user'
  },
  permissions: {
    can_delete: true,
    can_edit: true,
    can_resolve: false
  },
  modified_at: TIME_STRING_SEPT_28_2017
};
export var reply2 = {
  id: '3',
  type: 'comment',
  created_at: TIME_STRING_SEPT_29_2017,
  tagged_message: 'You can discover more about a person in an hour of play than in a year of conversation.',
  created_by: {
    name: 'Plato',
    id: '12',
    type: 'user'
  },
  permissions: {
    can_delete: true,
    can_edit: true,
    can_resolve: false
  },
  modified_at: TIME_STRING_SEPT_29_2017
};
export var currentUser = {
  name: 'Søren Kierkegaard',
  id: '11',
  type: 'user'
};

var replyCreate = function replyCreate() {};

var hideReplies = function hideReplies() {};

var showReplies = function showReplies() {};

export var replies = [reply1, reply2];
export var repliesProps = {
  hasReplies: true,
  onReplyCreate: replyCreate,
  replies: replies,
  onHideReplies: hideReplies,
  onShowReplies: showReplies
};
export var onSelect = function onSelect() {};
//# sourceMappingURL=common.js.map