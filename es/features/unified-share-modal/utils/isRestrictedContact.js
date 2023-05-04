var isRestrictedContact = function isRestrictedContact(contact, restrictedEmails, restrictedGroups) {
  var isRestrictedEmail = false;
  var isRestrictedGroup = false;

  if (contact.id && contact.type === 'group') {
    isRestrictedGroup = restrictedGroups.includes(Number(contact.id));
  } else {
    isRestrictedEmail = restrictedEmails.includes(String(contact.value));
  }

  return isRestrictedEmail || isRestrictedGroup;
};

export default isRestrictedContact;
//# sourceMappingURL=isRestrictedContact.js.map