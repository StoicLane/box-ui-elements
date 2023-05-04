function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            enableReplies | expected\n            ", "       | ", "\n            ", "      | ", "\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            activityTypes                        | expected\n            ", "                         | ", "\n            ", "                                | ", "\n            ", "                       | ", "\n            ", " | ", "\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import cloneDeep from 'lodash/cloneDeep';
import FileActivities from '../FileActivities';
import { ERROR_CODE_FETCH_ACTIVITY } from '../../constants';
import { fileActivities as mockFileActivities } from '../fixtures';
describe('api/FileActivities', function () {
  var fileActivities;
  beforeEach(function () {
    fileActivities = new FileActivities({});
    fileActivities.get = jest.fn();
  });
  afterEach(function () {
    fileActivities.destroy();
    fileActivities = null;
  });
  describe('getFilteredUrl()', function () {
    test.each(_templateObject(), undefined, '', [], '', ['comment'], '&activity_types=comment', ['comment', 'annotation', 'task'], '&activity_types=comment,annotation,task')('should return the filtered query parameters as $expected when $activityTypes is passed in', function (_ref) {
      var activityTypes = _ref.activityTypes,
          expected = _ref.expected;
      expect(fileActivities.getFilteredUrl('1', activityTypes, true)).toBe("https://api.box.com/2.0/file_activities?file_id=1".concat(expected, "&enable_replies=true&reply_limit=1"));
    });
    test.each(_templateObject2(), true, '&enable_replies=true', false, '&enable_replies=false')('should return the enable_replies as $expected when $enableReplies is passed in', function (_ref2) {
      var enableReplies = _ref2.enableReplies,
          expected = _ref2.expected;
      expect(fileActivities.getFilteredUrl('1', ['comment', 'annotation', 'task'], enableReplies)).toBe("https://api.box.com/2.0/file_activities?file_id=1&activity_types=comment,annotation,task".concat(expected, "&reply_limit=1"));
    });
  });
  describe('getActivities()', function () {
    var errorCallback = jest.fn();
    var successCallback = jest.fn();
    test('should call the underlying get method', function () {
      var permissions = {
        can_comment: true
      };
      fileActivities.getActivities({
        fileID: '123',
        activityTypes: ['comment', 'task'],
        permissions: permissions,
        successCallback: successCallback,
        errorCallback: errorCallback,
        shouldShowReplies: true
      });
      expect(fileActivities.get).toBeCalledWith({
        id: '123',
        errorCallback: errorCallback,
        requestData: {},
        successCallback: successCallback,
        url: 'https://api.box.com/2.0/file_activities?file_id=123&activity_types=comment,task&enable_replies=true&reply_limit=1'
      });
    });
    test.each([{
      can_comment: true,
      can_view_annotations: false
    }, {
      can_comment: false,
      can_view_annotations: true
    }, {
      can_comment: false,
      can_view_annotations: false
    }])('should reject with an error code for calls with invalid permissions %s', function (permissions) {
      fileActivities.getActivities({
        fileID: '123',
        activityTypes: ['annotation', 'comment', 'task'],
        permissions: permissions,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
      expect(errorCallback).toBeCalledWith(expect.any(Error), ERROR_CODE_FETCH_ACTIVITY);
      expect(fileActivities.get).not.toBeCalled();
    });
  });
  describe('successHandler()', function () {
    beforeEach(function () {
      fileActivities.successCallback = jest.fn();
    });
    test('should call the success callback if the response contains fileActivities', function () {
      var response = {
        entries: cloneDeep(mockFileActivities)
      };
      fileActivities.successHandler(response);
      expect(fileActivities.successCallback).toBeCalled();
    });
  });
});