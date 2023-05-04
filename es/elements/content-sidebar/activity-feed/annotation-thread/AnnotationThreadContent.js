import React from 'react';
import ActivityError from '../common/activity-error';
import ActivityThread from '../activity-feed/ActivityThread';
import AnnotationActivity from '../annotations';
import LoadingIndicator from '../../../../components/loading-indicator/LoadingIndicator';
import './AnnotationThreadContent.scss';

var AnnotationThreadContent = function AnnotationThreadContent(_ref) {
  var annotation = _ref.annotation,
      currentUser = _ref.currentUser,
      error = _ref.error,
      getAvatarUrl = _ref.getAvatarUrl,
      getMentionWithQuery = _ref.getMentionWithQuery,
      getUserProfileUrl = _ref.getUserProfileUrl,
      isLoading = _ref.isLoading,
      mentionSelectorContacts = _ref.mentionSelectorContacts,
      onAnnotationDelete = _ref.onAnnotationDelete,
      onAnnotationEdit = _ref.onAnnotationEdit,
      onAnnotationStatusChange = _ref.onAnnotationStatusChange,
      onReplyCreate = _ref.onReplyCreate,
      onReplyDelete = _ref.onReplyDelete,
      onReplyEdit = _ref.onReplyEdit,
      _ref$replies = _ref.replies,
      replies = _ref$replies === void 0 ? [] : _ref$replies;
  return React.createElement(React.Fragment, null, error && React.createElement(ActivityError, error), isLoading && React.createElement("div", {
    className: "AnnotationThreadContent-loading",
    "data-testid": "annotation-loading"
  }, React.createElement(LoadingIndicator, null)), annotation && React.createElement(ActivityThread, {
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    getUserProfileUrl: getUserProfileUrl,
    hasReplies: true,
    isAlwaysExpanded: true,
    isRepliesLoading: isLoading,
    mentionSelectorContacts: mentionSelectorContacts,
    onReplyCreate: onReplyCreate,
    onReplyDelete: onReplyDelete,
    onReplyEdit: onReplyEdit,
    replies: replies,
    repliesTotalCount: replies.length
  }, React.createElement(AnnotationActivity, {
    currentUser: currentUser,
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    getUserProfileUrl: getUserProfileUrl,
    isCurrentVersion: true,
    item: annotation,
    mentionSelectorContacts: mentionSelectorContacts,
    onDelete: onAnnotationDelete,
    onEdit: onAnnotationEdit,
    onStatusChange: onAnnotationStatusChange
  })));
};

export default AnnotationThreadContent;
//# sourceMappingURL=AnnotationThreadContent.js.map