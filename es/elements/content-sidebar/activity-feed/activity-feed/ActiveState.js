function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Active state component for Activity Feed
 */
import * as React from 'react';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import ActivityThread from './ActivityThread';
import ActivityItem from './ActivityItem';
import AppActivity from '../app-activity';
import AnnotationActivity from '../annotations';
import Comment from '../comment';
import TaskNew from '../task-new';
import Version, { CollapsedVersion } from '../version';
import withErrorHandling from '../../withErrorHandling';
import { BaseComment } from '../comment/BaseComment';
import { FEED_ITEM_TYPE_ANNOTATION, FEED_ITEM_TYPE_APP_ACTIVITY, FEED_ITEM_TYPE_COMMENT, FEED_ITEM_TYPE_TASK, FEED_ITEM_TYPE_VERSION } from '../../../../constants';
import AnnotationActivityLinkProvider from './AnnotationActivityLinkProvider';

var ActiveState = function ActiveState(_ref) {
  var activeFeedItem = _ref.activeFeedItem,
      activeFeedItemRef = _ref.activeFeedItemRef,
      approverSelectorContacts = _ref.approverSelectorContacts,
      currentFileVersionId = _ref.currentFileVersionId,
      currentUser = _ref.currentUser,
      getApproverWithQuery = _ref.getApproverWithQuery,
      getAvatarUrl = _ref.getAvatarUrl,
      getMentionWithQuery = _ref.getMentionWithQuery,
      getUserProfileUrl = _ref.getUserProfileUrl,
      _ref$hasNewThreadedRe = _ref.hasNewThreadedReplies,
      hasNewThreadedReplies = _ref$hasNewThreadedRe === void 0 ? false : _ref$hasNewThreadedRe,
      _ref$hasReplies = _ref.hasReplies,
      hasReplies = _ref$hasReplies === void 0 ? false : _ref$hasReplies,
      hasVersions = _ref.hasVersions,
      items = _ref.items,
      mentionSelectorContacts = _ref.mentionSelectorContacts,
      onAnnotationDelete = _ref.onAnnotationDelete,
      onAnnotationEdit = _ref.onAnnotationEdit,
      onAnnotationSelect = _ref.onAnnotationSelect,
      onAnnotationStatusChange = _ref.onAnnotationStatusChange,
      onAppActivityDelete = _ref.onAppActivityDelete,
      onCommentDelete = _ref.onCommentDelete,
      onCommentEdit = _ref.onCommentEdit,
      _ref$onCommentSelect = _ref.onCommentSelect,
      onCommentSelect = _ref$onCommentSelect === void 0 ? noop : _ref$onCommentSelect,
      _ref$onHideReplies = _ref.onHideReplies,
      _onHideReplies = _ref$onHideReplies === void 0 ? noop : _ref$onHideReplies,
      _ref$onReplyCreate = _ref.onReplyCreate,
      _onReplyCreate = _ref$onReplyCreate === void 0 ? noop : _ref$onReplyCreate,
      _ref$onReplyDelete = _ref.onReplyDelete,
      onReplyDelete = _ref$onReplyDelete === void 0 ? noop : _ref$onReplyDelete,
      _ref$onReplyUpdate = _ref.onReplyUpdate,
      onReplyUpdate = _ref$onReplyUpdate === void 0 ? noop : _ref$onReplyUpdate,
      _ref$onShowReplies = _ref.onShowReplies,
      _onShowReplies = _ref$onShowReplies === void 0 ? noop : _ref$onShowReplies,
      onTaskAssignmentUpdate = _ref.onTaskAssignmentUpdate,
      onTaskDelete = _ref.onTaskDelete,
      onTaskEdit = _ref.onTaskEdit,
      onTaskModalClose = _ref.onTaskModalClose,
      onTaskView = _ref.onTaskView,
      onVersionInfo = _ref.onVersionInfo,
      shouldUseUAA = _ref.shouldUseUAA,
      translations = _ref.translations;

  var onCommentSelectHandler = function onCommentSelectHandler(itemId) {
    return function (isSelected) {
      onCommentSelect(isSelected ? itemId : null);
    };
  };

  var onHideRepliesHandler = function onHideRepliesHandler(parentId) {
    return function (lastReply) {
      _onHideReplies(parentId, [lastReply]);
    };
  };

  var onReplyCreateHandler = function onReplyCreateHandler(parentId, parentType) {
    return function (text) {
      _onReplyCreate(parentId, parentType, text);
    };
  };

  var onReplyDeleteHandler = function onReplyDeleteHandler(parentId) {
    return function (options) {
      onReplyDelete(_objectSpread({}, options, {
        parentId: parentId
      }));
    };
  };

  var onReplyUpdateHandler = function onReplyUpdateHandler(parentId) {
    return function (id, text, status, hasMention, permissions, onSuccess, onError) {
      onReplyUpdate(id, parentId, text, permissions, onSuccess, onError);
    };
  };

  var onShowRepliesHandler = function onShowRepliesHandler(id, type) {
    return function () {
      _onShowReplies(id, type);
    };
  };

  return React.createElement("ul", {
    className: "bcs-activity-feed-active-state"
  }, items.map(function (item) {
    var _ref2, _item$description;

    var isFocused = item === activeFeedItem;
    var refValue = isFocused ? activeFeedItemRef : undefined;
    var itemFileVersionId = getProp(item, 'file_version.id');
    var replyProps = {
      hasReplies: hasReplies,
      onReplySelect: onCommentSelectHandler(item.id)
    };

    var commentAndAnnotationCommonProps = _objectSpread({}, item, {}, replyProps, {
      currentUser: currentUser,
      getAvatarUrl: getAvatarUrl,
      getMentionWithQuery: getMentionWithQuery,
      getUserProfileUrl: getUserProfileUrl,
      mentionSelectorContacts: mentionSelectorContacts,
      onHideReplies: function onHideReplies(shownReplies) {
        return _onHideReplies(item.id, shownReplies);
      },
      onSelect: onCommentSelectHandler(item.id),
      permissions: {
        can_delete: getProp(item.permissions, 'can_delete', false),
        can_edit: getProp(item.permissions, 'can_edit', false),
        can_reply: getProp(item.permissions, 'can_reply', false),
        can_resolve: getProp(item.permissions, 'can_resolve', false)
      },
      // TODO: legitimate, pre-existing typing issue that was previously undetected
      // $FlowFixMe
      repliesTotalCount: item.total_reply_count,
      translations: translations
    });

    switch (item.type) {
      case FEED_ITEM_TYPE_COMMENT:
        return React.createElement(ActivityItem, {
          key: item.type + item.id,
          "data-testid": "comment",
          isFocused: isFocused,
          isHoverable: true,
          hasNewThreadedReplies: hasNewThreadedReplies,
          ref: refValue
        }, hasNewThreadedReplies ? // TODO: legitimate, pre-existing typing issue that was previously undetected
        // Conflict between BoxCommentPermissions and BoxTaskPermissions
        // $FlowFixMe
        React.createElement(BaseComment, _extends({}, commentAndAnnotationCommonProps, {
          onDelete: onCommentDelete,
          onCommentEdit: onCommentEdit,
          onReplyCreate: function onReplyCreate(reply) {
            return _onReplyCreate(item.id, FEED_ITEM_TYPE_COMMENT, reply);
          },
          onShowReplies: function onShowReplies() {
            return _onShowReplies(item.id, FEED_ITEM_TYPE_COMMENT);
          }
        })) : React.createElement(ActivityThread, {
          "data-testid": "activity-thread",
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          getMentionWithQuery: getMentionWithQuery,
          getUserProfileUrl: getUserProfileUrl,
          hasNewThreadedReplies: hasNewThreadedReplies,
          hasReplies: hasReplies,
          isPending: item.isPending,
          isRepliesLoading: item.isRepliesLoading,
          mentionSelectorContacts: mentionSelectorContacts,
          onHideReplies: onHideRepliesHandler(item.id),
          onReplyCreate: onReplyCreateHandler(item.id, item.type),
          onReplyDelete: onReplyDeleteHandler(item.id),
          onReplyEdit: onReplyUpdateHandler(item.id),
          onReplySelect: onCommentSelectHandler(item.id),
          onShowReplies: onShowRepliesHandler(item.id, item.type),
          repliesTotalCount: item.total_reply_count,
          replies: item.replies,
          translations: translations
        }, React.createElement(Comment, _extends({}, item, {
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          getMentionWithQuery: getMentionWithQuery,
          getUserProfileUrl: getUserProfileUrl,
          mentionSelectorContacts: mentionSelectorContacts,
          onDelete: onCommentDelete,
          onEdit: onCommentEdit,
          onSelect: onCommentSelectHandler(item.id),
          permissions: {
            can_delete: getProp(item.permissions, 'can_delete', false),
            can_edit: getProp(item.permissions, 'can_edit', false),
            can_reply: getProp(item.permissions, 'can_reply', false),
            can_resolve: getProp(item.permissions, 'can_resolve', false)
          },
          translations: translations
        }))));

      case FEED_ITEM_TYPE_TASK:
        return React.createElement(ActivityItem, {
          key: item.type + item.id,
          className: "bcs-activity-feed-task-new",
          "data-testid": "task",
          isFocused: isFocused,
          ref: refValue
        }, React.createElement(TaskNew, _extends({}, item, {
          approverSelectorContacts: approverSelectorContacts,
          currentUser: currentUser,
          getApproverWithQuery: getApproverWithQuery,
          getAvatarUrl: getAvatarUrl,
          getUserProfileUrl: getUserProfileUrl,
          onAssignmentUpdate: onTaskAssignmentUpdate,
          onDelete: onTaskDelete,
          onEdit: onTaskEdit,
          onView: onTaskView,
          onModalClose: onTaskModalClose,
          shouldUseUAA: shouldUseUAA,
          translations: translations
        })));

      case FEED_ITEM_TYPE_VERSION:
        return React.createElement(ActivityItem, {
          key: item.type + item.id,
          className: "bcs-version-item",
          "data-testid": "version"
        }, item.versions ? // $FlowFixMe
        React.createElement(CollapsedVersion, _extends({}, item, {
          onInfo: onVersionInfo
        })) : // $FlowFixMe
        React.createElement(Version, _extends({}, item, {
          onInfo: onVersionInfo
        })));

      case FEED_ITEM_TYPE_APP_ACTIVITY:
        return React.createElement(ActivityItem, {
          key: item.type + item.id,
          className: "bcs-activity-feed-app-activity",
          "data-testid": "app-activity"
        }, React.createElement(AppActivity, _extends({
          currentUser: currentUser,
          onDelete: onAppActivityDelete
        }, item)));

      case FEED_ITEM_TYPE_ANNOTATION:
        return React.createElement(ActivityItem, {
          key: item.type + item.id,
          className: "bcs-activity-feed-annotation-activity",
          "data-testid": "annotation-activity",
          isHoverable: true,
          hasNewThreadedReplies: hasNewThreadedReplies,
          isFocused: isFocused,
          ref: refValue
        }, hasNewThreadedReplies && onAnnotationSelect ? // TODO: legitimate, pre-existing typing issue that was previously undetected
        // Conflict between BoxCommentPermissions and BoxTaskPermissions
        // $FlowFixMe
        React.createElement(BaseComment, _extends({}, commentAndAnnotationCommonProps, {
          annotationActivityLink: React.createElement(AnnotationActivityLinkProvider, {
            item: item,
            onSelect: onAnnotationSelect,
            isCurrentVersion: currentFileVersionId === itemFileVersionId
          }),
          onAnnotationEdit: onAnnotationEdit,
          onDelete: onAnnotationDelete,
          onReplyCreate: function onReplyCreate(reply) {
            return _onReplyCreate(item.id, FEED_ITEM_TYPE_ANNOTATION, reply);
          },
          onShowReplies: function onShowReplies() {
            return _onShowReplies(item.id, FEED_ITEM_TYPE_ANNOTATION);
          },
          tagged_message: (_ref2 = (_item$description = item.description) === null || _item$description === void 0 ? void 0 : _item$description.message) !== null && _ref2 !== void 0 ? _ref2 : ''
        })) : React.createElement(ActivityThread, {
          "data-testid": "activity-thread",
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          getMentionWithQuery: getMentionWithQuery,
          getUserProfileUrl: getUserProfileUrl,
          hasNewThreadedReplies: hasNewThreadedReplies,
          hasReplies: hasReplies,
          isPending: item.isPending,
          isRepliesLoading: item.isRepliesLoading,
          mentionSelectorContacts: mentionSelectorContacts,
          onHideReplies: onHideRepliesHandler(item.id),
          onReplyCreate: onReplyCreateHandler(item.id, item.type),
          onReplyDelete: onReplyDeleteHandler(item.id),
          onReplyEdit: onReplyUpdateHandler(item.id),
          onReplySelect: onCommentSelectHandler(item.id),
          onShowReplies: onShowRepliesHandler(item.id, item.type),
          repliesTotalCount: item.total_reply_count,
          replies: item.replies,
          translations: translations
        }, React.createElement(AnnotationActivity, {
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          getUserProfileUrl: getUserProfileUrl,
          getMentionWithQuery: getMentionWithQuery,
          hasVersions: hasVersions,
          isCurrentVersion: currentFileVersionId === itemFileVersionId,
          item: item,
          mentionSelectorContacts: mentionSelectorContacts,
          onEdit: onAnnotationEdit,
          onDelete: onAnnotationDelete,
          onSelect: onAnnotationSelect,
          onStatusChange: onAnnotationStatusChange
        })));

      default:
        return null;
    }
  }));
};

export { ActiveState as ActiveStateComponent };
export default withErrorHandling(ActiveState);
//# sourceMappingURL=ActiveState.js.map