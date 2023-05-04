function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { renderHook, act } from '@testing-library/react-hooks';
import { annotationsWithFormattedReplies as annotations } from '../../../../../api/fixtures';
import useAnnotationAPI from '../useAnnotationAPI';
describe('src/elements/content-sidebar/activity-feed/useAnnotattionAPI', function () {
  var annotation = annotations[0];

  var getApi = function getApi(_ref) {
    var _ref$createAnnotation = _ref.createAnnotation,
        createAnnotation = _ref$createAnnotation === void 0 ? jest.fn() : _ref$createAnnotation,
        _ref$getAnnotation = _ref.getAnnotation,
        getAnnotation = _ref$getAnnotation === void 0 ? jest.fn() : _ref$getAnnotation,
        _ref$updateAnnotation = _ref.updateAnnotation,
        updateAnnotation = _ref$updateAnnotation === void 0 ? jest.fn() : _ref$updateAnnotation,
        _ref$deleteAnnotation = _ref.deleteAnnotation,
        deleteAnnotation = _ref$deleteAnnotation === void 0 ? jest.fn() : _ref$deleteAnnotation,
        _ref$createAnnotation2 = _ref.createAnnotationReply,
        createAnnotationReply = _ref$createAnnotation2 === void 0 ? jest.fn : _ref$createAnnotation2;

    var getAnnotationsAPI = function getAnnotationsAPI() {
      return {
        createAnnotation: createAnnotation,
        createAnnotationReply: createAnnotationReply,
        getAnnotation: getAnnotation,
        updateAnnotation: updateAnnotation,
        deleteAnnotation: deleteAnnotation
      };
    };

    return {
      getAnnotationsAPI: getAnnotationsAPI
    };
  };

  var filePermissions = {
    can_annotate: true,
    can_view_annotations: true
  };
  var errorCallback = jest.fn();

  var getHook = function getHook(props) {
    return renderHook(function () {
      return useAnnotationAPI(_objectSpread({
        api: getApi({}),
        file: {
          id: 'fileId',
          file_version: {
            id: '123'
          },
          permissions: filePermissions
        },
        annotationId: annotation.id,
        errorCallback: errorCallback
      }, props));
    });
  };

  test('should call api function on handleCreate with correct arguments', function () {
    var mockSuccessCallback = jest.fn();
    var mockErrorCallback = jest.fn();
    var mockCreateAnnotation = jest.fn();
    var api = getApi({
      createAnnotation: mockCreateAnnotation
    });
    var mockFile = {
      id: 'fileId',
      file_version: {
        id: '123'
      },
      permissions: {
        can_annotate: true,
        can_view_annotations: true
      }
    };

    var _getHook = getHook({
      api: api,
      file: mockFile,
      errorCallback: mockErrorCallback
    }),
        result = _getHook.result;

    var mockPayload = {
      description: {
        message: 'foo'
      },
      target: {}
    };
    act(function () {
      result.current.handleCreate({
        payload: mockPayload,
        successCallback: mockSuccessCallback
      });
    });
    expect(mockCreateAnnotation).toBeCalledWith(mockFile.id, mockFile.file_version.id, mockPayload, mockFile.permissions, mockSuccessCallback, mockErrorCallback);
  });
  test('should call api function on handleFetch with correct arguments', function () {
    var mockSuccessCallback = jest.fn();
    var mockGetAnnotation = jest.fn();
    var api = getApi({
      getAnnotation: mockGetAnnotation
    });

    var _getHook2 = getHook({
      api: api
    }),
        result = _getHook2.result;

    act(function () {
      result.current.handleFetch({
        id: annotation.id,
        successCallback: mockSuccessCallback
      });
    });
    expect(mockGetAnnotation).toBeCalledWith('fileId', annotation.id, {
      can_annotate: true,
      can_view_annotations: true
    }, mockSuccessCallback, errorCallback, true);
  });
  test('should call api function on handleEdit with correct arguments', function () {
    var mockSuccessCallback = jest.fn();
    var mockUpdateAnnotation = jest.fn();
    var api = getApi({
      updateAnnotation: mockUpdateAnnotation
    });

    var _getHook3 = getHook({
      api: api
    }),
        result = _getHook3.result;

    act(function () {
      result.current.handleEdit({
        id: annotation.id,
        permissions: {
          can_edit: true
        },
        successCallback: mockSuccessCallback,
        text: 'new text'
      });
    });
    expect(mockUpdateAnnotation).toBeCalledWith('fileId', annotation.id, {
      can_edit: true
    }, {
      message: 'new text'
    }, mockSuccessCallback, errorCallback);
  });
  test('should call api function on handleStatusChange with correct arguments', function () {
    var mockSuccessCallback = jest.fn();
    var mockUpdateAnnotation = jest.fn();
    var api = getApi({
      updateAnnotation: mockUpdateAnnotation
    });

    var _getHook4 = getHook({
      api: api
    }),
        result = _getHook4.result;

    act(function () {
      result.current.handleStatusChange({
        id: annotation.id,
        permissions: {
          can_resolve: true
        },
        status: 'resolved',
        successCallback: mockSuccessCallback
      });
    });
    expect(mockUpdateAnnotation).toBeCalledWith('fileId', annotation.id, {
      can_resolve: true
    }, {
      status: 'resolved'
    }, mockSuccessCallback, errorCallback);
  });
  test('should call api function on handleDelete with correct arguments', function () {
    var mockSuccessCallback = jest.fn();
    var mockDeleteAnnotation = jest.fn();
    var api = getApi({
      deleteAnnotation: mockDeleteAnnotation
    });

    var _getHook5 = getHook({
      api: api
    }),
        result = _getHook5.result;

    act(function () {
      result.current.handleDelete({
        id: annotation.id,
        permissions: {
          can_delete: true
        },
        successCallback: mockSuccessCallback
      });
    });
    expect(mockDeleteAnnotation).toBeCalledWith('fileId', annotation.id, {
      can_delete: true
    }, mockSuccessCallback, errorCallback);
  });
});