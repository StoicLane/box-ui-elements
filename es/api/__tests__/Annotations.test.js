function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import cloneDeep from 'lodash/cloneDeep';
import Annotations from '../Annotations';
import { ERROR_CODE_CREATE_ANNOTATION, ERROR_CODE_CREATE_REPLY, ERROR_CODE_FETCH_REPLIES, ERROR_CODE_DELETE_ANNOTATION, ERROR_CODE_EDIT_ANNOTATION, ERROR_CODE_FETCH_ANNOTATION, ERROR_CODE_FETCH_ANNOTATIONS } from '../../constants';
import { formatComment } from '../utils';
import { annotations as mockAnnotations, threadedComments as mockThreadedComments, threadedCommentsFormatted as mockThreadedCommentsFormatted } from '../fixtures';
var mockFormattedReply = cloneDeep(mockThreadedCommentsFormatted[1]);
jest.mock('../utils', function () {
  return {
    formatComment: jest.fn(function () {
      return mockFormattedReply;
    })
  };
});
describe('api/Annotations', function () {
  var annotations;
  beforeEach(function () {
    annotations = new Annotations({});
    annotations.delete = jest.fn();
    annotations.get = jest.fn();
    annotations.markerGet = jest.fn();
    annotations.post = jest.fn();
    annotations.put = jest.fn();
  });
  afterEach(function () {
    annotations.destroy();
    annotations = null;
  });
  describe('getUrl()', function () {
    test('should the return correct url for annotations', function () {
      expect(annotations.getUrl()).toBe('https://api.box.com/2.0/undoc/annotations');
    });
  });
  describe('getUrlForId()', function () {
    test('should return the correct url for a given annotation id', function () {
      expect(annotations.getUrlForId('test')).toBe('https://api.box.com/2.0/undoc/annotations/test');
    });
  });
  describe('getUrlWithRepliesForId()', function () {
    test('should return the correct url for replies for given annotation id', function () {
      expect(annotations.getUrlWithRepliesForId('test')).toBe('https://api.box.com/2.0/undoc/annotations/test/replies');
    });
  });
  describe('createAnnotation()', function () {
    var payload = {
      description: {
        message: 'This is a test message.'
      },
      target: {
        location: {
          type: 'page',
          value: 1
        },
        shape: {
          height: 50,
          type: 'rect',
          width: 50,
          x: 10,
          y: 10
        },
        type: 'region'
      }
    };
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    test('should format its parameters and call the post method', function () {
      var permissions = {
        can_create_annotations: true,
        can_view_annotations: true
      };
      annotations.createAnnotation('12345', '67890', payload, permissions, successCallback, errorCallback);
      expect(annotations.post).toBeCalledWith({
        id: '12345',
        data: {
          data: {
            description: {
              message: 'This is a test message.',
              type: 'reply'
            },
            file_version: {
              id: '67890',
              type: 'file_version'
            },
            target: payload.target
          }
        },
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/undoc/annotations'
      });
    });
    test.each([{
      can_create_annotations: false,
      can_view_annotations: false
    }, {
      can_create_annotations: false,
      can_view_annotations: true
    }])('should reject with an error code for calls with invalid permissions %s', function (permissions) {
      annotations.createAnnotation('12345', '67890', payload, permissions, successCallback, errorCallback);
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_CREATE_ANNOTATION);
      expect(annotations.post).not.toBeCalled();
    });
  });
  describe('updateAnnotation()', function () {
    test('should format its parameters and call the update method for a given id and mesaage', function () {
      var errorCallback = jest.fn();
      var successCallback = jest.fn();
      var payload = {
        message: 'hello'
      };
      annotations.updateAnnotation('12345', 'abc', {
        can_edit: true
      }, payload, successCallback, errorCallback);
      expect(annotations.put).toBeCalledWith({
        id: '12345',
        data: {
          data: {
            description: {
              message: 'hello'
            }
          }
        },
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/undoc/annotations/abc'
      });
    });
    test('should format its parameters and call the update method for a given id and status', function () {
      var errorCallback = jest.fn();
      var successCallback = jest.fn();
      var payload = {
        status: 'resolved'
      };
      annotations.updateAnnotation('12345', 'abc', {
        can_resolve: true
      }, payload, successCallback, errorCallback);
      expect(annotations.put).toBeCalledWith({
        id: '12345',
        data: {
          data: {
            description: undefined,
            status: 'resolved'
          }
        },
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/undoc/annotations/abc'
      });
    });
    test.each([{
      can_resolve: true,
      can_edit: false
    }, {
      can_resolve: false,
      can_edit: true
    }])('should reject with an error code for calls with invalid permissions %s', function (permissions) {
      var errorCallback = jest.fn();
      var successCallback = jest.fn();
      var payload = {
        message: 'hello',
        status: 'resolved'
      };
      annotations.updateAnnotation('12345', '67890', permissions, payload, successCallback, errorCallback);
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_EDIT_ANNOTATION);
      expect(annotations.put).not.toBeCalled();
    });
  });
  describe('deleteAnnotation()', function () {
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    test('should format its parameters and call the delete method for a given id', function () {
      annotations.deleteAnnotation('12345', 'abc', {
        can_delete: true
      }, successCallback, errorCallback);
      expect(annotations.delete).toBeCalledWith({
        id: '12345',
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/undoc/annotations/abc'
      });
    });
    test('should reject with an error code for calls with invalid permissions', function () {
      annotations.deleteAnnotation('12345', '67890', {
        can_delete: false
      }, successCallback, errorCallback);
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_DELETE_ANNOTATION);
      expect(annotations.delete).not.toBeCalled();
    });
  });
  describe('getAnnotation()', function () {
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    test('should format its parameters and call the get method', function () {
      var permissions = {
        can_create_annotations: true,
        can_view_annotations: true
      };
      annotations.getAnnotation('12345', 'abc', permissions, successCallback, errorCallback);
      expect(annotations.get).toBeCalledWith({
        id: '12345',
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/undoc/annotations/abc',
        requestData: undefined
      });
    });
    test('should format its parameters and call the get method with replies', function () {
      var permissions = {
        can_create_annotations: true,
        can_view_annotations: true
      };
      annotations.getAnnotation('12345', 'abc', permissions, successCallback, errorCallback, true);
      expect(annotations.get).toBeCalledWith({
        id: '12345',
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/undoc/annotations/abc',
        requestData: {
          params: {
            fields: 'replies'
          }
        }
      });
    });
    test.each([{
      can_create_annotations: true,
      can_view_annotations: false
    }, {
      can_create_annotations: false,
      can_view_annotations: false
    }])('should reject with an error code for calls with invalid permissions %s', function (permissions) {
      annotations.getAnnotation('12345', '67890', permissions, successCallback, errorCallback);
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_FETCH_ANNOTATION);
      expect(annotations.get).not.toBeCalled();
    });
  });
  describe('getAnnotations()', function () {
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    test('should format its parameters and call the underlying markerGet method', function () {
      var permissions = {
        can_create_annotations: true,
        can_view_annotations: true
      };
      annotations.getAnnotations('12345', '67890', permissions, successCallback, errorCallback);
      expect(annotations.markerGet).toBeCalledWith({
        id: '12345',
        errorCallback: errorCallback,
        requestData: {
          file_id: '12345',
          file_version_id: '67890'
        },
        successCallback: successCallback
      });
    });
    test('should format its parameters and call the underlying markerGet with additional requestData', function () {
      var permissions = {
        can_create_annotations: true,
        can_view_annotations: true
      };
      annotations.getAnnotations('12345', '67890', permissions, successCallback, errorCallback, 100, false, true);
      expect(annotations.markerGet).toBeCalledWith({
        id: '12345',
        errorCallback: errorCallback,
        successCallback: expect.any(Function),
        limit: 100,
        shouldFetchAll: false,
        requestData: {
          file_id: '12345',
          file_version_id: '67890',
          fields: 'replies'
        }
      });
    });
    test.each([{
      can_create_annotations: true,
      can_view_annotations: false
    }, {
      can_create_annotations: false,
      can_view_annotations: false
    }])('should reject with an error code for calls with invalid permissions %s', function (permissions) {
      annotations.getAnnotations('12345', '67890', permissions, successCallback, errorCallback);
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_FETCH_ANNOTATIONS);
      expect(annotations.markerGet).not.toBeCalled();
    });
  });
  describe('getAnnotationReplies()', function () {
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    test('should format its parameters and call the get method', function () {
      var permissions = {
        can_create_annotations: true,
        can_view_annotations: true
      };
      annotations.getAnnotationReplies('12345', '67890', permissions, successCallback, errorCallback);
      expect(annotations.get).toBeCalledWith({
        id: '12345',
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/undoc/annotations/67890/replies'
      });
    });
    test.each([{
      can_create_annotations: true,
      can_view_annotations: false
    }, {
      can_create_annotations: false,
      can_view_annotations: false
    }])('should reject with an error code for calls with invalid permissions %s', function (permissions) {
      annotations.getAnnotationReplies('12345', '67890', permissions, successCallback, errorCallback);
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_FETCH_REPLIES);
      expect(annotations.get).not.toBeCalled();
    });
  });
  describe('createAnnotationReply()', function () {
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    var message = 'Hello';
    test('should format its parameters and call the post method', function () {
      var permissions = {
        can_create_annotations: true
      };
      annotations.createAnnotationReply('12345', '67890', permissions, message, successCallback, errorCallback);
      expect(annotations.post).toBeCalledWith({
        id: '12345',
        data: {
          data: {
            message: message
          }
        },
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/undoc/annotations/67890/replies?file_id=12345'
      });
    });
    test.each([{
      can_create_annotations: false,
      can_view_annotations: false
    }, {
      can_create_annotations: false,
      can_view_annotations: true
    }])('should reject with an error code for calls with invalid permissions %s', function (permissions) {
      annotations.createAnnotationReply('12345', '67890', permissions, message, successCallback, errorCallback);
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_CREATE_REPLY);
      expect(annotations.post).not.toBeCalled();
    });
  });
  describe('successHandler()', function () {
    beforeEach(function () {
      annotations.formatReplies = jest.fn();
      annotations.successCallback = jest.fn();
    });
    test('should call the success callback with no data if none provided from API', function () {
      annotations.successHandler();
      expect(annotations.successCallback).toBeCalledWith();
    });
    test('should call formatReplies method and call the success callback if the response does not contain entries property', function () {
      var response = cloneDeep(mockAnnotations[0]);
      annotations.successHandler(response);
      expect(annotations.formatReplies).toBeCalledWith(response);
      expect(annotations.successCallback).toBeCalled();
    });
    test('should call formatComment util and call the success callback if the response does not contain entries property and has type = comment', function () {
      var response = cloneDeep(mockThreadedComments[0]);
      annotations.successHandler(response);
      expect(formatComment).toBeCalledWith(response);
      expect(annotations.successCallback).toBeCalled();
    });
    test('should call formatComment util, not call the formatReplies method and should call the success callback if the response contains comments (replies)', function () {
      var response = {
        entries: cloneDeep(mockThreadedComments),
        limit: 1000,
        next_marker: null
      };
      annotations.successHandler(response);
      expect(formatComment).toBeCalled();
      expect(annotations.formatReplies).not.toBeCalled();
      expect(annotations.successCallback).toBeCalled();
    });
    test('should call formatReplies method and call the success callback if the response contains annotations', function () {
      var response = {
        entries: cloneDeep(mockAnnotations),
        limit: 1000,
        next_marker: null
      };
      annotations.successHandler(response);
      expect(annotations.formatReplies).toBeCalled();
      expect(annotations.successCallback).toBeCalled();
    });
  });
  describe('formatReplies()', function () {
    test('should return annotation with formatted replies when replies are present', function () {
      var annotation = {
        id: '1234',
        replies: [{
          id: '567'
        }]
      };

      var expectedUpdatedAnnotation = _objectSpread({}, annotation, {
        replies: [mockFormattedReply]
      });

      var updatedAnnotation = annotations.formatReplies(annotation);
      expect(updatedAnnotation).toMatchObject(expectedUpdatedAnnotation);
    });
    test('should return given annotation when replies are not present', function () {
      var annotation = {
        id: '1234'
      };
      var updatedAnnotation = annotations.formatReplies(annotation);
      expect(updatedAnnotation).toMatchObject(annotation);
    });
  });
});