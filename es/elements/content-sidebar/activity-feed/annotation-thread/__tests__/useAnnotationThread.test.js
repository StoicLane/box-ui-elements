function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { renderHook, act } from '@testing-library/react-hooks';
import { annotationsWithFormattedReplies as annotations } from '../../../../../api/fixtures';
import { useAnnotatorEvents } from '../../../../common/annotator-context';
import useAnnotationThread from '../useAnnotationThread';
import useAnnotationAPI from '../useAnnotationAPI';
import useRepliesAPI from '../useRepliesAPI';
jest.mock('lodash/uniqueId', function () {
  return function () {
    return 'uniqueId';
  };
});
jest.mock('../../../../common/annotator-context', function () {
  return {
    useAnnotatorEvents: jest.fn()
  };
});
jest.mock('../useAnnotationAPI', function () {
  return jest.fn();
});
jest.mock('../useRepliesAPI', function () {
  return jest.fn();
});
describe('src/elements/content-sidebar/activity-feed/useAnnotationThread', function () {
  var annotation = annotations[0];
  var mockUseAnnotatorEventsResult = {
    emitAddAnnotationEndEvent: jest.fn(),
    emitAddAnnotationReplyEndEvent: jest.fn(),
    emitAddAnnotationReplyStartEvent: jest.fn(),
    emitAddAnnotationStartEvent: jest.fn(),
    emitAnnotationActiveChangeEvent: jest.fn(),
    emitDeleteAnnotationEndEvent: jest.fn(),
    emitDeleteAnnotationReplyEndEvent: jest.fn(),
    emitDeleteAnnotationReplyStartEvent: jest.fn(),
    emitDeleteAnnotationStartEvent: jest.fn(),
    emitUpdateAnnotationEndEvent: jest.fn(),
    emitUpdateAnnotationReplyEndEvent: jest.fn(),
    emitUpdateAnnotationReplyStartEvent: jest.fn(),
    emitUpdateAnnotationStartEvent: jest.fn()
  };
  var mockUseAnnotationAPIResult = {
    handleCreate: jest.fn(),
    handleFetch: jest.fn(),
    handleDelete: jest.fn(),
    handleEdit: jest.fn(),
    handleStatusChange: jest.fn()
  };
  var mockUseRepliesAPIResult = {
    createReply: jest.fn(),
    deleteReply: jest.fn(),
    editReply: jest.fn()
  };
  var filePermissions = {
    can_annotate: true,
    can_view_annotations: true
  };
  var errorCallback = jest.fn();

  var getFileProps = function getFileProps(props) {
    return _objectSpread({
      id: 'fileId',
      file_version: {
        id: '123'
      },
      permissions: filePermissions
    }, props);
  };

  var getHook = function getHook(props) {
    return renderHook(function () {
      return useAnnotationThread(_objectSpread({
        api: {},
        currentUser: {},
        file: getFileProps(),
        annotationId: annotation.id,
        errorCallback: errorCallback,
        eventEmitter: {},
        onAnnotationCreate: jest.fn()
      }, props));
    });
  };

  beforeEach(function () {
    useAnnotatorEvents.mockImplementation(function () {
      return mockUseAnnotatorEventsResult;
    });
    useAnnotationAPI.mockImplementation(function () {
      return mockUseAnnotationAPIResult;
    });
    useRepliesAPI.mockImplementation(function () {
      return mockUseRepliesAPIResult;
    });
  });
  afterEach(function () {
    jest.clearAllMocks();
  });
  test('should return correct values on mount', function () {
    var _getHook = getHook(),
        result = _getHook.result;

    expect(result.current.annotation).toEqual(undefined);
    expect(result.current.isLoading).toEqual(true);
    expect(result.current.error).toEqual(undefined);
    expect(result.current.replies).toEqual([]);
  });
  test('should return correct values after fetch and call emitAnnotationActiveChangeEvent', function () {
    var replies = annotation.replies,
        normalizedAnnotation = _objectWithoutProperties(annotation, ["replies"]);

    var mockHandleFetch = jest.fn().mockImplementation(function (_ref) {
      var successCallback = _ref.successCallback;
      return successCallback(annotation);
    });
    useAnnotationAPI.mockImplementation(function () {
      return _objectSpread({}, mockUseAnnotationAPIResult, {
        handleFetch: mockHandleFetch
      });
    });
    var fileVersionId = '456';
    var file = getFileProps({
      file_version: {
        id: fileVersionId
      }
    });

    var _getHook2 = getHook({
      file: file
    }),
        result = _getHook2.result;

    expect(result.current.annotation).toEqual(normalizedAnnotation);
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.error).toEqual(undefined);
    expect(result.current.replies).toEqual(replies);
    expect(mockUseAnnotatorEventsResult.emitAnnotationActiveChangeEvent).toBeCalledWith(annotation.id, fileVersionId);
  });
  describe('handleAnnotationCreate', function () {
    test('should call handleCreate from useAnnotationAPI and call emitAddAnnotationStartEvent + emitAddAnnotationEndEvent', function () {
      var mockOnAnnotationCreate = jest.fn();
      var createdAnnotation = {
        description: {
          message: 'new annotation'
        },
        target: {}
      };
      var mockHandleCreate = jest.fn().mockImplementation(function (_ref2) {
        var successCallback = _ref2.successCallback;
        return successCallback(createdAnnotation);
      });
      useAnnotationAPI.mockImplementation(function () {
        return _objectSpread({}, mockUseAnnotationAPIResult, {
          handleCreate: mockHandleCreate
        });
      });
      var target = {};
      var text = 'foo';

      var _getHook3 = getHook({
        target: target,
        onAnnotationCreate: mockOnAnnotationCreate
      }),
          result = _getHook3.result;

      act(function () {
        result.current.annotationActions.handleAnnotationCreate(text);
      });
      var expectedPayload = {
        description: {
          message: text
        },
        target: target
      };
      expect(mockHandleCreate).toBeCalledWith({
        payload: expectedPayload,
        successCallback: expect.any(Function)
      });
      expect(mockOnAnnotationCreate).toBeCalledWith(createdAnnotation);
      expect(mockUseAnnotatorEventsResult.emitAddAnnotationStartEvent).toBeCalledWith(expectedPayload, 'uniqueId');
      expect(mockUseAnnotatorEventsResult.emitAddAnnotationEndEvent).toBeCalledWith(createdAnnotation, 'uniqueId');
    });
  });
  describe('handleAnnotationEdit', function () {
    test('should call handleEdit from useAnnotationAPI and call emitUpdateAnnotationStartEvent + emitUpdateAnnotationEndEvent', function () {
      var updatedText = 'new text';
      var updatedAnnotation = {
        id: annotation.id,
        description: {
          message: updatedText
        }
      };
      var mockHandleEdit = jest.fn().mockImplementation(function (_ref3) {
        var successCallback = _ref3.successCallback;
        successCallback(updatedAnnotation);
      });
      useAnnotationAPI.mockImplementation(function () {
        return _objectSpread({}, mockUseAnnotationAPIResult, {
          handleEdit: mockHandleEdit
        });
      });

      var _getHook4 = getHook(),
          result = _getHook4.result;

      act(function () {
        result.current.annotationActions.handleAnnotationEdit({
          id: annotation.id,
          permissions: {
            can_edit: true
          },
          text: updatedText
        });
      });
      expect(mockHandleEdit).toBeCalledWith({
        id: annotation.id,
        permissions: {
          can_edit: true
        },
        text: updatedText,
        successCallback: expect.any(Function)
      });
      expect(mockUseAnnotatorEventsResult.emitUpdateAnnotationStartEvent).toBeCalledWith(updatedAnnotation);
      expect(mockUseAnnotatorEventsResult.emitUpdateAnnotationEndEvent).toBeCalledWith(updatedAnnotation);
    });
  });
  describe('handleAnnotationDelete', function () {
    test('should call handleDelete from useAnnotationAPI and call emitDeleteAnnotationStartEvent + emitDeleteAnnotationEndEvent', function () {
      var mockHandleDelete = jest.fn().mockImplementation(function (_ref4) {
        var successCallback = _ref4.successCallback;
        successCallback();
      });
      useAnnotationAPI.mockImplementation(function () {
        return _objectSpread({}, mockUseAnnotationAPIResult, {
          handleDelete: mockHandleDelete
        });
      });

      var _getHook5 = getHook(),
          result = _getHook5.result;

      act(function () {
        result.current.annotationActions.handleAnnotationDelete({
          id: annotation.id,
          permissions: {
            can_delete: true
          }
        });
      });
      expect(mockHandleDelete).toBeCalledWith({
        id: annotation.id,
        permissions: {
          can_delete: true
        },
        successCallback: expect.any(Function)
      });
      expect(mockUseAnnotatorEventsResult.emitDeleteAnnotationStartEvent).toBeCalledWith(annotation.id);
      expect(mockUseAnnotatorEventsResult.emitDeleteAnnotationEndEvent).toBeCalledWith(annotation.id);
    });
  });
  describe('handleReplyCreate', function () {
    test('should call createReply from useRepliesAPI and call emitAddAnnotationReplyStartEvent + emitAddAnnotationReplyEndEvent', function () {
      var message = 'new comment';
      var createdReply = {
        id: '123',
        tagged_message: message
      };
      var mockCreateReply = jest.fn().mockImplementation(function (_ref5) {
        var successCallback = _ref5.successCallback;
        return successCallback(createdReply);
      });
      useRepliesAPI.mockImplementation(function () {
        return _objectSpread({}, mockUseRepliesAPIResult, {
          createReply: mockCreateReply
        });
      });

      var _getHook6 = getHook(),
          result = _getHook6.result;

      act(function () {
        result.current.repliesActions.handleReplyCreate(message);
      });
      var expectedPayload = {
        tagged_message: message,
        type: 'comment'
      };
      expect(mockCreateReply).toBeCalledWith({
        message: message,
        requestId: 'uniqueId',
        successCallback: expect.any(Function)
      });
      expect(mockUseAnnotatorEventsResult.emitAddAnnotationReplyStartEvent).toBeCalledWith(expectedPayload, annotation.id, 'uniqueId');
      expect(mockUseAnnotatorEventsResult.emitAddAnnotationReplyEndEvent).toBeCalledWith(createdReply, annotation.id, 'uniqueId');
    });
  });
  describe('handleReplyEdit', function () {
    test('should call editReply from useRepliesAPI and call emitUpdateAnnotationReplyStartEvent + emitUpdateAnnotationReplyEndEvent', function () {
      var id = '123';
      var message = 'updated comment';
      var permissions = {
        can_edit: true
      };
      var updatedReply = {
        id: id,
        tagged_message: message
      };
      var mockEditReply = jest.fn().mockImplementation(function (_ref6) {
        var successCallback = _ref6.successCallback;
        return successCallback(updatedReply);
      });
      useRepliesAPI.mockImplementation(function () {
        return _objectSpread({}, mockUseRepliesAPIResult, {
          editReply: mockEditReply
        });
      });

      var _getHook7 = getHook(),
          result = _getHook7.result;

      act(function () {
        result.current.repliesActions.handleReplyEdit(id, message, false, undefined, permissions);
      });
      var expectedPayload = {
        id: id,
        tagged_message: message
      };
      expect(mockEditReply).toBeCalledWith({
        id: id,
        message: message,
        permissions: permissions,
        successCallback: expect.any(Function)
      });
      expect(mockUseAnnotatorEventsResult.emitUpdateAnnotationReplyStartEvent).toBeCalledWith(expectedPayload, annotation.id);
      expect(mockUseAnnotatorEventsResult.emitUpdateAnnotationReplyEndEvent).toBeCalledWith(updatedReply, annotation.id);
    });
  });
  describe('handleReplyDelete', function () {
    test('should call deleteReply from useRepliesAPI and call emitDeleteAnnotationReplyStartEvent + emitDeleteAnnotationReplyEndEvent', function () {
      var id = '123';
      var permissions = {
        can_edit: true
      };
      var mockDeleteReply = jest.fn().mockImplementation(function (_ref7) {
        var successCallback = _ref7.successCallback;
        return successCallback();
      });
      useRepliesAPI.mockImplementation(function () {
        return _objectSpread({}, mockUseRepliesAPIResult, {
          deleteReply: mockDeleteReply
        });
      });

      var _getHook8 = getHook(),
          result = _getHook8.result;

      act(function () {
        result.current.repliesActions.handleReplyDelete({
          id: id,
          permissions: permissions
        });
      });
      expect(mockDeleteReply).toBeCalledWith({
        id: id,
        permissions: permissions,
        successCallback: expect.any(Function)
      });
      expect(mockUseAnnotatorEventsResult.emitDeleteAnnotationReplyStartEvent).toBeCalledWith(id, annotation.id);
      expect(mockUseAnnotatorEventsResult.emitDeleteAnnotationReplyEndEvent).toBeCalledWith(id, annotation.id);
    });
  });
  describe('useAnnotationAPI', function () {
    test('shoud call handleFetchAnnotation on mount', function () {
      var mockHandleFetch = jest.fn();
      useAnnotationAPI.mockImplementation(function () {
        return _objectSpread({}, mockUseAnnotationAPIResult, {
          handleFetch: mockHandleFetch
        });
      });
      getHook();
      expect(mockHandleFetch).toBeCalledWith({
        id: annotation.id,
        successCallback: expect.any(Function)
      });
    });
    test('should call handleAnnotationStatusChange with correct params and set annotation state to pending', function () {
      var mockHandleStatusChange = jest.fn();
      useAnnotationAPI.mockImplementation(function () {
        return _objectSpread({}, mockUseAnnotationAPIResult, {
          handleStatusChange: mockHandleStatusChange
        });
      });

      var _getHook9 = getHook(),
          result = _getHook9.result;

      act(function () {
        result.current.annotationActions.handleAnnotationStatusChange(annotation.id, 'resolved', {
          can_resolve: true
        });
      });
      expect(mockHandleStatusChange).toBeCalledWith({
        id: annotation.id,
        permissions: {
          can_resolve: true
        },
        status: 'resolved',
        successCallback: expect.any(Function)
      });
      expect(result.current.annotation.isPending).toEqual(true);
    });
  });
  describe('useAnnotatorEvents', function () {
    var mockFetchAnnotation = function mockFetchAnnotation() {
      var replies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : annotation.replies;
      var mockHandleFetch = jest.fn().mockImplementation(function (_ref8) {
        var successCallback = _ref8.successCallback;
        return successCallback(_objectSpread({}, annotation, {
          replies: replies
        }));
      });
      useAnnotationAPI.mockImplementation(function () {
        return _objectSpread({}, mockUseAnnotationAPIResult, {
          handleFetch: mockHandleFetch
        });
      });
    };

    test('should handle onAnnotationDeleteStart and update annotation state to pending', function () {
      jest.useFakeTimers();
      mockFetchAnnotation();
      useAnnotatorEvents.mockImplementation(function (_ref9) {
        var onAnnotationDeleteStart = _ref9.onAnnotationDeleteStart;
        setTimeout(function () {
          onAnnotationDeleteStart(annotation.id);
        }, 100);
        return mockUseAnnotatorEventsResult;
      });

      var _getHook10 = getHook(),
          result = _getHook10.result;

      act(function () {
        jest.advanceTimersByTime(100);
      });
      expect(result.current.annotation.isPending).toEqual(true);
    });
    test('should handle onUpdateAnnotationStart and update annotation state to pending', function () {
      jest.useFakeTimers();

      var updatedAnnotation = _objectSpread({}, annotation, {
        description: {
          message: 'new message'
        }
      });

      mockFetchAnnotation();
      useAnnotatorEvents.mockImplementation(function (_ref10) {
        var onAnnotationUpdateStart = _ref10.onAnnotationUpdateStart;
        setTimeout(function () {
          onAnnotationUpdateStart(updatedAnnotation);
        }, 100);
        return mockUseAnnotatorEventsResult;
      });

      var _getHook11 = getHook(),
          result = _getHook11.result;

      act(function () {
        jest.advanceTimersByTime(100);
      });
      expect(result.current.annotation).toEqual(_objectSpread({}, updatedAnnotation, {
        isPending: true
      }));
    });
    test('should handle onUpdateAnnotationEnd and update annotation values accordingly', function () {
      jest.useFakeTimers();

      var updatedAnnotation = _objectSpread({}, annotation, {
        description: {
          message: 'new message'
        }
      });

      mockFetchAnnotation();
      useAnnotatorEvents.mockImplementation(function (_ref11) {
        var onAnnotationUpdateEnd = _ref11.onAnnotationUpdateEnd;
        setTimeout(function () {
          onAnnotationUpdateEnd(updatedAnnotation);
        }, 100);
        return mockUseAnnotatorEventsResult;
      });

      var _getHook12 = getHook(),
          result = _getHook12.result;

      act(function () {
        jest.advanceTimersByTime(100);
      });
      expect(result.current.annotation).toEqual(_objectSpread({}, updatedAnnotation, {
        isPending: false
      }));
    });
    test('should handle onAnnotationReplyAddStart and update reply values accordingly', function () {
      jest.useFakeTimers();
      var isoString = 'isoDateString';
      global.Date.prototype.toISOString = jest.fn().mockImplementation(function () {
        return isoString;
      });
      var message = 'new message';
      var newReply = {
        tagged_message: message
      };
      var requestId = 'reply_123';
      useAnnotatorEvents.mockImplementation(function (_ref12) {
        var onAnnotationReplyAddStart = _ref12.onAnnotationReplyAddStart;
        setTimeout(function () {
          onAnnotationReplyAddStart({
            annotationId: annotation.id,
            reply: newReply,
            requestId: requestId
          });
        }, 100);
        return mockUseAnnotatorEventsResult;
      });
      var currentUser = {
        id: '1234567'
      };

      var _getHook13 = getHook({
        currentUser: currentUser
      }),
          result = _getHook13.result;

      act(function () {
        jest.advanceTimersByTime(100);
      });
      var expectedReplies = [{
        created_at: isoString,
        created_by: currentUser,
        id: requestId,
        isPending: true,
        modified_at: isoString,
        tagged_message: message
      }];
      expect(result.current.replies).toEqual(expectedReplies);
    });
    test('should handle onAnnotationReplyAddEnd and update reply values accordingly', function () {
      jest.useFakeTimers();
      var message = 'new message';
      var newReply = {
        id: '123',
        tagged_message: message
      };
      var requestId = 'reply_123';
      var initialReplies = [{
        id: requestId,
        isPending: true,
        tagged_message: message
      }];
      mockFetchAnnotation(initialReplies);
      useAnnotatorEvents.mockImplementation(function (_ref13) {
        var onAnnotationReplyAddEnd = _ref13.onAnnotationReplyAddEnd;
        setTimeout(function () {
          onAnnotationReplyAddEnd({
            annotationId: annotation.id,
            reply: newReply,
            requestId: requestId
          });
        }, 100);
        return mockUseAnnotatorEventsResult;
      });

      var _getHook14 = getHook(),
          result = _getHook14.result;

      act(function () {
        jest.advanceTimersByTime(100);
      });
      var expectedReplies = [_objectSpread({}, newReply, {
        isPending: false
      })];
      expect(result.current.replies).toEqual(expectedReplies);
    });
    test('should handle onAnnotationReplyUpdateStart and update reply values accordingly', function () {
      jest.useFakeTimers();
      var message = 'updated message';
      var id = '123';
      var updatedReply = {
        id: id,
        tagged_message: message
      };
      var initialReplies = [{
        id: id,
        tagged_message: 'old message'
      }];
      mockFetchAnnotation(initialReplies);
      useAnnotatorEvents.mockImplementation(function (_ref14) {
        var onAnnotationReplyUpdateStart = _ref14.onAnnotationReplyUpdateStart;
        setTimeout(function () {
          onAnnotationReplyUpdateStart({
            annotationId: annotation.id,
            reply: updatedReply
          });
        }, 100);
        return mockUseAnnotatorEventsResult;
      });

      var _getHook15 = getHook(),
          result = _getHook15.result;

      act(function () {
        jest.advanceTimersByTime(100);
      });
      var expectedReplies = [_objectSpread({}, updatedReply, {
        isPending: true
      })];
      expect(result.current.replies).toEqual(expectedReplies);
    });
    test('should handle onAnnotationReplyUpdateEnd and update reply values accordingly', function () {
      jest.useFakeTimers();
      var message = 'updated message';
      var id = '123';
      var updatedReply = {
        id: id,
        tagged_message: message
      };
      var initialReplies = [{
        id: id,
        isPending: true,
        tagged_message: message
      }];
      mockFetchAnnotation(initialReplies);
      useAnnotatorEvents.mockImplementation(function (_ref15) {
        var onAnnotationReplyUpdateEnd = _ref15.onAnnotationReplyUpdateEnd;
        setTimeout(function () {
          onAnnotationReplyUpdateEnd({
            annotationId: annotation.id,
            reply: updatedReply
          });
        }, 100);
        return mockUseAnnotatorEventsResult;
      });

      var _getHook16 = getHook(),
          result = _getHook16.result;

      act(function () {
        jest.advanceTimersByTime(100);
      });
      var expectedReplies = [_objectSpread({}, updatedReply, {
        isPending: false
      })];
      expect(result.current.replies).toEqual(expectedReplies);
    });
    test('should handle onAnnotationReplyDeleteStart and update reply values accordingly', function () {
      jest.useFakeTimers();
      var id = '123';
      var initialReply = {
        id: id,
        tagged_message: 'message'
      };
      mockFetchAnnotation([initialReply]);
      useAnnotatorEvents.mockImplementation(function (_ref16) {
        var onAnnotationReplyDeleteStart = _ref16.onAnnotationReplyDeleteStart;
        setTimeout(function () {
          onAnnotationReplyDeleteStart({
            annotationId: annotation.id,
            id: id
          });
        }, 100);
        return mockUseAnnotatorEventsResult;
      });

      var _getHook17 = getHook(),
          result = _getHook17.result;

      act(function () {
        jest.advanceTimersByTime(100);
      });
      var expectedReplies = [_objectSpread({}, initialReply, {
        isPending: true
      })];
      expect(result.current.replies).toEqual(expectedReplies);
    });
    test('should handle onAnnotationReplyDeleteEnd and update reply values accordingly', function () {
      jest.useFakeTimers();
      var id = '123';
      var initialReply = {
        id: id,
        tagged_message: 'message'
      };
      mockFetchAnnotation([initialReply]);
      useAnnotatorEvents.mockImplementation(function (_ref17) {
        var onAnnotationReplyDeleteEnd = _ref17.onAnnotationReplyDeleteEnd;
        setTimeout(function () {
          onAnnotationReplyDeleteEnd({
            annotationId: annotation.id,
            id: id
          });
        }, 100);
        return mockUseAnnotatorEventsResult;
      });

      var _getHook18 = getHook(),
          result = _getHook18.result;

      act(function () {
        jest.advanceTimersByTime(100);
      });
      var expectedReplies = [];
      expect(result.current.replies).toEqual(expectedReplies);
    });
  });
});