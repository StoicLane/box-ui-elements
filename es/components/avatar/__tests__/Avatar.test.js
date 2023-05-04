function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { AvatarBase as Avatar } from '../Avatar';
import AvatarImage from '../AvatarImage';
var testDataURI = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
describe('components/avatar/Avatar', function () {
  var intl = {
    formatMessage: jest.fn().mockImplementation(function (message) {
      return message.defaultMessage;
    })
  };

  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return shallow(React.createElement(Avatar, _extends({
      intl: intl
    }, props)));
  };

  test('should render an avatar container', function () {
    var wrapper = getWrapper({
      className: 'test-avatar',
      name: 'box'
    });
    expect(wrapper.is('.avatar.test-avatar')).toBe(true);
  });
  test('should add small size class based on prop', function () {
    var wrapper = getWrapper({
      name: 'box',
      size: 'small'
    });
    expect(wrapper.is('.avatar.avatar--small')).toBe(true);
  });
  test('should add large size class based on prop', function () {
    var wrapper = getWrapper({
      name: 'box',
      size: 'large'
    });
    expect(wrapper.is('.avatar.avatar--large')).toBe(true);
  });
  test('should not allow unknown sizes', function () {
    var wrapper = getWrapper({
      name: 'box',
      size: 'WRONG'
    });
    expect(wrapper.is('.avatar.avatar--WRONG')).toBe(false);
  });
  test('should render an AvatarImage when avatarUrl is passed in', function () {
    var wrapper = getWrapper({
      avatarUrl: testDataURI
    });
    var avatarImage = wrapper.find(AvatarImage);
    expect(avatarImage.length).toBe(1);
    expect(avatarImage.prop('url')).toBe(testDataURI);
  });
  test('should render an AvatarInitials when name is passed in', function () {
    var wrapper = getWrapper({
      id: '1',
      name: 'hello world'
    });
    var avatarInitials = wrapper.find('AvatarInitials');
    expect(avatarInitials.length).toBe(1);
    expect(avatarInitials.prop('name')).toBe('hello world');
    expect(avatarInitials.prop('id')).toBe('1');
  });
  test('should render an UnknownUserAvatar when no params are passed', function () {
    var wrapper = getWrapper();
    var avatarIcon = wrapper.find('UnknownUserAvatar');
    expect(avatarIcon.length).toBe(1);
    expect(avatarIcon.prop('className')).toBe('avatar-icon');
  });
  test('should render an UnknownUserAvatar when empty name and url are passed', function () {
    var wrapper = getWrapper({
      avatarUrl: null,
      id: 2,
      name: ''
    });
    var avatarIcon = wrapper.find('UnknownUserAvatar');
    expect(avatarIcon.length).toBe(1);
    expect(avatarIcon.prop('className')).toBe('avatar-icon');
  });
  test('should fall back to AvatarInitials when there is an error in AvatarImage', function () {
    var wrapper = getWrapper({
      avatarUrl: 'http://foo.bar/baz123_invalid',
      id: '1',
      name: 'hello world'
    });
    var avatarImage = wrapper.find(AvatarImage);
    var onError = avatarImage.prop('onError');
    onError();
    var avatarInitials = wrapper.find('AvatarInitials');
    expect(avatarInitials.length).toEqual(1);
  });
  test('should show external user icon when isExternal and shouldShowExternal are passed', function () {
    var externalWrapper = getWrapper({
      id: '2',
      name: 'External User 1',
      isExternal: true,
      shouldShowExternal: true
    });
    var nonExternalWrapper = getWrapper({
      id: '2',
      name: 'External User 2',
      isExternal: true
    });
    expect(externalWrapper.is('.avatar.avatar--isExternal')).toBe(true);
    expect(nonExternalWrapper.is('.avatar.avatar--isExternal')).toBe(false);
  });
  test('should reset error state when new avatarUrl is passed in', function () {
    var props = {
      id: '1',
      name: 'hello world',
      avatarUrl: 'http://foo.bar/baz123_invalid'
    };
    var wrapper = mount(React.createElement(Avatar, _extends({
      intl: intl
    }, props)));
    expect(wrapper.find(AvatarImage).length).toBe(1);
    act(function () {
      var avatarImage = wrapper.find(AvatarImage);
      var onError = avatarImage.prop('onError');
      onError();
    });
    wrapper.update();
    expect(wrapper.find(AvatarImage).length).toBe(0);
    expect(wrapper.find('AvatarInitials').length).toBe(1);
    act(function () {
      wrapper.setProps(_objectSpread({}, props, {
        avatarUrl: 'http://foo.bar/baz123_invalid_new'
      }));
    });
    wrapper.update();
    expect(wrapper.find(AvatarImage).length).toBe(1);
  });
});