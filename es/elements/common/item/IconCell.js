/**
 * 
 * @author Box
 */
import React from 'react';
import { injectIntl } from 'react-intl';
import FileIcon from '../../../icons/file-icon/FileIcon';
import FolderIcon from '../../../icons/folder-icon/FolderIcon';
import BookmarkIcon from '../../../icons/bookmark-icon/BookmarkIcon';
import { TYPE_FOLDER, TYPE_FILE, TYPE_WEBLINK } from '../../../constants';
import messages from '../messages';
import './IconCell.scss';

var IconCell = function IconCell(_ref) {
  var intl = _ref.intl,
      rowData = _ref.rowData,
      dimension = _ref.dimension;
  var type = rowData.type,
      extension = rowData.extension,
      has_collaborations = rowData.has_collaborations,
      is_externally_owned = rowData.is_externally_owned;
  var title;

  switch (type) {
    case TYPE_FILE:
      title = intl.formatMessage(messages.file);
      return React.createElement(FileIcon, {
        dimension: dimension,
        extension: extension,
        title: title
      });

    case TYPE_FOLDER:
      if (has_collaborations) {
        title = intl.formatMessage(messages.collaboratedFolder);
      } else if (is_externally_owned) {
        title = intl.formatMessage(messages.externalFolder);
      } else {
        title = intl.formatMessage(messages.personalFolder);
      }

      return React.createElement(FolderIcon, {
        dimension: dimension,
        isCollab: has_collaborations,
        isExternal: is_externally_owned,
        title: title
      });

    case TYPE_WEBLINK:
      title = intl.formatMessage(messages.bookmark);
      return React.createElement(BookmarkIcon, {
        height: dimension,
        width: dimension,
        title: title
      });

    default:
      title = intl.formatMessage(messages.file);
      return React.createElement(FileIcon, {
        dimension: dimension,
        title: title
      });
  }
};

export { IconCell as IconCellBase };
export default injectIntl(IconCell);
//# sourceMappingURL=IconCell.js.map