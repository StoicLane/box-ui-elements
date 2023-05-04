function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { renderHook, act } from '@testing-library/react-hooks';
import useAnnotatorEvents from '../useAnnotatorEvents';
import { Status } from '../types';
describe('src/elements/common/annotator-context/useAnnotatorEvents', function () {
  var mockAddListener = jest.fn();
  var mockEmit = jest.fn();
  var mockRemoveListener = jest.fn();

  var getHook = function getHook() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mockEventEmitter = {
      addListener: mockAddListener,
      emit: mockEmit,
      eventNames: jest.fn(),
      getMaxListeners: jest.fn(),
      listenerCount: jest.fn(),
      listeners: jest.fn(),
      off: jest.fn(),
      on: jest.fn(),
      once: jest.fn(),
      prependListener: jest.fn(),
      prependOnceListener: jest.fn(),
      rawListeners: jest.fn(),
      removeAllListeners: jest.fn(),
      removeListener: mockRemoveListener,
      setMaxListeners: jest.fn()
    };
    return renderHook(function () {
      return useAnnotatorEvents(_objectSpread({}, props, {
        eventEmitter: mockEventEmitter
      }));
    });
  };

  test('should remove all listeneres on cleanup', function () {
    var mockOnSidebarAnnotationSelected = jest.fn();
    var mockOnAnnotationDeleteEnd = jest.fn();
    var mockOnAnnotationDeleteStart = jest.fn();
    var mockOnAnnotationUpdateEnd = jest.fn();
    var mockOnAnnotationUpdateStart = jest.fn();
    var mockOnAnnotationReplyAddEnd = jest.fn();
    var mockOnAnnotationReplyAddStart = jest.fn();
    var mockOnAnnotationReplyDeleteEnd = jest.fn();
    var mockOnAnnotationReplyDeleteStart = jest.fn();
    var mockOnAnnotationReplyUpdateEnd = jest.fn();
    var mockOnAnnotationReplyUpdateStart = jest.fn();

    var _getHook = getHook({
      onSidebarAnnotationSelected: mockOnSidebarAnnotationSelected,
      onAnnotationDeleteEnd: mockOnAnnotationDeleteEnd,
      onAnnotationDeleteStart: mockOnAnnotationDeleteStart,
      onAnnotationUpdateEnd: mockOnAnnotationUpdateEnd,
      onAnnotationUpdateStart: mockOnAnnotationUpdateStart,
      onAnnotationReplyAddEnd: mockOnAnnotationReplyAddEnd,
      onAnnotationReplyAddStart: mockOnAnnotationReplyAddStart,
      onAnnotationReplyDeleteEnd: mockOnAnnotationReplyDeleteEnd,
      onAnnotationReplyDeleteStart: mockOnAnnotationReplyDeleteStart,
      onAnnotationReplyUpdateEnd: mockOnAnnotationReplyUpdateEnd,
      onAnnotationReplyUpdateStart: mockOnAnnotationReplyUpdateStart
    }),
        unmount = _getHook.unmount;

    unmount();
    expect(mockRemoveListener).toHaveBeenNthCalledWith(1, 'annotations_active_set', mockOnSidebarAnnotationSelected);
    expect(mockRemoveListener).toHaveBeenNthCalledWith(2, 'annotations_remove', mockOnAnnotationDeleteEnd);
    expect(mockRemoveListener).toHaveBeenNthCalledWith(3, 'annotations_remove_start', mockOnAnnotationDeleteStart);
    expect(mockRemoveListener).toHaveBeenNthCalledWith(4, 'sidebar.annotations_update', mockOnAnnotationUpdateEnd);
    expect(mockRemoveListener).toHaveBeenNthCalledWith(5, 'sidebar.annotations_update_start', mockOnAnnotationUpdateStart);
    expect(mockRemoveListener).toHaveBeenNthCalledWith(6, 'sidebar.annotations_reply_create', mockOnAnnotationReplyAddEnd);
    expect(mockRemoveListener).toHaveBeenNthCalledWith(7, 'sidebar.annotations_reply_create_start', mockOnAnnotationReplyAddStart);
    expect(mockRemoveListener).toHaveBeenNthCalledWith(8, 'sidebar.annotations_reply_delete', mockOnAnnotationReplyDeleteEnd);
    expect(mockRemoveListener).toHaveBeenNthCalledWith(9, 'sidebar.annotations_reply_delete_start', mockOnAnnotationReplyDeleteStart);
    expect(mockRemoveListener).toHaveBeenNthCalledWith(10, 'sidebar.annotations_reply_update', mockOnAnnotationReplyUpdateEnd);
    expect(mockRemoveListener).toHaveBeenNthCalledWith(11, 'sidebar.annotations_reply_update_start', mockOnAnnotationReplyUpdateStart);
  });
  test('should call onAnnotationDeleteStart when proper event is emitted', function () {
    var mockAnnotationDeleteStart = jest.fn();
    var mockAnnotationId = '123';
    mockAddListener.mockImplementation(function (event, callback) {
      if (event === 'annotations_remove_start') {
        callback(mockAnnotationId);
      }
    });
    getHook({
      onAnnotationDeleteStart: mockAnnotationDeleteStart
    });
    expect(mockAddListener).toBeCalledWith('annotations_remove_start', mockAnnotationDeleteStart);
    expect(mockAnnotationDeleteStart).toBeCalledWith(mockAnnotationId);
  });
  test('should call onAnnotationDeleteEnd when proper event is emitted', function () {
    var mockAnnotationDeleteEnd = jest.fn();
    var mockAnnotationId = '123';
    mockAddListener.mockImplementation(function (event, callback) {
      if (event === 'annotations_remove') {
        callback(mockAnnotationId);
      }
    });
    getHook({
      onAnnotationDeleteEnd: mockAnnotationDeleteEnd
    });
    expect(mockAddListener).toBeCalledWith('annotations_remove', mockAnnotationDeleteEnd);
    expect(mockAnnotationDeleteEnd).toBeCalledWith(mockAnnotationId);
  });
  test('should call onAnnotationUpdateStart when proper event is emitted', function () {
    var mockAnnotationUpdateStart = jest.fn();
    var mockAnnotation = {
      id: '123',
      status: 'resolved'
    };
    mockAddListener.mockImplementation(function (event, callback) {
      if (event === 'sidebar.annotations_update_start') {
        callback(mockAnnotation);
      }
    });
    getHook({
      onAnnotationUpdateStart: mockAnnotationUpdateStart
    });
    expect(mockAddListener).toBeCalledWith('sidebar.annotations_update_start', mockAnnotationUpdateStart);
    expect(mockAnnotationUpdateStart).toBeCalledWith(mockAnnotation);
  });
  test('should call onAnnotationUpdateEnd when proper event is emitted', function () {
    var mockAnnotationUpdateEnd = jest.fn();
    var mockAnnotation = {
      id: '123',
      status: 'resolved'
    };
    mockAddListener.mockImplementation(function (event, callback) {
      if (event === 'sidebar.annotations_update') {
        callback(mockAnnotation);
      }
    });
    getHook({
      onAnnotationUpdateEnd: mockAnnotationUpdateEnd
    });
    expect(mockAddListener).toBeCalledWith('sidebar.annotations_update', mockAnnotationUpdateEnd);
    expect(mockAnnotationUpdateEnd).toBeCalledWith(mockAnnotation);
  });
  test('should call onAnnotationReplyAddStart when proper event is emitted', function () {
    var mockAnnotationReplyAddStart = jest.fn();
    var mockEventData = {
      annotationId: '123',
      reply: {
        tagged_message: 'abc'
      },
      requestId: 'comment_456'
    };
    mockAddListener.mockImplementation(function (event, callback) {
      if (event === 'sidebar.annotations_reply_create_start') {
        callback(mockEventData);
      }
    });
    getHook({
      onAnnotationReplyAddStart: mockAnnotationReplyAddStart
    });
    expect(mockAddListener).toBeCalledWith('sidebar.annotations_reply_create_start', mockAnnotationReplyAddStart);
    expect(mockAnnotationReplyAddStart).toBeCalledWith(mockEventData);
  });
  test('should call onAnnotationReplyAddEnd when proper event is emitted', function () {
    var mockAnnotationReplyAddEnd = jest.fn();
    var mockEventData = {
      annotationId: '123',
      reply: {
        id: '456',
        tagged_message: 'abc'
      },
      requestId: 'comment_456'
    };
    mockAddListener.mockImplementation(function (event, callback) {
      if (event === 'sidebar.annotations_reply_create') {
        callback(mockEventData);
      }
    });
    getHook({
      onAnnotationReplyAddEnd: mockAnnotationReplyAddEnd
    });
    expect(mockAddListener).toBeCalledWith('sidebar.annotations_reply_create', mockAnnotationReplyAddEnd);
    expect(mockAnnotationReplyAddEnd).toBeCalledWith(mockEventData);
  });
  test('should call onAnnotationReplyDeleteStart when proper event is emitted', function () {
    var mockAnnotationReplyDeleteStart = jest.fn();
    var mockEventData = {
      annotationId: '123',
      id: '456'
    };
    mockAddListener.mockImplementation(function (event, callback) {
      if (event === 'sidebar.annotations_reply_delete_start') {
        callback(mockEventData);
      }
    });
    getHook({
      onAnnotationReplyDeleteStart: mockAnnotationReplyDeleteStart
    });
    expect(mockAddListener).toBeCalledWith('sidebar.annotations_reply_delete_start', mockAnnotationReplyDeleteStart);
    expect(mockAnnotationReplyDeleteStart).toBeCalledWith(mockEventData);
  });
  test('should call onAnnotationReplyDeleteEnd when proper event is emitted', function () {
    var mockAnnotationReplyDeleteEnd = jest.fn();
    var mockEventData = {
      annotationId: '123',
      id: '456'
    };
    mockAddListener.mockImplementation(function (event, callback) {
      if (event === 'sidebar.annotations_reply_delete') {
        callback(mockEventData);
      }
    });
    getHook({
      onAnnotationReplyDeleteEnd: mockAnnotationReplyDeleteEnd
    });
    expect(mockAddListener).toBeCalledWith('sidebar.annotations_reply_delete', mockAnnotationReplyDeleteEnd);
    expect(mockAnnotationReplyDeleteEnd).toBeCalledWith(mockEventData);
  });
  test('should call onAnnotationReplyUpdateStart when proper event is emitted', function () {
    var mockAnnotationReplyUpdateStart = jest.fn();
    var mockEventData = {
      annotationId: '123',
      reply: {
        id: '123',
        tagged_message: 'abc'
      }
    };
    mockAddListener.mockImplementation(function (event, callback) {
      if (event === 'sidebar.annotations_reply_update_start') {
        callback(mockEventData);
      }
    });
    getHook({
      onAnnotationReplyUpdateStart: mockAnnotationReplyUpdateStart
    });
    expect(mockAddListener).toBeCalledWith('sidebar.annotations_reply_update_start', mockAnnotationReplyUpdateStart);
    expect(mockAnnotationReplyUpdateStart).toBeCalledWith(mockEventData);
  });
  test('should call onAnnotationReplyUpdateEnd when proper event is emitted', function () {
    var mockAnnotationReplyUpdateEnd = jest.fn();
    var mockEventData = {
      annotationId: '123',
      reply: {
        id: '123',
        tagged_message: 'abc'
      }
    };
    mockAddListener.mockImplementation(function (event, callback) {
      if (event === 'sidebar.annotations_reply_update') {
        callback(mockEventData);
      }
    });
    getHook({
      onAnnotationReplyUpdateEnd: mockAnnotationReplyUpdateEnd
    });
    expect(mockAddListener).toBeCalledWith('sidebar.annotations_reply_update', mockAnnotationReplyUpdateEnd);
    expect(mockAnnotationReplyUpdateEnd).toBeCalledWith(mockEventData);
  });
  test('should call onSidebarAnnotationSelected when proper event is emitted', function () {
    var mockOnSidebarAnnotationSelected = jest.fn();
    var mockAnnotationId = '123';
    mockAddListener.mockImplementation(function (event, callback) {
      if (event === 'annotations_active_set') {
        callback(mockAnnotationId);
      }
    });
    getHook({
      onSidebarAnnotationSelected: mockOnSidebarAnnotationSelected
    });
    expect(mockAddListener).toBeCalledWith('annotations_active_set', mockOnSidebarAnnotationSelected);
    expect(mockOnSidebarAnnotationSelected).toBeCalledWith(mockAnnotationId);
  });
  test('should emit annotation active change event', function () {
    var annotationId = '123';
    var fileVersionId = '456';

    var _getHook2 = getHook(),
        result = _getHook2.result;

    act(function () {
      result.current.emitAnnotationActiveChangeEvent(annotationId, fileVersionId);
    });
    expect(mockEmit).toBeCalledWith('annotations_active_change', {
      annotationId: annotationId,
      fileVersionId: fileVersionId
    });
  });
  test('should emit annotation add start event', function () {
    var annotation = {
      description: {
        message: 'New Annotation'
      }
    };
    var requestId = 'annotation_123';

    var _getHook3 = getHook(),
        result = _getHook3.result;

    act(function () {
      result.current.emitAddAnnotationStartEvent(annotation, requestId);
    });
    var expectedAnnotationActionEvent = {
      annotation: annotation,
      meta: {
        requestId: requestId,
        status: Status.PENDING
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_create', expectedAnnotationActionEvent);
  });
  test('should emit annotation add end event', function () {
    var annotation = {
      description: {
        message: 'New Annotation'
      },
      id: '1234',
      target: {
        location: {
          value: 1,
          type: 'page'
        },
        shape: {
          height: 41.66666666666667,
          type: 'rect',
          width: 41.66666666666667,
          x: 20.833333333333336,
          y: 25
        },
        type: 'region'
      }
    };
    var requestId = 'annotation_123';

    var _getHook4 = getHook(),
        result = _getHook4.result;

    act(function () {
      result.current.emitAddAnnotationEndEvent(annotation, requestId);
    });
    var expectedAnnotationActionEvent = {
      annotation: annotation,
      meta: {
        requestId: requestId,
        status: Status.SUCCESS
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_create', expectedAnnotationActionEvent);
  });
  test('should emit annotation delete start event', function () {
    var _getHook5 = getHook(),
        result = _getHook5.result;

    act(function () {
      result.current.emitDeleteAnnotationStartEvent('123');
    });
    var expectedAnnotationActionEvent = {
      annotation: {
        id: '123'
      },
      meta: {
        status: Status.PENDING
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_delete', expectedAnnotationActionEvent);
  });
  test('should emit annotation delete end event', function () {
    var _getHook6 = getHook(),
        result = _getHook6.result;

    act(function () {
      result.current.emitDeleteAnnotationEndEvent('123');
    });
    var expectedAnnotationActionEvent = {
      annotation: {
        id: '123'
      },
      meta: {
        status: Status.SUCCESS
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_delete', expectedAnnotationActionEvent);
  });
  test('should emit annotation update start event', function () {
    var annotation = {
      id: '123',
      status: 'resolved'
    };

    var _getHook7 = getHook(),
        result = _getHook7.result;

    act(function () {
      result.current.emitUpdateAnnotationStartEvent(annotation);
    });
    var expectedAnnotationActionEvent = {
      annotation: annotation,
      meta: {
        status: Status.PENDING
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_update', expectedAnnotationActionEvent);
  });
  test('should emit annotation update end event', function () {
    var annotation = {
      id: '123',
      status: 'resolved'
    };

    var _getHook8 = getHook(),
        result = _getHook8.result;

    act(function () {
      result.current.emitUpdateAnnotationEndEvent(annotation);
    });
    var expectedAnnotationActionEvent = {
      annotation: annotation,
      meta: {
        status: Status.SUCCESS
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_update', expectedAnnotationActionEvent);
  });
  test('should emit annotation reply create start event', function () {
    var annotationId = '123';
    var reply = {
      tagged_message: 'abc'
    };
    var requestId = 'comment_456';

    var _getHook9 = getHook(),
        result = _getHook9.result;

    act(function () {
      result.current.emitAddAnnotationReplyStartEvent(reply, annotationId, requestId);
    });
    var expectedAnnotationActionEvent = {
      annotation: {
        id: annotationId
      },
      annotationReply: reply,
      meta: {
        status: Status.PENDING,
        requestId: requestId
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_reply_create', expectedAnnotationActionEvent);
  });
  test('should emit annotation reply create end event', function () {
    var annotationId = '123';
    var reply = {
      id: '456',
      tagged_message: 'abc'
    };
    var requestId = 'comment_456';

    var _getHook10 = getHook(),
        result = _getHook10.result;

    act(function () {
      result.current.emitAddAnnotationReplyEndEvent(reply, annotationId, requestId);
    });
    var expectedAnnotationActionEvent = {
      annotation: {
        id: annotationId
      },
      annotationReply: reply,
      meta: {
        status: Status.SUCCESS,
        requestId: requestId
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_reply_create', expectedAnnotationActionEvent);
  });
  test('should emit annotation reply delete start event', function () {
    var annotationId = '123';
    var replyId = '456';

    var _getHook11 = getHook(),
        result = _getHook11.result;

    act(function () {
      result.current.emitDeleteAnnotationReplyStartEvent(replyId, annotationId);
    });
    var expectedAnnotationActionEvent = {
      annotation: {
        id: annotationId
      },
      annotationReply: {
        id: replyId
      },
      meta: {
        status: Status.PENDING
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_reply_delete', expectedAnnotationActionEvent);
  });
  test('should emit annotation reply delete end event', function () {
    var annotationId = '123';
    var replyId = '456';

    var _getHook12 = getHook(),
        result = _getHook12.result;

    act(function () {
      result.current.emitDeleteAnnotationReplyEndEvent(replyId, annotationId);
    });
    var expectedAnnotationActionEvent = {
      annotation: {
        id: annotationId
      },
      annotationReply: {
        id: replyId
      },
      meta: {
        status: Status.SUCCESS
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_reply_delete', expectedAnnotationActionEvent);
  });
  test('should emit annotation reply update start event', function () {
    var annotationId = '123';
    var reply = {
      id: '456',
      tagged_message: 'abc'
    };

    var _getHook13 = getHook(),
        result = _getHook13.result;

    act(function () {
      result.current.emitUpdateAnnotationReplyStartEvent(reply, annotationId);
    });
    var expectedAnnotationActionEvent = {
      annotation: {
        id: annotationId
      },
      annotationReply: reply,
      meta: {
        status: Status.PENDING
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_reply_update', expectedAnnotationActionEvent);
  });
  test('should emit annotation reply update end event', function () {
    var annotationId = '123';
    var reply = {
      id: '456',
      tagged_message: 'abc'
    };

    var _getHook14 = getHook(),
        result = _getHook14.result;

    act(function () {
      result.current.emitUpdateAnnotationReplyEndEvent(reply, annotationId);
    });
    var expectedAnnotationActionEvent = {
      annotation: {
        id: annotationId
      },
      annotationReply: reply,
      meta: {
        status: Status.SUCCESS
      }
    };
    expect(mockEmit).toBeCalledWith('annotations_reply_update', expectedAnnotationActionEvent);
  });
});