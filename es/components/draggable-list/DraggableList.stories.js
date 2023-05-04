function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import uniqueId from 'lodash/uniqueId';
import Checkbox from '../checkbox/Checkbox';
import DraggableList from './DraggableList';
import DraggableListItem from './DraggableListItem';
import reorder from './draggable-list-utils/reorder';
import notes from './DraggableList.stories.md';

var DraggableListExamples =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DraggableListExamples, _React$Component);

  function DraggableListExamples() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DraggableListExamples);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DraggableListExamples)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      items: [],
      listId: ''
    });

    _defineProperty(_assertThisInitialized(_this), "getItems", function (count) {
      return Array.from({
        length: count
      }, function (v, k) {
        return k;
      }).map(function (k) {
        return {
          id: uniqueId('item_'),
          label: "item ".concat(k)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDragEnd", function (sourceIndex, destinationIndex) {
      if (!destinationIndex) {
        return;
      }

      var items = reorder(_this.state.items, sourceIndex, destinationIndex);

      _this.setState({
        items: items
      });
    });

    return _this;
  }

  _createClass(DraggableListExamples, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        items: this.getItems(10),
        listId: uniqueId()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isDraggableViaHandle = this.props.isDraggableViaHandle;
      var _this$state = this.state,
          items = _this$state.items,
          listId = _this$state.listId;
      return React.createElement(DraggableList, {
        className: "draggable-list-example-container",
        listId: listId,
        onDragEnd: this.onDragEnd
      }, items.map(function (item, index) {
        return React.createElement(DraggableListItem, {
          key: "draggable-".concat(index),
          id: item.id,
          index: index,
          isDraggableViaHandle: isDraggableViaHandle
        }, React.createElement(Checkbox, {
          label: item.label,
          name: item.label
        }));
      }));
    }
  }]);

  return DraggableListExamples;
}(React.Component);

export var Example = function Example() {
  return React.createElement(DraggableListExamples, null);
};
export var ExampleIsDraggableViaHandle = function ExampleIsDraggableViaHandle() {
  return React.createElement(DraggableListExamples, {
    isDraggableViaHandle: true
  });
};
export default {
  title: 'Components|DraggableList',
  component: DraggableList,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=DraggableList.stories.js.map