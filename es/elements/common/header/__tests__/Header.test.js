function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderBase as Header } from '../Header';
describe('elements/common/header/Header', function () {
  var intl = {
    formatMessage: jest.fn().mockImplementation(function (message) {
      return message.defaultMessage;
    })
  };

  var renderComponent = function renderComponent(props) {
    return render(React.createElement(Header, _extends({
      intl: intl
    }, props)));
  };

  test('renders Logo component when isHeaderLogoVisible is `true`', function () {
    renderComponent({
      isHeaderLogoVisible: true
    });
    expect(screen.getByTestId('be-Logo')).toBeInTheDocument();
  });
  test('does not render Logo component when isHeaderLogoVisible is `false`', function () {
    renderComponent({
      isHeaderLogoVisible: false
    });
    expect(screen.queryByTestId('be-Logo')).not.toBeInTheDocument();
  });
  test('renders matching values for aria-label and placeholder attributes', function () {
    renderComponent();
    var searchInput = screen.getByTestId('be-Header-searchInput');
    var searchMessage = 'Search files and folders';
    expect(searchInput.getAttribute('aria-label')).toBe(searchMessage);
    expect(searchInput.getAttribute('placeholder')).toBe(searchMessage);
  });
  test('disables search input when view is not `folder` and not `search`', function () {
    renderComponent({
      view: 'recents'
    });
    expect(screen.getByTestId('be-Header-searchInput')).toBeDisabled();
  });
  test.each(['folder', 'search'])('does not disable search input when view is %s', function (view) {
    renderComponent({
      view: view
    });
    expect(screen.getByTestId('be-Header-searchInput')).not.toBeDisabled();
  });
});