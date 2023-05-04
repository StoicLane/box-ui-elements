function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import PillCloud from './PillCloud';
import notes from './PillCloud.stories.md';
var pills = [{
  value: 0,
  displayText: 'Box'
}, {
  value: 1,
  displayText: 'Fox'
}, {
  value: 2,
  displayText: 'Socks'
}, {
  value: 3,
  displayText: 'Flocks'
}, {
  value: 4,
  displayText: 'Chalks'
}, {
  value: 5,
  displayText: 'Locks'
}, {
  value: 6,
  displayText: 'long pill, very very long pill, so long that it breaks css boundaries'
}, {
  value: 7,
  displayText: 'Rocks'
}, {
  value: 8,
  displayText: 'Crocs'
}, {
  value: 9,
  displayText: 'Mox'
}, {
  value: 10,
  displayText: 'Stalks'
}, {
  value: 11,
  displayText: 'Clocks'
}, {
  value: 12,
  displayText: 'Lox'
}, {
  value: 13,
  displayText: 'Blocks'
}, {
  value: 14,
  displayText: 'Ox'
}, {
  value: 15,
  displayText: 'another long pill, very very long pill, so long that it breaks css boundaries'
}];
export var regular = function regular() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useState = useState(pills[5]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedOption = _useState2[0],
      setSelectedOption = _useState2[1];

  return React.createElement("div", null, React.createElement(PillCloud, {
    onSelect: function onSelect(option) {
      setSelectedOption(option);
    },
    options: pills,
    selectedOptions: [selectedOption],
    buttonProps: {
      'data-button-type': 'pill-btn'
    }
  }), React.createElement("div", {
    id: "pill-cloud-output"
  }, "Selected Pill: ", selectedOption.displayText));
};
export default {
  title: 'Components|PillCloud',
  component: PillCloud,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=PillCloud.stories.js.map