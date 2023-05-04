function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from '@testing-library/react';
import HeaderWithCount from '../HeaderWithCount';
describe('features/content-insights/HeaderWithCount', function () {
  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return render(React.createElement(HeaderWithCount, _extends({
      title: "Title type",
      totalCount: 3
    }, props)));
  };

  describe('render', function () {
    test('should render correctly', function () {
      var wrapper = getWrapper();
      expect(wrapper.getByText('Title type')).toBeVisible();
      expect(wrapper.getByText('3')).toBeVisible();
    });
    test.each([undefined, null])('should only render the title if %s count is provided', function (totalCount) {
      var wrapper = getWrapper({
        totalCount: totalCount
      });
      expect(wrapper.getByText('Title type')).toBeVisible();
      expect(wrapper.container.querySelector('.HeaderWithCount-titleCount')).toBeNull();
    });
  });
});