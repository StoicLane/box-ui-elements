function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Bar from '../Bar';
describe('features/content-insights/charts/bar/Bar', function () {
  var getDefaultProps = function getDefaultProps() {
    return {
      size: 80
    };
  };

  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return render(React.createElement(Bar, _extends({}, getDefaultProps(), props)));
  };

  var getFirstChild = function getFirstChild(wrapper) {
    return wrapper.container.firstChild;
  };

  describe('render', function () {
    test('should render correctly', function () {
      var wrapper = getWrapper();
      var element = getFirstChild(wrapper);
      expect(element).toHaveClass('ca-Bar');
      expect(element.querySelector('.ca-Bar-value')).toHaveStyle("height: 80%");
    });
    test('should render a minimum bar if value is 0', function () {
      var wrapper = getWrapper({
        size: 0
      });
      var element = getFirstChild(wrapper);
      expect(element.querySelector('.ca-Bar-value')).toHaveStyle("height: 2px");
    });
    test('should render a minimum bar if value is < 0', function () {
      var wrapper = getWrapper({
        size: -5
      });
      var element = getFirstChild(wrapper);
      expect(element.querySelector('.ca-Bar-value')).toHaveStyle("height: 2px");
    });
    test('should render a color if provided', function () {
      var wrapper = getWrapper({
        color: 'blue'
      });
      var element = getFirstChild(wrapper);
      expect(element.querySelector('.ca-Bar-value')).toHaveStyle("background-color: blue");
    });
    test('should render horizontally if provided', function () {
      var wrapper = getWrapper({
        direction: 'horizontal'
      });
      var element = getFirstChild(wrapper);
      expect(element).toHaveClass('is-horizontal');
      expect(element.querySelector('.ca-Bar-value')).toHaveStyle("width: 80%");
    });
    test('should render the label if provided', function () {
      var wrapper = getWrapper({
        label: 'label'
      });
      var element = getFirstChild(wrapper);
      expect(element.querySelectorAll('.ca-Bar-label').length).toBe(1);
      expect(wrapper.queryByText('label')).toBeInTheDocument();
    });
    test('should not render the label if not provided', function () {
      var wrapper = getWrapper();
      var element = getFirstChild(wrapper);
      expect(element.querySelectorAll('.ca-Bar-label').length).toBe(0);
      expect(wrapper.queryByText('label')).not.toBeInTheDocument();
    });
  });
  describe('callbacks', function () {
    test('should call onMouseEnter', function () {
      var onMouseEnter = jest.fn();
      var wrapper = getWrapper({
        onMouseEnter: onMouseEnter
      });
      var element = getFirstChild(wrapper);
      fireEvent.mouseEnter(element);
      expect(onMouseEnter).toBeCalled();
    });
    test('should call onMouseLeave', function () {
      var onMouseLeave = jest.fn();
      var wrapper = getWrapper({
        onMouseLeave: onMouseLeave
      });
      var element = getFirstChild(wrapper);
      fireEvent.mouseLeave(element);
      expect(onMouseLeave).toBeCalled();
    });
    test('should return the bar offset onMouseEnter', function () {
      var elementOffset = {
        left: 50,
        top: 20,
        width: 20
      };
      jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue(elementOffset);
      var onMouseEnter = jest.fn();
      var wrapper = getWrapper({
        onMouseEnter: onMouseEnter
      });
      var element = getFirstChild(wrapper);
      fireEvent.mouseEnter(element);
      expect(onMouseEnter).toBeCalledWith({
        left: elementOffset.left + elementOffset.width / 2,
        top: elementOffset.top
      });
    });
    test('should return default offset if ref is undefined', function () {
      jest.spyOn(React, 'useRef').mockImplementation(function () {
        return {
          current: null
        };
      });
      var elementOffset = {
        left: 0,
        top: 0
      };
      var onMouseEnter = jest.fn();
      var wrapper = getWrapper({
        onMouseEnter: onMouseEnter
      });
      var element = getFirstChild(wrapper);
      fireEvent.mouseEnter(element);
      expect(onMouseEnter).toBeCalledWith(elementOffset);
    });
  });
});