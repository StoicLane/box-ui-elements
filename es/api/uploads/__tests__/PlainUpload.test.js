import * as crypto from '../../../utils/webcrypto';
import * as uploads from '../../../utils/uploads';
import PlainUpload from '../PlainUpload';
var upload;
describe('api/uploads/PlainUpload', function () {
  beforeEach(function () {
    upload = new PlainUpload({
      token: '123'
    });
  });
  describe('uploadSuccessHandler()', function () {
    test('should not do anything if API is destroyed', function () {
      upload.isDestroyed = jest.fn().mockReturnValueOnce(true);
      upload.successCallback = jest.fn();
      upload.uploadSuccessHandler({
        data: {
          entries: {}
        }
      });
      expect(upload.successCallback).not.toHaveBeenCalled();
    });
    test('should call success callback with returned entries', function () {
      var entries = [{}, {}];
      upload.isDestroyed = jest.fn().mockReturnValueOnce(false);
      upload.successCallback = jest.fn();
      upload.uploadSuccessHandler({
        data: {
          entries: entries
        }
      });
      expect(upload.successCallback).toHaveBeenCalledWith(entries);
    });
  });
  describe('uploadProgressHandler', function () {
    test('should not do anything if API is destroyed', function () {
      upload.isDestroyed = jest.fn().mockReturnValueOnce(true);
      upload.progressCallback = jest.fn();
      upload.uploadProgressHandler(new ProgressEvent('null'));
      expect(upload.progressCallback).not.toHaveBeenCalled();
    });
    test('should call progress callback with progress event', function () {
      var event = new ProgressEvent('null');
      upload.isDestroyed = jest.fn().mockReturnValueOnce(false);
      upload.progressCallback = jest.fn();
      upload.uploadProgressHandler(event);
      expect(upload.progressCallback).toHaveBeenCalledWith(event);
    });
  });
  describe('makePreflightRequest()', function () {
    test('should not do anything if API is destroyed', function () {
      upload.isDestroyed = jest.fn().mockReturnValueOnce(true);
      upload.getBaseUploadUrl = jest.fn();
      upload.xhr = {
        options: jest.fn()
      };
      upload.makePreflightRequest({
        fileId: '123',
        fileName: 'cayde'
      });
      expect(upload.getBaseUploadUrl).not.toHaveBeenCalled();
      expect(upload.xhr.options).not.toHaveBeenCalled();
    });
    test('should make preflight request with current file attributes', function () {
      var baseUrl = 'base';
      upload.isDestroyed = jest.fn().mockReturnValueOnce(false);
      upload.getBaseApiUrl = jest.fn().mockReturnValueOnce(baseUrl);
      upload.file = {
        size: 1,
        name: 'zavala'
      };
      upload.folderId = '123';
      upload.fileDescription = 'ronaldo';
      upload.xhr = {
        options: jest.fn()
      };
      upload.makePreflightRequest({});
      expect(upload.xhr.options).toHaveBeenCalledWith({
        url: "".concat(baseUrl, "/files/content"),
        data: {
          name: upload.file.name,
          parent: {
            id: upload.folderId
          },
          size: upload.file.size,
          description: upload.fileDescription
        },
        successHandler: expect.any(Function),
        errorHandler: expect.any(Function)
      });
    });
    test('should make preflight request to upload file version url if fileId is given', function () {
      var baseUrl = 'base';
      upload.fileId = '234';
      upload.isDestroyed = jest.fn().mockReturnValueOnce(false);
      upload.getBaseApiUrl = jest.fn().mockReturnValueOnce(baseUrl);
      upload.file = {
        size: 1,
        name: 'zavala'
      };
      upload.folderId = '123';
      upload.xhr = {
        options: jest.fn()
      };
      upload.makePreflightRequest();
      expect(upload.xhr.options).toHaveBeenCalledWith({
        url: "".concat(baseUrl, "/files/").concat(upload.fileId, "/content"),
        data: expect.any(Object),
        successHandler: expect.any(Function),
        errorHandler: expect.any(Function)
      });
    });
  });
  describe('preflightSuccessHandler', function () {
    var MODIFIED_AT = 123456;
    beforeEach(function () {
      jest.spyOn(uploads, 'getFileLastModifiedAsISONoMSIfPossible').mockReturnValue(MODIFIED_AT);
    });
    afterEach(function () {
      jest.restoreAllMocks();
    });
    test('should not do anything if API is destroyed', function () {
      upload.isDestroyed = jest.fn().mockReturnValueOnce(true);
      upload.xhr = {
        uploadFile: jest.fn()
      };
      upload.preflightSuccessHandler({
        data: {}
      });
      expect(upload.xhr.uploadFile).not.toHaveBeenCalled();
    });
    test('should generate upload URL and make request if no URL is provided', function () {
      upload.isDestroyed = jest.fn().mockReturnValueOnce(false);
      upload.computeSHA1 = jest.fn().mockReturnValueOnce(Promise.resolve('somehash'));
      upload.file = {
        name: 'warlock'
      };
      upload.fileDescription = 'ronaldo';
      upload.fileName = 'warlock-152340';
      upload.folderId = '123';
      upload.xhr = {
        uploadFile: jest.fn()
      };
      return upload.preflightSuccessHandler({
        data: {}
      }).then(function () {
        expect(upload.xhr.uploadFile).toHaveBeenCalledWith({
          url: "".concat(upload.uploadHost, "/api/2.0/files/content"),
          data: {
            attributes: "{\"name\":\"".concat(upload.fileName, "\",\"parent\":{\"id\":\"").concat(upload.folderId, "\"},\"description\":\"").concat(upload.fileDescription, "\",\"content_modified_at\":").concat(MODIFIED_AT, "}"),
            file: upload.file
          },
          headers: {
            'Content-MD5': 'somehash'
          },
          successHandler: expect.any(Function),
          errorHandler: expect.any(Function),
          progressHandler: expect.any(Function)
        });
      });
    });
    test('should upload with no Content-MD5 hash if hashing fails', function () {
      upload.isDestroyed = jest.fn().mockReturnValueOnce(false);
      upload.computeSHA1 = jest.fn().mockReturnValueOnce(Promise.resolve(''));
      upload.file = {
        name: 'warlock'
      };
      upload.folderId = '123';
      upload.xhr = {
        uploadFile: jest.fn()
      };
      return upload.preflightSuccessHandler({
        data: {}
      }).then(function () {
        expect(upload.xhr.uploadFile).toHaveBeenCalledWith({
          url: "".concat(upload.uploadHost, "/api/2.0/files/content"),
          data: {
            attributes: expect.any(String),
            file: upload.file
          },
          headers: {},
          successHandler: expect.any(Function),
          errorHandler: expect.any(Function),
          progressHandler: expect.any(Function)
        });
      });
    });
    test('should upload to new file version if file ID is provided', function () {
      var fileId = '123';
      upload.isDestroyed = jest.fn().mockReturnValueOnce(false);
      upload.computeSHA1 = jest.fn().mockReturnValueOnce(Promise.resolve('somehash'));
      upload.file = {
        name: 'warlock'
      };
      upload.fileId = fileId;
      upload.folderId = '123';
      upload.xhr = {
        uploadFile: jest.fn()
      };
      return upload.preflightSuccessHandler({
        data: {}
      }).then(function () {
        expect(upload.xhr.uploadFile).toHaveBeenCalledWith({
          url: "".concat(upload.uploadHost, "/api/2.0/files/").concat(fileId, "/content"),
          data: expect.any(Object),
          headers: {
            'Content-MD5': 'somehash'
          },
          successHandler: expect.any(Function),
          errorHandler: expect.any(Function),
          progressHandler: expect.any(Function)
        });
      });
    });
  });
  describe('upload()', function () {
    test('should not do anything if API is destroyed', function () {
      upload.isDestroyed = jest.fn().mockReturnValueOnce(true);
      upload.makePreflightRequest = jest.fn();
      upload.upload({});
      expect(upload.makePreflightRequest).not.toHaveBeenCalled();
    });
    test('should set properties and make preflight request', function () {
      var folderId = '123';
      var fileDescription = 'ronaldo';
      var file = {};

      var successCallback = function successCallback() {};

      var errorCallback = function errorCallback() {};

      var progressCallback = function progressCallback() {};

      var overwrite = true;

      var conflictCallback = function conflictCallback() {};

      upload.isDestroyed = jest.fn().mockReturnValueOnce(false);
      upload.makePreflightRequest = jest.fn();
      upload.upload({
        folderId: folderId,
        file: file,
        fileDescription: fileDescription,
        successCallback: successCallback,
        errorCallback: errorCallback,
        progressCallback: progressCallback,
        overwrite: overwrite,
        conflictCallback: conflictCallback
      });
      expect(upload.folderId).toBe(folderId);
      expect(upload.file).toBe(file);
      expect(upload.fileDescription).toBe(fileDescription);
      expect(upload.successCallback).toBe(successCallback);
      expect(upload.errorCallback).toBe(errorCallback);
      expect(upload.progressCallback).toBe(progressCallback);
      expect(upload.overwrite).toBe(overwrite);
      expect(upload.conflictCallback).toBe(conflictCallback);
    });
  });
  describe('cancel()', function () {
    test('should not do anything if API is destroyed', function () {
      upload.isDestroyed = jest.fn().mockReturnValueOnce(true);
      upload.destroy = jest.fn();
      upload.cancel();
      expect(upload.destroy).not.toHaveBeenCalled();
    });
    test('should abort xhr', function () {
      upload.isDestroyed = jest.fn().mockReturnValueOnce(false);
      upload.destroy = jest.fn();
      upload.cancel();
      expect(upload.destroy).toHaveBeenCalled();
    });
  });
  describe('computeSHA1()', function () {
    test('should read file and compute digest', function () {
      var file = new File(['123'], 'sample.jpg');
      upload.readFile = jest.fn().mockReturnValueOnce(Promise.resolve({
        buffer: new ArrayBuffer(3)
      }));
      crypto.digest = jest.fn().mockReturnValueOnce(Promise.resolve(new ArrayBuffer(3)));
      return upload.computeSHA1(file).then(function (computedSHA1) {
        expect(upload.readFile).toBeCalled();
        expect(crypto.digest).toBeCalled();
        expect(computedSHA1).toEqual('000000');
      });
    });
  });
});