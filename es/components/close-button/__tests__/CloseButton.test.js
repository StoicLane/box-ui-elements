import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CloseButton from '../CloseButton';
describe('components/close-button/CloseButton', function () {
  describe('render()', function () {
    test('should correctly render', function () {
      render(React.createElement(CloseButton, null));
      var closeButton = screen.getByRole('button');
      expect(closeButton).toHaveAttribute('type', 'button');
      expect(closeButton).toHaveClass('bdl-CloseButton');
    });
    test('should have custom className', function () {
      var customClass = 'custom-class';
      render(React.createElement(CloseButton, {
        className: customClass
      }));
      var closeButton = screen.getByRole('button');
      expect(closeButton).toHaveClass(customClass);
      expect(closeButton).toHaveClass('bdl-CloseButton');
    });
  });
  describe('onClick()', function () {
    test('should call custom handler when clicked', function () {
      var handleClick = jest.fn();
      render(React.createElement(CloseButton, {
        onClick: handleClick
      }));
      var closeButton = screen.getByRole('button');
      fireEvent.click(closeButton);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});