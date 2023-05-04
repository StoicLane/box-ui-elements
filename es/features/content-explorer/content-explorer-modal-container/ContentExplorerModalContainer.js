function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import { BreadcrumbPropType, ContentExplorerModePropType, FoldersPathPropType, ItemsPropType } from '../prop-types';
import ContentExplorerModal from '../content-explorer-modal';
import NewFolderModal from '../new-folder-modal';

var ContentExplorerModalContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ContentExplorerModalContainer, _Component);

  function ContentExplorerModalContainer(props) {
    var _this;

    _classCallCheck(this, ContentExplorerModalContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentExplorerModalContainer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleEnterFolder", function (enteredFolder, newFoldersPath) {
      var onEnterFolder = _this.props.onEnterFolder;

      _this.setState({
        foldersPath: newFoldersPath
      });

      onEnterFolder(enteredFolder, newFoldersPath);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCreateNewFolderButtonClick", function () {
      var onNewFolderModalShown = _this.props.onNewFolderModalShown;

      _this.setState({
        isNewFolderModalOpen: true
      }, function () {
        return onNewFolderModalShown && onNewFolderModalShown();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleNewFolderModalClose", function () {
      var onNewFolderModalClosed = _this.props.onNewFolderModalClosed;

      _this.setState({
        isNewFolderModalOpen: false
      }, function () {
        return onNewFolderModalClosed && onNewFolderModalClosed();
      });
    });

    _this.state = {
      foldersPath: props.initialFoldersPath,
      isNewFolderModalOpen: false
    };
    return _this;
  }

  _createClass(ContentExplorerModalContainer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevInitialFoldersPath = _ref.initialFoldersPath;
      var initialFoldersPath = this.props.initialFoldersPath;

      if (prevInitialFoldersPath !== initialFoldersPath) {
        // Close the new folder modal when the folders path has changed
        this.setState({
          foldersPath: initialFoldersPath,
          isNewFolderModalOpen: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          modalTitle = _this$props.modalTitle,
          modalDescription = _this$props.modalDescription,
          onCreateFolderSubmit = _this$props.onCreateFolderSubmit,
          onCreateFolderInput = _this$props.onCreateFolderInput,
          isCreatingFolder = _this$props.isCreatingFolder,
          createFolderError = _this$props.createFolderError,
          initialFoldersPath = _this$props.initialFoldersPath,
          rest = _objectWithoutProperties(_this$props, ["className", "modalTitle", "modalDescription", "onCreateFolderSubmit", "onCreateFolderInput", "isCreatingFolder", "createFolderError", "initialFoldersPath"]);

      var _this$state = this.state,
          foldersPath = _this$state.foldersPath,
          isNewFolderModalOpen = _this$state.isNewFolderModalOpen;
      var currentFolder = foldersPath[foldersPath.length - 1];
      return React.createElement("div", {
        className: classNames('content-explorer-modal-container', className)
      }, React.createElement(ContentExplorerModal, _extends({
        className: isNewFolderModalOpen ? 'hidden' : '',
        title: modalTitle,
        description: modalDescription,
        initialFoldersPath: initialFoldersPath,
        isOpen: true,
        onEnterFolder: this.handleEnterFolder,
        onCreateNewFolderButtonClick: this.handleCreateNewFolderButtonClick
      }, rest)), isNewFolderModalOpen && React.createElement(NewFolderModal, {
        isOpen: true,
        parentFolderName: currentFolder.name,
        onRequestClose: this.handleNewFolderModalClose,
        onCreateFolderSubmit: onCreateFolderSubmit,
        onCreateFolderInput: onCreateFolderInput,
        isCreatingFolder: isCreatingFolder,
        createFolderError: createFolderError
      }));
    }
  }]);

  return ContentExplorerModalContainer;
}(Component);

_defineProperty(ContentExplorerModalContainer, "propTypes", {
  /**
   * Extra columns displayed in the folders table after folder name column
   * Each column has to be a Column element
   */
  additionalColumns: PropTypes.arrayOf(PropTypes.element),

  /**  Allow users to choose no selections in MULTI_SELECT mode, defaults to false */
  isNoSelectionAllowed: PropTypes.bool,

  /** Breadcrumb component options */
  breadcrumbProps: BreadcrumbPropType,

  /** Adds class name. */
  className: PropTypes.string,

  /** Whether the user can see the breadcrumbs represented with the folder tree button */
  hasFolderTreeBreadcrumbs: PropTypes.bool,

  /** Any extra items in the header to the right of the search input (and new folder button) */
  headerActionsAccessory: PropTypes.node,

  /** Title shown in the ContentExplorerModal. */
  modalTitle: PropTypes.string,

  /** Description text shown in the ContentExplorerModal. */
  modalDescription: PropTypes.string,

  /** Called when the ContentExplorerModal is closed. */
  onRequestClose: PropTypes.func.isRequired,

  /**
   * Called when the folder creation is submitted.
   *
   * @param {string} folderName
   */
  onCreateFolderSubmit: PropTypes.func,

  /**
   * Called with the latest folder name input.
   *
   * @param {string} folderName
   */
  onCreateFolderInput: PropTypes.func,

  /** Called when the NewFolderModal is shown. */
  onNewFolderModalShown: PropTypes.func,

  /** Called when the NewFolderModal is closed. */
  onNewFolderModalClosed: PropTypes.func,

  /** Called when selected button is clicked */
  onSelectedClick: PropTypes.func,

  /**
   * Called when an item is selected
   *
   * @param {Object} selectedItem
   * @param {number} selectedItemIndex
   */
  onSelectItem: PropTypes.func,

  /** Called when the number of items selected text is clicked */
  onViewSelectedClick: PropTypes.func,

  /** Folder is in the process of being created. */
  isCreatingFolder: PropTypes.bool,

  /** Whether the user can see select all checkbox */
  isSelectAllAllowed: PropTypes.bool,

  /** Message that will be shown when there was an error creating the folder. */
  createFolderError: PropTypes.string,

  /** Configures the content explorer based on the user's intended action (ex. select file or move/copy) */
  contentExplorerMode: ContentExplorerModePropType.isRequired,

  /** Props for the include subfolders toggle */
  includeSubfoldersProps: PropTypes.object,

  /** Initial path of folders. The last folder in the array is the current folder. */
  initialFoldersPath: FoldersPathPropType.isRequired,

  /** Initial items that will show up as selected */
  initialSelectedItems: PropTypes.object,

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
   * Called when items are chosen.
   *
   * @param {Object[]} chosenItems In non-multi select mode, the chosenItems will be a 1 element array contain the one chosen item
   */
  onChooseItems: PropTypes.func,

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

  /** Whether the user has permission to create a new folder */
  isCreateNewFolderAllowed: PropTypes.bool,

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

  /** Used to render the row element for items on the list */
  itemRowRenderer: PropTypes.func,

  /** Height of the item list header, defaults to 0, which makes header not visible */
  listHeaderHeight: PropTypes.number,

  /** Used to render the header row on the item list */
  listHeaderRenderer: PropTypes.func,

  /** Whether the new folder button should be shown */
  showCreateNewFolderButton: PropTypes.bool,

  /** Props for the search input */
  searchInputProps: PropTypes.object,

  /** Custom text for the choose button */
  chooseButtonText: PropTypes.node
});

_defineProperty(ContentExplorerModalContainer, "defaultProps", {
  onCreateFolderSubmit: function onCreateFolderSubmit() {}
});

export default ContentExplorerModalContainer;
//# sourceMappingURL=ContentExplorerModalContainer.js.map