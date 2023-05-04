function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import getProp from 'lodash/get';
import AutoSizer from '@box/react-virtualized/dist/commonjs/AutoSizer';
import Column from '@box/react-virtualized/dist/commonjs/Table/Column';
import Table from '@box/react-virtualized/dist/commonjs/Table';
import defaultTableRowRenderer from '@box/react-virtualized/dist/commonjs/Table/defaultRowRenderer';
import '@box/react-virtualized/styles.css';
import { withInfiniteLoader } from '../../../components/react-virtualized-helpers';
import { ContentExplorerModePropType, ItemsPropType, ItemsMapPropType } from '../prop-types';
import ItemListIcon from './ItemListIcon';
import ItemListLoadingPlaceholder from './ItemListLoadingPlaceholder';
import ItemListName from './ItemListName';
import ItemListButton from './ItemListButton';
import './ItemList.scss';
var TABLE_CELL_CLASS = 'table-cell';
var InfiniteLoaderTable = withInfiniteLoader(Table);
var DEFAULT_ROW_HEIGHT = 40;

var withAutoSizer = function withAutoSizer(WrappedComponent) {
  return function (props) {
    return React.createElement("div", {
      style: {
        flex: 1
      }
    }, React.createElement(AutoSizer, null, function (_ref) {
      var w = _ref.width,
          h = _ref.height;
      return React.createElement(WrappedComponent, _extends({}, props, {
        width: w,
        height: h
      }));
    }));
  };
};

var TableResponsive = withAutoSizer(Table);

var itemIconCellRenderer = function itemIconCellRenderer(rendererParams) {
  var _rendererParams$rowDa = rendererParams.rowData,
      type = _rendererParams$rowDa.type,
      extension = _rendererParams$rowDa.extension,
      hasCollaborations = _rendererParams$rowDa.hasCollaborations,
      isExternallyOwned = _rendererParams$rowDa.isExternallyOwned,
      itemIconRenderer = rendererParams.columnData.itemIconRenderer;
  return React.createElement("div", {
    className: TABLE_CELL_CLASS
  }, itemIconRenderer ? itemIconRenderer(rendererParams) : React.createElement(ItemListIcon, {
    type: type,
    extension: extension,
    hasCollaborations: hasCollaborations,
    isExternallyOwned: isExternallyOwned
  }));
};

var isItemSelected = function isItemSelected(itemId, selectedItems) {
  return selectedItems[itemId] !== undefined;
};

var itemNameCellRenderer = function itemNameCellRenderer(rendererParams) {
  var rowIndex = rendererParams.rowIndex,
      _rendererParams$rowDa2 = rendererParams.rowData,
      id = _rendererParams$rowDa2.id,
      type = _rendererParams$rowDa2.type,
      name = _rendererParams$rowDa2.name,
      label = _rendererParams$rowDa2.label,
      _rendererParams$colum = rendererParams.columnData,
      selectedItems = _rendererParams$colum.selectedItems,
      onItemNameClick = _rendererParams$colum.onItemNameClick,
      itemNameLinkRenderer = _rendererParams$colum.itemNameLinkRenderer; // loading placeholder may not have name and ItemListName requires name

  return name && React.createElement("div", {
    className: TABLE_CELL_CLASS
  }, React.createElement(ItemListName, {
    itemId: id,
    type: type,
    name: name,
    label: label,
    isSelected: isItemSelected(id, selectedItems),
    onClick: function onClick(event) {
      return onItemNameClick(event, rowIndex);
    },
    linkRenderer: itemNameLinkRenderer
  }));
};

var renderItemListButton = function renderItemListButton(contentExplorerMode, id, isActionDisabled, isDisabled, name, selectedItems) {
  return name && React.createElement(ItemListButton, {
    contentExplorerMode: contentExplorerMode,
    id: id,
    isDisabled: isActionDisabled,
    isSelected: isItemSelected(id, selectedItems),
    name: name
  });
};

