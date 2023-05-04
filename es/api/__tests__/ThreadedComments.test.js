function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import cloneDeep from 'lodash/cloneDeep';
import ThreadedComments from '../ThreadedComments';
import { ERROR_CODE_CREATE_COMMENT, ERROR_CODE_UPDATE_COMMENT, ERROR_CODE_DELETE_COMMENT, ERROR_CODE_FETCH_COMMENT, ERROR_CODE_FETCH_COMMENTS, ERROR_CODE_FETCH_REPLIES, ERROR_CODE_CREATE_REPLY } from '../../constants';
import { formatComment } from '../utils';
import { threadedComments as mockThreadedComments } from '../fixtures';
jest.mock('../utils', function () {
  return {
    formatComment: jest.fn()
  };
});
describe('api/ThreadedComments', function () {
  var threadedComments;
  beforeEach(function () {
    threadedComments = new ThreadedComments({});
    threadedComments.delete = jest.fn();
    threadedComments.get = jest.fn();
    threadedComments.markerGet = jest.fn();
    threadedComments.post = jest.fn();
    threadedComments.put = jest.fn();
  });
  afterEach(function () {
    threadedComments.destroy();
    threadedComments = null;
  });
  describe('getUrl()', function () {
    test('should return correct url for threaded comments', function () {
      expect(threadedComments.getUrl()).toBe('https://api.box.com/2.0/undoc/comments');
    });
    test('should return correct url for threaded comments if fileId is given', function () {
      expect(threadedComments.getUrl('123')).toBe('https://api.box.com/2.0/undoc/comments?file_id=123');
    });
  });
  describe('getUrlForId()', function () {
    test('should return the correct url for a given threaded comment id', function () {
      expect(threadedComments.getUrlForId('test')).toBe('https://api.box.com/2.0/undoc/comments/test');
    });
  });
  describe('getUrlWithRepliesForId()', function () {
    test('should return the correct replies url for a given threaded comment id', function () {
      expect(threadedComments.getUrlWithRepliesForId('test')).toBe('https://api.box.com/2.0/undoc/comments/test/replies');
    });
    test('should return the correct replies url for a given threaded comment id if fileId is given', function () {
      expect(threadedComments.getUrlWithRepliesForId('test', '123')).toBe('https://api.box.com/2.0/undoc/comments/test/replies?file_id=123');
    });
  });
  describe('createComment()', function () {
    var file = {
      id: 'foo',
      permissions: {},
      type: 'file'
    };
    var message = 'Test message';
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    test('should format its parameters and call the post method', function () {
      var permissions = {
        can_comment: true
      };
      threadedComments.createComment({
        file: _objectSpread({}, file, {
          permissions: permissions
        }),
        message: message,
        errorCallback: errorCallback,
        successCallback: successCallback
      });
      expect(threadedComments.post).toBeCalledWith({
        id: 'foo',
        data: {
          data: {
            message: message
          }
        },
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/undoc/comments?file_id=foo'
      });
    });
    test('should reject with an error code for calls with invalid permission ', function () {
      threadedComments.createComment({
        file: _objectSpread({}, file, {
          can_comment: false
        }),
        message: message,
        errorCallback: errorCallback,
        successCallback: successCallback
      });
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_CREATE_COMMENT);
      expect(threadedComments.post).not.toBeCalled();
    });
  });
  describe('updateComment()', function () {
    var status = 'resolved';
    var message = 'hello';
    test('should format its parameters and call the update method for a given id', function () {
      var errorCallback = jest.fn();
      var successCallback = jest.fn();
      threadedComments.updateComment({
        fileId: '12345',
        commentId: 'abc',
        permissions: {
          can_resolve: true,
          can_edit: true
        },
        status: status,
        message: message,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
      expect(threadedComments.put).toBeCalledWith({
        id: '12345',
        data: {
          data: {
            status: status,
            message: message
          }
        },
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/undoc/comments/abc'
      });
    });
    test.each([{
      can_edit: true,
      can_resolve: false
    }, {
      can_edit: false,
      can_resolve: true
    }, {
      can_edit: false,
      can_resolve: false
    }])('should reject with an error code for calls with invalid permissions %s', function (permissions) {
      var errorCallback = jest.fn();
      var successCallback = jest.fn();
      threadedComments.updateComment({
        fileId: '12345',
        commentId: 'abc',
        permissions: permissions,
        status: status,
        message: message,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_UPDATE_COMMENT);
      expect(threadedComments.put).not.toBeCalled();
    });
  });
  describe('deleteComment()', function () {
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    test('should format its parameters and call the delete method for a given id', function () {
      threadedComments.deleteComment({
        fileId: '12345',
        commentId: 'abc',
        permissions: {
          can_delete: true
        },
        successCallback: successCallback,
        errorCallback: errorCallback
      });
      expect(threadedComments.delete).toBeCalledWith({
        id: '12345',
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/undoc/comments/abc'
      });
    });
    test('should reject with an error code for calls with invalid permissions', function () {
      threadedComments.deleteComment({
        fileId: '12345',
        commentId: '67890',
        permissions: {
          can_delete: false
        },
        successCallback: successCallback,
        errorCallback: errorCallback
      });
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_DELETE_COMMENT);
      expect(threadedComments.delete).not.toBeCalled();
    });
  });
  describe('getComment()', function () {
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    test('should format its parameters and call the get method', function () {
      var permissions = {
        can_comment: true
      };
      var url = 'http://test-url.com';
      threadedComments.getUrlForId = jest.fn().mockImplementationOnce(function () {
        return url;
      });
      threadedComments.getComment({
        commentId: '123',
        fileId: '12345',
        permissions: permissions,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
      expect(threadedComments.get).toBeCalledWith({
        id: '12345',
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: url
      });
    });
    test('should reject with an error code for calls with invalid permissions', function () {
      var permissions = {
        can_comment: false
      };
      threadedComments.getComment({
        commentId: '123',
        fileId: '12345',
        permissions: permissions,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_FETCH_COMMENT);
      expect(threadedComments.get).not.toBeCalled();
    });
  });
  describe('getComments()', function () {
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    test('should format its parameters and call the get method', function () {
      var permissions = {
        can_comment: true
      };
      threadedComments.getComments({
        fileId: '12345',
        permissions: permissions,
        successCallback: successCallback,
        errorCallback: errorCallback,
        repliesCount: 1
      });
      expect(threadedComments.markerGet).toBeCalledWith({
        id: '12345',
        errorCallback: errorCallback,
        requestData: {
          replies_count: 1
        },
        successCallback: successCallback
      });
    });
    test('should reject with an error code for calls with invalid permissions', function () {
      var permissions = {
        can_comment: false
      };
      threadedComments.getComments({
        fileId: '12345',
        permissions: permissions,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_FETCH_COMMENTS);
      expect(threadedComments.get).not.toBeCalled();
    });
  });
  describe('getCommentReplies()', function () {
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    test('should format its parameters and call get method', function () {
      var permissions = {
        can_comment: true
      };
      threadedComments.getCommentReplies({
        fileId: '12345',
        commentId: '67890',
        permissions: permissions,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
      expect(threadedComments.get).toBeCalledWith({
        id: '12345',
        errorCallback: errorCallback,
        url: 'https://api.box.com/2.0/undoc/comments/67890/replies',
        successCallback: successCallback
      });
    });
    test('should reject with an error code for calls with invalid permissions', function () {
      var permissions = {
        can_comment: false
      };
      threadedComments.getCommentReplies({
        fileId: '12345',
        commentId: '67890',
        permissions: permissions,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_FETCH_REPLIES);
      expect(threadedComments.get).not.toBeCalled();
    });
  });
  describe('createCommentReply()', function () {
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    var message = 'Hello';
    test('should format its parameters and call post method', function () {
      var permissions = {
        can_comment: true
      };
      threadedComments.createCommentReply({
        fileId: '12345',
        commentId: '67890',
        permissions: permissions,
        successCallback: successCallback,
        errorCallback: errorCallback,
        message: message
      });
      expect(threadedComments.post).toBeCalledWith({
        id: '12345',
        errorCallback: errorCallback,
        url: 'https://api.box.com/2.0/undoc/comments/67890/replies?file_id=12345',
        data: {
          data: {
            message: message
          }
        },
        successCallback: successCallback
      });
    });
    test('should reject with an error code for calls with invalid permissions', function () {
      var permissions = {
        can_comment: false
      };
      threadedComments.createCommentReply({
        fileId: '12345',
        commentId: '67890',
        permissions: permissions,
        successCallback: successCallback,
        errorCallback: errorCallback,
        message: message
      });
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_CREATE_REPLY);
      expect(threadedComments.get).not.toBeCalled();
    });
  });
  describe('successHandler()', function () {
    beforeEach(function () {
      threadedComments.successCallback = jest.fn();
    });
    test('should call the success callback with no data if none provided from API', function () {
      threadedComments.successHandler();
      expect(threadedComments.successCallback).toBeCalledWith();
    });
    test('should call formatReplies method and call the success callback if the response does not contain entries property', function () {
      var response = cloneDeep(mockThreadedComments[0]);
      threadedComments.successHandler(response);
      expect(formatComment).toBeCalledWith(response);
      expect(threadedComments.successCallback).toBeCalled();
    });
    test('should call formatReplies method and call the success callback if the response contains entries (comments)', function () {
      var response = {
        entries: cloneDeep(mockThreadedComments),
        limit: 1000,
        next_marker: null
      };
      threadedComments.successHandler(response);
      expect(formatComment).toBeCalled();
      expect(threadedComments.successCallback).toBeCalled();
    });
  });
});