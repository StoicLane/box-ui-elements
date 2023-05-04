function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import * as vars from '../../styles/variables';
import AccessibleSVG from './AccessibleSVG';
export var IconExample = function IconExample(props) {
  return React.createElement(AccessibleSVG, _extends({
    width: 32,
    height: 32,
    viewBox: "0 0 32 32"
  }, props), React.createElement("path", {
    fill: vars.bdlGray50,
    d: "M9 3h9.172a2 2 0 011.414.586l5.83 5.828A2 2 0 0126 10.83V26a3 3 0 01-3 3H9a3 3 0 01-3-3V6a3 3 0 013-3z"
  }));
};
export default {
  title: 'Components|AccessibleSVG',
  component: AccessibleSVG
};
//# sourceMappingURL=AccessibleSVG.stories.js.map