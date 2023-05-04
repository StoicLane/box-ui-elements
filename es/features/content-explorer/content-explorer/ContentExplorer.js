function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';
import ContentExplorerHeaderActions from './ContentExplorerHeaderActions';
import ContentExplorerEmptyState from './ContentExplorerEmptyState';
import ContentExplorerActionButtons from './ContentExplorerActionButtons';
import ContentExplorerSelectAll from './ContentExplorerSelectAll';
import ContentExplorerIncludeSubfolders from './ContentExplorerIncludeSubfolders';
import ItemList from '../item-list';
import { ContentExplorerModePropType, FoldersPathPropType, ItemsPropType } from '../prop-types';
import ContentExplorerModes from '../modes';
import { TYPE_FOLDER } from '../../../constants';
import './ContentExplorer.scss';

var ContentExplorer =
/*#__PURE__*/
function (_Component) {
  _inherits(ContentExplorer, _Component);

  function ContentExplorer(props) {
    var _this;

    _classCallCheck(this, ContentExplorer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentExplorer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "areAllItemsSelected", function () {
      var items = _this.props.items;
      var selectedItems = _this.state.selectedItems;
      return items.length > 0 && items.every(function (item) {
        return selectedItems[item.id];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isLoadingItems", function () {
      var _this$props, _this$props$items, _this$props$items$;

      return (_this$props = _this.props) === null || _this$props === void 0 ? void 0 : (_this$props$items = _this$props.items) === null || _this$props$items === void 0 ? void 0 : (_this$props$items$ = _this$props$items[0]) === null || _this$props$items$ === void 0 ? void 0 : _this$props$items$.isLoading;
    });

    _defineProperty(_assertThisInitialized(_this), "doAncestersContainClassname", function (node, className, limit) {
      var nodeOfInterest = node;
      var counter = 0;

      while (nodeOfInterest.parentNode && counter < limit) {
        // Done traversing (Document node does not have classnames)
        if (!nodeOfInterest.parentNode.className) {
          break;
        }

        if (nodeOfInterest.parentNode.className.includes(className)) {
          return true;
        }

        nodeOfInterest = nodeOfInterest.parentNode;
        counter += 1;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "shouldDeselectItems", function () {
      var contentExplorerMode = _this.props.contentExplorerMode;
      return (// always deselect when not in multi select mode
        contentExplorerMode !== ContentExplorerModes.MULTI_SELECT
      );
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (event) {
      var isInside = _this.domNode && _this.domNode.contains(event.target) || _this.domNode === event.target;

      if (!isInside && _this.shouldDeselectItems()) {
        _this.deselectItems();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleContentExplorerClick", function () {
      if (_this.shouldDeselectItems()) {
        _this.deselectItems();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "enterFolder", function (enteredFolder) {
      var _this$props2 = _this.props,
          contentExplorerMode = _this$props2.contentExplorerMode,
          onEnterFolder = _this$props2.onEnterFolder,
          onFoldersPathUpdate = _this$props2.onFoldersPathUpdate;
      var foldersPath = _this.state.foldersPath;
      var folderIndex = foldersPath.findIndex(function (folder) {
        return folder.id === enteredFolder.id;
      });
      var newFoldersPath = foldersPath.slice();

      if (folderIndex === -1) {
        // Append folder to the path if it's not already in the folders path
        newFoldersPath = newFoldersPath.concat([_objectSpread({}, enteredFolder)]);
      } else {
        // Otherwise, remove all folders that came after the entered folder
        newFoldersPath = newFoldersPath.slice(0, folderIndex + 1);
      }

      var newState = {
        foldersPath: newFoldersPath
      };

      if (contentExplorerMode !== ContentExplorerModes.MULTI_SELECT) {
        newState.selectedItems = {};
      }

      _this.setState(newState);

      if (onFoldersPathUpdate) {
        onFoldersPathUpdate(newFoldersPath);
      }

      onEnterFolder(enteredFolder, newFoldersPath);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFoldersPathUpdated", function (newFoldersPath) {
      var onFoldersPathUpdate = _this.props.onFoldersPathUpdate;

      _this.setState({
        foldersPath: newFoldersPath
      });

      if (onFoldersPathUpdate) {
        onFoldersPathUpdate(newFoldersPath);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchSubmit", function (searchQuery) {
      var onSearchSubmit = _this.props.onSearchSubmit;

      _this.setState({
        isInSearchMode: true
      });

      onSearchSubmit(searchQuery);
    });

    _defineProperty(_assertThisInitialized(_this), "handleExitSearch", function (folderBeforeSearch) {
      var onExitSearch = _this.props.onExitSearch;

      _this.setState({
        isInSearchMode: false
      });

      onExitSearch(folderBeforeSearch);
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function (_ref) {
      var event = _ref.event,
          index = _ref.index;
      var _this$props3 = _this.props,
          contentExplorerMode = _this$props3.contentExplorerMode,
          items = _this$props3.items,
          onSelectItem = _this$props3.onSelectItem,
          onSelectedItemsUpdate = _this$props3.onSelectedItemsUpdate;
      var selectedItems = _this.state.selectedItems;
      var item = items[index];

      if (item.isDisabled || item.isLoading || item.isActionDisabled) {
        return;
      } // Prevent the event from bubbling up (so our content explorer click handler doesn't fire)


      event.stopPropagation();
      var newSelectedItems = {};

      if (contentExplorerMode === ContentExplorerModes.MULTI_SELECT) {
        newSelectedItems = _this.toggleSelectedItem(selectedItems, item);
      } else {
        newSelectedItems[item.id] = item;
      }

      _this.setState({
        selectedItems: newSelectedItems
      });

      if (onSelectedItemsUpdate) {
        onSelectedItemsUpdate(newSelectedItems);
      }

      if (onSelectItem) {
        onSelectItem(item, index);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemDoubleClick", function (_ref2) {
      var index = _ref2.index;
      var _this$props4 = _this.props,
          items = _this$props4.items,
          onChooseItems = _this$props4.onChooseItems;
      var item = items[index];

      if (item.isDisabled || item.isLoading) {
        return;
      }

      if (item.type === TYPE_FOLDER) {
        _this.enterFolder(item);
      } else if (!item.isActionDisabled) {
        onChooseItems([item]);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemNameClick", function (event, index) {
      var items = _this.props.items;
      var item = items[index];

      if (item.isDisabled || item.isLoading) {
        return;
      }

      if (item.type !== TYPE_FOLDER) {
        return;
      } // Prevent the event from bubbling (so our row click handler doesn't fire)


      event.preventDefault();
      event.stopPropagation();

      _this.enterFolder(item);
    });

    _defineProperty(_assertThisInitialized(_this), "toggleSelectedItem", function (selectedItems, item) {
      var result = _objectSpread({}, selectedItems);

      if (result[item.id]) {
        delete result[item.id];
      } else {
        result[item.id] = item;
      }

      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "selectAll", function () {
      var items = _this.props.items;
      var selectedItems = _this.state.selectedItems;

      var result = _objectSpread({}, selectedItems);

      items.forEach(function (item) {
        if (!result[item.id]) {
          result[item.id] = item;
        }
      });
      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "unselectAll", function () {
      var items = _this.props.items;
      var selectedItems = _this.state.selectedItems;

      var result = _objectSpread({}, selectedItems);

      items.forEach(function (item) {
        if (result[item.id]) {
          delete result[item.id];
        }
      });
      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectAllClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var onSelectedItemsUpdate, isSelectAllChecked, newSelectedItems;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onSelectedItemsUpdate = _this.props.onSelectedItemsUpdate;

              if (!_this.isLoadingItems()) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              isSelectAllChecked = _this.state.isSelectAllChecked;
              newSelectedItems = isSelectAllChecked ? _this.unselectAll() : _this.selectAll();

              _this.setState({
                selectedItems: newSelectedItems,
                isSelectAllChecked: !isSelectAllChecked
              });

              if (onSelectedItemsUpdate) {
                onSelectedItemsUpdate(newSelectedItems);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "renderItemListEmptyState", function () {
      var _this$state = _this.state,
          foldersPath = _this$state.foldersPath,
          isInSearchMode = _this$state.isInSearchMode;
      var isViewingSearchResults = isInSearchMode && foldersPath.length === 1;
      return React.createElement(ContentExplorerEmptyState, {
        isSearch: isViewingSearchResults
      });
    });

    _this.state = {
      selectedItems: props.initialSelectedItems || {},
      foldersPath: props.initialFoldersPath,
      isInSearchMode: false,
      isSelectAllChecked: false
    };
    return _this;
  }

  _createClass(ContentExplorer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref4) {
      var prevInitialFoldersPath = _ref4.initialFoldersPath;
      var _this$props5 = this.props,
          initialFoldersPath = _this$props5.initialFoldersPath,
          isSelectAllAllowed = _this$props5.isSelectAllAllowed;
      var isSelectAllChecked = this.state.isSelectAllChecked;

      if (prevInitialFoldersPath !== initialFoldersPath) {
        this.handleFoldersPathUpdated(initialFoldersPath);
      }

      if (!this.isLoadingItems() && isSelectAllAllowed) {
        var areAllItemsSelected = this.areAllItemsSelected();

        if (areAllItemsSelected !== isSelectAllChecked) {
          this.setState({
            isSelectAllChecked: areAllItemsSelected
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: "getCurrentFolder",
    value: function getCurrentFolder() {
      var foldersPath = this.state.foldersPath;
      return foldersPath[foldersPath.length - 1];
    }
    /**
     * Traverse the hirerachy up to the limit to see if any of the parent has the className
     */

  }, {
    key: "deselectItems",
    value: function deselectItems() {
      var onSelectedItemsUpdate = this.props.onSelectedItemsUpdate;
      this.setState({
        selectedItems: {}
      });

      if (onSelectedItemsUpdate) {
        onSelectedItemsUpdate({});
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props6 = this.props,
          actionButtonsProps = _this$props6.actionButtonsProps,
          additionalColumns = _this$props6.additionalColumns,
          _this$props6$isNoSele = _this$props6.isNoSelectionAllowed,
          isNoSelectionAllowed = _this$props6$isNoSele === void 0 ? false : _this$props6$isNoSele,
          breadcrumbProps = _this$props6.breadcrumbProps,
          cancelButtonProps = _this$props6.cancelButtonProps,
          chooseButtonProps = _this$props6.chooseButtonProps,
          chooseButtonText = _this$props6.chooseButtonText,
          className = _this$props6.className,
          contentExplorerMode = _this$props6.contentExplorerMode,
          customInput = _this$props6.customInput,
          hasFolderTreeBreadcrumbs = _this$props6.hasFolderTreeBreadcrumbs,
          headerActionsAccessory = _this$props6.headerActionsAccessory,
          onChooseItems = _this$props6.onChooseItems,
          onMoveItem = _this$props6.onMoveItem,
          onCopyItem = _this$props6.onCopyItem,
          onCancelButtonClick = _this$props6.onCancelButtonClick,
          onCreateNewFolderButtonClick = _this$props6.onCreateNewFolderButtonClick,
          onSelectedClick = _this$props6.onSelectedClick,
          onViewSelectedClick = _this$props6.onViewSelectedClick,
          showCreateNewFolderButton = _this$props6.showCreateNewFolderButton,
          isChooseButtonLoading = _this$props6.isChooseButtonLoading,
          isCopyButtonLoading = _this$props6.isCopyButtonLoading,
          isCreateNewFolderAllowed = _this$props6.isCreateNewFolderAllowed,
          isMoveButtonLoading = _this$props6.isMoveButtonLoading,
          _this$props6$isRespon = _this$props6.isResponsive,
          isResponsive = _this$props6$isRespon === void 0 ? false : _this$props6$isRespon,
          isSelectAllAllowed = _this$props6.isSelectAllAllowed,
          items = _this$props6.items,
          numItemsPerPage = _this$props6.numItemsPerPage,
          numTotalItems = _this$props6.numTotalItems,
          onLoadMoreItems = _this$props6.onLoadMoreItems,
          includeSubfoldersProps = _this$props6.includeSubfoldersProps,
          itemIconRenderer = _this$props6.itemIconRenderer,
          itemNameLinkRenderer = _this$props6.itemNameLinkRenderer,
          itemButtonRenderer = _this$props6.itemButtonRenderer,
          itemRowHeight = _this$props6.itemRowHeight,
          itemRowRenderer = _this$props6.itemRowRenderer,
          listHeaderHeight = _this$props6.listHeaderHeight,
          listHeaderRenderer = _this$props6.listHeaderRenderer,
          listWidth = _this$props6.listWidth,
          listHeight = _this$props6.listHeight,
          searchInputProps = _this$props6.searchInputProps,
          rest = _objectWithoutProperties(_this$props6, ["actionButtonsProps", "additionalColumns", "isNoSelectionAllowed", "breadcrumbProps", "cancelButtonProps", "chooseButtonProps", "chooseButtonText", "className", "contentExplorerMode", "customInput", "hasFolderTreeBreadcrumbs", "headerActionsAccessory", "onChooseItems", "onMoveItem", "onCopyItem", "onCancelButtonClick", "onCreateNewFolderButtonClick", "onSelectedClick", "onViewSelectedClick", "showCreateNewFolderButton", "isChooseButtonLoading", "isCopyButtonLoading", "isCreateNewFolderAllowed", "isMoveButtonLoading", "isResponsive", "isSelectAllAllowed", "items", "numItemsPerPage", "numTotalItems", "onLoadMoreItems", "includeSubfoldersProps", "itemIconRenderer", "itemNameLinkRenderer", "itemButtonRenderer", "itemRowHeight", "itemRowRenderer", "listHeaderHeight", "listHeaderRenderer", "listWidth", "listHeight", "searchInputProps"]);

      var _this$state2 = this.state,
          isInSearchMode = _this$state2.isInSearchMode,
          foldersPath = _this$state2.foldersPath,
          selectedItems = _this$state2.selectedItems,
          isSelectAllChecked = _this$state2.isSelectAllChecked;
      var isViewingSearchResults = isInSearchMode && foldersPath.length === 1;
      var currentFolder = this.getCurrentFolder();
      var contentExplorerProps = omit(rest, ['initialFoldersPath', 'onEnterFolder', 'onSelectItem', 'onSearchSubmit', 'onExitSearch', 'initialSelectedItems', 'onFoldersPathUpdate', 'onSelectedItemsUpdate']);
      var canIncludeSubfolders = !!includeSubfoldersProps;
      var hasSubheader = canIncludeSubfolders || isSelectAllAllowed;
      var selectedItemsIds = Object.keys(selectedItems);
      var areActionButtonsDisabled; // NOTE: it almost feels like this whole section should be inside the
      // ContentExplorerActionButtons instead. There's a lot of implicit knowledge
      // of what the action buttons are and what they should be doing.

      if (contentExplorerMode === ContentExplorerModes.MULTI_SELECT) {
        // NOTE: only expecting to have 1 (choose) button so as long as something
        // is selected and that item's isActionDisabled is false, we enable the action button
        areActionButtonsDisabled = selectedItemsIds.length === 0 && !isNoSelectionAllowed || selectedItemsIds.length === 1 && selectedItems[selectedItemsIds[0]].isActionDisabled;
      } else if (isViewingSearchResults || contentExplorerMode === ContentExplorerModes.SELECT_FILE) {
        // Buttons are only enabled when an item is selected
        // When viewing search results, there is no "current folder"
        // When selecting a file, the file can only selected from the list
        areActionButtonsDisabled = selectedItemsIds.length === 0 || selectedItems[selectedItemsIds[0]].isActionDisabled;
      } else {
        // Buttons are enabled using the selected item or the current folder if no item is selected
        areActionButtonsDisabled = selectedItemsIds.length > 0 ? selectedItems[selectedItemsIds[0]].isActionDisabled : currentFolder.isActionDisabled;
      }

      return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        React.createElement("div", _extends({
          className: classNames('content-explorer', className, {
            'bdl-ContentExplorer--responsive': isResponsive
          }),
          "data-testid": "content-explorer",
          onClick: this.handleContentExplorerClick,
          ref: function ref(_ref5) {
            _this2.domNode = _ref5;
          }
        }, contentExplorerProps), React.createElement(ContentExplorerHeaderActions, {
          breadcrumbProps: breadcrumbProps,
          contentExplorerMode: contentExplorerMode,
          customInput: customInput,
          foldersPath: foldersPath,
          hasFolderTreeBreadcrumbs: hasFolderTreeBreadcrumbs,
          isCreateNewFolderAllowed: isCreateNewFolderAllowed,
          onCreateNewFolderButtonClick: onCreateNewFolderButtonClick,
          onFoldersPathUpdated: this.handleFoldersPathUpdated,
          onEnterFolder: this.enterFolder,
          onExitSearch: this.handleExitSearch,
          onSearchSubmit: this.handleSearchSubmit,
          numTotalItems: numTotalItems,
          searchInputProps: searchInputProps,
          showCreateNewFolderButton: showCreateNewFolderButton
        }, headerActionsAccessory), hasSubheader && React.createElement("div", {
          className: "bdl-ContentExplorer-subheader"
        }, canIncludeSubfolders && React.createElement(ContentExplorerIncludeSubfolders, includeSubfoldersProps), isSelectAllAllowed && React.createElement(ContentExplorerSelectAll, {
          handleSelectAllClick: this.handleSelectAllClick,
          isLabelHidden: canIncludeSubfolders,
          isSelectAllChecked: isSelectAllChecked,
          numTotalItems: numTotalItems
        })), React.createElement(ItemList, {
          additionalColumns: additionalColumns,
          contentExplorerMode: contentExplorerMode,
          headerHeight: listHeaderHeight,
          headerRenderer: listHeaderRenderer,
          height: listHeight,
          isResponsive: isResponsive,
          itemButtonRenderer: itemButtonRenderer,
          itemIconRenderer: itemIconRenderer,
          itemNameLinkRenderer: itemNameLinkRenderer,
          items: items,
          itemRowRenderer: itemRowRenderer,
          noItemsRenderer: this.renderItemListEmptyState,
          numItemsPerPage: numItemsPerPage,
          numTotalItems: numTotalItems,
          onItemClick: this.handleItemClick,
          onItemDoubleClick: this.handleItemDoubleClick,
          onItemNameClick: this.handleItemNameClick,
          onLoadMoreItems: onLoadMoreItems,
          rowHeight: itemRowHeight,
          selectedItems: selectedItems,
          width: listWidth
        }), React.createElement(ContentExplorerActionButtons, {
          actionButtonsProps: actionButtonsProps,
          areButtonsDisabled: areActionButtonsDisabled,
          cancelButtonProps: cancelButtonProps,
          canIncludeSubfolders: canIncludeSubfolders,
          chooseButtonProps: chooseButtonProps,
          chooseButtonText: chooseButtonText,
          contentExplorerMode: contentExplorerMode,
          currentFolder: currentFolder,
          isChooseButtonLoading: isChooseButtonLoading,
          isCopyButtonLoading: isCopyButtonLoading,
          isMoveButtonLoading: isMoveButtonLoading,
          isResponsive: isResponsive,
          isSelectAllAllowed: isSelectAllAllowed,
          onCancelClick: onCancelButtonClick,
          onChooseClick: onChooseItems,
          onCopyClick: onCopyItem,
          onFoldersPathUpdated: this.handleFoldersPathUpdated,
          onSelectedClick: onSelectedClick,
          onMoveClick: onMoveItem,
          onViewSelectedClick: onViewSelectedClick,
          selectedItems: selectedItems,
          isNoSelectionAllowed: isNoSelectionAllowed
        }))
      );
    }
  }]);

  return ContentExplorer;
}(Component);

_defineProperty(ContentExplorer, "propTypes", {
  /** Props for the action buttons container */
  actionButtonsProps: PropTypes.object,

  /**
   * Extra columns displayed in the folders table after folder name column
   * Each column has to be a Column element
   */
  additionalColumns: PropTypes.arrayOf(PropTypes.element),

  /**  Allow users to choose no selections in MULTI_SELECT mode, defaults to false  */
  isNoSelectionAllowed: PropTypes.bool,

  /** Props for breadcrumbs */
  breadcrumbProps: PropTypes.object,

  /** Props for the cancel button */
  cancelButtonProps: PropTypes.object,

  /** Props for the choose button */
  chooseButtonProps: PropTypes.object,

  /** Custom text for the choose button */
  chooseButtonText: PropTypes.node,

  /** Adds class name. */
  className: PropTypes.string,

  /** Configures the content explorer based on the user's intended action (ex. select file or move/copy) */
  contentExplorerMode: ContentExplorerModePropType.isRequired,

  /** Props that contains the custom search input. Is rendered in header actions */
  customInput: PropTypes.func,

  /** Whether the user can see the breadcrumbs represented with the folder tree button */
  hasFolderTreeBreadcrumbs: PropTypes.bool,

  /** Any extra items in the header to the right of the search input (and new folder button) */
  headerActionsAccessory: PropTypes.node,

  /** Props for the include subfolders toggle */
  includeSubfoldersProps: PropTypes.object,

  /** Initial path of folders. The last folder in the array is the current folder. */
  initialFoldersPath: FoldersPathPropType.isRequired,

  /** Initial items that will show up as selected */
  initialSelectedItems: PropTypes.object,

  /** Whether to use the responsive version */
  isResponsive: PropTypes.bool,

  /**
   * Called when the current folder changes
   *
   * @param {Object} enteredFolder
   * @param {Array} newFoldersPath
   */
  onEnterFolder: PropTypes.func.isRequired,

  /** Called when the folders path is updated
   *
   * @param {Array} newFoldersPath
   */
  onFoldersPathUpdate: PropTypes.func,

  /** Called whenever the selected items list changes
   *
   * @param {Object} selectedItems
   */
  onSelectedItemsUpdate: PropTypes.func,

  /**
   * Called when an item is selected
   *
   * @param {Object} selectedItem
   * @param {number} selectedItemIndex
   */
  onSelectItem: PropTypes.func,

  /**
   * Called when an item is chosen
   *
   * @param {Object[]} chosenItems
   */
  onChooseItems: PropTypes.func,

  /** Called when selected button is clicked */
  onSelectedClick: PropTypes.func,

  /** Called when the number of items selected text is clicked */
  onViewSelectedClick: PropTypes.func,

  /**
   * Called when a destination folder has been selected for moving an item to
   *
   * @param {Object} destFolder destination folder
   */
  onMoveItem: PropTypes.func,

  /**
   * Called when a destination folder has been selected for copying an item to
   *
   * @param {Object} destFolder destination folder
   */
  onCopyItem: PropTypes.func,

  /** Called when cancel button is clicked */
  onCancelButtonClick: PropTypes.func,

  /** Called when new folder button is clicked */
  onCreateNewFolderButtonClick: PropTypes.func,

  /** Whether the new folder button should be shown */
  showCreateNewFolderButton: PropTypes.bool,

  /** Whether the choose button should be shown with a loading indicator */
  isChooseButtonLoading: PropTypes.bool,

  /** Whether the copy button should be shown with a loading indicator */
  isCopyButtonLoading: PropTypes.bool,

  /** Whether the user has permission to create a new folder */
  isCreateNewFolderAllowed: PropTypes.bool,

  /** Whether the user can see select all checkbox */
  isSelectAllAllowed: PropTypes.bool,

  /** Whether the move button should be shown with a loading indicator */
  isMoveButtonLoading: PropTypes.bool,

  /**
   * Called when a search query is submitted.
   *
   * @param {string} searchQuery
   */
  onSearchSubmit: PropTypes.func.isRequired,

  /**
   * Called when search mode is exited. An updated items list should now be passed in to display the user's file tree.
   *
   * @param {Object} folderBeforeSearch the previous folder object before entering search mode
   */
  onExitSearch: PropTypes.func.isRequired,

  /** List of items to display */
  items: ItemsPropType.isRequired,

  /** Number of items to load per page as the user scrolls */
  numItemsPerPage: PropTypes.number,

  /** Total number of items across all pages */
  numTotalItems: PropTypes.number,

  /** Called to load more items */
  onLoadMoreItems: PropTypes.func,

  /** Used to render item icons in the list. Overrides the default icons. */
  itemIconRenderer: PropTypes.func,

  /** Used to render item name links in the list. Overrides the default links. */
  itemNameLinkRenderer: PropTypes.func,

  /** Used to render item buttons in the list. Overrides the default buttons. */
  itemButtonRenderer: PropTypes.func,

  /** Height of an item row */
  itemRowHeight: PropTypes.number,

  /** Used to render the row element for items on the list. Allows row customizations such as adding tooltips, etc. */
  itemRowRenderer: PropTypes.func,

  /** Height of the item list header, defaults to 0, which makes header not visible */
  listHeaderHeight: PropTypes.number,

  /** Used to render the header row on the item list */
  listHeaderRenderer: PropTypes.func,

  /** Width of the item list */
  listWidth: PropTypes.number.isRequired,

  /** Height of the item list */
  listHeight: PropTypes.number.isRequired,

  /** Props for the search input */
  searchInputProps: PropTypes.object
});

_defineProperty(ContentExplorer, "defaultProps", {
  actionButtonsProps: {},
  cancelButtonProps: {},
  chooseButtonProps: {},
  className: '',
  searchInputProps: {}
});

export default ContentExplorer;
//# sourceMappingURL=ContentExplorer.js.map