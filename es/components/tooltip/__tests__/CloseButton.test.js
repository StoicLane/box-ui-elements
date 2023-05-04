function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { shallow } from 'enzyme';
import noop from 'lodash/noop';
import { CloseButtonBase as CloseButton } from '../CloseButton';
import PlainButton from '../../plain-button';
var intlMock = {
  formatMessage: jest.fn().mockReturnValue('Close')
};
describe('components/tooltip/CloseButton', function () {
  var defaultProps = {
    onClick: noop
  };

  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return shallow(React.createElement(CloseButton, _extends({
      intl: intlMock
    }, defaultProps, props)));
  };

  test('should call onClick when PlainButton is clicked', function () {
    var onClickMock = jest.fn();
    var wrapper = getWrapper({
      onClick: onClickMock
    });
    var plainButton = wrapper.find(PlainButton);
    expect(onClickMock).not.toBeCalled();
    plainButton.simulate('click');
    expect(onClickMock).toBeCalledTimes(1);
  });
  test('should have aria label `Close` on PlainButton', function () {
    var wrapper = getWrapper();
    var plainButton = wrapper.find(PlainButton);
    expect(plainButton.prop('aria-label')).toBe('Close');
  });
});