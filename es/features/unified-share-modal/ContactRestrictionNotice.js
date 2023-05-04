var _RESTRICTION_JUSTIFIC, _RESTRICTION_JUSTIFIC2, _COLLAB_RESTRICTION_T, _SINGLE_CONTACT, _COLLAB_RESTRICTION_T2, _restrictionNoticeMes;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import noop from 'lodash/noop';
import getProp from 'lodash/get';
import { FormattedMessage, injectIntl } from 'react-intl';
import Tooltip from '../../components/tooltip';
import PlainButton from '../../components/plain-button';
import InlineNotice from '../../components/inline-notice';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import SingleSelectField from '../../components/select-field/SingleSelectField';
import isRestrictedContact from './utils/isRestrictedContact';
import { COLLAB_RESTRICTION_TYPE_ACCESS_POLICY, COLLAB_RESTRICTION_TYPE_INFORMATION_BARRIER } from './constants';
import messages from './messages';
import './ContactRestrictionNotice.scss';
var SINGLE_CONTACT = 'singleContact';
var MULTIPLE_CONTACTS = 'multipleContacts';
var EMAIL_CONTACT = 'email';
var GROUP_CONTACT = 'group';
var RESTRICTION_JUSTIFICATION_ENABLED = 'restrictionJustificationEnabled';
var RESTRICTION_JUSTIFICATION_DISABLED = 'restrictionJustificationDisabled';
var restrictionNoticeMessageMap = (_restrictionNoticeMes = {}, _defineProperty(_restrictionNoticeMes, COLLAB_RESTRICTION_TYPE_ACCESS_POLICY, (_COLLAB_RESTRICTION_T = {}, _defineProperty(_COLLAB_RESTRICTION_T, RESTRICTION_JUSTIFICATION_ENABLED, (_RESTRICTION_JUSTIFIC = {}, _defineProperty(_RESTRICTION_JUSTIFIC, SINGLE_CONTACT, messages.justifiableContactRestrictionNoticeSingular), _defineProperty(_RESTRICTION_JUSTIFIC, MULTIPLE_CONTACTS, messages.justifiableContactRestrictionNotice), _RESTRICTION_JUSTIFIC)), _defineProperty(_COLLAB_RESTRICTION_T, RESTRICTION_JUSTIFICATION_DISABLED, (_RESTRICTION_JUSTIFIC2 = {}, _defineProperty(_RESTRICTION_JUSTIFIC2, SINGLE_CONTACT, messages.contactRestrictionNoticeSingular), _defineProperty(_RESTRICTION_JUSTIFIC2, MULTIPLE_CONTACTS, messages.contactRestrictionNotice), _RESTRICTION_JUSTIFIC2)), _COLLAB_RESTRICTION_T)), _defineProperty(_restrictionNoticeMes, COLLAB_RESTRICTION_TYPE_INFORMATION_BARRIER, (_COLLAB_RESTRICTION_T2 = {}, _defineProperty(_COLLAB_RESTRICTION_T2, SINGLE_CONTACT, (_SINGLE_CONTACT = {}, _defineProperty(_SINGLE_CONTACT, EMAIL_CONTACT, messages.contactRestrictionNoticeInformationBarrierSingular), _defineProperty(_SINGLE_CONTACT, GROUP_CONTACT, messages.contactRestrictionNoticeInformationBarrierSingularGroup), _SINGLE_CONTACT)), _defineProperty(_COLLAB_RESTRICTION_T2, MULTIPLE_CONTACTS, messages.contactRestrictionNoticeInformationBarrier), _COLLAB_RESTRICTION_T2)), _restrictionNoticeMes);