var itemButtonCellRenderer = function itemButtonCellRenderer(rendererParams) {
  var _rendererParams$colum2 = rendererParams.columnData,
      contentExplorerMode = _rendererParams$colum2.contentExplorerMode,
      itemButtonRenderer = _rendererParams$colum2.itemButtonRenderer,
      selectedItems = _rendererParams$colum2.selectedItems,
      _rendererParams$rowDa3 = rendererParams.rowData,
      id = _rendererParams$rowDa3.id,
      isActionDisabled = _rendererParams$rowDa3.isActionDisabled,
      isDisabled = _rendererParams$rowDa3.isDisabled,
      name = _rendererParams$rowDa3.name;
  return !isDisabled && React.createElement("div", {
    className: TABLE_CELL_CLASS
  }, itemButtonRenderer ? itemButtonRenderer(rendererParams) : renderItemListButton(contentExplorerMode, id, isActionDisabled, isDisabled, name, selectedItems));
};

var itemLoadingPlaceholderRenderer = function itemLoadingPlaceholderRenderer(rendererParams) {
  var loadingPlaceholderColumnWidths = rendererParams.loadingPlaceholderColumnWidths,
      columnIndex = rendererParams.columnIndex;
  return React.createElement("div", {
    className: TABLE_CELL_CLASS
  }, React.createElement(ItemListLoadingPlaceholder, {
    width: loadingPlaceholderColumnWidths && loadingPlaceholderColumnWidths[columnIndex]
  }));
};

