function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { renderHook, act } from '@testing-library/react-hooks';
import { annotation } from '../../../../../__mocks__/annotations';
import { threadedCommentsFormatted as replies } from '../../../../../api/fixtures';
import useRepliesAPI from '../useRepliesAPI';
describe('src/elements/content-sidebar/activity-feed/annotation-thread/useRepliesAPI', function () {
  var getApi = function getApi(_ref) {
    var _ref$createAnnotation = _ref.createAnnotationReply,
        createAnnotationReply = _ref$createAnnotation === void 0 ? jest.fn : _ref$createAnnotation,
        _ref$deleteComment = _ref.deleteComment,
        deleteComment = _ref$deleteComment === void 0 ? jest.fn() : _ref$deleteComment,
        _ref$updateComment = _ref.updateComment,
        updateComment = _ref$updateComment === void 0 ? jest.fn() : _ref$updateComment;

    var getAnnotationsAPI = function getAnnotationsAPI() {
      return {
        createAnnotationReply: createAnnotationReply
      };
    };

    var getThreadedCommentsAPI = function getThreadedCommentsAPI() {
      return {
        deleteComment: deleteComment,
        updateComment: updateComment
      };
    };

    return {
      getAnnotationsAPI: getAnnotationsAPI,
      getThreadedCommentsAPI: getThreadedCommentsAPI
    };
  };

  var getHook = function getHook(props) {
    var mockedApiFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return renderHook(function () {
      return useRepliesAPI(_objectSpread({
        annotationId: annotation.id,
        api: getApi(mockedApiFunctions),
        errorCallback: jest.fn(),
        fileId: 'fileId',
        filePermissions: {
          can_comment: true
        }
      }, props));
    });
  };

  test('should call api function on deleteReply with correct arguments', function () {
    var mockDeleteComment = jest.fn();
    var api = getApi({
      deleteComment: mockDeleteComment
    });

    var _getHook = getHook({
      api: api
    }),
        result = _getHook.result;

    var _replies$ = replies[0],
        id = _replies$.id,
        permissions = _replies$.permissions;
    var successCallback = jest.fn();
    act(function () {
      result.current.deleteReply({
        id: id,
        permissions: permissions,
        successCallback: successCallback
      });
    });
    expect(mockDeleteComment).toBeCalledWith({
      fileId: 'fileId',
      commentId: id,
      permissions: permissions,
      successCallback: successCallback,
      errorCallback: expect.any(Function)
    });
  });
  test('should call api function on editReply with correct arguments', function () {
    var mockUpdateComment = jest.fn();
    var api = getApi({
      updateComment: mockUpdateComment
    });
    var _replies$2 = replies[0],
        id = _replies$2.id,
        permissions = _replies$2.permissions;
    var message = 'Text';
    var successCallback = jest.fn();

    var _getHook2 = getHook({
      api: api
    }),
        result = _getHook2.result;

    act(function () {
      result.current.editReply({
        id: id,
        message: message,
        permissions: permissions,
        successCallback: successCallback
      });
    });
    expect(mockUpdateComment).toBeCalledWith({
      fileId: 'fileId',
      commentId: id,
      message: message,
      permissions: permissions,
      successCallback: successCallback,
      errorCallback: expect.any(Function)
    });
  });
  test('should call api function on createReply with correct arguments', function () {
    var mockCreateAnnotationReply = jest.fn();
    var api = getApi({
      createAnnotationReply: mockCreateAnnotationReply
    });
    var message = 'Text';
    var requestId = 'reply_123';
    var successCallback = jest.fn();

    var _getHook3 = getHook({
      api: api
    }),
        result = _getHook3.result;

    act(function () {
      result.current.createReply({
        message: message,
        requestId: requestId,
        successCallback: successCallback
      });
    });
    expect(mockCreateAnnotationReply).toBeCalledWith('fileId', annotation.id, {
      can_comment: true
    }, message, successCallback, expect.any(Function));
  });
});