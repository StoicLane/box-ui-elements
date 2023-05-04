function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            count      | expectedCount\n            ", "   | ", "\n            ", "   | ", "\n            ", "  | ", "\n            ", " | ", "\n            ", " | ", "\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            count   | expectedCount\n            ", "    | ", "\n            ", "    | ", "\n            ", " | ", "\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CompactCount from '../CompactCount';
describe('features/content-insights/CompactCount', function () {
  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return render(React.createElement(CompactCount, _extends({
      count: 0
    }, props)));
  };

  describe('render()', function () {
    test('should apply a provided classname', function () {
      var wrapper = getWrapper({
        className: 'foo'
      });
      expect(wrapper.container.firstChild).toHaveClass('foo');
    });
    test.each(_templateObject(), 0, '0', 1, '1', 1000, '1,000')('should display the count $count as $expectedCount', function (_ref) {
      var count = _ref.count,
          expectedCount = _ref.expectedCount;
      var wrapper = getWrapper({
        count: count
      });
      expect(wrapper.getByText(expectedCount)).toBeVisible();
    });
    test.each(_templateObject2(), 10000, '10K', 11123, '11K', 100123, '100K', 1000000, '1M', 2000123, '2M')('should display the count $count as $expectedCount', function (_ref2) {
      var count = _ref2.count,
          expectedCount = _ref2.expectedCount;
      var wrapper = getWrapper({
        count: count
      });
      expect(wrapper.getByText(expectedCount)).toBeVisible();
    });
    test('should call mouseenter and mouseleave callbacks', function () {
      var onMouseEnter = jest.fn();
      var onMouseLeave = jest.fn();
      getWrapper({
        count: 1,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave
      });
      fireEvent.mouseEnter(screen.getByText('1'));
      expect(onMouseLeave).toBeCalledTimes(0);
      expect(onMouseEnter).toBeCalledTimes(1);
      fireEvent.mouseLeave(screen.getByText('1'));
      expect(onMouseLeave).toBeCalledTimes(1);
      expect(onMouseEnter).toBeCalledTimes(1);
    });
  });
});