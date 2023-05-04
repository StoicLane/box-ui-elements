/**
 * 
 * @file Function to render the icon table cell
 * @author Box
 */
import React from 'react';
import IconCell from './IconCell';
export default (function () {
  var dimension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  return function (_ref) {
    var rowData = _ref.rowData;
    return React.createElement("div", {
      className: "be-item-icon"
    }, React.createElement(IconCell, {
      rowData: rowData,
      dimension: dimension
    }));
  };
});
//# sourceMappingURL=iconCellRenderer.js.map