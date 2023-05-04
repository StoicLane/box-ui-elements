function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import noop from 'lodash/noop';
import PlainButton from '../../../../components/plain-button';
import ActivityThreadReplies from './ActivityThreadReplies';
import ActivityThreadReplyForm from './ActivityThreadReplyForm';
import messages from './messages';
import './ActivityThread.scss';

var ActivityThread = function ActivityThread(_ref) {
  var children = _ref.children,
      currentUser = _ref.currentUser,
      getAvatarUrl = _ref.getAvatarUrl,
      getMentionWithQuery = _ref.getMentionWithQuery,
      getUserProfileUrl = _ref.getUserProfileUrl,
      _ref$hasNewThreadedRe = _ref.hasNewThreadedReplies,
      hasNewThreadedReplies = _ref$hasNewThreadedRe === void 0 ? false : _ref$hasNewThreadedRe,
      hasReplies = _ref.hasReplies,
      _ref$isAlwaysExpanded = _ref.isAlwaysExpanded,
      isAlwaysExpanded = _ref$isAlwaysExpanded === void 0 ? false : _ref$isAlwaysExpanded,
      isPending = _ref.isPending,
      isRepliesLoading = _ref.isRepliesLoading,
      mentionSelectorContacts = _ref.mentionSelectorContacts,
      _ref$onHideReplies = _ref.onHideReplies,
      onHideReplies = _ref$onHideReplies === void 0 ? noop : _ref$onHideReplies,
      onReplyCreate = _ref.onReplyCreate,
      _ref$onReplyDelete = _ref.onReplyDelete,
      onReplyDelete = _ref$onReplyDelete === void 0 ? noop : _ref$onReplyDelete,
      _ref$onReplyEdit = _ref.onReplyEdit,
      onReplyEdit = _ref$onReplyEdit === void 0 ? noop : _ref$onReplyEdit,
      _ref$onReplySelect = _ref.onReplySelect,
      onReplySelect = _ref$onReplySelect === void 0 ? noop : _ref$onReplySelect,
      _ref$onShowReplies = _ref.onShowReplies,
      onShowReplies = _ref$onShowReplies === void 0 ? noop : _ref$onShowReplies,
      _ref$replies = _ref.replies,
      replies = _ref$replies === void 0 ? [] : _ref$replies,
      _ref$repliesTotalCoun = _ref.repliesTotalCount,
      repliesTotalCount = _ref$repliesTotalCoun === void 0 ? 0 : _ref$repliesTotalCoun,
      translations = _ref.translations;
  var repliesLength = replies.length;
  var repliesToLoadCount = Math.max(repliesTotalCount - repliesLength, 0);

  var onHideRepliesHandler = function onHideRepliesHandler() {
    if (repliesLength) {
      onHideReplies(replies[repliesLength - 1]);
    }
  };

  var handleFormFocusOrShow = function handleFormFocusOrShow() {
    onReplySelect(true);
  };

  var handleFormHide = function handleFormHide() {
    onReplySelect(false);
  };

  var renderButton = function renderButton() {
    if (isAlwaysExpanded || isRepliesLoading) {
      return null;
    }

    if (repliesTotalCount > repliesLength) {
      return React.createElement(PlainButton, {
        className: "bcs-ActivityThread-toggle",
        onClick: onShowReplies,
        type: "button",
        "data-testid": "activity-thread-button"
      }, React.createElement(FormattedMessage, _extends({
        values: {
          repliesToLoadCount: repliesToLoadCount
        }
      }, messages.showReplies)));
    }

    if (repliesTotalCount > 1 && repliesTotalCount === repliesLength) {
      return React.createElement(PlainButton, {
        className: "bcs-ActivityThread-toggle",
        onClick: onHideRepliesHandler,
        type: "button",
        "data-testid": "activity-thread-button"
      }, React.createElement(FormattedMessage, messages.hideReplies));
    }

    return null;
  };

  if (!hasReplies) {
    return children;
  }

  return React.createElement("div", {
    className: "bcs-ActivityThread",
    "data-testid": "activity-thread"
  }, React.createElement("div", {
    className: "bcs-ActivityThread-selectWrapper"
  }, React.createElement("div", {
    className: "bcs-ActivityThread-content"
  }, children, renderButton(), repliesTotalCount > 0 && repliesLength > 0 && React.createElement(ActivityThreadReplies, {
    currentUser: currentUser,
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    getUserProfileUrl: getUserProfileUrl,
    hasNewThreadedReplies: hasNewThreadedReplies,
    isRepliesLoading: isRepliesLoading,
    mentionSelectorContacts: mentionSelectorContacts,
    onDelete: onReplyDelete,
    onEdit: onReplyEdit,
    onSelect: onReplySelect,
    replies: replies,
    translations: translations
  })), onReplyCreate && React.createElement(ActivityThreadReplyForm, {
    getMentionWithQuery: getMentionWithQuery,
    isDisabled: isPending,
    mentionSelectorContacts: mentionSelectorContacts,
    onFocus: handleFormFocusOrShow,
    onHide: handleFormHide,
    onShow: handleFormFocusOrShow,
    onReplyCreate: onReplyCreate
  })));
};

export default ActivityThread;
//# sourceMappingURL=ActivityThread.js.map