import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypePropType } from '../prop-types';
import IconCell from '../../../elements/common/item/IconCell';

var ItemListIcon = function ItemListIcon(_ref) {
  var type = _ref.type,
      extension = _ref.extension,
      _ref$hasCollaboration = _ref.hasCollaborations,
      hasCollaborations = _ref$hasCollaboration === void 0 ? false : _ref$hasCollaboration,
      _ref$isExternallyOwne = _ref.isExternallyOwned,
      isExternallyOwned = _ref$isExternallyOwne === void 0 ? false : _ref$isExternallyOwne;
  var rowData = {
    type: type,
    extension: extension,
    has_collaborations: hasCollaborations,
    is_externally_owned: isExternallyOwned
  };
  return React.createElement(IconCell, {
    rowData: rowData
  });
};

ItemListIcon.propTypes = {
  type: ItemTypePropType,
  extension: PropTypes.string,
  hasCollaborations: PropTypes.bool,
  isExternallyOwned: PropTypes.bool
};
export default ItemListIcon;
//# sourceMappingURL=ItemListIcon.js.map