import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuContext from '../MenuContext';
import MenuHeader from '../MenuHeader';
describe('components/menu/MenuHeader', function () {
  describe('render()', function () {
    test('should render correctly with custom className', function () {
      var classNameCustom = 'oh-class';
      var classNameChild = 'child-class';

      var _render = render(React.createElement(MenuHeader, {
        title: React.createElement("div", {
          className: classNameChild
        }),
        className: classNameCustom
      })),
          container = _render.container;

      expect(container.firstChild).toHaveClass('bdl-MenuHeader');
      expect(screen.queryByTestId('bdl-CloseButton')).toBeInTheDocument();
      expect(container.querySelector(".".concat(classNameCustom))).toBeInTheDocument();
      expect(container.querySelector(".".concat(classNameChild))).toBeInTheDocument();
    });
  });
  describe('closeMenu()', function () {
    test('should call closeMenu() from context when CloseButton clicked', function () {
      var closeMenu = jest.fn();
      render(React.createElement(MenuContext.Provider, {
        value: {
          closeMenu: closeMenu
        }
      }, React.createElement(MenuHeader, null)));
      fireEvent.click(screen.getByRole('button'));
      expect(closeMenu).toHaveBeenCalledTimes(1);
    });
  });
});