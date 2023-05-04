function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import AdvancedContentInsightsToggle from '../AdvancedContentInsightsToggle';
describe('features/advanced-content-insights/AdvancedContentInsightsToggle', function () {
  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return shallow(React.createElement(AdvancedContentInsightsToggle, _extends({
      isChecked: true,
      isDisabled: false
    }, props)));
  };

  test('should render default component', function () {
    expect(getWrapper()).toMatchSnapshot();
  });
  test('should render the description inside a tooltip', function () {
    var wrapper = getWrapper();
    var toggle = wrapper.find('Toggle').dive();
    expect(toggle.find('Tooltip').exists()).toBe(true);
  });
  test('should not render the description inside a tooltip', function () {
    var wrapper = getWrapper({
      hasTooltip: false
    });
    var toggle = wrapper.find('Toggle').dive();
    expect(toggle.find('Tooltip').exists()).toBe(false);
  });
  test('should call the callback function if the toggle changes', function () {
    var onChange = jest.fn();
    var wrapper = getWrapper({
      onChange: onChange
    });
    var toggle = wrapper.find('Toggle').dive();
    expect(toggle.length).toBe(1);
    toggle.find('input').simulate('change');
    expect(onChange).toBeCalled();
  });
});