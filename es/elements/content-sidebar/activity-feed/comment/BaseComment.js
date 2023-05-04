function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';
import TetherComponent from 'react-tether';
import { FormattedMessage } from 'react-intl';
import ActivityError from '../common/activity-error';
import ActivityMessage from '../common/activity-message';
import ActivityStatus from '../common/activity-status';
import ActivityTimestamp from '../common/activity-timestamp';
import Avatar from '../Avatar';
import Checkmark16 from '../../../../icon/line/Checkmark16';
import CommentForm from '../comment-form';
import CreateReply from './CreateReply';
import DeleteConfirmation from '../common/delete-confirmation';
import IconAnnotation from '../../../../icons/two-toned/IconAnnotation';
import LoadingIndicator from '../../../../components/loading-indicator';
import Media from '../../../../components/media';
import messages from './messages';
import Pencil16 from '../../../../icon/line/Pencil16';
import RepliesToggle from './RepliesToggle';
import Trash16 from '../../../../icon/line/Trash16';
import UserLink from '../common/user-link';
import X16 from '../../../../icon/fill/X16';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import { COMMENT_STATUS_OPEN, COMMENT_STATUS_RESOLVED, PLACEHOLDER_USER } from '../../../../constants';
import { MenuItem } from '../../../../components/menu';
import './BaseComment.scss';
import './Replies.scss';
import './Comment.scss';
export var BaseComment = function BaseComment(_ref) {
  var annotationActivityLink = _ref.annotationActivityLink,
      created_at = _ref.created_at,
      created_by = _ref.created_by,
      currentUser = _ref.currentUser,
      error = _ref.error,
      getAvatarUrl = _ref.getAvatarUrl,
      getMentionWithQuery = _ref.getMentionWithQuery,
      getUserProfileUrl = _ref.getUserProfileUrl,
      _ref$hasReplies = _ref.hasReplies,
      hasReplies = _ref$hasReplies === void 0 ? false : _ref$hasReplies,
      id = _ref.id,
      isDisabled = _ref.isDisabled,
      _ref$isPending = _ref.isPending,
      isPending = _ref$isPending === void 0 ? false : _ref$isPending,
      _ref$isRepliesLoading = _ref.isRepliesLoading,
      isRepliesLoading = _ref$isRepliesLoading === void 0 ? false : _ref$isRepliesLoading,
      mentionSelectorContacts = _ref.mentionSelectorContacts,
      modified_at = _ref.modified_at,
      onAnnotationEdit = _ref.onAnnotationEdit,
      onCommentEdit = _ref.onCommentEdit,
      onDelete = _ref.onDelete,
      onHideReplies = _ref.onHideReplies,
      onReplyCreate = _ref.onReplyCreate,
      onSelect = _ref.onSelect,
      onShowReplies = _ref.onShowReplies,
      _ref$permissions = _ref.permissions,
      permissions = _ref$permissions === void 0 ? {} : _ref$permissions,
      _ref$replies = _ref.replies,
      replies = _ref$replies === void 0 ? [] : _ref$replies,
      _ref$repliesTotalCoun = _ref.repliesTotalCount,
      repliesTotalCount = _ref$repliesTotalCoun === void 0 ? 0 : _ref$repliesTotalCoun,
      status = _ref.status,
      _ref$tagged_message = _ref.tagged_message,
      tagged_message = _ref$tagged_message === void 0 ? '' : _ref$tagged_message,
      translatedTaggedMessage = _ref.translatedTaggedMessage,
      translations = _ref.translations;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isConfirmingDelete = _React$useState2[0],
      setIsConfirmingDelete = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isEditing = _React$useState4[0],
      setIsEditing = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isInputOpen = _React$useState6[0],
      setIsInputOpen = _React$useState6[1];

  var handleDeleteConfirm = function handleDeleteConfirm() {
    onDelete({
      id: id,
      permissions: permissions
    });
    onSelect(false);
  };

  var handleDeleteCancel = function handleDeleteCancel() {
    setIsConfirmingDelete(false);
    onSelect(false);
  };

  var handleDeleteClick = function handleDeleteClick() {
    setIsConfirmingDelete(true);
    onSelect(true);
  };

  var handleEditClick = function handleEditClick() {
    setIsEditing(true);
    setIsInputOpen(true);
    onSelect(true);
  };

  var handleMenuClose = function handleMenuClose() {
    if (isConfirmingDelete || isEditing || isInputOpen) {
      return;
    }

    onSelect(false);
  };

  var commentFormFocusHandler = function commentFormFocusHandler() {
    setIsInputOpen(true);
    onSelect(true);
  };

  var commentFormCancelHandler = function commentFormCancelHandler() {
    setIsInputOpen(false);
    setIsEditing(false);
    onSelect(false);
  };

  var commentFormSubmitHandler = function commentFormSubmitHandler() {
    setIsInputOpen(false);
    setIsEditing(false);
    onSelect(false);
  };

  var handleMessageUpdate = function handleMessageUpdate(_ref2) {
    var messageID = _ref2.id,
        text = _ref2.text,
        hasMention = _ref2.hasMention;

    // Since we have to pass onCommentEdit through annotations (to Replies), onAnnotationEdit essentially overrides onCommentEdit
    if (onAnnotationEdit) {
      onAnnotationEdit({
        id: messageID,
        text: text,
        permissions: permissions
      });
    } else if (onCommentEdit) {
      onCommentEdit({
        id: messageID,
        text: text,
        hasMention: hasMention,
        permissions: permissions
      });
    }

    commentFormSubmitHandler();
  };

  var handleStatusUpdate = function handleStatusUpdate(selectedStatus) {
    if (onAnnotationEdit) {
      onAnnotationEdit({
        id: id,
        permissions: permissions
      });
    } else if (onCommentEdit) {
      onCommentEdit({
        id: id,
        status: selectedStatus,
        hasMention: false,
        permissions: permissions
      });
    }
  }; // Since we have to pass onCommentEdit through annotations (to Replies), onAnnotationEdit essentially overrides onCommentEdit


  var onEdit = onAnnotationEdit !== null && onAnnotationEdit !== void 0 ? onAnnotationEdit : onCommentEdit;
  var canDelete = permissions.can_delete;
  var canEdit = onEdit !== noop && permissions.can_edit;
  var canResolve = onEdit !== noop && permissions.can_resolve;
  var createdAtTimestamp = new Date(created_at).getTime();
  var createdByUser = created_by || PLACEHOLDER_USER;
  var isEdited = modified_at !== undefined && modified_at !== created_at;
  var isMenuVisible = (canDelete || canEdit || canResolve) && !isPending;
  var isResolved = status === COMMENT_STATUS_RESOLVED;
  var commentProps = {
    currentUser: currentUser,
    getUserProfileUrl: getUserProfileUrl,
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    mentionSelectorContacts: mentionSelectorContacts,
    translations: translations
  };
  return (// TODO: Change className to bcs-Comment once FF is removed
    React.createElement("div", {
      className: "bcs-BaseComment"
    }, React.createElement(Media, {
      className: classNames('bcs-Comment-media', {
        'bcs-is-pending': isPending || error
      })
    }, React.createElement(Media.Figure, null, React.createElement(Avatar, {
      getAvatarUrl: getAvatarUrl,
      user: createdByUser,
      badgeIcon: annotationActivityLink && React.createElement(IconAnnotation, {
        title: React.createElement(FormattedMessage, messages.annotationBadge)
      })
    })), React.createElement(Media.Body, null, isMenuVisible && React.createElement(TetherComponent, {
      attachment: "top right",
      className: "bcs-Comment-deleteConfirmationModal",
      constraints: [{
        to: 'scrollParent',
        attachment: 'together'
      }],
      targetAttachment: "bottom right"
    }, React.createElement(Media.Menu, {
      isDisabled: isConfirmingDelete,
      "data-testid": "comment-actions-menu",
      dropdownProps: {
        onMenuOpen: function onMenuOpen() {
          return onSelect(true);
        },
        onMenuClose: handleMenuClose
      },
      menuProps: {
        'data-resin-component': ACTIVITY_TARGETS.COMMENT_OPTIONS
      }
    }, canResolve && isResolved && React.createElement(MenuItem, {
      className: "bcs-Comment-unresolveComment",
      "data-resin-target": ACTIVITY_TARGETS.COMMENT_OPTIONS_EDIT,
      "data-testid": "unresolve-comment",
      onClick: function onClick() {
        return handleStatusUpdate(COMMENT_STATUS_OPEN);
      }
    }, React.createElement(X16, null), React.createElement(FormattedMessage, messages.commentUnresolveMenuItem)), canResolve && !isResolved && React.createElement(MenuItem, {
      "data-resin-target": ACTIVITY_TARGETS.COMMENT_OPTIONS_EDIT,
      "data-testid": "resolve-comment",
      onClick: function onClick() {
        return handleStatusUpdate(COMMENT_STATUS_RESOLVED);
      }
    }, React.createElement(Checkmark16, null), React.createElement(FormattedMessage, messages.commentResolveMenuItem)), canEdit && React.createElement(MenuItem, {
      "data-resin-target": ACTIVITY_TARGETS.COMMENT_OPTIONS_EDIT,
      "data-testid": "edit-comment",
      onClick: handleEditClick
    }, React.createElement(Pencil16, null), React.createElement(FormattedMessage, messages.commentEditMenuItem)), canDelete && React.createElement(MenuItem, {
      "data-resin-target": ACTIVITY_TARGETS.COMMENT_OPTIONS_DELETE,
      "data-testid": "delete-comment",
      onClick: handleDeleteClick
    }, React.createElement(Trash16, null), React.createElement(FormattedMessage, messages.commentDeleteMenuItem))), isConfirmingDelete && React.createElement(DeleteConfirmation, {
      "data-resin-component": ACTIVITY_TARGETS.COMMENT_OPTIONS,
      isOpen: isConfirmingDelete,
      message: messages.commentDeletePrompt,
      onDeleteCancel: handleDeleteCancel,
      onDeleteConfirm: handleDeleteConfirm
    })), React.createElement("div", {
      className: "bcs-Comment-headline"
    }, React.createElement(UserLink, {
      "data-resin-target": ACTIVITY_TARGETS.PROFILE,
      id: createdByUser.id,
      name: createdByUser.name,
      getUserProfileUrl: getUserProfileUrl
    })), React.createElement("div", {
      className: "bcs-Comment-timestamp"
    }, React.createElement(ActivityTimestamp, {
      date: createdAtTimestamp
    }), annotationActivityLink), React.createElement(ActivityStatus, {
      status: status
    }), isEditing ? React.createElement(CommentForm, {
      isDisabled: isDisabled,
      className: classNames('bcs-Comment-editor', {
        'bcs-is-disabled': isDisabled
      }),
      updateComment: handleMessageUpdate,
      isOpen: isInputOpen // $FlowFixMe
      ,
      user: currentUser,
      onCancel: commentFormCancelHandler,
      onFocus: commentFormFocusHandler,
      isEditing: isEditing,
      entityId: id,
      tagged_message: tagged_message,
      getAvatarUrl: getAvatarUrl,
      mentionSelectorContacts: mentionSelectorContacts,
      getMentionWithQuery: getMentionWithQuery
    }) : React.createElement(ActivityMessage, _extends({
      id: id,
      isEdited: isEdited && !isResolved,
      tagged_message: tagged_message,
      translatedTaggedMessage: translatedTaggedMessage
    }, translations, {
      translationFailed: error ? true : null,
      getUserProfileUrl: getUserProfileUrl
    })))), error ? React.createElement(ActivityError, error) : null, hasReplies && React.createElement(Replies, _extends({}, commentProps, {
      isParentPending: isPending,
      isRepliesLoading: isRepliesLoading,
      onCommentEdit: onCommentEdit,
      onHideReplies: onHideReplies,
      onReplyCreate: onReplyCreate,
      onReplySelect: onSelect,
      onShowReplies: onShowReplies,
      replies: replies,
      repliesTotalCount: repliesTotalCount
    })))
  );
}; // Added Replies to Comment file to avoid circular dependency warning

