function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { ContentExplorerFolderTreeBreadcrumbsBase as ContentExplorerFolderTreeBreadcrumbs } from '../ContentExplorerFolderTreeBreadcrumbs';
describe('features/content-explorer/content-explorer/ContentExplorerFolderTreeBreadcrumbs', function () {
  var numTotalItems = 12;

  var renderComponent = function renderComponent(props) {
    return shallow(React.createElement(ContentExplorerFolderTreeBreadcrumbs, _extends({
      foldersPath: [],
      intl: {
        formatMessage: function formatMessage() {
          return 'message';
        },
        formatNumber: function formatNumber(x) {
          return x;
        }
      },
      numTotalItems: numTotalItems
    }, props)));
  };

  describe('render()', function () {
    test('should render correct breadcrumbs', function () {
      var foldersPath = [{
        id: '0',
        name: 'folder1'
      }, {
        id: '1',
        name: 'folder2'
      }, {
        id: '2',
        name: 'folder3'
      }];
      var wrapper = renderComponent({
        foldersPath: foldersPath
      });
      expect(wrapper.find('.bdl-ContentExplorerFolderTreeBreadcrumbs').length).toBe(1);
      expect(wrapper.find('.bdl-ContentExplorerFolderTreeBreadcrumbs-button').length).toBe(1);
      expect(wrapper.find('.bdl-ContentExplorerFolderTreeBreadcrumbs-icon').length).toBe(1);
      expect(wrapper.find('IconFolderTree').length).toBe(1);
      expect(wrapper.find('DropdownMenu').length).toBe(1);
      var lastBreadcrumb = wrapper.find('.bdl-ContentExplorerFolderTreeBreadcrumbs-text');
      expect(lastBreadcrumb.length).toBe(1);
      expect(lastBreadcrumb.prop('title')).toBe(foldersPath[foldersPath.length - 1].name);
      var breadcrumbTextId = lastBreadcrumb.find('FormattedMessage').prop('id');
      expect(breadcrumbTextId).toBe('boxui.contentExplorer.folderTreeBreadcrumbsText');
    });
    test('should not render button nor icon when isFolderTreeButtonHidden is true', function () {
      var foldersPath = [{
        id: '0',
        name: 'folder1'
      }, {
        id: '1',
        name: 'folder2'
      }, {
        id: '2',
        name: 'folder3'
      }];
      var wrapper = renderComponent({
        foldersPath: foldersPath,
        isFolderTreeButtonHidden: true
      });
      expect(wrapper.find('.bdl-ContentExplorerFolderTreeBreadcrumbs').length).toBe(1);
      expect(wrapper.find('.bdl-ContentExplorerFolderTreeBreadcrumbs-button').length).toBe(0);
      expect(wrapper.find('.bdl-ContentExplorerFolderTreeBreadcrumbs-icon').length).toBe(0);
      expect(wrapper.find('IconFolderTree').length).toBe(0);
      expect(wrapper.find('DropdownMenu').length).toBe(0);
      var lastBreadcrumb = wrapper.find('.bdl-ContentExplorerFolderTreeBreadcrumbs-text');
      expect(lastBreadcrumb.length).toBe(1);
      expect(lastBreadcrumb.prop('title')).toBe(foldersPath[foldersPath.length - 1].name);
      var breadcrumbTextId = lastBreadcrumb.find('FormattedMessage').prop('id');
      expect(breadcrumbTextId).toBe('boxui.contentExplorer.folderTreeBreadcrumbsText');
    });
  });
  describe('onBreadcrumbClick', function () {
    test('should call onBreadcrumbClick when breadcrumb in folder tree is clicked', function () {
      var breadcrumbIndex = 1;
      var event = {};
      var onBreadcrumbClick = jest.fn();
      var foldersPath = [{
        id: '0',
        name: 'folder1'
      }, {
        id: '1',
        name: 'folder2'
      }, {
        id: '2',
        name: 'folder3'
      }];
      var wrapper = renderComponent({
        foldersPath: foldersPath,
        onBreadcrumbClick: onBreadcrumbClick
      });
      wrapper.find('[data-testid="folder-tree-item"]').at(breadcrumbIndex).simulate('click', event);
      expect(onBreadcrumbClick).toBeCalledTimes(1);
      expect(onBreadcrumbClick).toBeCalledWith(breadcrumbIndex, event);
    });
  });
});