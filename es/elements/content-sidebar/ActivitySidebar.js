function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
 * @file Activity feed sidebar component
 * @author Box
 */
import * as React from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import flow from 'lodash/flow';
import getProp from 'lodash/get';
import noop from 'lodash/noop';
import uniqueId from 'lodash/uniqueId';
import { FormattedMessage } from 'react-intl';
import { generatePath } from 'react-router-dom';
import ActivityFeed from './activity-feed';
import AddTaskButton from './AddTaskButton';
import API from '../../api';
import messages from '../common/messages';
import SidebarContent from './SidebarContent';
import { withAnnotatorContext } from '../common/annotator-context';
import { EVENT_DATA_READY, EVENT_JS_READY } from '../common/logger/constants';
import { getBadUserError } from '../../utils/error';
import { mark } from '../../utils/performance';
import { withAPIContext } from '../common/api-context';
import { withErrorBoundary } from '../common/error-boundary';
import { withFeatureConsumer, isFeatureEnabled } from '../common/feature-checking';
import { withLogger } from '../common/logger';
import { withRouterAndRef } from '../common/routing';
import ActivitySidebarFilter from './ActivitySidebarFilter';
import { ACTIVITY_FILTER_OPTION_ALL, ACTIVITY_FILTER_OPTION_RESOLVED, ACTIVITY_FILTER_OPTION_TASKS, ACTIVITY_FILTER_OPTION_UNRESOLVED, DEFAULT_COLLAB_DEBOUNCE, ERROR_CODE_FETCH_ACTIVITY, FEED_ITEM_TYPE_ANNOTATION, FEED_ITEM_TYPE_COMMENT, FEED_ITEM_TYPE_TASK, FEED_ITEM_TYPE_VERSION, ORIGIN_ACTIVITY_SIDEBAR, SIDEBAR_VIEW_ACTIVITY, TASK_COMPLETION_RULE_ALL } from '../../constants';
import './ActivitySidebar.scss';
export var activityFeedInlineError = {
  inlineError: {
    title: messages.errorOccured,
    content: messages.activityFeedItemApiError
  }
};
var MARK_NAME_DATA_LOADING = "".concat(ORIGIN_ACTIVITY_SIDEBAR, "_data_loading");
var MARK_NAME_DATA_READY = "".concat(ORIGIN_ACTIVITY_SIDEBAR, "_").concat(EVENT_DATA_READY);
var MARK_NAME_JS_READY = "".concat(ORIGIN_ACTIVITY_SIDEBAR, "_").concat(EVENT_JS_READY);
mark(MARK_NAME_JS_READY);

