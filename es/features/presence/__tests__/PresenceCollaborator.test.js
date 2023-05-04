function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { createIntl } from 'react-intl';
import { PresenceCollaboratorComponent as PresenceCollaborator, renderTimestampMessage } from '../PresenceCollaborator';
var collaborator = {
  avatarUrl: '',
  id: '1',
  isActive: false,
  interactedAt: 999,
  interactionType: 'user.item_preview',
  name: 'Pooh Bear'
};
var intl = createIntl({});
describe('features/presence/PresenceCollaborator', function () {
  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return shallow(React.createElement(PresenceCollaborator, _extends({
      collaborator: collaborator,
      intl: intl
    }, props)));
  };

  describe('renderTimestampMessage()', function () {
    test('should return null when interactionType is an unkown type', function () {
      var res = renderTimestampMessage(123, 'test1234', intl);
      expect(res).toEqual(null);
    });
    test('should not return null when interactionType is a known type', function () {
      var res = renderTimestampMessage(123, 'user.item_preview', intl);
      expect(res).not.toEqual(null);
    });
  });
  describe('render()', function () {
    test('should correctly render a collaborator', function () {
      var wrapper = getWrapper();
      expect(wrapper.find('.bdl-PresenceCollaborator').length).toBe(1);
      expect(wrapper.exists('Avatar')).toBe(false);
      expect(wrapper.exists('PresenceAvatar')).toBe(true);
    });
    test('should have the correct title prop for the default browser tooltip', function () {
      var wrapper = getWrapper();
      var userInfo = wrapper.find('.bdl-PresenceCollaborator-info-name');
      expect(userInfo.prop('title')).toEqual('Pooh Bear');
    });
    test('should correctly render an anonymous avatar', function () {
      var wrapper = getWrapper({
        isAnonymous: true
      });
      expect(wrapper.exists('Avatar')).toBe(true);
      expect(wrapper.exists('PresenceAvatar')).toBe(false);
    });
  });
});