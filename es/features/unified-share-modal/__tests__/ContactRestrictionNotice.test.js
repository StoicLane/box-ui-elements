function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            restrictedGroupCount | restrictionNoticeMessageId                                             | removeButtonMessageId\n            ", "                 | ", " | ", "\n            ", "                 | ", "              | ", "\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            collabRestrictionType                          | isRestrictionJustificationEnabled | restrictedContactCount | restrictionNoticeMessageId                                        | removeButtonMessageId\n            ", "       | ", "                          | ", "                   | ", "                   | ", "\n            ", "       | ", "                          | ", "                   | ", "                           | ", "\n            ", "       | ", "                           | ", "                   | ", "        | ", "\n            ", "       | ", "                           | ", "                   | ", "                | ", "\n            ", " | ", "                          | ", "                   | ", " | ", "\n            ", " | ", "                          | ", "                   | ", "         | ", "\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import { COLLAB_RESTRICTION_TYPE_ACCESS_POLICY, COLLAB_RESTRICTION_TYPE_INFORMATION_BARRIER } from '../constants';
import messages from '../messages';
import { ContactRestrictionNoticeComponent as ContactRestrictionNotice } from '../ContactRestrictionNotice';
describe('features/unified-share-modal/ContactRestrictionNotice', function () {
  var wrapper;
  var selectedContacts;
  var restrictedEmails;
  var restrictedGroups;

  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return shallow(React.createElement(ContactRestrictionNotice, _extends({
      collabRestrictionType: undefined,
      error: "",
      intl: {
        formatMessage: jest.fn()
      },
      isFetchingJustificationReasons: false,
      isRestrictionJustificationEnabled: false,
      justificationReasons: [],
      onRemoveRestrictedContacts: jest.fn(),
      onSelectJustificationReason: jest.fn(),
      restrictedEmails: restrictedEmails,
      restrictedGroups: restrictedGroups,
      selectedContacts: selectedContacts,
      selectedJustificationReason: null
    }, props)));
  };

  beforeEach(function () {
    selectedContacts = [{
      email: 'x@example.com',
      id: 12345,
      text: 'X User',
      type: 'user',
      value: 'x@example.com'
    }, {
      email: 'y@example.com',
      id: 23456,
      text: 'Y User',
      type: 'user',
      value: 'y@example.com'
    }, {
      email: 'z@example.com',
      id: 34567,
      text: 'Z User',
      type: 'user',
      value: 'z@example.com'
    }, {
      id: 45678,
      text: 'Test Group 1',
      type: 'group'
    }, {
      id: 56789,
      text: 'Test Group 2',
      type: 'group'
    }];
    restrictedEmails = ['x@example.com', 'y@example.com'];
    restrictedGroups = [45678, 56789];
    wrapper = getWrapper();
  });
  describe('render', function () {
    test('should render default ContactRestrictionNotice component', function () {
      expect(wrapper.is('Tooltip')).toBe(true);
      expect(wrapper.find('InlineNotice')).toHaveLength(1);
      expect(wrapper.find('[data-resin-target="removeBtn"]')).toHaveLength(1);
    });
    test('should render nothing when there are no restricted contacts', function () {
      wrapper.setProps({
        restrictedEmails: [],
        restrictedGroups: [],
        selectedContacts: selectedContacts
      });
      expect(wrapper.isEmptyRender()).toBe(true);
      wrapper.setProps({
        restrictedEmails: restrictedEmails,
        selectedContacts: []
      });
      expect(wrapper.isEmptyRender()).toBe(true);
    });
    test.each(_templateObject(), COLLAB_RESTRICTION_TYPE_ACCESS_POLICY, false, 1, messages.contactRestrictionNoticeSingular.id, messages.contactRestrictionRemoveButtonLabel.id, COLLAB_RESTRICTION_TYPE_ACCESS_POLICY, false, 2, messages.contactRestrictionNotice.id, messages.contactRestrictionRemoveButtonLabel.id, COLLAB_RESTRICTION_TYPE_ACCESS_POLICY, true, 1, messages.justifiableContactRestrictionNoticeSingular.id, messages.justifiableContactRestrictionRemoveButtonLabel.id, COLLAB_RESTRICTION_TYPE_ACCESS_POLICY, true, 2, messages.justifiableContactRestrictionNotice.id, messages.justifiableContactRestrictionRemoveButtonLabel.id, COLLAB_RESTRICTION_TYPE_INFORMATION_BARRIER, false, 1, messages.contactRestrictionNoticeInformationBarrierSingular.id, messages.contactRestrictionRemoveButtonLabel.id, COLLAB_RESTRICTION_TYPE_INFORMATION_BARRIER, false, 2, messages.contactRestrictionNoticeInformationBarrier.id, messages.contactRestrictionRemoveButtonLabel.id)('should select appropriate messages when restriction type is "$collabRestrictionType",  isRestrictionJustificationEnabled is $isRestrictionJustificationEnabled and restricted contact count is $restrictedContactCount', function (_ref) {
      var collabRestrictionType = _ref.collabRestrictionType,
          isRestrictionJustificationEnabled = _ref.isRestrictionJustificationEnabled,
          restrictedContactCount = _ref.restrictedContactCount,
          restrictionNoticeMessageId = _ref.restrictionNoticeMessageId,
          removeButtonMessageId = _ref.removeButtonMessageId;
      restrictedEmails = restrictedEmails.slice(0, restrictedContactCount);
      wrapper.setProps({
        collabRestrictionType: collabRestrictionType,
        isRestrictionJustificationEnabled: isRestrictionJustificationEnabled,
        restrictedEmails: restrictedEmails,
        restrictedGroups: []
      });
      var restrictionNoticeMessage = wrapper.find("FormattedMessage[id=\"".concat(restrictionNoticeMessageId, "\"]"));
      var removeButtonMessage = wrapper.find("FormattedMessage[id=\"".concat(removeButtonMessageId, "\"]"));
      expect(restrictionNoticeMessage).toHaveLength(1);
      expect(restrictionNoticeMessage.props().values).toEqual({
        count: restrictedEmails.length,
        email: selectedContacts[0].value,
        groupName: undefined
      });
      expect(removeButtonMessage).toHaveLength(1);
      expect(removeButtonMessage.props().values).toEqual({
        count: restrictedEmails.length
      });
    });
    test.each(_templateObject2(), 1, messages.contactRestrictionNoticeInformationBarrierSingularGroup.id, messages.contactRestrictionRemoveButtonLabel.id, 2, messages.contactRestrictionNoticeInformationBarrier.id, messages.contactRestrictionRemoveButtonLabel.id)('should select appropriate messages when restricted group count is $restrictedGroupCount', function (_ref2) {
      var restrictedGroupCount = _ref2.restrictedGroupCount,
          restrictionNoticeMessageId = _ref2.restrictionNoticeMessageId,
          removeButtonMessageId = _ref2.removeButtonMessageId;
      restrictedGroups = restrictedGroups.slice(0, restrictedGroupCount);
      wrapper.setProps({
        collabRestrictionType: COLLAB_RESTRICTION_TYPE_INFORMATION_BARRIER,
        restrictedEmails: [],
        restrictedGroups: restrictedGroups
      });
      var restrictionNoticeMessage = wrapper.find("FormattedMessage[id=\"".concat(restrictionNoticeMessageId, "\"]"));
      var removeButtonMessage = wrapper.find("FormattedMessage[id=\"".concat(removeButtonMessageId, "\"]"));
      expect(restrictionNoticeMessage).toHaveLength(1);
      expect(restrictionNoticeMessage.props().values).toEqual({
        count: restrictedGroups.length,
        email: undefined,
        groupName: selectedContacts[3].text
      });
      expect(removeButtonMessage).toHaveLength(1);
      expect(removeButtonMessage.props().values).toEqual({
        count: restrictedGroups.length
      });
    });
    test('should display error tooltip when error is provided', function () {
      var error = 'error';
      wrapper.setProps({
        error: undefined
      });
      expect(wrapper.find('Tooltip').props().isShown).toBe(false);
      wrapper.setProps({
        error: error
      });
      expect(wrapper.find('Tooltip').props().text).toBe(error);
      expect(wrapper.find('Tooltip').props().isShown).toBe(true);
    });
    test('should render a loading indicator instead of the justification reasons select when isFetchingJustificationReasons is true', function () {
      wrapper.setProps({
        isFetchingJustificationReasons: true,
        isRestrictionJustificationEnabled: true
      });
      expect(wrapper.find('[data-resin-target="justificationReasonsSelect"]')).toHaveLength(0);
      expect(wrapper.find('LoadingIndicator')).toHaveLength(1);
    });
    test('should render justification reasons select when isFetchingJustificationReasons is false and isRestrictionJustificationEnabled is true', function () {
      var selectedJustificationReason = {
        displayText: 'displayText1',
        value: 'value1'
      };
      var justificationReasons = [selectedJustificationReason, {
        displayText: 'displayText2',
        value: 'value2'
      }];
      wrapper.setProps({
        isFetchingJustificationReasons: false,
        isRestrictionJustificationEnabled: true,
        justificationReasons: justificationReasons,
        selectedJustificationReason: selectedJustificationReason
      });
      var justificationReasonsSelect = wrapper.find('[data-resin-target="justificationReasonsSelect"]');
      expect(justificationReasonsSelect).toHaveLength(1);
      expect(justificationReasonsSelect.props().options).toEqual(justificationReasons);
      expect(justificationReasonsSelect.props().selectedValue).toEqual(selectedJustificationReason.value);
      expect(wrapper.find('LoadingIndicator')).toHaveLength(0);
    });
  });
  describe('handlers', function () {
    test('should call onRemoveRestrictedContacts when remove button is clicked', function () {
      var onRemoveRestrictedContacts = jest.fn();
      wrapper.setProps({
        onRemoveRestrictedContacts: onRemoveRestrictedContacts
      });
      expect(onRemoveRestrictedContacts).toHaveBeenCalledTimes(0);
      wrapper.find('[data-resin-target="removeBtn"]').simulate('click');
      expect(onRemoveRestrictedContacts).toHaveBeenCalledTimes(1);
    });
    test('should call onSelectJustificationReason with newly selected option on justification reason select change', function () {
      var onSelectJustificationReason = jest.fn();
      var expectedJustificationReason = {
        displayText: 'displayText',
        value: 'value'
      };
      wrapper.setProps({
        isRestrictionJustificationEnabled: true,
        onSelectJustificationReason: onSelectJustificationReason
      });
      expect(onSelectJustificationReason).toHaveBeenCalledTimes(0);
      wrapper.find('[data-resin-target="justificationReasonsSelect"]').simulate('change', expectedJustificationReason);
      expect(onSelectJustificationReason).toHaveBeenCalledTimes(1);
      expect(onSelectJustificationReason).toHaveBeenCalledWith(expectedJustificationReason);
    });
  });
});