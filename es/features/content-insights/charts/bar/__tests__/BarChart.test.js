function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import BarChart from '../BarChart';
describe('features/content-insights/charts/bar/BarChart', function () {
  var defaultAccessorsData = [{
    x: 1,
    y: 2
  }, {
    x: 2,
    y: 4
  }, {
    x: 3,
    y: 10
  }];
  var horizontalAccessorsData = [{
    x: 1,
    y: 1
  }, {
    x: 2,
    y: 2
  }, {
    x: 10,
    y: 3
  }];
  var zeroData = [{
    x: 1,
    y: 0
  }, {
    x: 2,
    y: 0
  }, {
    x: 3,
    y: 0
  }];

  var getDefaultProps = function getDefaultProps() {
    return {
      data: defaultAccessorsData,
      label: 'Chart Label',
      labelAccessor: 'x',
      valueAccessor: 'y'
    };
  };

  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return render(React.createElement(BarChart, _extends({}, getDefaultProps(), props)));
  };

  var getFirstChild = function getFirstChild(wrapper) {
    return wrapper.container.firstChild;
  };

  describe('render', function () {
    test('should render correctly', function () {
      var _element$children$ite;

      var wrapper = getWrapper();
      var element = getFirstChild(wrapper);
      expect(element).toHaveClass('ca-BarChart');
      expect(element.getAttribute('aria-label')).toBe('Chart Label');
      expect(element.getAttribute('role')).toBe('img');
      expect(element.children.length).toBe(3);
      expect((_element$children$ite = element.children.item(0)) === null || _element$children$ite === void 0 ? void 0 : _element$children$ite.querySelector('.ca-Bar-value')).toHaveStyle("height: 20%"); // max value of the data is 10, since the first item is 2, 2/10 is 20%
    });
    test('should render horizontally if provided', function () {
      var _element$children$ite2;

      var wrapper = getWrapper({
        data: horizontalAccessorsData,
        direction: 'horizontal',
        labelAccessor: 'y',
        valueAccessor: 'x'
      });
      var element = getFirstChild(wrapper);
      expect(element).toHaveClass('is-horizontal');
      expect(element.children.length).toBe(3);
      expect((_element$children$ite2 = element.children.item(0)) === null || _element$children$ite2 === void 0 ? void 0 : _element$children$ite2.querySelector('.ca-Bar-value')).toHaveStyle("width: 10%"); // max value of the data is 10, since the first item is 1, 1/10 is 10%
    });
    test('should use valueAccessor as function if provided', function () {
      var _element$children$ite3;

      var data = [{
        x: 1,
        y: ['a', 'b']
      }, {
        x: 2,
        y: ['a', 'b', 'c', 'd']
      }, {
        x: 3,
        y: ['a']
      }];

      var valueAccessor = function valueAccessor(_ref) {
        var y = _ref.y;
        return y.length;
      };

      var wrapper = getWrapper({
        data: data,
        valueAccessor: valueAccessor
      });
      var element = getFirstChild(wrapper);
      expect(element).toHaveClass('ca-BarChart');
      expect(element.getAttribute('aria-label')).toBe('Chart Label');
      expect(element.getAttribute('role')).toBe('img');
      expect(element.children.length).toBe(3);
      expect((_element$children$ite3 = element.children.item(0)) === null || _element$children$ite3 === void 0 ? void 0 : _element$children$ite3.querySelector('.ca-Bar-value')).toHaveStyle("height: 50%"); // max value of the data is 4, since the first item is 2, 2/4 is 50%
    });
    test('should have all bars be minimum height if all values are zero', function () {
      var _element$children$ite4, _element$children$ite5, _element$children$ite6;

      var wrapper = getWrapper({
        data: zeroData
      });
      var element = getFirstChild(wrapper);
      expect(element.children.length).toBe(3);
      expect((_element$children$ite4 = element.children.item(0)) === null || _element$children$ite4 === void 0 ? void 0 : _element$children$ite4.querySelector('.ca-Bar-value')).toHaveStyle("height: 2px");
      expect((_element$children$ite5 = element.children.item(1)) === null || _element$children$ite5 === void 0 ? void 0 : _element$children$ite5.querySelector('.ca-Bar-value')).toHaveStyle("height: 2px");
      expect((_element$children$ite6 = element.children.item(2)) === null || _element$children$ite6 === void 0 ? void 0 : _element$children$ite6.querySelector('.ca-Bar-value')).toHaveStyle("height: 2px");
    });
    test('should render with label', function () {
      var wrapper = getWrapper({
        hasAxisLabel: true
      });
      var element = getFirstChild(wrapper);
      expect(element.querySelectorAll('.ca-Bar-label').length).toBe(3);
    });
  });
  describe('callbacks', function () {
    test('should call onBarMouseEnter with the data', function () {
      var onBarMouseEnter = jest.fn();
      var wrapper = getWrapper({
        onBarMouseEnter: onBarMouseEnter
      });
      var element = getFirstChild(wrapper);
      fireEvent.mouseEnter(element.children.item(0));
      expect(onBarMouseEnter).toBeCalledWith({
        datum: {
          x: 1,
          y: 2
        }
      }, {
        left: 0,
        top: 0
      });
    });
    test('should call onBarMouseLeave with the data', function () {
      var onBarMouseLeave = jest.fn();
      var wrapper = getWrapper({
        onBarMouseLeave: onBarMouseLeave
      });
      var element = getFirstChild(wrapper);
      fireEvent.mouseLeave(element.children.item(0));
      expect(onBarMouseLeave).toBeCalledWith({
        datum: {
          x: 1,
          y: 2
        }
      });
    });
  });
});