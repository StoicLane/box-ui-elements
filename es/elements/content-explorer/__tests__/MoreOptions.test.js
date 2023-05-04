function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Menu from '../../../components/menu/Menu';
import MoreOptions from '../MoreOptions';
var intlMock = {
  formatMessage: jest.fn().mockReturnValue('More options')
};
describe('elements/content-explorer/MoreOptions', function () {
  var defaultProps = {
    item: {
      permissions: {}
    }
  };

  var getWrapper = function getWrapper(props) {
    return mount(React.createElement(MoreOptions, _extends({
      intl: intlMock
    }, defaultProps, props)));
  };

  test('should have aria-label for the `More options` button', function () {
    var props = {
      canDelete: true,
      item: {
        permissions: {
          can_delete: true
        }
      }
    };
    var wrapper = getWrapper(props);
    var moreOptionsButton = wrapper.find('.bce-btn-more-options');
    expect(moreOptionsButton.at(0).prop('aria-label')).toBe('More options');
  });
  test('should not show `Menu` with no actions allowed', function () {
    var wrapper = getWrapper();
    var menu = wrapper.find(Menu);
    expect(menu.exists()).toBe(false);
  });
});