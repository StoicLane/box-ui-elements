function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import ArrowKeyStepper from '@box/react-virtualized/dist/es/ArrowKeyStepper';
import AutoSizer from '@box/react-virtualized/dist/es/AutoSizer';
import getProp from 'lodash/get';
import GridView from '../../components/grid-view/GridView';
import { focus } from '../../utils/dom';
import ItemGridCell from './ItemGridCell';

var ItemGrid = function ItemGrid(_ref) {
  var currentCollection = _ref.currentCollection,
      gridColumnCount = _ref.gridColumnCount,
      onItemSelect = _ref.onItemSelect,
      rootElement = _ref.rootElement,
      rootId = _ref.rootId,
      selected = _ref.selected,
      rest = _objectWithoutProperties(_ref, ["currentCollection", "gridColumnCount", "onItemSelect", "rootElement", "rootId", "selected"]);

  var items = getProp(currentCollection, 'items', []);
  var gridRowCount = Math.ceil(items.length / gridColumnCount);
  var linearIndex = selected ? items.findIndex(function (item) {
    return (item === null || item === void 0 ? void 0 : item.id) === (selected === null || selected === void 0 ? void 0 : selected.id);
  }) : 0;
  var selectedRowIndex = Math.floor(linearIndex / gridColumnCount);
  var selectedColumnIndex = linearIndex % gridColumnCount;
  /**
   * Renderer used for cards in grid view
   *
   * @param {number} slotIndex - index of item in currentCollection.items
   * @return {React.Element} - Element to display in card
   */

  var slotRenderer = function slotRenderer(slotIndex) {
    var item = getProp(currentCollection, "items[".concat(slotIndex, "]"));
    return item ? React.createElement(ItemGridCell, _extends({
      item: item,
      onItemSelect: onItemSelect,
      rootId: rootId
    }, rest)) : null;
  };
  /**
   * Update the currently selected item when navigating with keyboard
   * @param {number} row - row index of selected item
   * @param {number} column - column index of selected item
   * @return {void}
   */


  var onCellSelect = function onCellSelect(row, column) {
    var index = row * gridColumnCount + column;
    var item = getProp(currentCollection, "items[".concat(index, "]"));

    if (item) {
      onItemSelect(item, function () {
        focus(rootElement, '.bdl-GridViewSlot-content--selected .be-item-name .be-item-label', false);
      });
    }
  };

  return React.createElement(AutoSizer, null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return React.createElement(ArrowKeyStepper, {
      columnCount: gridColumnCount,
      mode: "cells",
      isControlled: true,
      scrollToRow: selectedRowIndex,
      scrollToColumn: selectedColumnIndex,
      onScrollToChange: function onScrollToChange(_ref3) {
        var scrollToRow = _ref3.scrollToRow,
            scrollToColumn = _ref3.scrollToColumn;
        onCellSelect(scrollToRow, scrollToColumn);
      },
      rowCount: gridRowCount
    }, function (_ref4) {
      var scrollToRow = _ref4.scrollToRow;
      return React.createElement(GridView, {
        columnCount: gridColumnCount,
        currentCollection: currentCollection,
        height: height,
        scrollToRow: scrollToRow,
        slotRenderer: slotRenderer,
        width: width
      });
    });
  });
};

export default ItemGrid;
//# sourceMappingURL=ItemGrid.js.map