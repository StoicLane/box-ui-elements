import * as React from 'react';
import noop from 'lodash/noop';
import { Status } from './types';

function useAnnotatorEvents(_ref) {
  var eventEmitter = _ref.eventEmitter,
      _ref$onAnnotationDele = _ref.onAnnotationDeleteEnd,
      onAnnotationDeleteEnd = _ref$onAnnotationDele === void 0 ? noop : _ref$onAnnotationDele,
      _ref$onAnnotationDele2 = _ref.onAnnotationDeleteStart,
      onAnnotationDeleteStart = _ref$onAnnotationDele2 === void 0 ? noop : _ref$onAnnotationDele2,
      _ref$onAnnotationRepl = _ref.onAnnotationReplyAddEnd,
      onAnnotationReplyAddEnd = _ref$onAnnotationRepl === void 0 ? noop : _ref$onAnnotationRepl,
      _ref$onAnnotationRepl2 = _ref.onAnnotationReplyAddStart,
      onAnnotationReplyAddStart = _ref$onAnnotationRepl2 === void 0 ? noop : _ref$onAnnotationRepl2,
      _ref$onAnnotationRepl3 = _ref.onAnnotationReplyDeleteEnd,
      onAnnotationReplyDeleteEnd = _ref$onAnnotationRepl3 === void 0 ? noop : _ref$onAnnotationRepl3,
      _ref$onAnnotationRepl4 = _ref.onAnnotationReplyDeleteStart,
      onAnnotationReplyDeleteStart = _ref$onAnnotationRepl4 === void 0 ? noop : _ref$onAnnotationRepl4,
      _ref$onAnnotationRepl5 = _ref.onAnnotationReplyUpdateEnd,
      onAnnotationReplyUpdateEnd = _ref$onAnnotationRepl5 === void 0 ? noop : _ref$onAnnotationRepl5,
      _ref$onAnnotationRepl6 = _ref.onAnnotationReplyUpdateStart,
      onAnnotationReplyUpdateStart = _ref$onAnnotationRepl6 === void 0 ? noop : _ref$onAnnotationRepl6,
      _ref$onAnnotationUpda = _ref.onAnnotationUpdateEnd,
      onAnnotationUpdateEnd = _ref$onAnnotationUpda === void 0 ? noop : _ref$onAnnotationUpda,
      _ref$onAnnotationUpda2 = _ref.onAnnotationUpdateStart,
      onAnnotationUpdateStart = _ref$onAnnotationUpda2 === void 0 ? noop : _ref$onAnnotationUpda2,
      _ref$onSidebarAnnotat = _ref.onSidebarAnnotationSelected,
      onSidebarAnnotationSelected = _ref$onSidebarAnnotat === void 0 ? noop : _ref$onSidebarAnnotat;

  var emitAnnotationActiveChangeEvent = function emitAnnotationActiveChangeEvent(annotationId, fileVersionId) {
    eventEmitter.emit('annotations_active_change', {
      annotationId: annotationId,
      fileVersionId: fileVersionId
    });
  };

  var emitAddAnnotationEvent = function emitAddAnnotationEvent(annotation, requestId, status) {
    var actionEvent = {
      annotation: annotation,
      meta: {
        status: status,
        requestId: requestId
      }
    };
    eventEmitter.emit('annotations_create', actionEvent);
  };

  var emitAddAnnotationStartEvent = function emitAddAnnotationStartEvent(annotation, requestId) {
    emitAddAnnotationEvent(annotation, requestId, Status.PENDING);
  };

  var emitAddAnnotationEndEvent = function emitAddAnnotationEndEvent(annotation, requestId) {
    emitAddAnnotationEvent(annotation, requestId, Status.SUCCESS);
  };

  var emitDeleteAnnotationEvent = function emitDeleteAnnotationEvent(id, status) {
    var actionEvent = {
      annotation: {
        id: id
      },
      meta: {
        status: status
      }
    };
    eventEmitter.emit('annotations_delete', actionEvent);
  };

  var emitDeleteAnnotationStartEvent = function emitDeleteAnnotationStartEvent(id) {
    emitDeleteAnnotationEvent(id, Status.PENDING);
  };

  var emitDeleteAnnotationEndEvent = function emitDeleteAnnotationEndEvent(id) {
    emitDeleteAnnotationEvent(id, Status.SUCCESS);
    eventEmitter.emit('annotations_remove', id);
  };

  var emitUpdateAnnotationEvent = function emitUpdateAnnotationEvent(annotation, status) {
    var actionEvent = {
      annotation: annotation,
      meta: {
        status: status
      }
    };
    eventEmitter.emit('annotations_update', actionEvent);
  };

  var emitUpdateAnnotationStartEvent = function emitUpdateAnnotationStartEvent(annotation) {
    emitUpdateAnnotationEvent(annotation, Status.PENDING);
  };

  var emitUpdateAnnotationEndEvent = function emitUpdateAnnotationEndEvent(annotation) {
    emitUpdateAnnotationEvent(annotation, Status.SUCCESS);
  };

  var emitUpdateAnnotationReplyEvent = function emitUpdateAnnotationReplyEvent(reply, annotationId, status) {
    var actionEvent = {
      annotation: {
        id: annotationId
      },
      annotationReply: reply,
      meta: {
        status: status
      }
    };
    eventEmitter.emit('annotations_reply_update', actionEvent);
  };

  var emitUpdateAnnotationReplyStartEvent = function emitUpdateAnnotationReplyStartEvent(reply, annotationId) {
    emitUpdateAnnotationReplyEvent(reply, annotationId, Status.PENDING);
  };

  var emitUpdateAnnotationReplyEndEvent = function emitUpdateAnnotationReplyEndEvent(reply, annotationId) {
    emitUpdateAnnotationReplyEvent(reply, annotationId, Status.SUCCESS);
  };

  var emitDeleteAnnotationReplyEvent = function emitDeleteAnnotationReplyEvent(id, annotationId, status) {
    var actionEvent = {
      annotation: {
        id: annotationId
      },
      annotationReply: {
        id: id
      },
      meta: {
        status: status
      }
    };
    eventEmitter.emit('annotations_reply_delete', actionEvent);
  };

  var emitDeleteAnnotationReplyStartEvent = function emitDeleteAnnotationReplyStartEvent(id, annotationId) {
    emitDeleteAnnotationReplyEvent(id, annotationId, Status.PENDING);
  };

  var emitDeleteAnnotationReplyEndEvent = function emitDeleteAnnotationReplyEndEvent(id, annotationId) {
    emitDeleteAnnotationReplyEvent(id, annotationId, Status.SUCCESS);
  };

  var emitAddAnnotationReplyEvent = function emitAddAnnotationReplyEvent(reply, annotationId, requestId, status) {
    var actionEvent = {
      annotation: {
        id: annotationId
      },
      annotationReply: reply,
      meta: {
        status: status,
        requestId: requestId
      }
    };
    eventEmitter.emit('annotations_reply_create', actionEvent);
  };

  var emitAddAnnotationReplyStartEvent = function emitAddAnnotationReplyStartEvent(reply, annotationId, requestId) {
    emitAddAnnotationReplyEvent(reply, annotationId, requestId, Status.PENDING);
  };

  var emitAddAnnotationReplyEndEvent = function emitAddAnnotationReplyEndEvent(reply, annotationId, requestId) {
    emitAddAnnotationReplyEvent(reply, annotationId, requestId, Status.SUCCESS);
  };

  React.useEffect(function () {
    eventEmitter.addListener('annotations_active_set', onSidebarAnnotationSelected);
    eventEmitter.addListener('annotations_remove', onAnnotationDeleteEnd);
    eventEmitter.addListener('annotations_remove_start', onAnnotationDeleteStart);
    eventEmitter.addListener('sidebar.annotations_update', onAnnotationUpdateEnd);
    eventEmitter.addListener('sidebar.annotations_update_start', onAnnotationUpdateStart);
    eventEmitter.addListener('sidebar.annotations_reply_create', onAnnotationReplyAddEnd);
    eventEmitter.addListener('sidebar.annotations_reply_create_start', onAnnotationReplyAddStart);
    eventEmitter.addListener('sidebar.annotations_reply_delete', onAnnotationReplyDeleteEnd);
    eventEmitter.addListener('sidebar.annotations_reply_delete_start', onAnnotationReplyDeleteStart);
    eventEmitter.addListener('sidebar.annotations_reply_update', onAnnotationReplyUpdateEnd);
    eventEmitter.addListener('sidebar.annotations_reply_update_start', onAnnotationReplyUpdateStart);
    return function () {
      eventEmitter.removeListener('annotations_active_set', onSidebarAnnotationSelected);
      eventEmitter.removeListener('annotations_remove', onAnnotationDeleteEnd);
      eventEmitter.removeListener('annotations_remove_start', onAnnotationDeleteStart);
      eventEmitter.removeListener('sidebar.annotations_update', onAnnotationUpdateEnd);
      eventEmitter.removeListener('sidebar.annotations_update_start', onAnnotationUpdateStart);
      eventEmitter.removeListener('sidebar.annotations_reply_create', onAnnotationReplyAddEnd);
      eventEmitter.removeListener('sidebar.annotations_reply_create_start', onAnnotationReplyAddStart);
      eventEmitter.removeListener('sidebar.annotations_reply_delete', onAnnotationReplyDeleteEnd);
      eventEmitter.removeListener('sidebar.annotations_reply_delete_start', onAnnotationReplyDeleteStart);
      eventEmitter.removeListener('sidebar.annotations_reply_update', onAnnotationReplyUpdateEnd);
      eventEmitter.removeListener('sidebar.annotations_reply_update_start', onAnnotationReplyUpdateStart);
    };
  }, [eventEmitter, onAnnotationDeleteEnd, onAnnotationDeleteStart, onAnnotationReplyAddEnd, onAnnotationReplyAddStart, onAnnotationReplyDeleteEnd, onAnnotationReplyDeleteStart, onAnnotationReplyUpdateEnd, onAnnotationReplyUpdateStart, onAnnotationUpdateEnd, onAnnotationUpdateStart, onSidebarAnnotationSelected]);
  return {
    emitAddAnnotationEndEvent: emitAddAnnotationEndEvent,
    emitAddAnnotationReplyEndEvent: emitAddAnnotationReplyEndEvent,
    emitAddAnnotationReplyStartEvent: emitAddAnnotationReplyStartEvent,
    emitAddAnnotationStartEvent: emitAddAnnotationStartEvent,
    emitAnnotationActiveChangeEvent: emitAnnotationActiveChangeEvent,
    emitDeleteAnnotationEndEvent: emitDeleteAnnotationEndEvent,
    emitDeleteAnnotationReplyEndEvent: emitDeleteAnnotationReplyEndEvent,
    emitDeleteAnnotationReplyStartEvent: emitDeleteAnnotationReplyStartEvent,
    emitDeleteAnnotationStartEvent: emitDeleteAnnotationStartEvent,
    emitUpdateAnnotationEndEvent: emitUpdateAnnotationEndEvent,
    emitUpdateAnnotationReplyEndEvent: emitUpdateAnnotationReplyEndEvent,
    emitUpdateAnnotationReplyStartEvent: emitUpdateAnnotationReplyStartEvent,
    emitUpdateAnnotationStartEvent: emitUpdateAnnotationStartEvent
  };
}

export default useAnnotatorEvents;
//# sourceMappingURL=useAnnotatorEvents.js.map