var ActivitySidebar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ActivitySidebar, _React$PureComponent);

  function ActivitySidebar(props) {
    var _this;

    _classCallCheck(this, ActivitySidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActivitySidebar).call(this, props)); // eslint-disable-next-line react/prop-types

    _defineProperty(_assertThisInitialized(_this), "handleAnnotationDelete", function (_ref) {
      var id = _ref.id,
          permissions = _ref.permissions;
      var _this$props = _this.props,
          api = _this$props.api,
          emitAnnotationRemoveEvent = _this$props.emitAnnotationRemoveEvent,
          file = _this$props.file;
      emitAnnotationRemoveEvent(id, true);
      api.getFeedAPI(false).deleteAnnotation(file, id, permissions, _this.deleteAnnotationSuccess.bind(_assertThisInitialized(_this), id), _this.feedErrorCallback);

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "handleAnnotationEdit", function (_ref2) {
      var id = _ref2.id,
          text = _ref2.text,
          permissions = _ref2.permissions;
      var _this$props2 = _this.props,
          api = _this$props2.api,
          emitAnnotationUpdateEvent = _this$props2.emitAnnotationUpdateEvent,
          file = _this$props2.file;
      emitAnnotationUpdateEvent({
        id: id,
        description: {
          message: text
        }
      }, true);
      api.getFeedAPI(false).updateAnnotation(file, id, text, undefined, permissions, function (annotation) {
        emitAnnotationUpdateEvent(annotation);

        _this.feedSuccessCallback();
      }, _this.feedErrorCallback);

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "handleAnnotationStatusChange", function (id, status, permissions) {
      var _this$props3 = _this.props,
          api = _this$props3.api,
          emitAnnotationUpdateEvent = _this$props3.emitAnnotationUpdateEvent,
          file = _this$props3.file;
      emitAnnotationUpdateEvent({
        id: id,
        status: status
      }, true);
      api.getFeedAPI(false).updateAnnotation(file, id, undefined, status, permissions, function (annotation) {
        emitAnnotationUpdateEvent(annotation);

        _this.feedSuccessCallback();
      }, _this.feedErrorCallback);

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "feedSuccessCallback", function () {
      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "feedErrorCallback", function (e, code, contextInfo) {
      _this.errorCallback(e, code, contextInfo);

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "createTask", function (message, assignees, taskType, dueAt, completionRule, onSuccess, onError) {
      var _this$props4 = _this.props,
          api = _this$props4.api,
          currentUser = _this$props4.currentUser,
          file = _this$props4.file;

      if (!currentUser) {
        throw getBadUserError();
      }

      var errorCallback = function errorCallback(e, code, contextInfo) {
        if (onError) {
          onError(e, code, contextInfo);
        }

        _this.feedErrorCallback(e, code, contextInfo);
      };

      var successCallback = function successCallback() {
        if (onSuccess) {
          onSuccess();
        }

        _this.feedSuccessCallback();
      };

      api.getFeedAPI(false).createTaskNew(file, currentUser, message, assignees, taskType, dueAt, completionRule, successCallback, errorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteTask", function (task) {
      var _this$props5 = _this.props,
          file = _this$props5.file,
          api = _this$props5.api,
          onTaskDelete = _this$props5.onTaskDelete;
      api.getFeedAPI(false).deleteTaskNew(file, task, function (taskId) {
        _this.feedSuccessCallback();

        onTaskDelete(taskId);
      }, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "updateTask", function (task, onSuccess, onError) {
      var _this$props6 = _this.props,
          api = _this$props6.api,
          file = _this$props6.file,
          onTaskUpdate = _this$props6.onTaskUpdate;

      var errorCallback = function errorCallback(e, code) {
        if (onError) {
          onError(e, code);
        }

        _this.feedErrorCallback(e, code);
      };

      var successCallback = function successCallback() {
        _this.feedSuccessCallback();

        if (onSuccess) {
          onSuccess();
        }

        onTaskUpdate();
      };

      api.getFeedAPI(false).updateTaskNew(file, task, successCallback, errorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "updateTaskAssignment", function (taskId, taskAssignmentId, status) {
      var _this$props7 = _this.props,
          api = _this$props7.api,
          _this$props7$currentU = _this$props7.currentUser,
          currentUser = _this$props7$currentU === void 0 ? {} : _this$props7$currentU,
          file = _this$props7.file,
          onTaskAssignmentUpdate = _this$props7.onTaskAssignmentUpdate;

      var successCallback = function successCallback() {
        _this.feedSuccessCallback();

        onTaskAssignmentUpdate(taskId, taskAssignmentId, status, currentUser.id);
      };

      api.getFeedAPI(false).updateTaskCollaborator(file, taskId, taskAssignmentId, status, successCallback, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteComment", function (_ref3) {
      var id = _ref3.id,
          permissions = _ref3.permissions;
      var _this$props8 = _this.props,
          api = _this$props8.api,
          file = _this$props8.file,
          hasReplies = _this$props8.hasReplies,
          onCommentDelete = _this$props8.onCommentDelete;

      var successCallback = function successCallback(comment) {
        _this.feedSuccessCallback();

        onCommentDelete(comment);
      };

      if (hasReplies) {
        api.getFeedAPI(false).deleteThreadedComment(file, id, permissions, successCallback, _this.feedErrorCallback);
      } else {
        api.getFeedAPI(false).deleteComment(file, id, permissions, successCallback, _this.feedErrorCallback);
      } // need to load the pending item


      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteReply", function (_ref4) {
      var id = _ref4.id,
          parentId = _ref4.parentId,
          permissions = _ref4.permissions;
      var _this$props9 = _this.props,
          api = _this$props9.api,
          emitAnnotationReplyDeleteEvent = _this$props9.emitAnnotationReplyDeleteEvent,
          file = _this$props9.file;
      emitAnnotationReplyDeleteEvent(id, parentId, true);
      api.getFeedAPI(false).deleteReply(file, id, parentId, permissions, _this.deleteReplySuccessCallback.bind(_assertThisInitialized(_this), id, parentId), _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteReplySuccessCallback", function (id, parentId) {
      var emitAnnotationReplyDeleteEvent = _this.props.emitAnnotationReplyDeleteEvent;

      _this.feedSuccessCallback();

      emitAnnotationReplyDeleteEvent(id, parentId);
    });

    _defineProperty(_assertThisInitialized(_this), "updateComment", function (id, text, status, hasMention, permissions, onSuccess, onError) {
      var _this$props10 = _this.props,
          api = _this$props10.api,
          file = _this$props10.file,
          hasReplies = _this$props10.hasReplies,
          onCommentUpdate = _this$props10.onCommentUpdate;

      var errorCallback = function errorCallback(e, code) {
        if (onError) {
          onError(e, code);
        }

        _this.feedErrorCallback(e, code);
      };

      var successCallback = function successCallback() {
        _this.feedSuccessCallback();

        if (onSuccess) {
          onSuccess();
        }

        onCommentUpdate();
      };

      if (hasReplies) {
        api.getFeedAPI(false).updateThreadedComment(file, id, text, status, permissions, successCallback, errorCallback);
      } else {
        api.getFeedAPI(false).updateComment(file, id, text || '', hasMention, permissions, successCallback, errorCallback);
      } // need to load the pending item


      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "updateReply", function (id, parentId, text, permissions, onSuccess, onError) {
      var _this$props11 = _this.props,
          api = _this$props11.api,
          emitAnnotationReplyUpdateEvent = _this$props11.emitAnnotationReplyUpdateEvent,
          file = _this$props11.file;
      emitAnnotationReplyUpdateEvent({
        id: id,
        tagged_message: text
      }, parentId, true);
      api.getFeedAPI(false).updateReply(file, id, parentId, text, permissions, _this.updateReplySuccessCallback.bind(_assertThisInitialized(_this), parentId, onSuccess), function (error, code) {
        if (onError) {
          onError(error, code);
        }

        _this.feedErrorCallback(error, code);
      }); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "updateReplies", function (id, replies) {
      var _this$props12 = _this.props,
          activeFeedEntryId = _this$props12.activeFeedEntryId,
          api = _this$props12.api,
          file = _this$props12.file,
          history = _this$props12.history;
      var feedItems = _this.state.feedItems;

      if (!feedItems) {
        return;
      }

      var feedAPI = api.getFeedAPI(false);
      feedAPI.file = file; // Detect if replies are being hidden and activeFeedEntryId belongs to a reply
      // that is in currently being updated parent, in order to disable active item

      if (activeFeedEntryId && replies.length === 1 && feedItems.some(function (item) {
        return item.id === id && item === _this.getCommentFeedItemByReplyId(feedItems, activeFeedEntryId);
      })) {
        history.replace(_this.getActiveCommentPath());
      }

      feedAPI.updateFeedItem({
        replies: replies
      }, id);

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "updateReplySuccessCallback", function (parentId, onSuccess, reply) {
      var emitAnnotationReplyUpdateEvent = _this.props.emitAnnotationReplyUpdateEvent;

      _this.feedSuccessCallback();

      emitAnnotationReplyUpdateEvent(reply, parentId);

      if (onSuccess) {
        onSuccess();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "createComment", function (text, hasMention) {
      var _this$props13 = _this.props,
          api = _this$props13.api,
          currentUser = _this$props13.currentUser,
          file = _this$props13.file,
          hasReplies = _this$props13.hasReplies,
          onCommentCreate = _this$props13.onCommentCreate;

      if (!currentUser) {
        throw getBadUserError();
      }

      var successCallback = function successCallback(comment) {
        onCommentCreate(comment);

        _this.feedSuccessCallback();
      };

      if (hasReplies) {
        api.getFeedAPI(false).createThreadedComment(file, currentUser, text, successCallback, _this.feedErrorCallback);
      } else {
        api.getFeedAPI(false).createComment(file, currentUser, text, hasMention, successCallback, _this.feedErrorCallback);
      } // need to load the pending item


      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "createReply", function (parentId, parentType, text) {
      var _this$props14 = _this.props,
          api = _this$props14.api,
          currentUser = _this$props14.currentUser,
          emitAnnotationReplyCreateEvent = _this$props14.emitAnnotationReplyCreateEvent,
          file = _this$props14.file;

      if (!currentUser) {
        throw getBadUserError();
      }

      var eventRequestId = uniqueId('comment_');
      emitAnnotationReplyCreateEvent({
        tagged_message: text
      }, eventRequestId, parentId, true);
      api.getFeedAPI(false).createReply(file, currentUser, parentId, parentType, text, _this.createReplySuccessCallback.bind(_assertThisInitialized(_this), eventRequestId, parentId), _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "createReplySuccessCallback", function (eventRequestId, parentId, reply) {
      var emitAnnotationReplyCreateEvent = _this.props.emitAnnotationReplyCreateEvent;

      _this.feedSuccessCallback();

      emitAnnotationReplyCreateEvent(reply, eventRequestId, parentId);
    });

    _defineProperty(_assertThisInitialized(_this), "deleteAppActivity", function (_ref5) {
      var id = _ref5.id;
      var _this$props15 = _this.props,
          api = _this$props15.api,
          file = _this$props15.file;
      api.getFeedAPI(false).deleteAppActivity(file, id, _this.feedSuccessCallback, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "fetchRepliesForFeedItems", function (feedItems) {
      var activeFeedEntryId = _this.props.activeFeedEntryId;

      if (!activeFeedEntryId) {
        return;
      }

      _this.getActiveFeedEntryData(feedItems).then(function (_ref6) {
        var id = _ref6.id,
            type = _ref6.type;

        if (!id || !type || _this.isActiveEntryInFeed(feedItems, activeFeedEntryId) || !_this.isItemTypeComment(type)) {
          return Promise.resolve(feedItems);
        }

        var parentType = type === FEED_ITEM_TYPE_COMMENT ? FEED_ITEM_TYPE_COMMENT : FEED_ITEM_TYPE_ANNOTATION;
        return _this.getFeedItemsWithReplies(feedItems, id, parentType);
      }).then(function (updatedItems) {
        return _this.fetchFeedItemsSuccessCallback(updatedItems);
      }).catch(function (error) {
        return _this.fetchFeedItemsErrorCallback(feedItems, [error]);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFeedItemsSuccessCallback", function (feedItems) {
      var _this$props16 = _this.props,
          fileId = _this$props16.file.id,
          logger = _this$props16.logger;
      mark(MARK_NAME_DATA_READY); // Only emit metric if has >1 activity feed items (there should always at least be the current version)

      if (feedItems.length > 1) {
        logger.onDataReadyMetric({
          endMarkName: MARK_NAME_DATA_READY,
          startMarkName: MARK_NAME_DATA_LOADING
        }, fileId);
      }

      _this.setState({
        feedItems: feedItems,
        activityFeedError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFeedItemsErrorCallback", function (feedItems, errors) {
      var onError = _this.props.onError;

      _this.setState({
        feedItems: feedItems,
        activityFeedError: activityFeedInlineError
      });

      if (Array.isArray(errors) && errors.length) {
        onError(new Error('Fetch feed items error'), ERROR_CODE_FETCH_ACTIVITY, {
          showNotification: true,
          errors: errors.map(function (_ref7) {
            var code = _ref7.code;
            return code;
          })
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getCommentFeedItemWithReplies", function (feedItem, replies) {
      return _objectSpread({}, feedItem, {
        replies: replies
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getFeedItemsWithReplies", function (feedItems, id, type) {
      var _this$props17 = _this.props,
          api = _this$props17.api,
          file = _this$props17.file;
      return new Promise(function (resolve, reject) {
        if (!id || !type) {
          resolve(feedItems);
          return;
        }

        api.getFeedAPI(false).fetchReplies(file, id, type, function (replies) {
          var updatedFeedItems = feedItems.map(function (item) {
            if (item.id === id && _this.isItemTypeComment(item.type)) {
              if (item.type === FEED_ITEM_TYPE_ANNOTATION) {
                return _this.getCommentFeedItemWithReplies(item, replies);
              }

              if (item.type === FEED_ITEM_TYPE_COMMENT) {
                return _this.getCommentFeedItemWithReplies(item, replies);
              }
            }

            return item;
          });
          resolve(updatedFeedItems);
        }, function (error) {
          reject(error);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "errorCallback", function (error, code) {
      var contextInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      /* eslint-disable no-console */
      console.error(error);
      /* eslint-enable no-console */
      // eslint-disable-next-line react/prop-types

      _this.props.onError(error, code, contextInfo);
    });

    _defineProperty(_assertThisInitialized(_this), "getApproverContactsSuccessCallback", function (collaborators) {
      var entries = collaborators.entries;

      _this.setState({
        approverSelectorContacts: entries
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMentionContactsSuccessCallback", function (collaborators) {
      var entries = collaborators.entries;

      _this.setState({
        contactsLoaded: false
      }, function () {
        return _this.setState({
          contactsLoaded: true,
          mentionSelectorContacts: entries
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getApprover", debounce(function (searchStr) {
      var _this$props18 = _this.props,
          file = _this$props18.file,
          api = _this$props18.api;
      api.getFileCollaboratorsAPI(false).getCollaboratorsWithQuery(file.id, _this.getApproverContactsSuccessCallback, _this.errorCallback, searchStr, {
        includeGroups: true
      });
    }, DEFAULT_COLLAB_DEBOUNCE));

    _defineProperty(_assertThisInitialized(_this), "getMention", debounce(function (searchStr) {
      var _this$props19 = _this.props,
          file = _this$props19.file,
          api = _this$props19.api;
      api.getFileCollaboratorsAPI(false).getCollaboratorsWithQuery(file.id, _this.getMentionContactsSuccessCallback, _this.errorCallback, searchStr);
    }, DEFAULT_COLLAB_DEBOUNCE));

    _defineProperty(_assertThisInitialized(_this), "getFocusableFeedItemById", function (feedItems, itemId) {
      if (!itemId) {
        return undefined;
      }

      return feedItems.find(function (_ref8) {
        var id = _ref8.id,
            type = _ref8.type;
        return id === itemId && _this.isItemTypeFocusable(type);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCommentFeedItemByReplyId", function (feedItems, replyId) {
      if (!replyId) {
        return undefined;
      }

      return feedItems.find(function (item) {
        if (item.type !== FEED_ITEM_TYPE_ANNOTATION && item.type !== FEED_ITEM_TYPE_COMMENT || !item.replies) {
          return false;
        }

        return item.replies.some(function (_ref9) {
          var id = _ref9.id;
          return id === replyId;
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isActiveEntryInFeed", function (feedItems, itemId) {
      return !!(_this.getFocusableFeedItemById(feedItems, itemId) || _this.getCommentFeedItemByReplyId(feedItems, itemId));
    });

    _defineProperty(_assertThisInitialized(_this), "isItemTypeFocusable", function (type) {
      return type === FEED_ITEM_TYPE_ANNOTATION || type === FEED_ITEM_TYPE_COMMENT || type === FEED_ITEM_TYPE_TASK;
    });

    _defineProperty(_assertThisInitialized(_this), "isItemTypeComment", function (type) {
      return type === FEED_ITEM_TYPE_ANNOTATION || type === FEED_ITEM_TYPE_COMMENT;
    });

    _defineProperty(_assertThisInitialized(_this), "getActiveFeedEntryData", function (feedItems) {
      var _this$props20 = _this.props,
          activeFeedEntryId = _this$props20.activeFeedEntryId,
          activeFeedEntryType = _this$props20.activeFeedEntryType,
          api = _this$props20.api,
          file = _this$props20.file;
      return new Promise(function (resolve, reject) {
        if (!activeFeedEntryId || !activeFeedEntryType || !_this.isItemTypeFocusable(activeFeedEntryType)) {
          resolve({});
          return;
        } // Check if the active entry is a first level Feed item


        var firstLevelItem = _this.getFocusableFeedItemById(feedItems, activeFeedEntryId);

        if (firstLevelItem) {
          var _id = firstLevelItem.id,
              type = firstLevelItem.type;
          resolve({
            id: _id,
            type: type
          });
          return;
        } // Check if the active entry is within replies of any first level Feed items


        var firstLevelItemWithActiveReply = _this.getCommentFeedItemByReplyId(feedItems, activeFeedEntryId);

        if (firstLevelItemWithActiveReply) {
          var _id2 = firstLevelItemWithActiveReply.id,
              _type = firstLevelItemWithActiveReply.type;
          resolve({
            id: _id2,
            type: _type
          });
          return;
        } // If the active entry could not be found within feed items, it's most likely a reply that
        // is not yet visible in feed and we need to fetch its data in order to find parent


        api.getFeedAPI(false).fetchThreadedComment(file, activeFeedEntryId, function (_ref10) {
          var parent = _ref10.parent;

          var parentItem = _this.getFocusableFeedItemById(feedItems, parent === null || parent === void 0 ? void 0 : parent.id);

          var _ref11 = parentItem || {},
              id = _ref11.id,
              type = _ref11.type;

          resolve({
            id: id,
            type: type
          });
        }, function (error) {
          if (error.status === 404) {
            resolve({});
          } else {
            reject(error);
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getReplies", function (id, type) {
      var _this$props21 = _this.props,
          api = _this$props21.api,
          file = _this$props21.file;
      api.getFeedAPI(false).fetchReplies(file, id, type, _this.feedSuccessCallback, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "getAvatarUrl",
    /*#__PURE__*/
    function () {
      var _ref12 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(userId) {
        var _this$props22, file, api;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props22 = _this.props, file = _this$props22.file, api = _this$props22.api;
                return _context.abrupt("return", api.getUsersAPI(false).getAvatarUrlWithAccessToken(userId, file.id));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref12.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleAnnotationSelect", function (annotation) {
      var file_version = annotation.file_version,
          nextActiveAnnotationId = annotation.id;
      var _this$props23 = _this.props,
          emitActiveAnnotationChangeEvent = _this$props23.emitActiveAnnotationChangeEvent,
          file = _this$props23.file,
          getAnnotationsMatchPath = _this$props23.getAnnotationsMatchPath,
          getAnnotationsPath = _this$props23.getAnnotationsPath,
          history = _this$props23.history,
          location = _this$props23.location,
          onAnnotationSelect = _this$props23.onAnnotationSelect;
      var annotationFileVersionId = getProp(file_version, 'id');
      var currentFileVersionId = getProp(file, 'file_version.id');
      var match = getAnnotationsMatchPath(location);
      var selectedFileVersionId = getProp(match, 'params.fileVersionId', currentFileVersionId);
      emitActiveAnnotationChangeEvent(nextActiveAnnotationId);

      if (annotationFileVersionId && annotationFileVersionId !== selectedFileVersionId) {
        history.push(getAnnotationsPath(annotationFileVersionId, nextActiveAnnotationId));
      }

      onAnnotationSelect(annotation);
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemsFiltered", function (status) {
      var onFilterChange = _this.props.onFilterChange;

      _this.setState({
        feedItemsStatusFilter: status
      });

      onFilterChange(status);
    });

    _defineProperty(_assertThisInitialized(_this), "getFilteredFeedItems", function () {
      var _this$state = _this.state,
          feedItems = _this$state.feedItems,
          feedItemsStatusFilter = _this$state.feedItemsStatusFilter;

      if (!feedItems || !feedItemsStatusFilter || feedItemsStatusFilter === ACTIVITY_FILTER_OPTION_ALL) {
        return feedItems;
      } // Filter is completed on two properties (status and type) because filtering on comments (resolved vs. unresolved)
      // requires looking at item status to see if it is open or resolved. To filter all tasks, we need to look at the
      // item type. Item type is also used to keep versions in the feed. Task also has a status but it's status will be
      // "NOT_STARTED" or "COMPLETED" so it will not conflict with comment's status.


      return feedItems.filter(function (item) {
        return item.status === feedItemsStatusFilter || item.type === FEED_ITEM_TYPE_VERSION || item.type === feedItemsStatusFilter;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTaskModalClose", function () {
      _this.setState({
        approverSelectorContacts: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderAddTaskButton", function () {
      var _this$props24 = _this.props,
          isDisabled = _this$props24.isDisabled,
          hasTasks = _this$props24.hasTasks;
      var approverSelectorContacts = _this.state.approverSelectorContacts;

      var _assertThisInitialize = _assertThisInitialized(_this),
          getApprover = _assertThisInitialize.getApprover,
          getAvatarUrl = _assertThisInitialize.getAvatarUrl,
          createTask = _assertThisInitialize.createTask,
          onTaskModalClose = _assertThisInitialize.onTaskModalClose;

      if (!hasTasks) {
        return null;
      }

      return React.createElement(AddTaskButton, {
        isDisabled: isDisabled,
        onTaskModalClose: onTaskModalClose,
        taskFormProps: {
          approvers: [],
          approverSelectorContacts: approverSelectorContacts,
          completionRule: TASK_COMPLETION_RULE_ALL,
          createTask: createTask,
          getApproverWithQuery: getApprover,
          getAvatarUrl: getAvatarUrl,
          id: '',
          message: ''
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderActivitySidebarFilter", function () {
      var _this$props25 = _this.props,
          features = _this$props25.features,
          hasTasks = _this$props25.hasTasks;
      var feedItemsStatusFilter = _this.state.feedItemsStatusFilter;
      var shouldShowActivityFeedFilter = isFeatureEnabled(features, 'activityFeed.filter.enabled');
      var shouldShowAdditionalFilterOptions = isFeatureEnabled(features, 'activityFeed.newThreadedReplies.enabled');

      if (!shouldShowActivityFeedFilter) {
        return null;
      }

      var activityFilterOptions = [ACTIVITY_FILTER_OPTION_ALL, ACTIVITY_FILTER_OPTION_UNRESOLVED];

      if (shouldShowAdditionalFilterOptions) {
        // Determine which filter options to show based on what activity types are available in current context
        activityFilterOptions.push(ACTIVITY_FILTER_OPTION_RESOLVED);

        if (hasTasks) {
          activityFilterOptions.push(ACTIVITY_FILTER_OPTION_TASKS);
        }
      }

      return React.createElement(ActivitySidebarFilter, {
        activityFilterOptions: activityFilterOptions,
        feedItemType: feedItemsStatusFilter,
        onFeedItemTypeClick: function onFeedItemTypeClick(selectedStatus) {
          _this.handleItemsFiltered(selectedStatus);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderActions", function () {
      return React.createElement(React.Fragment, null, _this.renderActivitySidebarFilter(), _this.renderAddTaskButton());
    });

    _defineProperty(_assertThisInitialized(_this), "renderTitle", function () {
      var features = _this.props.features;
      var shouldHideTitle = isFeatureEnabled(features, 'activityFeed.filter.enabled');

      if (shouldHideTitle) {
        return null;
      }

      return React.createElement(FormattedMessage, messages.sidebarActivityTitle);
    });

    var _logger = _this.props.logger;
    mark(MARK_NAME_DATA_LOADING);

    _logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });

    _this.state = {};
    return _this;
  }

  _createClass(ActivitySidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFeedItems(true);
    }
  }, {
    key: "deleteAnnotationSuccess",
    value: function deleteAnnotationSuccess(id) {
      var emitAnnotationRemoveEvent = this.props.emitAnnotationRemoveEvent;
      this.feedSuccessCallback();
      emitAnnotationRemoveEvent(id);
    }
    /**
     * Success callback for fetching feed items
     */

  }, {
    key: "fetchFeedItems",

    /**
     * Fetches the feed items for the sidebar
     *
     * @param {boolean} shouldRefreshCache true if the cache should be refreshed
     * @param {boolean} shouldDestroy true if the api factory should be destroyed
     */
    value: function fetchFeedItems() {
      var shouldRefreshCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var shouldDestroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props26 = this.props,
          activeFeedEntryId = _this$props26.activeFeedEntryId,
          activeFeedEntryType = _this$props26.activeFeedEntryType,
          api = _this$props26.api,
          file = _this$props26.file,
          features = _this$props26.features,
          shouldShowReplies = _this$props26.hasReplies,
          shouldShowTasks = _this$props26.hasTasks,
          shouldShowVersions = _this$props26.hasVersions;
      var shouldFetchReplies = shouldRefreshCache && shouldShowReplies && activeFeedEntryId && activeFeedEntryType === FEED_ITEM_TYPE_COMMENT;
      var shouldShowAppActivity = isFeatureEnabled(features, 'activityFeed.appActivity.enabled');
      var shouldShowAnnotations = isFeatureEnabled(features, 'activityFeed.annotations.enabled');
      var shouldUseUAA = isFeatureEnabled(features, 'activityFeed.uaaIntegration.enabled');
      api.getFeedAPI(shouldDestroy).feedItems(file, shouldRefreshCache, shouldFetchReplies ? this.fetchRepliesForFeedItems : this.fetchFeedItemsSuccessCallback, this.fetchFeedItemsErrorCallback, this.errorCallback, {
        shouldShowAnnotations: shouldShowAnnotations,
        shouldShowAppActivity: shouldShowAppActivity,
        shouldShowReplies: shouldShowReplies,
        shouldShowTasks: shouldShowTasks,
        shouldShowVersions: shouldShowVersions,
        shouldUseUAA: shouldUseUAA
      });
    }
  }, {
    key: "getActiveCommentPath",
    value: function getActiveCommentPath(commentId) {
      if (!commentId) {
        return '/activity';
      }

      return generatePath('/:sidebar/comments/:commentId?', {
        sidebar: 'activity',
        commentId: commentId
      });
    }
    /**
     * Fetches replies (comments) of a comment or annotation
     *
     * @param {string} id - id of the feed item
                                * @param {CommentFeedItemType} type - type of the feed item
                                * @return {void}
                                */

  }, {
    key: "refresh",
    value: function refresh() {
      var shouldRefreshCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.fetchFeedItems(shouldRefreshCache);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props27 = this.props,
          activeFeedEntryId = _this$props27.activeFeedEntryId,
          activeFeedEntryType = _this$props27.activeFeedEntryType,
          currentUser = _this$props27.currentUser,
          currentUserError = _this$props27.currentUserError,
          elementId = _this$props27.elementId,
          features = _this$props27.features,
          file = _this$props27.file,
          hasReplies = _this$props27.hasReplies,
          hasVersions = _this$props27.hasVersions,
          _this$props27$isDisab = _this$props27.isDisabled,
          isDisabled = _this$props27$isDisab === void 0 ? false : _this$props27$isDisab,
          onVersionHistoryClick = _this$props27.onVersionHistoryClick,
          getUserProfileUrl = _this$props27.getUserProfileUrl,
          onTaskView = _this$props27.onTaskView;
      var _this$state2 = this.state,
          activityFeedError = _this$state2.activityFeedError,
          approverSelectorContacts = _this$state2.approverSelectorContacts,
          contactsLoaded = _this$state2.contactsLoaded,
          mentionSelectorContacts = _this$state2.mentionSelectorContacts;
      var isNewThreadedRepliesEnabled = isFeatureEnabled(features, 'activityFeed.newThreadedReplies.enabled');
      var shouldUseUAA = isFeatureEnabled(features, 'activityFeed.uaaIntegration.enabled');
      return React.createElement(SidebarContent, {
        actions: this.renderActions(),
        className: classNames('bcs-activity', {
          'bcs-activity--full': hasReplies
        }),
        elementId: elementId,
        sidebarView: SIDEBAR_VIEW_ACTIVITY,
        title: this.renderTitle()
      }, React.createElement(ActivityFeed, {
        activeFeedEntryId: activeFeedEntryId,
        activeFeedEntryType: activeFeedEntryType,
        activityFeedError: activityFeedError,
        approverSelectorContacts: approverSelectorContacts,
        currentUser: currentUser,
        currentUserError: currentUserError,
        feedItems: this.getFilteredFeedItems(),
        file: file,
        getApproverWithQuery: this.getApprover,
        getAvatarUrl: this.getAvatarUrl,
        getMentionWithQuery: this.getMention,
        getUserProfileUrl: getUserProfileUrl,
        hasNewThreadedReplies: isNewThreadedRepliesEnabled,
        hasReplies: hasReplies,
        hasVersions: hasVersions,
        isDisabled: isDisabled,
        mentionSelectorContacts: mentionSelectorContacts,
        contactsLoaded: contactsLoaded,
        onAnnotationDelete: this.handleAnnotationDelete,
        onAnnotationEdit: this.handleAnnotationEdit,
        onAnnotationSelect: this.handleAnnotationSelect,
        onAnnotationStatusChange: this.handleAnnotationStatusChange,
        onAppActivityDelete: this.deleteAppActivity,
        onCommentCreate: this.createComment,
        onCommentDelete: this.deleteComment,
        onCommentUpdate: this.updateComment,
        onHideReplies: this.updateReplies,
        onReplyCreate: this.createReply,
        onReplyDelete: this.deleteReply,
        onReplyUpdate: this.updateReply,
        onShowReplies: this.getReplies,
        onTaskAssignmentUpdate: this.updateTaskAssignment,
        onTaskCreate: this.createTask,
        onTaskDelete: this.deleteTask,
        onTaskModalClose: this.onTaskModalClose,
        onTaskUpdate: this.updateTask,
        onTaskView: onTaskView,
        onVersionHistoryClick: onVersionHistoryClick,
        shouldUseUAA: shouldUseUAA
      }));
    }
  }]);

  return ActivitySidebar;
}(React.PureComponent);

_defineProperty(ActivitySidebar, "defaultProps", {
  annotatorState: {},
  emitActiveAnnotationChangeEvent: noop,
  emitAnnotationRemoveEvent: noop,
  emitAnnotationReplyCreateEvent: noop,
  emitAnnotationReplyDeleteEvent: noop,
  emitAnnotationReplyUpdateEvent: noop,
  emitAnnotationUpdateEvent: noop,
  getAnnotationsMatchPath: noop,
  getAnnotationsPath: noop,
  hasReplies: false,
  hasTasks: true,
  hasVersions: true,
  isDisabled: false,
  onAnnotationSelect: noop,
  onCommentCreate: noop,
  onCommentDelete: noop,
  onCommentUpdate: noop,
  onFilterChange: noop,
  onTaskAssignmentUpdate: noop,
  onTaskCreate: noop,
  onTaskDelete: noop,
  onTaskUpdate: noop,
  onVersionChange: noop,
  onVersionHistoryClick: noop
});

export { ActivitySidebar as ActivitySidebarComponent };
export default flow([withLogger(ORIGIN_ACTIVITY_SIDEBAR), withErrorBoundary(ORIGIN_ACTIVITY_SIDEBAR), withAPIContext, withFeatureConsumer, withAnnotatorContext, withRouterAndRef])(ActivitySidebar);
//# sourceMappingURL=ActivitySidebar.js.map