import React from 'react';
import ItemListIcon from '../ItemListIcon';
describe('features/content-explorer/item-list/ItemListIcon', function () {
  var renderComponent = function renderComponent(props) {
    return shallow(React.createElement(ItemListIcon, props));
  };

  describe('render()', function () {
    test('should render default component', function () {
      var wrapper = renderComponent();
      expect(wrapper.find('IconCell').length).toBe(1);
      expect(wrapper.prop('rowData')).toEqual({
        type: undefined,
        extension: undefined,
        has_collaborations: false,
        is_externally_owned: false
      });
    });
    [// personalFolder
    {
      type: 'folder',
      hasCollaborations: false,
      isExternallyOwned: false
    }, // collabFolder
    {
      type: 'folder',
      hasCollaborations: true,
      isExternallyOwned: false
    }, // externalCollabFolder
    {
      type: 'folder',
      hasCollaborations: true,
      isExternallyOwned: true
    }, // externalFolder
    {
      type: 'folder',
      hasCollaborations: false,
      isExternallyOwned: true
    }].forEach(function (rowData) {
      test('should render correct folder icon', function () {
        var wrapper = renderComponent(rowData);
        expect(wrapper.find('IconCell').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
      });
    });
    test('should render correct file icon', function () {
      var rowData = {
        type: 'file',
        extension: 'boxnote'
      };
      var wrapper = renderComponent(rowData);
      expect(wrapper.find('IconCell').length).toBe(1);
      expect(wrapper.prop('rowData')).toEqual(expect.objectContaining(rowData));
    });
    test('should render correct bookmark icon', function () {
      var rowData = {
        type: 'web_link'
      };
      var wrapper = renderComponent(rowData);
      expect(wrapper.find('IconCell').length).toBe(1);
      expect(wrapper.prop('rowData')).toEqual(expect.objectContaining(rowData));
    });
  });
});