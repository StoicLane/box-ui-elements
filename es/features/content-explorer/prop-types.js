import PropTypes from 'prop-types';
import ContentExplorerModes from './modes';
import { TYPE_FILE, TYPE_FOLDER, TYPE_WEBLINK } from '../../constants';
var ContentExplorerModePropType = PropTypes.oneOf([ContentExplorerModes.COPY, ContentExplorerModes.MOVE_COPY, ContentExplorerModes.MULTI_SELECT, ContentExplorerModes.SELECT_FILE, ContentExplorerModes.SELECT_FOLDER]);
var FolderPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});
var FoldersPathPropType = PropTypes.arrayOf(FolderPropType);
var ItemTypePropType = PropTypes.oneOf([TYPE_FILE, TYPE_FOLDER, TYPE_WEBLINK]);
var ItemPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: ItemTypePropType,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  extension: PropTypes.string,
  hasCollaborations: PropTypes.bool,
  isExternallyOwned: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isActionDisabled: PropTypes.bool
});
var PlaceholderPropType = PropTypes.shape({
  isLoading: PropTypes.bool.isRequired,
  loadingPlaceholderColumnWidths: PropTypes.arrayOf(PropTypes.string)
});
var ItemOrPlaceholderPropType = PropTypes.oneOfType([ItemPropType, PlaceholderPropType]);
var ItemsPropType = PropTypes.arrayOf(ItemOrPlaceholderPropType);
var ItemsMapPropType = PropTypes.objectOf(ItemPropType);
var BreadcrumbPropType = PropTypes.shape({
  className: PropTypes.string,
  itemsBeforeOverflow: PropTypes.number,
  overflowIcon: PropTypes.node,
  threshold: PropTypes.number
});
export { BreadcrumbPropType, ContentExplorerModePropType, FolderPropType, FoldersPathPropType, ItemTypePropType, ItemPropType, ItemsPropType, ItemsMapPropType };
//# sourceMappingURL=prop-types.js.map