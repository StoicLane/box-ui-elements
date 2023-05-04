import * as React from 'react';
import ContactDatalistItem from './ContactDatalistItem';
export var Example = function Example() {
  return React.createElement(ContactDatalistItem, {
    getContactAvatarUrl: function getContactAvatarUrl() {
      return 'avatar.png';
    },
    id: "123",
    isExternal: false,
    name: "Aaron Levie",
    showAvatar: true,
    subtitle: React.createElement("span", null, "CEO")
  });
};
export default {
  title: 'Components|Dropdowns/ListItems/ContactDatalistItem',
  component: ContactDatalistItem,
  parameters: {
    notes: 'Used as a child of user/contact list components such as the PillSelectorDropdown'
  }
};
//# sourceMappingURL=ContactDatalistItem.stories.js.map