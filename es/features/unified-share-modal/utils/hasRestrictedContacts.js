var hasRestrictedContacts = function hasRestrictedContacts(contacts, restrictedEmails, restrictedGroups) {
  if (!restrictedEmails.length && !restrictedGroups.length) {
    return false;
  }

  var hasRestrictedGroups = contacts.some(function (_ref) {
    var id = _ref.id;
    return restrictedGroups.includes(id);
  });
  var hasRestrictedEmails = contacts.some(function (_ref2) {
    var value = _ref2.value;
    return restrictedEmails.includes(value);
  });
  return hasRestrictedGroups || hasRestrictedEmails;
};

export default hasRestrictedContacts;
//# sourceMappingURL=hasRestrictedContacts.js.map