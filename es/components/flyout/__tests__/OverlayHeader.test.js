import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlyoutContext from '../FlyoutContext';
import OverlayHeader from '../OverlayHeader';
describe('components/flyout/OverlayHeader', function () {
  describe('render()', function () {
    test('should render correctly with custom className', function () {
      var classNameCustom = 'oh-class';
      var classNameChild = 'child-class';

      var _render = render(React.createElement(OverlayHeader, {
        className: classNameCustom
      }, React.createElement("div", {
        className: classNameChild
      }))),
          container = _render.container;

      expect(container.firstChild).toHaveClass('bdl-OverlayHeader');
      expect(screen.queryByTestId('bdl-CloseButton')).toBeInTheDocument();
      expect(container.querySelector(".".concat(classNameCustom))).toBeInTheDocument();
      expect(container.querySelector(".".concat(classNameChild))).toBeInTheDocument();
    });
  });
  describe('closeOverlay()', function () {
    test('should call closeOverlay() from context when CloseButton clicked', function () {
      var closeOverlay = jest.fn();
      render(React.createElement(FlyoutContext.Provider, {
        value: {
          closeOverlay: closeOverlay
        }
      }, React.createElement(OverlayHeader, null, React.createElement("p", null, "Hi"))));
      fireEvent.click(screen.getByRole('button'));
      expect(closeOverlay).toHaveBeenCalledTimes(1);
    });
  });
  describe('handleClick()', function () {
    test('should prevent default and stop propagation when elements in handleClick called', function () {
      var overlayClick = jest.fn();
      render(React.createElement("div", {
        role: "presentation",
        onClick: overlayClick
      }, React.createElement(OverlayHeader, null, React.createElement("p", null, "Hi"))));
      fireEvent.click(screen.getByRole('button'));
      expect(overlayClick).toHaveBeenCalledTimes(0);
    });
  });
});