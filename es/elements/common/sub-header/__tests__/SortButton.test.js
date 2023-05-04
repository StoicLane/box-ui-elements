import React from 'react';
import Button from '../../../../components/button';
import IconSort from '../../../../icons/general/IconSort';
import { SortButtonBase } from '../SortButton';
var intlMock = {
  formatMessage: jest.fn().mockReturnValue('Sort')
};
describe('elements/common/sub-header/SortButton', function () {
  var getWrapper = function getWrapper() {
    return shallow(React.createElement(SortButtonBase, {
      intl: intlMock
    }));
  };

  test('should render IconSort', function () {
    var wrapper = getWrapper();
    expect(wrapper.exists(IconSort)).toBe(true);
  });
  test('should have aria-label "Sort"', function () {
    var wrapper = getWrapper();
    var button = wrapper.find(Button);
    expect(button.prop('aria-label')).toBe('Sort');
    expect(button.prop('aria-describedby')).toBeFalsy();
  });
});