export var Replies = function Replies(_ref3) {
  var currentUser = _ref3.currentUser,
      getAvatarUrl = _ref3.getAvatarUrl,
      getMentionWithQuery = _ref3.getMentionWithQuery,
      getUserProfileUrl = _ref3.getUserProfileUrl,
      _ref3$isParentPending = _ref3.isParentPending,
      isParentPending = _ref3$isParentPending === void 0 ? false : _ref3$isParentPending,
      _ref3$isRepliesLoadin = _ref3.isRepliesLoading,
      isRepliesLoading = _ref3$isRepliesLoadin === void 0 ? false : _ref3$isRepliesLoadin,
      mentionSelectorContacts = _ref3.mentionSelectorContacts,
      onCommentEdit = _ref3.onCommentEdit,
      onReplyCreate = _ref3.onReplyCreate,
      _ref3$onReplySelect = _ref3.onReplySelect,
      onReplySelect = _ref3$onReplySelect === void 0 ? noop : _ref3$onReplySelect,
      onShowReplies = _ref3.onShowReplies,
      _onHideReplies = _ref3.onHideReplies,
      replies = _ref3.replies,
      _ref3$repliesTotalCou = _ref3.repliesTotalCount,
      repliesTotalCount = _ref3$repliesTotalCou === void 0 ? 0 : _ref3$repliesTotalCou,
      translations = _ref3.translations;

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      showReplyForm = _React$useState8[0],
      setShowReplyForm = _React$useState8[1];

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

  var handleNewReplyButton = function handleNewReplyButton() {
    setShowReplyForm(true);
    onReplySelect(true);
  };

  var handleCancelNewReply = function handleCancelNewReply() {
    setShowReplyForm(false);
    onReplySelect(false);
  };

  var handleSubmitNewReply = function handleSubmitNewReply(reply, replyCreate) {
    setShowReplyForm(false);
    replyCreate(reply);
  };

  return React.createElement("div", {
    className: "bcs-Replies"
  }, !!onShowReplies && !!_onHideReplies && React.createElement(RepliesToggle, {
    onHideReplies: function onHideReplies(index) {
      return _onHideReplies([replies[index]]);
    },
    onShowReplies: onShowReplies,
    repliesShownCount: replies.length,
    repliesTotalCount: repliesTotalCount
  }), React.createElement("div", {
    className: "bcs-Replies-content"
  }, isRepliesLoading && React.createElement("div", {
    className: "bcs-Replies-loading",
    "data-testid": "replies-loading"
  }, React.createElement(LoadingIndicator, null)), React.createElement("ol", {
    className: "bcs-Replies-list"
  }, replies.map(function (reply) {
    var id = reply.id,
        type = reply.type;
    return React.createElement("li", {
      key: "".concat(type).concat(id)
    }, React.createElement(BaseComment, _extends({}, reply, {
      currentUser: currentUser,
      getAvatarUrl: getAvatarUrl,
      getMentionWithQuery: getMentionWithQuery,
      getUserProfileUrl: getUserProfileUrl,
      isPending: isParentPending || reply.isPending,
      mentionSelectorContacts: mentionSelectorContacts,
      onCommentEdit: onCommentEdit,
      onSelect: onReplySelect,
      onDelete: noop,
      permissions: getReplyPermissions(reply),
      translations: translations
    })));
  }))), !!onReplyCreate && React.createElement(CreateReply, {
    getMentionWithQuery: getMentionWithQuery,
    isDisabled: isParentPending,
    mentionSelectorContacts: mentionSelectorContacts,
    onCancel: handleCancelNewReply,
    onClick: handleNewReplyButton,
    onFocus: function onFocus() {
      return onReplySelect(true);
    },
    onSubmit: function onSubmit(reply) {
      return handleSubmitNewReply(reply, onReplyCreate);
    },
    showReplyForm: showReplyForm
  }));
};
//# sourceMappingURL=BaseComment.js.map