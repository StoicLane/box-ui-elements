import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '..';
describe('components/progress-bar/ProgressBar', function () {
  var renderComponent = function renderComponent() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return shallow(React.createElement(ProgressBar, props));
  };

  test('should render a progress bar with the input width', function () {
    var _component$find$props;

    var expected = {
      width: '20%'
    };
    var component = renderComponent({
      progress: 20
    });
    expect((_component$find$props = component.find('.progress-bar').props().style) === null || _component$find$props === void 0 ? void 0 : _component$find$props.width).toEqual(expected.width);
  });
  test('should render a progress bar with the input width and className', function () {
    var _component$find$props2, _component$find$props3;

    var className = 'dis be a className';
    var expected = {
      className: className,
      width: '20%'
    };
    var component = renderComponent({
      className: className,
      progress: 20
    });
    expect(((_component$find$props2 = component.find('.progress-bar').props().className) === null || _component$find$props2 === void 0 ? void 0 : _component$find$props2.indexOf(expected.className)) !== -1).toBeTruthy();
    expect((_component$find$props3 = component.find('.progress-bar').props().style) === null || _component$find$props3 === void 0 ? void 0 : _component$find$props3.width).toEqual(expected.width);
  });
});