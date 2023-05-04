import * as React from 'react'; // @ts-ignore JS Import

import DatalistItem from './DatalistItem';
import notes from './DatalistItem.stories.md';
export var Example = function Example() {
  return React.createElement(DatalistItem, {
    isSelected: true
  }, "Text");
};
export default {
  title: 'Components|Dropdowns/ListItems/DatalistItem',
  component: DatalistItem,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=DatalistItem.stories.js.map