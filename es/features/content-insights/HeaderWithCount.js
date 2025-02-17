import * as React from 'react';
import CompactCount from './CompactCount';
import './HeaderWithCount.scss';

function isNumber(count) {
  return typeof count === 'number';
}

function HeaderWithCount(_ref) {
  var title = _ref.title,
      totalCount = _ref.totalCount;
  return React.createElement("div", {
    className: "HeaderWithCount"
  }, React.createElement("span", {
    className: "HeaderWithCount-title"
  }, title), isNumber(totalCount) ? React.createElement(CompactCount, {
    className: "HeaderWithCount-titleCount",
    count: totalCount
  }) : null);
}

export default HeaderWithCount;
//# sourceMappingURL=HeaderWithCount.js.map