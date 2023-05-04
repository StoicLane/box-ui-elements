function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
import { Set } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { Hotkeys, HotkeyRecord } from '../hotkeys';
import messages from './messages';
import shiftSelect from './shiftSelect';
var SEARCH_TIMER_DURATION = 1000;

function makeSelectable(BaseTable) {
  var _class, _temp;

  var originalDisplayName = BaseTable.displayName || BaseTable.name || 'Table';
  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SelectableTable, _Component);

    function SelectableTable(props) {
      var _this;

      _classCallCheck(this, SelectableTable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectableTable).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "state", {
        focusedIndex: undefined
      });

      _defineProperty(_assertThisInitialized(_this), "onSelect", function (selectedItems, newFocusedIndex) {
        var onSelect = _this.props.onSelect;
        _this.previousIndex = _this.state.focusedIndex || 0;

        _this.setState({
          focusedIndex: newFocusedIndex
        });

        if (onSelect) {
          // If selectedItems were given as an Immutable Set, they should also be returned as one,
          // and vice versa if they were given as a native JS array
          onSelect(Set.isSet(_this.props.selectedItems) ? selectedItems : selectedItems.toJS());
        }
      });

      _defineProperty(_assertThisInitialized(_this), "getSharedHotkeyConfigs", function () {
        var hotkeyType = _this.props.hotkeyType;
        return [new HotkeyRecord({
          key: 'shift+x',
          description: React.createElement(FormattedMessage, messages.shiftXDescription),
          handler: function handler() {
            var focusedIndex = _this.state.focusedIndex;

            if (focusedIndex === undefined) {
              return;
            }

            _this.selectToggle(focusedIndex);
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: ['meta+a', 'ctrl+a'],
          description: React.createElement(FormattedMessage, messages.selectAllDescription),
          handler: function handler(event) {
            var data = _this.props.data;
            event.preventDefault();

            _this.onSelect(new Set(data), _this.state.focusedIndex);
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: 'esc',
          description: React.createElement(FormattedMessage, messages.deselectAllDescription),
          handler: function handler() {
            _this.onSelect(new Set(), _this.state.focusedIndex);
          },
          type: hotkeyType
        })];
      });

      _defineProperty(_assertThisInitialized(_this), "getListViewHotKeyConfigs", function () {
        var hotkeyType = _this.props.hotkeyType;
        return [new HotkeyRecord({
          key: 'down',
          description: React.createElement(FormattedMessage, messages.downDescription),
          handler: function handler(event) {
            var data = _this.props.data;
            var focusedIndex = _this.state.focusedIndex;
            event.preventDefault();
            var newFocusedIndex = focusedIndex !== undefined ? Math.min(focusedIndex + 1, data.length - 1) : 0;

            _this.setState({
              focusedIndex: newFocusedIndex
            });
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: 'up',
          description: React.createElement(FormattedMessage, messages.upDescription),
          handler: function handler(event) {
            var _this$state$focusedIn = _this.state.focusedIndex,
                focusedIndex = _this$state$focusedIn === void 0 ? 0 : _this$state$focusedIn;
            event.preventDefault();
            var newFocusedIndex = Math.max(focusedIndex - 1, 0);

            _this.setState({
              focusedIndex: newFocusedIndex
            });
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: 'shift+down',
          description: React.createElement(FormattedMessage, messages.shiftDownDescription),
          handler: function handler() {
            var data = _this.props.data;
            var focusedIndex = _this.state.focusedIndex;

            if (focusedIndex === undefined) {
              return;
            }

            var newFocusedIndex = Math.min(focusedIndex + 1, data.length - 1);

            _this.handleShiftKeyDown(newFocusedIndex, data.length - 1);
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: 'shift+up',
          description: React.createElement(FormattedMessage, messages.shiftUpDescription),
          handler: function handler() {
            var focusedIndex = _this.state.focusedIndex;

            if (focusedIndex === undefined) {
              return;
            }

            var newFocusedIndex = Math.max(focusedIndex - 1, 0);

            _this.handleShiftKeyDown(newFocusedIndex, 0);
          },
          type: hotkeyType
        })];
      });

      _defineProperty(_assertThisInitialized(_this), "getGridViewHotKeyConfigs", function () {
        var hotkeyType = _this.props.hotkeyType;
        return [new HotkeyRecord({
          key: 'right',
          description: React.createElement(FormattedMessage, messages.downDescription),
          handler: function handler(event) {
            if (_this.isTargetSlider(event)) {
              return;
            }

            var data = _this.props.data;
            var focusedIndex = _this.state.focusedIndex;
            event.preventDefault();
            var newFocusedIndex = focusedIndex !== undefined ? Math.min(focusedIndex + 1, data.length - 1) : 0;

            _this.setState({
              focusedIndex: newFocusedIndex
            });
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: 'left',
          description: React.createElement(FormattedMessage, messages.upDescription),
          handler: function handler(event) {
            if (_this.isTargetSlider(event)) {
              return;
            }

            var _this$state$focusedIn2 = _this.state.focusedIndex,
                focusedIndex = _this$state$focusedIn2 === void 0 ? 0 : _this$state$focusedIn2;
            event.preventDefault();
            var newFocusedIndex = Math.max(focusedIndex - 1, 0);

            _this.setState({
              focusedIndex: newFocusedIndex
            });
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: 'down',
          description: React.createElement(FormattedMessage, messages.downDescription),
          handler: function handler(event) {
            if (_this.isTargetSlider(event)) {
              return;
            }

            var _this$props = _this.props,
                data = _this$props.data,
                gridColumnCount = _this$props.gridColumnCount;
            var focusedIndex = _this.state.focusedIndex;
            event.preventDefault();
            var newFocusedIndex = focusedIndex !== undefined ? Math.min(focusedIndex + gridColumnCount, data.length - 1) : 0;

            _this.setState({
              focusedIndex: newFocusedIndex
            });
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: 'up',
          description: React.createElement(FormattedMessage, messages.upDescription),
          handler: function handler(event) {
            if (_this.isTargetSlider(event)) {
              return;
            }

            var gridColumnCount = _this.props.gridColumnCount;
            var _this$state$focusedIn3 = _this.state.focusedIndex,
                focusedIndex = _this$state$focusedIn3 === void 0 ? 0 : _this$state$focusedIn3;
            event.preventDefault();
            var newFocusedIndex = Math.max(focusedIndex - gridColumnCount, 0);

            _this.setState({
              focusedIndex: newFocusedIndex
            });
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: 'shift+right',
          description: React.createElement(FormattedMessage, messages.shiftDownDescription),
          handler: function handler() {
            var data = _this.props.data;
            var focusedIndex = _this.state.focusedIndex;

            if (focusedIndex === undefined) {
              return;
            }

            var newFocusedIndex = Math.min(focusedIndex + 1, data.length - 1);

            _this.handleShiftKeyDownForGrid(newFocusedIndex, data.length - 1);
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: 'shift+left',
          description: React.createElement(FormattedMessage, messages.shiftUpDescription),
          handler: function handler() {
            var focusedIndex = _this.state.focusedIndex;

            if (focusedIndex === undefined) {
              return;
            }

            var newFocusedIndex = Math.max(focusedIndex - 1, 0);

            _this.handleShiftKeyDownForGrid(newFocusedIndex, 0);
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: 'shift+down',
          description: React.createElement(FormattedMessage, messages.shiftDownDescription),
          handler: function handler() {
            var _this$props2 = _this.props,
                data = _this$props2.data,
                gridColumnCount = _this$props2.gridColumnCount;
            var focusedIndex = _this.state.focusedIndex;

            if (focusedIndex === undefined) {
              return;
            }

            var newFocusedIndex = Math.min(focusedIndex + gridColumnCount, data.length - 1);

            _this.handleShiftKeyDownForGrid(newFocusedIndex, data.length - 1);
          },
          type: hotkeyType
        }), new HotkeyRecord({
          key: 'shift+up',
          description: React.createElement(FormattedMessage, messages.shiftUpDescription),
          handler: function handler() {
            var gridColumnCount = _this.props.gridColumnCount;
            var focusedIndex = _this.state.focusedIndex;

            if (focusedIndex === undefined) {
              return;
            }

            var newFocusedIndex = Math.max(focusedIndex - gridColumnCount, 0);

            _this.handleShiftKeyDownForGrid(newFocusedIndex, 0);
          },
          type: hotkeyType
        })];
      });

      _defineProperty(_assertThisInitialized(_this), "getHotkeyConfigs", function () {
        var _this$props3 = _this.props,
            enableHotkeys = _this$props3.enableHotkeys,
            isGridView = _this$props3.isGridView,
            gridColumnCount = _this$props3.gridColumnCount;

        if (!enableHotkeys && !_this.hotkeys) {
          _this.hotkeys = [];
        }

        if (!_this.hotkeys) {
          var viewSpecificHotKeyConfigs = isGridView && gridColumnCount !== undefined ? _this.getGridViewHotKeyConfigs() : _this.getListViewHotKeyConfigs();
          _this.hotkeys = [].concat(_toConsumableArray(_this.getSharedHotkeyConfigs()), _toConsumableArray(viewSpecificHotKeyConfigs));
        }

        return _this.hotkeys;
      });

      _defineProperty(_assertThisInitialized(_this), "getProcessedProps", function () {
        var _this$props4 = _this.props,
            data = _this$props4.data,
            loadedData = _this$props4.loadedData,
            selectedItems = _this$props4.selectedItems;
        return _objectSpread({}, _this.props, {
          loadedData: loadedData ? Set(loadedData) : Set(data),
          selectedItems: Set.isSet(selectedItems) ? selectedItems : new Set(selectedItems)
        });
      });

      _defineProperty(_assertThisInitialized(_this), "hotkeys", null);

      _defineProperty(_assertThisInitialized(_this), "selectToggle", function (rowIndex) {
        var _this$getProcessedPro = _this.getProcessedProps(),
            data = _this$getProcessedPro.data,
            selectedItems = _this$getProcessedPro.selectedItems;

        if (selectedItems.has(data[rowIndex])) {
          _this.onSelect(selectedItems.delete(data[rowIndex]), rowIndex);
        } else {
          _this.onSelect(selectedItems.add(data[rowIndex]), rowIndex);
        }

        _this.anchorIndex = rowIndex;
      });

      _defineProperty(_assertThisInitialized(_this), "selectRange", function (rowIndex) {
        var _this$getProcessedPro2 = _this.getProcessedProps(),
            data = _this$getProcessedPro2.data,
            selectedItems = _this$getProcessedPro2.selectedItems; // Don't change selection if we're shift-clicking the same row


        if (rowIndex === _this.previousIndex) {
          return;
        } // Converts set of items to set of indices to do some slicing magic


        var selectedRows = new Set(data.reduce(function (rows, item, i) {
          if (selectedItems.has(item)) {
            rows.push(i);
          }

          return rows;
        }, []));
        var newSelectedRows = shiftSelect(selectedRows, _this.previousIndex, rowIndex, _this.anchorIndex); // Converts set back to set of items

        var newSelectedItems = newSelectedRows.map(function (i) {
          return data[i];
        });

        _this.onSelect(newSelectedItems, rowIndex);
      });

      _defineProperty(_assertThisInitialized(_this), "selectOne", function (rowIndex) {
        var _this$getProcessedPro3 = _this.getProcessedProps(),
            data = _this$getProcessedPro3.data,
            selectedItems = _this$getProcessedPro3.selectedItems; // Don't change selection if we're clicking on a row that we've already selected
        // This allows us to use the native onDoubleClick handler because we're referencing the
        // same DOM node on double-click.


        if (selectedItems.has(data[rowIndex]) && selectedItems.size === 1) {
          return;
        }

        _this.onSelect(new Set([data[rowIndex]]), rowIndex);

        _this.anchorIndex = rowIndex;
      });

      _defineProperty(_assertThisInitialized(_this), "clearFocus", function () {
        _this.setState({
          focusedIndex: undefined
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleRowClick", function (event, index) {
        if (event.metaKey || event.ctrlKey) {
          _this.selectToggle(index);
        } else if (event.shiftKey) {
          _this.selectRange(index);
        } else {
          _this.selectOne(index);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleRowFocus", function (event, index) {
        var _this$getProcessedPro4 = _this.getProcessedProps(),
            selectedItems = _this$getProcessedPro4.selectedItems;

        _this.onSelect(selectedItems, index);
      });

      _defineProperty(_assertThisInitialized(_this), "handleTableBlur", function () {
        var focusedIndex = _this.state.focusedIndex;

        if (focusedIndex !== undefined) {
          // table may get focus back right away in the same tick, in which case we shouldn't clear focus
          _this.blurTimerID = setTimeout(_this.clearFocus);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleTableFocus", function () {
        clearTimeout(_this.blurTimerID);
      });

      _defineProperty(_assertThisInitialized(_this), "handleShiftKeyDown", function (newFocusedIndex, boundary) {
        var _this$getProcessedPro5 = _this.getProcessedProps(),
            data = _this$getProcessedPro5.data,
            selectedItems = _this$getProcessedPro5.selectedItems;

        var focusedIndex = _this.state.focusedIndex;
        var focusedIndexData = data[focusedIndex];
        var newFocusedIndexData = data[newFocusedIndex]; // if we're at a boundary of the table and the row is selected, no-op

        if (focusedIndex === boundary && selectedItems.has(focusedIndexData)) {
          return;
        } // if both the target and source are not selected, select them both


        if (!selectedItems.has(focusedIndexData) && !selectedItems.has(newFocusedIndexData)) {
          _this.onSelect(selectedItems.union([focusedIndexData, newFocusedIndexData]), newFocusedIndex);

          return;
        } // if target is not selected, select it


        if (!selectedItems.has(newFocusedIndexData)) {
          _this.onSelect(selectedItems.add(newFocusedIndexData), newFocusedIndex);

          return;
        } // if both source and target are selected, deselect source


        if (selectedItems.has(newFocusedIndexData) && selectedItems.has(focusedIndexData)) {
          _this.onSelect(selectedItems.delete(focusedIndexData), newFocusedIndex);

          return;
        } // if target is selected and source is not, select source


        _this.onSelect(selectedItems.add(focusedIndexData), newFocusedIndex);
      });

      _defineProperty(_assertThisInitialized(_this), "isContiguousSelection", function (selectedItemIndecies, sourceIndex, targetIndex) {
        if (sourceIndex < targetIndex && selectedItemIndecies.has(sourceIndex - 1)) {
          return true;
        }

        if (targetIndex < sourceIndex && selectedItemIndecies.has(sourceIndex + 1)) {
          return true;
        }

        return false;
      });

      _defineProperty(_assertThisInitialized(_this), "handleShiftKeyDownForGrid", function (newFocusedIndex) {
        var _this$getProcessedPro6 = _this.getProcessedProps(),
            data = _this$getProcessedPro6.data,
            loadedData = _this$getProcessedPro6.loadedData,
            selectedItems = _this$getProcessedPro6.selectedItems;

        var focusedIndex = _this.state.focusedIndex;
        var dataSize = data.length;
        var targetIndex = newFocusedIndex < 0 ? 0 : Math.min(newFocusedIndex, dataSize - 1);
        var isSourceSelected = selectedItems.has(data[focusedIndex]);
        var isTargetSelected = selectedItems.has(data[targetIndex]); // if data is not loaded, we don't want it to be able to be selected

        if (!loadedData.has(data[targetIndex])) {
          return;
        }

        var selectedItemIndices = new Set(data.reduce(function (rows, item, i) {
          if (selectedItems.has(item)) {
            rows.push(i);
          }

          return rows;
        }, [])); // reset the anchor on a new selection block

        if (!isSourceSelected && !isTargetSelected && // if we are starting a new mass selection adjacent selected block, we want to connect them
        !_this.isContiguousSelection(selectedItemIndices, focusedIndex, targetIndex)) {
          _this.anchorIndex = focusedIndex;
        }

        var newSelectedItemIndices = shiftSelect(selectedItemIndices, focusedIndex, targetIndex, _this.anchorIndex);
        var newSelectedItems = newSelectedItemIndices.map(function (i) {
          return data[i];
        });

        _this.onSelect(newSelectedItems, targetIndex);
      });

      _defineProperty(_assertThisInitialized(_this), "handleKeyboardSearch", function (event) {
        var searchStrings = _this.props.searchStrings;

        if (!searchStrings) {
          return;
        }

        if (event.target.hasAttribute('contenteditable') || event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA') {
          return;
        } // character keys have a value for event.which


        if (event.which === 0) {
          return;
        }

        if (_this.searchTimeout) {
          clearTimeout(_this.searchTimeout);
        }

        _this.searchString += event.key;
        _this.searchTimeout = setTimeout(function () {
          _this.searchString = '';
        }, SEARCH_TIMER_DURATION);
        var index = searchStrings.findIndex(function (string) {
          return string.trim().toLowerCase().indexOf(_this.searchString) === 0;
        });

        if (index !== -1) {
          _this.setState({
            focusedIndex: index
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleCheckboxClick", function (event, index) {
        if (event.nativeEvent.shiftKey) {
          _this.selectRange(index);
        } else {
          _this.selectToggle(index);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "isTargetSlider", function (event) {
        var _event$target;

        return ((_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.role) === 'slider';
      });

      _this.anchorIndex = 0;
      _this.searchString = '';
      _this.searchTimeout = null; // we have to store the previously focused index because a focus event
      // will be fired before the click event; thus, in the click handler,
      // the focusedItem will already be the new item

      _this.previousIndex = 0;
      _this.blurTimerID = null;
      return _this;
    }

    _createClass(SelectableTable, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener('keypress', this.handleKeyboardSearch);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.focusedIndex !== this.state.focusedIndex && this.props.onFocus) {
          this.props.onFocus(this.state.focusedIndex);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyboardSearch);
        clearTimeout(this.blurTimerID);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props5 = this.props,
            className = _this$props5.className,
            data = _this$props5.data;
        var focusedIndex = this.state.focusedIndex;
        var focusedItem = data[focusedIndex];
        return React.createElement(Hotkeys, {
          configs: this.getHotkeyConfigs()
        }, React.createElement(BaseTable, _extends({}, this.props, {
          className: classNames(className, 'is-selectable'),
          focusedIndex: focusedIndex,
          focusedItem: focusedItem,
          onCheckboxClick: this.handleCheckboxClick,
          onRowClick: this.handleRowClick,
          onRowFocus: this.handleRowFocus,
          onTableBlur: this.handleTableBlur,
          onTableFocus: this.handleTableFocus
        })));
      }
    }]);

    return SelectableTable;
  }(Component), _defineProperty(_class, "displayName", "Selectable(".concat(originalDisplayName, ")")), _defineProperty(_class, "propTypes", {
    className: PropTypes.string,

    /** Array of unique IDs of the items in the table. Each item should be a string or number, in the order they appear in the table. */
    data: PropTypes.array.isRequired,
    gridColumnCount: PropTypes.number,
    isGridView: PropTypes.bool,

    /** Called when focus changes. `(focusedIndex: number) => void` */
    onFocus: PropTypes.func,

    /** Called when selection changes. `(selectedItems: Array<string> | Array<number> | Set<string> | Set<number>) => void` */
    onSelect: PropTypes.func.isRequired,

    /**
     * Array of strings for keyboard search corresponding to the data prop. If not provided, keyboard search won't work.
     * Example: data = ['f_123', 'f_456'], and corresponding searchStrings = ['file.png', 'another file.pdf']
     */
    searchStrings: PropTypes.array,

    /**
     * Array of IDs that are currently selected, in any order.
     * If you pass a native JS array, then your onSelect function will be called with a native JS array;
     * likewise, if you pass an ImmutableJS Set, then your onSelect function will be called
     * with an ImmutableJS Set.
     */
    selectedItems: PropTypes.oneOfType([PropTypes.array, ImmutablePropTypes.set]),

    /** Array of unique IDs of the items in the table that are loaded and accessible. If not provided, this will default to all data */
    loadedData: PropTypes.array,
    enableHotkeys: PropTypes.bool,

    /** Translated type for hotkeys. If not provided, then the hotkeys will not appear in the help modal. */
    hotkeyType: PropTypes.string
  }), _defineProperty(_class, "defaultProps", {
    selectedItems: new Set()
  }), _temp;
}

export default makeSelectable;
//# sourceMappingURL=makeSelectable.js.map