function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Comment from '../comment';
import LoadingIndicator from '../../../../components/loading-indicator';
import { BaseComment } from '../comment/BaseComment';
import './ActivityThreadReplies.scss';

var ActivityThreadReplies = function ActivityThreadReplies(_ref) {
  var currentUser = _ref.currentUser,
      getAvatarUrl = _ref.getAvatarUrl,
      getMentionWithQuery = _ref.getMentionWithQuery,
      getUserProfileUrl = _ref.getUserProfileUrl,
      _ref$hasNewThreadedRe = _ref.hasNewThreadedReplies,
      hasNewThreadedReplies = _ref$hasNewThreadedRe === void 0 ? false : _ref$hasNewThreadedRe,
      isRepliesLoading = _ref.isRepliesLoading,
      mentionSelectorContacts = _ref.mentionSelectorContacts,
      onDelete = _ref.onDelete,
      onEdit = _ref.onEdit,
      onSelect = _ref.onSelect,
      replies = _ref.replies,
      translations = _ref.translations;

  var getReplyPermissions = function getReplyPermissions(reply) {
    var _reply$permissions = reply.permissions;
    _reply$permissions = _reply$permissions === void 0 ? {} : _reply$permissions;
    var _reply$permissions$ca = _reply$permissions.can_delete,
        can_delete = _reply$permissions$ca === void 0 ? false : _reply$permissions$ca,
        _reply$permissions$ca2 = _reply$permissions.can_edit,
        can_edit = _reply$permissions$ca2 === void 0 ? false : _reply$permissions$ca2,
        _reply$permissions$ca3 = _reply$permissions.can_resolve,
        can_resolve = _reply$permissions$ca3 === void 0 ? false : _reply$permissions$ca3;
    return {
      can_delete: can_delete,
      can_edit: can_edit,
      can_resolve: can_resolve
    };
  };

  var renderComment = function renderComment(reply) {
    if (hasNewThreadedReplies) {
      return React.createElement(BaseComment, _extends({
        key: "".concat(reply.type).concat(reply.id)
      }, reply, {
        currentUser: currentUser,
        getAvatarUrl: getAvatarUrl,
        getMentionWithQuery: getMentionWithQuery,
        getUserProfileUrl: getUserProfileUrl,
        mentionSelectorContacts: mentionSelectorContacts,
        onDelete: onDelete,
        onCommentEdit: onEdit,
        onSelect: onSelect,
        permissions: getReplyPermissions(reply),
        translations: translations
      }));
    }

    return React.createElement(Comment, _extends({
      key: "".concat(reply.type).concat(reply.id)
    }, reply, {
      currentUser: currentUser,
      getAvatarUrl: getAvatarUrl,
      getMentionWithQuery: getMentionWithQuery,
      getUserProfileUrl: getUserProfileUrl,
      mentionSelectorContacts: mentionSelectorContacts,
      onDelete: onDelete,
      onEdit: onEdit,
      onSelect: onSelect,
      permissions: getReplyPermissions(reply),
      translations: translations
    }));
  };

  return React.createElement("div", {
    className: "bcs-ActivityThreadReplies",
    "data-testid": "activity-thread-replies"
  }, isRepliesLoading && React.createElement("div", {
    className: "bcs-ActivityThreadReplies-loading",
    "data-testid": "activity-thread-replies-loading"
  }, React.createElement(LoadingIndicator, null)), replies.map(function (reply) {
    return renderComment(reply);
  }));
};

export default ActivityThreadReplies;
//# sourceMappingURL=ActivityThreadReplies.js.map