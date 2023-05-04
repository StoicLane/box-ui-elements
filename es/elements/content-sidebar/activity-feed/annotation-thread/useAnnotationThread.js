function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import uniqueId from 'lodash/uniqueId';
import commonMessages from '../../../common/messages';
import { annotationErrors, commentsErrors } from './errors';
import API from '../../../../api/APIFactory';
import useRepliesAPI from './useRepliesAPI';
import { useAnnotatorEvents } from '../../../common/annotator-context';
import useAnnotationAPI from './useAnnotationAPI';

var normalizeReplies = function normalizeReplies(repliesArray) {
  if (!repliesArray) {
    return {};
  }

  return repliesArray.reduce(function (prevValues, reply) {
    return _objectSpread({}, prevValues, _defineProperty({}, reply.id, reply));
  }, {});
};

var denormalizeReplies = function denormalizeReplies(repliesMap) {
  return Object.keys(repliesMap).map(function (key) {
    return repliesMap[key];
  });
};

var useAnnotationThread = function useAnnotationThread(_ref) {
  var annotationId = _ref.annotationId,
      api = _ref.api,
      currentUser = _ref.currentUser,
      errorCallback = _ref.errorCallback,
      eventEmitter = _ref.eventEmitter,
      file = _ref.file,
      onAnnotationCreate = _ref.onAnnotationCreate,
      target = _ref.target;

  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      annotation = _React$useState2[0],
      setAnnotation = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      replies = _React$useState4[0],
      setReplies = _React$useState4[1];

  var _React$useState5 = React.useState(),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isLoading = _React$useState8[0],
      setIsLoading = _React$useState8[1];

  var _file$file_version = file.file_version;
  _file$file_version = _file$file_version === void 0 ? {} : _file$file_version;
  var fileVersionId = _file$file_version.id,
      fileId = file.id,
      _file$permissions = file.permissions,
      filePermissions = _file$permissions === void 0 ? {} : _file$permissions;

  var updateOrCreateReplyItem = function updateOrCreateReplyItem(replyId, updatedReplyValues) {
    setReplies(function (prevReplies) {
      return _objectSpread({}, prevReplies, _defineProperty({}, replyId, _objectSpread({}, prevReplies[replyId], {}, updatedReplyValues)));
    });
  };

  var removeReplyItem = function removeReplyItem(replyId) {
    setReplies(function (prevReplies) {
      var newReplies = _objectSpread({}, prevReplies);

      delete newReplies[replyId];
      return newReplies;
    });
  };

  var addPendingReply = function addPendingReply(baseReply, requestId) {
    var date = new Date().toISOString();

    var pendingReply = _objectSpread({
      created_at: date,
      created_by: currentUser,
      id: requestId,
      isPending: true,
      modified_at: date
    }, baseReply);

    updateOrCreateReplyItem(requestId, pendingReply);
  };

  var isCurrentAnnotation = function isCurrentAnnotation(id) {
    return annotationId === id;
  };

  var handleAnnotationUpdateStartEvent = function handleAnnotationUpdateStartEvent(updatedAnnotation) {
    if (!isCurrentAnnotation(updatedAnnotation.id) || !annotation) {
      return;
    }

    setAnnotation(function (prevAnnotation) {
      return _objectSpread({}, prevAnnotation, {}, updatedAnnotation, {
        isPending: true
      });
    });
  };

  var handleAnnotationUpdateEndEvent = function handleAnnotationUpdateEndEvent(updatedAnnotation) {
    if (!isCurrentAnnotation(updatedAnnotation.id) || !annotation) {
      return;
    }

    setAnnotation(function (prevAnnotation) {
      return _objectSpread({}, prevAnnotation, {}, updatedAnnotation, {
        isPending: false
      });
    });
  };

  var handleAnnotationDeleteStartEvent = function handleAnnotationDeleteStartEvent(originAnnotationId) {
    if (!isCurrentAnnotation(originAnnotationId) || !annotation) {
      return;
    }

    setAnnotation(function (prevAnnotation) {
      return _objectSpread({}, prevAnnotation, {
        isPending: true
      });
    });
  };

  var handleAnnotationReplyAddStartEvent = function handleAnnotationReplyAddStartEvent(_ref2) {
    var originAnnotationId = _ref2.annotationId,
        reply = _ref2.reply,
        requestId = _ref2.requestId;

    if (!isCurrentAnnotation(originAnnotationId)) {
      return;
    }

    addPendingReply(reply, requestId);
  };

  var handleAnnotationReplyAddEndEvent = function handleAnnotationReplyAddEndEvent(_ref3) {
    var originAnnotationId = _ref3.annotationId,
        reply = _ref3.reply,
        requestId = _ref3.requestId;

    if (!isCurrentAnnotation(originAnnotationId)) {
      return;
    }

    updateOrCreateReplyItem(requestId, _objectSpread({}, reply, {
      isPending: false
    }));
  };

  var handleAnnotationReplyUpdateStart = function handleAnnotationReplyUpdateStart(_ref4) {
    var originAnnotationId = _ref4.annotationId,
        reply = _ref4.reply;

    if (!isCurrentAnnotation(originAnnotationId)) {
      return;
    }

    updateOrCreateReplyItem(reply.id, _objectSpread({}, reply, {
      isPending: true
    }));
  };

  var handleAnnotationReplyUpdateEnd = function handleAnnotationReplyUpdateEnd(_ref5) {
    var originAnnotationId = _ref5.annotationId,
        reply = _ref5.reply;

    if (!isCurrentAnnotation(originAnnotationId)) {
      return;
    }

    updateOrCreateReplyItem(reply.id, _objectSpread({}, reply, {
      isPending: false
    }));
  };

  var handleAnnotationReplyDeleteStart = function handleAnnotationReplyDeleteStart(_ref6) {
    var originAnnotationId = _ref6.annotationId,
        replyId = _ref6.id;

    if (!isCurrentAnnotation(originAnnotationId)) {
      return;
    }

    updateOrCreateReplyItem(replyId, {
      isPending: true
    });
  };

  var handleAnnotationReplyDeleteEnd = function handleAnnotationReplyDeleteEnd(_ref7) {
    var originAnnotationId = _ref7.annotationId,
        replyId = _ref7.id;

    if (!isCurrentAnnotation(originAnnotationId)) {
      return;
    }

    removeReplyItem(replyId);
  };

  var _useAnnotatorEvents = useAnnotatorEvents({
    eventEmitter: eventEmitter,
    onAnnotationDeleteStart: handleAnnotationDeleteStartEvent,
    onAnnotationReplyAddEnd: handleAnnotationReplyAddEndEvent,
    onAnnotationReplyAddStart: handleAnnotationReplyAddStartEvent,
    onAnnotationReplyUpdateEnd: handleAnnotationReplyUpdateEnd,
    onAnnotationReplyUpdateStart: handleAnnotationReplyUpdateStart,
    onAnnotationUpdateEnd: handleAnnotationUpdateEndEvent,
    onAnnotationUpdateStart: handleAnnotationUpdateStartEvent,
    onAnnotationReplyDeleteEnd: handleAnnotationReplyDeleteEnd,
    onAnnotationReplyDeleteStart: handleAnnotationReplyDeleteStart
  }),
      emitAddAnnotationEndEvent = _useAnnotatorEvents.emitAddAnnotationEndEvent,
      emitAddAnnotationReplyEndEvent = _useAnnotatorEvents.emitAddAnnotationReplyEndEvent,
      emitAddAnnotationReplyStartEvent = _useAnnotatorEvents.emitAddAnnotationReplyStartEvent,
      emitAddAnnotationStartEvent = _useAnnotatorEvents.emitAddAnnotationStartEvent,
      emitAnnotationActiveChangeEvent = _useAnnotatorEvents.emitAnnotationActiveChangeEvent,
      emitDeleteAnnotationEndEvent = _useAnnotatorEvents.emitDeleteAnnotationEndEvent,
      emitDeleteAnnotationReplyEndEvent = _useAnnotatorEvents.emitDeleteAnnotationReplyEndEvent,
      emitDeleteAnnotationReplyStartEvent = _useAnnotatorEvents.emitDeleteAnnotationReplyStartEvent,
      emitDeleteAnnotationStartEvent = _useAnnotatorEvents.emitDeleteAnnotationStartEvent,
      emitUpdateAnnotationEndEvent = _useAnnotatorEvents.emitUpdateAnnotationEndEvent,
      emitUpdateAnnotationReplyEndEvent = _useAnnotatorEvents.emitUpdateAnnotationReplyEndEvent,
      emitUpdateAnnotationReplyStartEvent = _useAnnotatorEvents.emitUpdateAnnotationReplyStartEvent,
      emitUpdateAnnotationStartEvent = _useAnnotatorEvents.emitUpdateAnnotationStartEvent;

  var handleUpdateAnnotation = function handleUpdateAnnotation(updatedValues) {
    setAnnotation(function (prevAnnotation) {
      return _objectSpread({}, prevAnnotation, {}, updatedValues);
    });
  };

  var annotationErrorCallback = React.useCallback(function (e, code) {
    setIsLoading(false);
    setError({
      title: commonMessages.errorOccured,
      message: annotationErrors[code] || annotationErrors.default
    });
    errorCallback(e, code, {
      error: e
    });
  }, [errorCallback]);

  var _useAnnotationAPI = useAnnotationAPI({
    api: api,
    file: file,
    errorCallback: annotationErrorCallback
  }),
      handleCreate = _useAnnotationAPI.handleCreate,
      handleDelete = _useAnnotationAPI.handleDelete,
      handleEdit = _useAnnotationAPI.handleEdit,
      handleFetch = _useAnnotationAPI.handleFetch,
      handleStatusChange = _useAnnotationAPI.handleStatusChange;

  var replyErrorCallback = React.useCallback(function (replyId, e, code) {
    updateOrCreateReplyItem(replyId, {
      error: {
        title: commonMessages.errorOccured,
        message: commentsErrors[code] || commentsErrors.default
      }
    });
    errorCallback(e, code, {
      error: e
    });
  }, [errorCallback]);

  var _useRepliesAPI = useRepliesAPI({
    annotationId: annotationId,
    api: api,
    errorCallback: replyErrorCallback,
    fileId: fileId,
    filePermissions: filePermissions
  }),
      createReply = _useRepliesAPI.createReply,
      deleteReply = _useRepliesAPI.deleteReply,
      editReply = _useRepliesAPI.editReply;

  var handleAnnotationCreate = function handleAnnotationCreate(text) {
    setIsLoading(true);
    var requestId = uniqueId('annotation_');

    var successCallback = function successCallback(newAnnotation) {
      setIsLoading(false);
      emitAddAnnotationEndEvent(newAnnotation, requestId);
      onAnnotationCreate(newAnnotation);
    };

    var payload = {
      description: {
        message: text
      },
      target: target
    };
    emitAddAnnotationStartEvent(payload, requestId);
    handleCreate({
      payload: payload,
      successCallback: successCallback
    });
  };

  var handleAnnotationDelete = function handleAnnotationDelete(_ref8) {
    var id = _ref8.id,
        permissions = _ref8.permissions;

    var annotationDeleteSuccessCallback = function annotationDeleteSuccessCallback() {
      emitDeleteAnnotationEndEvent(id);
    };

    setAnnotation(function (prevAnnotation) {
      return _objectSpread({}, prevAnnotation, {
        isPending: true
      });
    });
    emitDeleteAnnotationStartEvent(id);
    handleDelete({
      id: id,
      permissions: permissions,
      successCallback: annotationDeleteSuccessCallback
    });
  };

  var onAnnotationEditSuccessCallback = function onAnnotationEditSuccessCallback(updatedAnnotation) {
    handleUpdateAnnotation(_objectSpread({}, updatedAnnotation, {
      isPending: false
    }));
    emitUpdateAnnotationEndEvent(updatedAnnotation);
  };

  var handleAnnotationEdit = function handleAnnotationEdit(_ref9) {
    var id = _ref9.id,
        text = _ref9.text,
        permissions = _ref9.permissions;
    setAnnotation(function (prevAnnotation) {
      return _objectSpread({}, prevAnnotation, {
        isPending: true
      });
    });
    emitUpdateAnnotationStartEvent({
      id: id,
      description: {
        message: text
      }
    });
    handleEdit({
      id: id,
      text: text !== null && text !== void 0 ? text : '',
      permissions: permissions,
      successCallback: onAnnotationEditSuccessCallback
    });
  };

  var handleAnnotationStatusChange = function handleAnnotationStatusChange(id, status, permissions) {
    setAnnotation(function (prevAnnotation) {
      return _objectSpread({}, prevAnnotation, {
        isPending: true
      });
    });
    handleStatusChange({
      id: id,
      status: status,
      permissions: permissions,
      successCallback: onAnnotationEditSuccessCallback
    });
  };

  var handleReplyCreate = function handleReplyCreate(message) {
    var requestId = uniqueId('reply_');
    var replyData = {
      tagged_message: message,
      type: 'comment'
    };

    var successCallback = function successCallback(comment) {
      updateOrCreateReplyItem(requestId, _objectSpread({}, comment, {
        isPending: false
      }));
      emitAddAnnotationReplyEndEvent(comment, annotationId, requestId);
    };

    addPendingReply(replyData, requestId);
    emitAddAnnotationReplyStartEvent(replyData, annotationId, requestId);
    createReply({
      message: message,
      requestId: requestId,
      successCallback: successCallback
    });
  };

  var handleReplyEdit = function handleReplyEdit(replyId, message, status, hasMention, permissions) {
    var updates = {
      id: replyId,
      tagged_message: message
    };

    var successCallback = function successCallback(comment) {
      updateOrCreateReplyItem(comment.id, _objectSpread({}, comment, {
        isPending: false
      }));
      emitUpdateAnnotationReplyEndEvent(comment, annotationId);
    };

    updateOrCreateReplyItem(replyId, {
      message: message,
      isPending: true
    });
    emitUpdateAnnotationReplyStartEvent(updates, annotationId);
    editReply({
      id: replyId,
      message: message,
      permissions: permissions,
      successCallback: successCallback
    });
  };

  var handleReplyDelete = function handleReplyDelete(_ref10) {
    var id = _ref10.id,
        permissions = _ref10.permissions;
    updateOrCreateReplyItem(id, {
      isPending: true
    });
    emitDeleteAnnotationReplyStartEvent(id, annotationId);

    var successCallback = function successCallback() {
      removeReplyItem(id);
      emitDeleteAnnotationReplyEndEvent(id, annotationId);
    };

    deleteReply({
      id: id,
      permissions: permissions,
      successCallback: successCallback
    });
  };

  React.useEffect(function () {
    if (!annotationId || isLoading || annotation && annotation.id === annotationId) {
      return;
    }

    setIsLoading(true);
    handleFetch({
      id: annotationId,
      successCallback: function successCallback(_ref11) {
        var fetchedReplies = _ref11.replies,
            normalizedAnnotation = _objectWithoutProperties(_ref11, ["replies"]);

        setAnnotation(_objectSpread({}, normalizedAnnotation));
        setReplies(normalizeReplies(fetchedReplies));
        setError(undefined);
        setIsLoading(false);
        emitAnnotationActiveChangeEvent(normalizedAnnotation.id, fileVersionId);
      }
    });
  }, [annotation, annotationId, emitAnnotationActiveChangeEvent, fileVersionId, handleFetch, isLoading]);
  return {
    annotation: annotation,
    error: error,
    isLoading: isLoading,
    replies: denormalizeReplies(replies),
    annotationActions: {
      handleAnnotationCreate: handleAnnotationCreate,
      handleAnnotationDelete: handleAnnotationDelete,
      handleAnnotationEdit: handleAnnotationEdit,
      handleAnnotationStatusChange: handleAnnotationStatusChange
    },
    repliesActions: {
      handleReplyCreate: handleReplyCreate,
      handleReplyEdit: handleReplyEdit,
      handleReplyDelete: handleReplyDelete
    }
  };
};

export default useAnnotationThread;
//# sourceMappingURL=useAnnotationThread.js.map