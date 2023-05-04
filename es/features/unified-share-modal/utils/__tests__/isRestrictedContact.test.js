function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        contact         | restrictedEmails     | restrictedGroups | description                                                                      | expectedResult\n        ", " | ", "                | ", "            | ", "        | ", "\n        ", "  | ", "                | ", "            | ", "         | ", "\n        ", " | ", "                | ", "        | ", "                                 | ", "\n        ", "  | ", " | ", "            | ", "                               | ", "\n        ", " | ", "                | ", "       | ", "                                     | ", "\n        ", "  | ", " | ", "            | ", "                                   | ", "\n        ", " | ", " | ", "       | ", "   | ", "\n        ", "  | ", " | ", "       | ", " | ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import isRestrictedContact from '../isRestrictedContact';
describe('features/unified-share-modal/utils/isRestrictedContact', function () {
  var groupContact = {
    id: 12345,
    text: 'X User',
    type: 'group'
  };
  var userContact = {
    email: 'y@example.com',
    id: 23456,
    text: 'Y User',
    type: 'user',
    value: 'y@example.com'
  };
  test.each(_templateObject(), groupContact, [], [], 'is group contact and restrictedEmails and restrictedGroups are empty', false, userContact, [], [], 'is user contact and restrictedEmails and restrictedGroups are empty', false, groupContact, [], [1111], 'group contact id is not in restrictedGroups', false, userContact, ['a@example.com'], [], 'user contact email is not in restrictedEmails', false, groupContact, [], [12345], 'group contact id is in restrictedGroups', true, userContact, ['y@example.com'], [], 'user contact email is in restrictedEmails', true, groupContact, ['y@example.com'], [12345], 'group contact id is in restrictedGroups and restrictedEmails is not empty', true, userContact, ['y@example.com'], [12345], 'user contact email is in restrictedEmails and restrictedGroups is not empty', true)('should return $expectedResult when $description', function (_ref) {
    var contact = _ref.contact,
        restrictedEmails = _ref.restrictedEmails,
        restrictedGroups = _ref.restrictedGroups,
        expectedResult = _ref.expectedResult;
    expect(isRestrictedContact(contact, restrictedEmails, restrictedGroups)).toBe(expectedResult);
  });
});