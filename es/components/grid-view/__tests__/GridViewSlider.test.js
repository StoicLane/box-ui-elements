import React from 'react';
import { GridViewSliderBase as GridViewSlider } from '../GridViewSlider';
var intl = {
  formatMessage: function formatMessage(message) {
    return message.defaultMessage;
  }
};

var getWrapper = function getWrapper() {
  return shallow(React.createElement(GridViewSlider, {
    columnCount: 4,
    gridMaxColumns: 7,
    gridMinColumns: 2,
    intl: intl,
    maxColumnCount: 4,
    onChange: function onChange() {}
  }));
};

describe('components/grid-view/GridViewSlider', function () {
  test('should render()', function () {
    var wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
  test('should use aria-label prop', function () {
    var wrapper = getWrapper();
    expect(wrapper.find('input').prop('aria-label')).toBe('Column size');
    expect(wrapper.find('PlainButton').at(0).prop('aria-label')).toBe('Decrease column size');
    expect(wrapper.find('PlainButton').at(1).prop('aria-label')).toBe('Increase column size');
  });
});