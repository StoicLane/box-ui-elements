function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { IconCellBase as IconCell } from '../IconCell';
var intl = {
  formatMessage: jest.fn().mockImplementation(function (message) {
    return message.defaultMessage;
  })
};
describe('elements/common/item/IconCell', function () {
  var getWrapper = function getWrapper(props) {
    return shallow(React.createElement(IconCell, _extends({
      intl: intl
    }, props)));
  };

  describe('render()', function () {
    test('should render default file icon', function () {
      var rowData = {
        type: undefined
      };
      var wrapper = getWrapper({
        rowData: rowData
      });
      expect(wrapper.name()).toBe('FileIcon');
      expect(wrapper.prop('extension')).toBe(undefined);
      expect(wrapper.prop('title')).toBe('File');
    });
    [// personalFolder
    {
      rowData: {
        type: 'folder',
        has_collaborations: false,
        is_externally_owned: false
      },
      title: 'Personal Folder'
    }, // collabFolder
    {
      rowData: {
        type: 'folder',
        has_collaborations: true,
        is_externally_owned: false
      },
      title: 'Collaborated Folder'
    }, // externalCollabFolder
    {
      rowData: {
        type: 'folder',
        has_collaborations: true,
        is_externally_owned: true
      },
      title: 'Collaborated Folder'
    }, // externalFolder
    {
      rowData: {
        type: 'folder',
        has_collaborations: false,
        is_externally_owned: true
      },
      title: 'External Folder'
    }].forEach(function (_ref) {
      var rowData = _ref.rowData,
          title = _ref.title;
      test('should render correct folder icon', function () {
        var wrapper = getWrapper({
          rowData: rowData
        });
        expect(wrapper.name()).toBe('FolderIcon');
        expect(wrapper.prop('isCollab')).toBe(rowData.has_collaborations);
        expect(wrapper.prop('isExternal')).toBe(rowData.is_externally_owned);
        expect(wrapper.prop('title')).toBe(title);
      });
    });
    test('should render correct file icon', function () {
      var extension = 'boxnote';
      var rowData = {
        type: 'file',
        extension: extension
      };
      var wrapper = getWrapper({
        rowData: rowData
      });
      expect(wrapper.name()).toBe('FileIcon');
      expect(wrapper.prop('extension')).toBe(extension);
      expect(wrapper.prop('title')).toBe('File');
    });
    test('should render correct bookmark icon', function () {
      var rowData = {
        type: 'web_link'
      };
      var wrapper = getWrapper({
        rowData: rowData
      });
      expect(wrapper.name()).toBe('BookmarkIcon');
      expect(wrapper.prop('title')).toBe('Bookmark');
    });
  });
});