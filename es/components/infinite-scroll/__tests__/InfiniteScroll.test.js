function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { mount, shallow } from 'enzyme';
import * as React from 'react';
import InfiniteScroll from '../InfiniteScroll';
var mockOnLoadMore = jest.fn();
var threshold = 100;
var propsList = {
  children: null,
  isLoading: false,
  hasMore: false,
  useWindow: true,
  onLoadMore: mockOnLoadMore,
  threshold: threshold,
  throttle: 2
};
describe('components/infinite-scroll/InfiniteScroll', function () {
  var items = new Array(20).fill('ITEM');
  var attachTo;
  var component;

  var getSentinel = function getSentinel() {
    var _component;

    return (_component = component) === null || _component === void 0 ? void 0 : _component.find('[data-testid="sentinel"]').getDOMNode();
  };

  beforeEach(function () {
    var container = document.createElement('div');
    document.body.appendChild(container);
    attachTo = container; // Element initializes with sentinel above threshold (no initial load).
    // Without this, top will always be 0 due to jest limitation.

    jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      top: window.innerHeight + (threshold + 1)
    });
  });
  afterEach(function () {
    var _component2;

    (_component2 = component) === null || _component2 === void 0 ? void 0 : _component2.unmount();
    document.body.innerHTML = '';
    document.head.innerHTML = '';
    jest.restoreAllMocks();
  });
  it('should render with default props', function () {
    var wrapper = shallow(React.createElement(InfiniteScroll, propsList));
    expect(wrapper).toMatchInlineSnapshot("\n              <div>\n                <div\n                  data-testid=\"sentinel\"\n                />\n              </div>\n        ");
  });
  it('should render sentinel to calculate scroll position', function () {
    var wrapper = shallow(React.createElement(InfiniteScroll, propsList));
    expect(wrapper.find('[data-testid="sentinel"]').length).toEqual(1);
  });
  describe('using window', function () {
    beforeEach(function () {
      component = mount(React.createElement(InfiniteScroll, _extends({}, propsList, {
        hasMore: true
      }), React.createElement("div", null, items.map(function (item, i) {
        return React.createElement("div", {
          key: i,
          style: {
            height: '100px'
          }
        }, item);
      }))), {
        attachTo: attachTo
      });
    });
    it('should call onLoadMore if sentinel is in threshold range and window is not scrollable', function () {
      var sentinel = getSentinel();
      sentinel.getBoundingClientRect = jest.fn().mockReturnValue({
        top: window.innerHeight + (threshold - 1)
      }); // update prop to trigger useEffect

      component.setProps({
        throttle: 1
      });
      expect(mockOnLoadMore).toBeCalledTimes(1);
    });
    it('should call onLoadMore if sentinel is in threshold range while scrolling in window', function () {
      var sentinel = getSentinel();
      sentinel.getBoundingClientRect = jest.fn().mockReturnValue({
        top: window.innerHeight + (threshold - 1)
      });
      window.dispatchEvent(new Event('scroll'));
      expect(mockOnLoadMore).toBeCalledTimes(1);
    });
    it('should not call onLoadMore if sentinel is not in threshold range while scrolling in window', function () {
      window.dispatchEvent(new Event('scroll'));
      expect(mockOnLoadMore).toBeCalledTimes(0);
    });
  });
  describe('using scrollContainerNode', function () {
    var scrollContainer;
    beforeEach(function () {
      scrollContainer = document.createElement('div');
      scrollContainer.getBoundingClientRect = jest.fn().mockReturnValue({
        bottom: 500
      });
      component = mount(React.createElement(InfiniteScroll, _extends({}, propsList, {
        hasMore: true,
        scrollContainerNode: scrollContainer,
        useWindow: false
      }), React.createElement("div", null, items.map(function (item, i) {
        return React.createElement("div", {
          key: i,
          style: {
            height: '100px'
          }
        }, item);
      }))), {
        attachTo: attachTo
      });
    });
    it('should call onLoadMore if sentinel is in threshold range and window is not scrollable', function () {
      var sentinel = getSentinel();
      sentinel.getBoundingClientRect = jest.fn().mockReturnValue({
        top: 500 + (threshold - 1)
      }); // update prop to trigger useEffect

      component.setProps({
        throttle: 1
      });
      expect(mockOnLoadMore).toBeCalledTimes(1);
    });
    it('should call onLoadMore if sentinel is in threshold range while scrolling scrollContainerNode', function () {
      var sentinel = getSentinel();
      sentinel.getBoundingClientRect = jest.fn().mockReturnValue({
        top: 500 + (threshold - 1)
      });
      scrollContainer.dispatchEvent(new Event('scroll'));
      expect(mockOnLoadMore).toBeCalledTimes(1);
    });
    it('should not call onLoadMore if sentinel is not in threshold range while scrolling scrollContainerNode', function () {
      scrollContainer.dispatchEvent(new Event('scroll'));
      expect(mockOnLoadMore).not.toBeCalled();
    });
  });
  describe('with sentinel in range', function () {
    beforeEach(function () {
      component = mount(React.createElement(InfiniteScroll, _extends({}, propsList, {
        hasMore: true,
        useWindow: true
      }), React.createElement("div", null, items.map(function (item, i) {
        return React.createElement("div", {
          key: i,
          style: {
            height: '100px'
          }
        }, item);
      }))), {
        attachTo: attachTo
      });
      var sentinel = getSentinel();
      sentinel.getBoundingClientRect = jest.fn().mockReturnValue({
        top: window.innerHeight + (threshold - 1)
      });
      jest.resetAllMocks();
    });
    it('should not call onLoadMore if isLoading', function () {
      component.setProps({
        isLoading: true
      }, function () {
        window.dispatchEvent(new Event('scroll'));
        expect(mockOnLoadMore).not.toBeCalled();
      });
    });
    it('should not call onLoadMore if !hasMore', function () {
      component.setProps({
        hasMore: false
      }, function () {
        window.dispatchEvent(new Event('scroll'));
        expect(mockOnLoadMore).not.toBeCalled();
      });
    });
  });
  describe('event handlers', function () {
    function assertScrollAndResizeEvents(spyInstance) {
      var numberOfCalls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      // there are a lot of 'error' event listeners, we're only interested in scroll and resize
      var scrollEvents = spyInstance.mock.calls.filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            event = _ref2[0];

        return event === 'scroll';
      });
      var resizeEvents = spyInstance.mock.calls.filter(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            event = _ref4[0];

        return event === 'resize';
      });
      expect(scrollEvents).toHaveLength(numberOfCalls);
      expect(resizeEvents).toHaveLength(numberOfCalls);
    }

    it('should check if listeners are added and removed', function () {
      var addEventListenerWindow = jest.spyOn(window, 'addEventListener');
      var removeEventListenerWindow = jest.spyOn(window, 'removeEventListener');
      var scrollContainerNode = document.createElement('div');
      var addEventListenerScrollContainer = jest.spyOn(scrollContainerNode, 'addEventListener');
      var removeEventListenerScrollContainer = jest.spyOn(scrollContainerNode, 'removeEventListener');
      assertScrollAndResizeEvents(addEventListenerWindow, 0);
      assertScrollAndResizeEvents(removeEventListenerWindow, 0);
      assertScrollAndResizeEvents(addEventListenerScrollContainer, 0);
      assertScrollAndResizeEvents(removeEventListenerScrollContainer, 0);
      component = mount(React.createElement(InfiniteScroll, propsList));
      assertScrollAndResizeEvents(addEventListenerWindow);
      component.setProps({
        useWindow: false
      });
      assertScrollAndResizeEvents(removeEventListenerWindow);
      component.setProps({
        scrollContainerNode: scrollContainerNode
      });
      assertScrollAndResizeEvents(addEventListenerScrollContainer);
      component.setProps({
        useWindow: true
      });
      assertScrollAndResizeEvents(removeEventListenerScrollContainer); // we should have another pair of addEventsListeners on window

      assertScrollAndResizeEvents(addEventListenerWindow, 2);
    });
  });
});