var ItemList = function ItemList(_ref2) {
  var additionalColumns = _ref2.additionalColumns,
      contentExplorerMode = _ref2.contentExplorerMode,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      _ref2$isResponsive = _ref2.isResponsive,
      isResponsive = _ref2$isResponsive === void 0 ? false : _ref2$isResponsive,
      items = _ref2.items,
      numItemsPerPage = _ref2.numItemsPerPage,
      numTotalItems = _ref2.numTotalItems,
      _ref2$selectedItems = _ref2.selectedItems,
      selectedItems = _ref2$selectedItems === void 0 ? {} : _ref2$selectedItems,
      onItemClick = _ref2.onItemClick,
      onItemDoubleClick = _ref2.onItemDoubleClick,
      onItemNameClick = _ref2.onItemNameClick,
      onLoadMoreItems = _ref2.onLoadMoreItems,
      headerHeight = _ref2.headerHeight,
      headerRenderer = _ref2.headerRenderer,
      itemIconRenderer = _ref2.itemIconRenderer,
      itemNameLinkRenderer = _ref2.itemNameLinkRenderer,
      itemButtonRenderer = _ref2.itemButtonRenderer,
      _ref2$itemRowRenderer = _ref2.itemRowRenderer,
      itemRowRenderer = _ref2$itemRowRenderer === void 0 ? defaultTableRowRenderer : _ref2$itemRowRenderer,
      noItemsRenderer = _ref2.noItemsRenderer,
      width = _ref2.width,
      height = _ref2.height,
      _ref2$rowHeight = _ref2.rowHeight,
      rowHeight = _ref2$rowHeight === void 0 ? DEFAULT_ROW_HEIGHT : _ref2$rowHeight;

  var getRow = function getRow(_ref3) {
    var index = _ref3.index;
    return items[index];
  };

  var getRowClassNames = function getRowClassNames(index, item) {
    var result = index === -1 ? 'table-header' : 'table-row';

    if (isItemSelected(item.id, selectedItems)) {
      result = classNames('is-selected', result);
    }

    if (item && (item.isDisabled || item.isLoading)) {
      result = classNames('disabled', result);
    }

    return result;
  };

  var renderRow = function renderRow(rendererParams) {
    var index = rendererParams.index,
        key = rendererParams.key,
        style = rendererParams.style,
        rowClassName = rendererParams.className,
        columns = rendererParams.columns;
    var item = items[index];
    var itemRowClassname = classNames(rowClassName, getRowClassNames(index, item));
    var testId = getProp(rendererParams, 'rowData.id', '');

    if (item.isLoading) {
      return React.createElement("div", {
        key: key,
        style: style,
        className: itemRowClassname,
        role: "row"
      }, columns.map(function (column, columnIndex) {
        return React.createElement("div", {
          key: columnIndex,
          className: column.props.className,
          style: column.props.style,
          role: "gridcell"
        }, itemLoadingPlaceholderRenderer({
          item: item,
          columnIndex: columnIndex
        }));
      }));
    }

    var defaultRow = itemRowRenderer(_objectSpread({}, rendererParams, {
      className: itemRowClassname
    }));
    return React.cloneElement(defaultRow, {
      'data-testid': "item-row-".concat(testId)
    });
  };

  var TableComponent = isResponsive ? TableResponsive : Table;
  var tableProps = {};

  if (onLoadMoreItems) {
    TableComponent = InfiniteLoaderTable;
    tableProps.infiniteLoaderProps = {
      isRowLoaded: getRow,
      loadMoreRows: onLoadMoreItems,
      minimumBatchSize: numItemsPerPage,
      rowCount: numTotalItems,
      threshold: numItemsPerPage
    };
  }

  if (!noItemsRenderer || items.length > 0) {
    tableProps.headerHeight = headerHeight;
    tableProps.headerRowRenderer = headerRenderer;
  }

  return React.createElement("div", {
    className: classNames('content-explorer-item-list table', className, {
      'bdl-ContentExplorerItemList--responsive': isResponsive
    })
  }, React.createElement(TableComponent, _extends({
    gridClassName: "table-body",
    headerClassName: "table-header-item",
    width: width,
    height: height,
    rowHeight: rowHeight,
    rowCount: items.length,
    onRowClick: onItemClick,
    onRowDoubleClick: onItemDoubleClick,
    rowGetter: getRow,
    rowRenderer: renderRow,
    noRowsRenderer: noItemsRenderer
  }, tableProps), React.createElement(Column, {
    className: "item-list-icon-col",
    cellRenderer: itemIconCellRenderer,
    columnData: {
      itemIconRenderer: itemIconRenderer
    },
    dataKey: "icon",
    width: 32
  }), React.createElement(Column, {
    className: "item-list-name-col",
    cellRenderer: itemNameCellRenderer,
    columnData: {
      selectedItems: selectedItems,
      onItemNameClick: onItemNameClick,
      itemNameLinkRenderer: itemNameLinkRenderer
    },
    dataKey: "name",
    width: 0,
    flexGrow: 1,
    flexShrink: 0
  }), additionalColumns, React.createElement(Column, {
    className: "item-list-button-col",
    cellRenderer: itemButtonCellRenderer,
    columnData: {
      contentExplorerMode: contentExplorerMode,
      itemButtonRenderer: itemButtonRenderer,
      selectedItems: selectedItems
    },
    dataKey: "button",
    width: 30
  })));
};

ItemList.displayName = 'ItemList';
ItemList.propTypes = {
  additionalColumns: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  contentExplorerMode: ContentExplorerModePropType.isRequired,
  isResponsive: PropTypes.bool,
  items: ItemsPropType.isRequired,
  numItemsPerPage: PropTypes.number,
  numTotalItems: PropTypes.number,
  selectedItems: ItemsMapPropType.isRequired,
  onItemClick: PropTypes.func,
  onItemDoubleClick: PropTypes.func,
  onItemNameClick: PropTypes.func,
  onLoadMoreItems: PropTypes.func,
  headerHeight: PropTypes.number,
  headerRenderer: PropTypes.func,
  itemIconRenderer: PropTypes.func,
  itemNameLinkRenderer: PropTypes.func,
  itemButtonRenderer: PropTypes.func,
  itemRowRenderer: PropTypes.func,
  noItemsRenderer: PropTypes.func,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  rowHeight: PropTypes.number
};
export { ItemList as ItemListBase };
export default ItemList;
//# sourceMappingURL=ItemList.js.map