import * as React from 'react';
import CloseButton from './CloseButton';
import notes from './CloseButton.stories.md';
export var regular = function regular() {
  return React.createElement(CloseButton, null);
};
export default {
  title: 'Components|Buttons/CloseButton',
  component: CloseButton,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=CloseButton.stories.js.map