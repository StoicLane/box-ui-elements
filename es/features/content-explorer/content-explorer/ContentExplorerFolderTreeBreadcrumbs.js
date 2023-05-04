function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';
import Arrow16 from '../../../icon/fill/Arrow16';
import Button from '../../../components/button';
import DropdownMenu from '../../../components/dropdown-menu/DropdownMenu';
import IconFolderTree from '../../../icons/general/IconFolderTree';
import { Menu, MenuItem } from '../../../components/menu';
import { FoldersPathPropType } from '../prop-types';
import messages from '../messages';
import { FOLDER_TREE_ICON_HEIGHT, FOLDER_TREE_ICON_WIDTH, BREADCRUMB_ARROW_ICON_HEIGHT, BREADCRUMB_ARROW_ICON_WIDTH, BREADCRUMB_ARROW_ICON_VIEWBOX } from './constants';

var ContentExplorerFolderTreeBreadcrumbs = function ContentExplorerFolderTreeBreadcrumbs(_ref) {
  var foldersPath = _ref.foldersPath,
      _ref$intl = _ref.intl,
      formatMessage = _ref$intl.formatMessage,
      formatNumber = _ref$intl.formatNumber,
      isFolderTreeButtonHidden = _ref.isFolderTreeButtonHidden,
      numTotalItems = _ref.numTotalItems,
      onBreadcrumbClick = _ref.onBreadcrumbClick;
  var currentFolderName = foldersPath[foldersPath.length - 1].name;
  var foldersPathWithoutLast = foldersPath.slice(0, -1);
  return React.createElement("div", {
    className: "bdl-ContentExplorerFolderTreeBreadcrumbs"
  }, !isFolderTreeButtonHidden && React.createElement(DropdownMenu, null, React.createElement(Button, {
    "aria-label": formatMessage(messages.clickToViewPath),
    className: "bdl-ContentExplorerFolderTreeBreadcrumbs-button",
    title: formatMessage(messages.filePath),
    type: "button"
  }, React.createElement(IconFolderTree, {
    height: FOLDER_TREE_ICON_HEIGHT,
    width: FOLDER_TREE_ICON_WIDTH
  })), React.createElement(Menu, null, foldersPathWithoutLast.map(function (folder, i) {
    return React.createElement(MenuItem, {
      "data-testid": "folder-tree-item",
      key: folder.id,
      onClick: function onClick(event) {
        return onBreadcrumbClick(i, event);
      }
    }, folder.name);
  }))), !isFolderTreeButtonHidden && React.createElement(Arrow16, {
    className: "bdl-ContentExplorerFolderTreeBreadcrumbs-icon",
    height: BREADCRUMB_ARROW_ICON_HEIGHT,
    width: BREADCRUMB_ARROW_ICON_WIDTH,
    viewBox: BREADCRUMB_ARROW_ICON_VIEWBOX
  }), React.createElement("span", {
    className: "bdl-ContentExplorerFolderTreeBreadcrumbs-text",
    title: currentFolderName
  }, React.createElement(FormattedMessage, _extends({}, messages.folderTreeBreadcrumbsText, {
    values: {
      folderName: currentFolderName,
      totalItems: formatNumber(numTotalItems)
    }
  }))));
};

ContentExplorerFolderTreeBreadcrumbs.propTypes = {
  foldersPath: FoldersPathPropType.isRequired,
  intl: PropTypes.any,
  isFolderTreeButtonHidden: PropTypes.bool,
  numTotalItems: PropTypes.number.isRequired,
  onBreadcrumbClick: PropTypes.func
};
export { ContentExplorerFolderTreeBreadcrumbs as ContentExplorerFolderTreeBreadcrumbsBase };
export default injectIntl(ContentExplorerFolderTreeBreadcrumbs);
//# sourceMappingURL=ContentExplorerFolderTreeBreadcrumbs.js.map