var ContactRestrictionNotice = function ContactRestrictionNotice(_ref) {
  var _ref$collabRestrictio = _ref.collabRestrictionType,
      collabRestrictionType = _ref$collabRestrictio === void 0 ? COLLAB_RESTRICTION_TYPE_ACCESS_POLICY : _ref$collabRestrictio,
      error = _ref.error,
      intl = _ref.intl,
      isFetchingJustificationReasons = _ref.isFetchingJustificationReasons,
      isRestrictionJustificationEnabled = _ref.isRestrictionJustificationEnabled,
      justificationReasons = _ref.justificationReasons,
      onRemoveRestrictedContacts = _ref.onRemoveRestrictedContacts,
      onSelectJustificationReason = _ref.onSelectJustificationReason,
      restrictedEmails = _ref.restrictedEmails,
      restrictedGroups = _ref.restrictedGroups,
      selectedContacts = _ref.selectedContacts,
      selectedJustificationReason = _ref.selectedJustificationReason;
  var restrictedContacts = selectedContacts.filter(function (contact) {
    return isRestrictedContact(contact, restrictedEmails, restrictedGroups);
  });
  var restrictedContactCount = restrictedContacts.length;

  if (!restrictedContactCount) {
    return null;
  }

  var _restrictedContacts = _slicedToArray(restrictedContacts, 1),
      firstContact = _restrictedContacts[0];

  var isFirstContactAGroup = firstContact.type === 'group';
  var firstContactEmail = isFirstContactAGroup ? undefined : firstContact.value;
  var firstContactGroupName = isFirstContactAGroup ? firstContact.text : undefined;
  var selectedValue = getProp(selectedJustificationReason, 'value', null);
  var isErrorTooltipShown = !!error;
  var justificationStatus = isRestrictionJustificationEnabled ? RESTRICTION_JUSTIFICATION_ENABLED : RESTRICTION_JUSTIFICATION_DISABLED;
  var restrictedContactCountType = restrictedContactCount === 1 ? SINGLE_CONTACT : MULTIPLE_CONTACTS;
  var removeButtonLabelMessage = isRestrictionJustificationEnabled ? messages.justifiableContactRestrictionRemoveButtonLabel : messages.contactRestrictionRemoveButtonLabel;
  var restrictionNoticeMessage; // Information Barrier restrictions do not allow justifications

  if (collabRestrictionType === COLLAB_RESTRICTION_TYPE_INFORMATION_BARRIER) {
    if (restrictedContactCountType === SINGLE_CONTACT) {
      var contactType = isFirstContactAGroup ? GROUP_CONTACT : EMAIL_CONTACT; // Group names are displayed in quotes, which need to be localized, hence why
      // we need to use different messages for groups and emails

      restrictionNoticeMessage = restrictionNoticeMessageMap[COLLAB_RESTRICTION_TYPE_INFORMATION_BARRIER][SINGLE_CONTACT][contactType];
    } else {
      restrictionNoticeMessage = restrictionNoticeMessageMap[COLLAB_RESTRICTION_TYPE_INFORMATION_BARRIER][MULTIPLE_CONTACTS];
    }
  } else {
    restrictionNoticeMessage = restrictionNoticeMessageMap[collabRestrictionType][justificationStatus][restrictedContactCountType];
  }

  var justificationSelectSection = isFetchingJustificationReasons ? React.createElement(LoadingIndicator, {
    className: "bdl-ContactRestrictionNotice-loadingIndicator"
  }) : React.createElement(SingleSelectField, {
    "data-resin-target": "justificationReasonsSelect",
    options: justificationReasons,
    onChange: onSelectJustificationReason,
    placeholder: intl.formatMessage(messages.justificationSelectPlaceholder),
    selectedValue: selectedValue
  });
  return React.createElement(Tooltip, {
    text: error,
    isShown: isErrorTooltipShown,
    position: "middle-right",
    theme: "error"
  }, React.createElement(InlineNotice, {
    className: "bdl-ContactRestrictionNotice",
    "data-resin-component": "contactRestrictionNotice",
    type: "error"
  }, React.createElement(FormattedMessage, _extends({}, restrictionNoticeMessage, {
    values: {
      count: restrictedContactCount,
      // We use the first contact because email address and
      // group name are only displayed for single contact messages
      email: firstContactEmail,
      groupName: firstContactGroupName
    }
  })), "\xA0", isRestrictionJustificationEnabled && justificationSelectSection, React.createElement(PlainButton, {
    className: "bdl-ContactRestrictionNotice-removeBtn",
    "data-resin-target": "removeBtn",
    onClick: onRemoveRestrictedContacts
  }, React.createElement(FormattedMessage, _extends({}, removeButtonLabelMessage, {
    values: {
      count: restrictedContactCount
    }
  })))));
};

ContactRestrictionNotice.displayName = 'ContactRestrictionNotice';
ContactRestrictionNotice.defaultProps = {
  justificationReasons: [],
  onRemoveRestrictedContacts: noop,
  onSelectJustificationReason: noop
};
export { ContactRestrictionNotice as ContactRestrictionNoticeComponent };
export default injectIntl(ContactRestrictionNotice);
//# sourceMappingURL=ContactRestrictionNotice.js.map