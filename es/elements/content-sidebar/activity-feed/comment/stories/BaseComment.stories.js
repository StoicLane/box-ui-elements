function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { BaseComment } from '../BaseComment';
import { annotation, annotationPreviousVersion, comment, currentUser, onSelect, repliesProps } from './common';
import { COMMENT_STATUS_RESOLVED } from '../../../../../constants';

var getTemplate = function getTemplate(customProps) {
  return function (props) {
    return React.createElement(IntlProvider, {
      locale: "en"
    }, React.createElement(BaseComment, _extends({
      id: "123",
      approverSelectorContacts: [],
      currentUser: currentUser,
      mentionSelectorContacts: [],
      onSelect: onSelect
    }, repliesProps, props, customProps)));
  };
};

export var Comment = getTemplate(_objectSpread({}, comment));
export var Annotation = getTemplate(_objectSpread({}, annotation));
export var isDisabled = getTemplate(_objectSpread({}, annotation, {
  isDisabled: true
}));
export var isPending = getTemplate(_objectSpread({}, annotation, {
  isPending: true
}));
export var RepliesLoading = getTemplate(_objectSpread({}, annotation, {
  isRepliesLoading: true,
  replies: []
}));
export var StatusResolved = getTemplate(_objectSpread({}, annotation, {
  status: COMMENT_STATUS_RESOLVED
}));
export var PreviousVersion = getTemplate(_objectSpread({}, annotationPreviousVersion));
export default {
  title: 'Components|BaseComment',
  component: BaseComment
};
//# sourceMappingURL=BaseComment.stories.js.map