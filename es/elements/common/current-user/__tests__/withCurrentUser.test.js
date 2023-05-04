function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import { withCurrentUser } from '../index'; // @ts-ignore no ts defintion

import messages from '../../messages';
var defaultErrorMaskSubHeaderMessage = messages.defaultErrorMaskSubHeaderMessage,
    currentUserErrorHeaderMessage = messages.currentUserErrorHeaderMessage;
jest.mock('../../api-context/withAPIContext', function () {
  return function (div) {
    return div;
  };
});
describe('elements/common/current-user/withCurrentUser', function () {
  var usersAPI = {
    getUser: jest.fn()
  };
  var api = {
    getUsersAPI: function getUsersAPI() {
      return usersAPI;
    }
  };
  var file = {
    id: 'id'
  };

  var MockComponent = function MockComponent(props) {
    return React.createElement("div", props);
  };

  var WrappedComponent = withCurrentUser(MockComponent);

  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return shallow(React.createElement(WrappedComponent, _extends({
      api: api,
      file: file
    }, props)));
  };

  var currentUser = {
    id: 'foo'
  };
  var instance;
  var wrapper;
  describe('fetchCurrentUser()', function () {
    beforeEach(function () {
      wrapper = getWrapper();
      instance = wrapper.instance();
    });
    test('should invoke setState() directly if user parameter is not missing', function () {
      instance.setState = jest.fn();
      instance.fetchCurrentUser(currentUser);
      expect(instance.setState).toBeCalledWith({
        currentUser: currentUser,
        currentUserError: undefined
      });
    });
    test('should get the user', function () {
      instance.fetchCurrentUser();
      expect(usersAPI.getUser).toBeCalled();
    });
  });
  describe('fetchCurrentUserSuccessCallback()', function () {
    beforeEach(function () {
      wrapper = getWrapper();
      instance = wrapper.instance();
      instance.setState = jest.fn();
    });
    test('should set the feedItems in the state', function () {
      instance.fetchCurrentUserSuccessCallback(currentUser);
      expect(instance.setState).toBeCalledWith({
        currentUser: currentUser,
        currentUserError: undefined
      });
    });
  });
  describe('fetchCurrentUserErrorCallback()', function () {
    beforeEach(function () {
      wrapper = getWrapper({
        file: file
      });
      instance = wrapper.instance();
      instance.errorCallback = jest.fn();
      instance.fetchCurrentUser = jest.fn();
    });
    test('should set a maskError if there is an error in fetching the current user', function () {
      instance.fetchCurrentUserErrorCallback({}, '404');
      var inlineErrorState = wrapper.state().currentUserError.maskError;
      expect(_typeof(currentUserErrorHeaderMessage)).toBe('object');
      expect(_typeof(defaultErrorMaskSubHeaderMessage)).toBe('object');
      expect(inlineErrorState.errorHeader).toEqual(currentUserErrorHeaderMessage);
      expect(inlineErrorState.errorSubHeader).toEqual(defaultErrorMaskSubHeaderMessage);
    });
    test('should set the current user error and call the error callback', function () {
      instance.setState = jest.fn();
      instance.fetchCurrentUserErrorCallback({
        status: 500
      }, '500');
      expect(instance.setState).toBeCalledWith({
        currentUser: undefined,
        currentUserError: expect.any(Object)
      });
      expect(instance.errorCallback).toBeCalled();
    });
  });
});