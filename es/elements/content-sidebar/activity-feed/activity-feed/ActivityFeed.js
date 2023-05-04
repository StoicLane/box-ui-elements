function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Component for Activity feed
 */
import * as React from 'react';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import throttle from 'lodash/throttle';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import ActiveState from './ActiveState';
import CommentForm from '../comment-form';
import EmptyState from './EmptyState';
import InlineError from '../../../../components/inline-error/InlineError';
import LoadingIndicator from '../../../../components/loading-indicator/LoadingIndicator';
import messages from './messages';
import { collapseFeedState, ItemTypes } from './activityFeedUtils';
import { FEED_ITEM_TYPE_ANNOTATION, FEED_ITEM_TYPE_COMMENT, FEED_ITEM_TYPE_TASK, PERMISSION_CAN_CREATE_ANNOTATIONS } from '../../../../constants';
import { scrollIntoView } from '../../../../utils/dom';
import './ActivityFeed.scss';

var ActivityFeed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActivityFeed, _React$Component);

  function ActivityFeed() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ActivityFeed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActivityFeed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isScrolled: false,
      isInputOpen: false,
      selectedItemId: null
    });

    _defineProperty(_assertThisInitialized(_this), "activeFeedItemRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "isEmpty", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props,
          feedItems = _ref.feedItems;

      if (feedItems === undefined) {
        return false;
      }

      return feedItems.length === 0 || feedItems.length === 1 && feedItems[0].type === ItemTypes.fileVersion;
    });

    _defineProperty(_assertThisInitialized(_this), "hasLoaded", function (prevCurrentUser, prevFeedItems) {
      var _this$props = _this.props,
          currentUser = _this$props.currentUser,
          feedItems = _this$props.feedItems;
      return currentUser !== undefined && feedItems !== undefined && (!prevCurrentUser || !prevFeedItems);
    });

    _defineProperty(_assertThisInitialized(_this), "resetFeedScroll", function () {
      if (_this.feedContainer) {
        _this.feedContainer.scrollTop = _this.feedContainer.scrollHeight;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFeedScroll", function (event) {
      var target = event.target;

      if (target instanceof Element) {
        var scrollTop = target.scrollTop;

        _this.setState({
          isScrolled: scrollTop > 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "throttledFeedScroll", throttle(_this.handleFeedScroll, 100));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var nativeEvent = event.nativeEvent;
      nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormFocusHandler", function () {
      _this.resetFeedScroll();

      _this.setState({
        isInputOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormCancelHandler", function () {
      return _this.setState({
        isInputOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormSubmitHandler", function () {
      return _this.setState({
        isInputOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCommentCreate", function (_ref2) {
      var text = _ref2.text,
          hasMention = _ref2.hasMention;
      var _this$props$onComment = _this.props.onCommentCreate,
          onCommentCreate = _this$props$onComment === void 0 ? noop : _this$props$onComment;
      onCommentCreate(text, hasMention);

      _this.commentFormSubmitHandler();
    });

    _defineProperty(_assertThisInitialized(_this), "onTaskCreate", function (_ref3) {
      var text = _ref3.text,
          assignees = _ref3.assignees,
          dueAt = _ref3.dueAt;
      var _this$props$onTaskCre = _this.props.onTaskCreate,
          onTaskCreate = _this$props$onTaskCre === void 0 ? noop : _this$props$onTaskCre;
      onTaskCreate(text, assignees, dueAt);

      _this.commentFormSubmitHandler();
    });

    _defineProperty(_assertThisInitialized(_this), "openVersionHistoryPopup", function (data) {
      var versionInfoHandler = _this.props.onVersionHistoryClick || noop;
      versionInfoHandler(data);
    });

    _defineProperty(_assertThisInitialized(_this), "setSelectedItem", function (itemId) {
      var hasReplies = _this.props.hasReplies;

      if (!hasReplies) {
        return;
      }

      _this.setState({
        selectedItemId: itemId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isFeedItemActive", function (_ref4) {
      var id = _ref4.id,
          type = _ref4.type;
      var _this$props2 = _this.props,
          activeFeedEntryId = _this$props2.activeFeedEntryId,
          activeFeedEntryType = _this$props2.activeFeedEntryType;
      var selectedItemId = _this.state.selectedItemId;
      var isSelected = selectedItemId === id;
      return selectedItemId ? isSelected : id === activeFeedEntryId && type === activeFeedEntryType;
    });

    _defineProperty(_assertThisInitialized(_this), "isCommentFeedItemActive", function (item) {
      var activeFeedEntryId = _this.props.activeFeedEntryId;
      var replies = item.replies;

      var isActive = _this.isFeedItemActive(item);

      return isActive || !!replies && replies.some(function (reply) {
        return reply.id === activeFeedEntryId;
      });
    });

    return _this;
  }

  _createClass(ActivityFeed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resetFeedScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var prevActiveFeedEntryId = prevProps.activeFeedEntryId,
          prevCurrentUser = prevProps.currentUser,
          prevFeedItems = prevProps.feedItems;
      var _this$props3 = this.props,
          currFeedItems = _this$props3.feedItems,
          activeFeedEntryId = _this$props3.activeFeedEntryId;
      var prevIsInputOpen = prevState.isInputOpen;
      var currIsInputOpen = this.state.isInputOpen;
      var hasLoaded = this.hasLoaded(prevCurrentUser, prevFeedItems);
      var hasMoreItems = prevFeedItems && currFeedItems && prevFeedItems.length < currFeedItems.length;
      var didLoadFeedItems = prevFeedItems === undefined && currFeedItems !== undefined;
      var hasInputOpened = currIsInputOpen !== prevIsInputOpen;
      var hasActiveFeedEntryIdChanged = activeFeedEntryId !== prevActiveFeedEntryId;

      if ((hasLoaded || hasMoreItems || didLoadFeedItems || hasInputOpened) && activeFeedEntryId === undefined) {
        this.resetFeedScroll();
      }

      if (didLoadFeedItems || hasActiveFeedEntryIdChanged) {
        this.scrollToActiveFeedItemOrErrorMessage();
      }
    }
  }, {
    key: "scrollToActiveFeedItemOrErrorMessage",
    value: function scrollToActiveFeedItemOrErrorMessage() {
      var activeFeedItemRef = this.activeFeedItemRef.current;
      var activeFeedEntryId = this.props.activeFeedEntryId; // if there is no active item, do not scroll

      if (!activeFeedEntryId) {
        return;
      } // if there was supposed to be an active feed item but the feed item does not exist
      // scroll to the bottom to show the inline error message


      if (activeFeedItemRef === null) {
        this.resetFeedScroll();
        return;
      }

      scrollIntoView(activeFeedItemRef);
    }
    /**
     * Detects whether or not the empty state should be shown.
     * @param {object} currentUser - The user that is logged into the account
     * @param {object} feedItems - Items in the activity feed
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          activeFeedEntryType = _this$props4.activeFeedEntryType,
          activityFeedError = _this$props4.activityFeedError,
          approverSelectorContacts = _this$props4.approverSelectorContacts,
          currentUser = _this$props4.currentUser,
          feedItems = _this$props4.feedItems,
          file = _this$props4.file,
          getApproverWithQuery = _this$props4.getApproverWithQuery,
          getAvatarUrl = _this$props4.getAvatarUrl,
          getMentionWithQuery = _this$props4.getMentionWithQuery,
          getUserProfileUrl = _this$props4.getUserProfileUrl,
          hasNewThreadedReplies = _this$props4.hasNewThreadedReplies,
          hasReplies = _this$props4.hasReplies,
          hasVersions = _this$props4.hasVersions,
          isDisabled = _this$props4.isDisabled,
          mentionSelectorContacts = _this$props4.mentionSelectorContacts,
          contactsLoaded = _this$props4.contactsLoaded,
          onAnnotationDelete = _this$props4.onAnnotationDelete,
          onAnnotationEdit = _this$props4.onAnnotationEdit,
          onAnnotationSelect = _this$props4.onAnnotationSelect,
          onAnnotationStatusChange = _this$props4.onAnnotationStatusChange,
          onAppActivityDelete = _this$props4.onAppActivityDelete,
          onCommentCreate = _this$props4.onCommentCreate,
          onCommentDelete = _this$props4.onCommentDelete,
          onCommentUpdate = _this$props4.onCommentUpdate,
          onHideReplies = _this$props4.onHideReplies,
          onReplyCreate = _this$props4.onReplyCreate,
          onReplyDelete = _this$props4.onReplyDelete,
          onReplyUpdate = _this$props4.onReplyUpdate,
          onShowReplies = _this$props4.onShowReplies,
          onTaskAssignmentUpdate = _this$props4.onTaskAssignmentUpdate,
          onTaskDelete = _this$props4.onTaskDelete,
          onTaskModalClose = _this$props4.onTaskModalClose,
          onTaskUpdate = _this$props4.onTaskUpdate,
          onTaskView = _this$props4.onTaskView,
          onVersionHistoryClick = _this$props4.onVersionHistoryClick,
          shouldUseUAA = _this$props4.shouldUseUAA,
          translations = _this$props4.translations;
      var _this$state = this.state,
          isInputOpen = _this$state.isInputOpen,
          isScrolled = _this$state.isScrolled;
      var currentFileVersionId = getProp(file, 'file_version.id');
      var hasAnnotationCreatePermission = getProp(file, ['permissions', PERMISSION_CAN_CREATE_ANNOTATIONS], false);
      var hasCommentPermission = getProp(file, 'permissions.can_comment', false);
      var showCommentForm = !!(currentUser && hasCommentPermission && onCommentCreate && feedItems);
      var isEmpty = this.isEmpty(this.props);
      var isLoading = !this.hasLoaded();
      var activeFeedItem = Array.isArray(feedItems) && feedItems.find(function (item) {
        switch (item.type) {
          case FEED_ITEM_TYPE_ANNOTATION:
            return _this2.isCommentFeedItemActive(item);

          case FEED_ITEM_TYPE_COMMENT:
            return _this2.isCommentFeedItemActive(item);

          case FEED_ITEM_TYPE_TASK:
            return _this2.isFeedItemActive(item);

          default:
            return false;
        }
      });
      var errorMessageByEntryType = {
        annotation: messages.annotationMissingError,
        comment: messages.commentMissingError,
        task: messages.taskMissingError
      };
      var inlineFeedItemErrorMessage = activeFeedEntryType ? errorMessageByEntryType[activeFeedEntryType] : undefined;
      var isInlineFeedItemErrorVisible = !isLoading && activeFeedEntryType && !activeFeedItem;
      return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
        React.createElement("div", {
          className: classNames('bcs-activity-feed', {
            'bcs-is-scrolled': isScrolled
          }),
          "data-testid": isScrolled ? 'activityfeedscrolled' : 'activityfeed',
          onKeyDown: this.onKeyDown
        }, React.createElement("div", {
          ref: function ref(_ref5) {
            _this2.feedContainer = _ref5;
          },
          className: "bcs-activity-feed-items-container",
          onScroll: this.throttledFeedScroll
        }, isLoading && React.createElement("div", {
          className: "bcs-activity-feed-loading-state"
        }, React.createElement(LoadingIndicator, null)), isEmpty && !isLoading && React.createElement(EmptyState, {
          showAnnotationMessage: hasAnnotationCreatePermission,
          showCommentMessage: showCommentForm
        }), !isEmpty && !isLoading && React.createElement(ActiveState, _extends({}, activityFeedError, {
          activeFeedItem: activeFeedItem,
          activeFeedItemRef: this.activeFeedItemRef,
          approverSelectorContacts: approverSelectorContacts,
          currentFileVersionId: currentFileVersionId,
          currentUser: currentUser,
          getApproverWithQuery: getApproverWithQuery,
          getAvatarUrl: getAvatarUrl,
          getMentionWithQuery: getMentionWithQuery,
          getUserProfileUrl: getUserProfileUrl,
          hasNewThreadedReplies: hasNewThreadedReplies,
          hasReplies: hasReplies,
          hasVersions: hasVersions,
          isDisabled: isDisabled,
          items: collapseFeedState(feedItems),
          mentionSelectorContacts: mentionSelectorContacts,
          onAnnotationDelete: onAnnotationDelete,
          onAnnotationEdit: onAnnotationEdit,
          onAnnotationSelect: onAnnotationSelect,
          onAnnotationStatusChange: onAnnotationStatusChange,
          onAppActivityDelete: onAppActivityDelete,
          onCommentDelete: hasCommentPermission ? onCommentDelete : noop,
          onCommentEdit: hasCommentPermission && onCommentUpdate ? function (props) {
            onCommentUpdate(props.id, props.text, props.status, props.hasMention, props.permissions, props.onSuccess, props.onError);
          } : noop,
          onCommentSelect: this.setSelectedItem,
          onHideReplies: onHideReplies,
          onReplyCreate: hasCommentPermission ? onReplyCreate : noop,
          onReplyDelete: hasCommentPermission ? onReplyDelete : noop,
          onReplyUpdate: hasCommentPermission ? onReplyUpdate : noop,
          onShowReplies: onShowReplies,
          onTaskAssignmentUpdate: onTaskAssignmentUpdate,
          onTaskDelete: onTaskDelete,
          onTaskEdit: onTaskUpdate,
          onTaskModalClose: onTaskModalClose,
          onTaskView: onTaskView,
          onVersionInfo: onVersionHistoryClick ? this.openVersionHistoryPopup : null,
          shouldUseUAA: shouldUseUAA,
          translations: translations
        })), isInlineFeedItemErrorVisible && inlineFeedItemErrorMessage && React.createElement(InlineError, {
          title: React.createElement(FormattedMessage, messages.feedInlineErrorTitle),
          className: "bcs-feedItemInlineError"
        }, React.createElement(FormattedMessage, inlineFeedItemErrorMessage))), showCommentForm ? React.createElement(CommentForm, {
          onSubmit: this.resetFeedScroll,
          isDisabled: isDisabled,
          mentionSelectorContacts: mentionSelectorContacts,
          contactsLoaded: contactsLoaded,
          className: classNames('bcs-activity-feed-comment-input', {
            'bcs-is-disabled': isDisabled
          }),
          createComment: hasCommentPermission ? this.onCommentCreate : noop,
          getMentionWithQuery: getMentionWithQuery,
          isOpen: isInputOpen // $FlowFixMe
          ,
          user: currentUser,
          onCancel: this.commentFormCancelHandler,
          onFocus: this.commentFormFocusHandler,
          getAvatarUrl: getAvatarUrl
        }) : null)
      );
    }
  }]);

  return ActivityFeed;
}(React.Component);

export default ActivityFeed;
//# sourceMappingURL=ActivityFeed.js.map