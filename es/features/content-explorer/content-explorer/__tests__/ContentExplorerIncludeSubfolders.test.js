function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { ContentExplorerIncludeSubfoldersBase as ContentExplorerIncludeSubfolders } from '../ContentExplorerIncludeSubfolders';
describe('features/content-explorer/content-explorer/ContentExplorerIncludeSubfolders', function () {
  var renderComponent = function renderComponent(props) {
    return shallow(React.createElement(ContentExplorerIncludeSubfolders, _extends({
      intl: {
        formatMessage: function formatMessage() {}
      }
    }, props)));
  };

  describe('render()', function () {
    test('should render the default component', function () {
      var isDisabled = true;
      var onChange = jest.fn();
      var wrapper = renderComponent({
        isDisabled: isDisabled,
        onChange: onChange
      });
      var toggle = wrapper.find('Toggle');
      expect(toggle.prop('onChange')).toBe(onChange);
      expect(toggle.prop('isDisabled')).toBe(isDisabled);
    });
    test('should render toggle label correctly', function () {
      var wrapper = renderComponent();
      var toggleLabelId = wrapper.find('Toggle').dive().find('FormattedMessage').prop('id');
      expect(toggleLabelId).toBe('boxui.contentExplorer.includeSubfolders');
    });
    test('should render the info icon Tooltip based on value from tooltipMessage', function () {
      var tooltipMessage = {
        test: 'test'
      };
      var wrapper = renderComponent({
        tooltipMessage: tooltipMessage
      });
      var expectedMessage = wrapper.find('Toggle').dive().find('Tooltip').prop('text').props;
      expect(expectedMessage).toEqual(tooltipMessage);
    });
  });
});