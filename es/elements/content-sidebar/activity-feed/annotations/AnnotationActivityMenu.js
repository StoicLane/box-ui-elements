import * as React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import DropdownMenu from '../../../../components/dropdown-menu';
import Checkmark16 from '../../../../icon/fill/Checkmark16';
import IconEllipsis from '../../../../icons/general/IconEllipsis';
import Pencil16 from '../../../../icon/line/Pencil16';
import PlainButton from '../../../../components/plain-button';
import Trash16 from '../../../../icon/line/Trash16';
import X16 from '../../../../icon/fill/X16';
import { Menu, MenuItem } from '../../../../components/menu';
import { ACTIVITY_TARGETS } from '../../../common/interactionTargets';
import { COMMENT_STATUS_OPEN, COMMENT_STATUS_RESOLVED } from '../../../../constants';
import { bdlGray50 } from '../../../../styles/variables';
import messages from './messages';
import './AnnotationActivityMenu.scss';

var AnnotationActivityMenu = function AnnotationActivityMenu(_ref) {
  var canDelete = _ref.canDelete,
      canEdit = _ref.canEdit,
      canResolve = _ref.canResolve,
      className = _ref.className,
      id = _ref.id,
      isDisabled = _ref.isDisabled,
      onDelete = _ref.onDelete,
      onEdit = _ref.onEdit,
      onMenuClose = _ref.onMenuClose,
      onMenuOpen = _ref.onMenuOpen,
      onStatusChange = _ref.onStatusChange,
      status = _ref.status;
  var menuProps = {
    'data-resin-component': 'preview',
    'data-resin-feature': 'annotations'
  };
  var isResolved = status === COMMENT_STATUS_RESOLVED;
  return React.createElement(DropdownMenu, {
    constrainToScrollParent: true,
    isRightAligned: true,
    onMenuClose: onMenuClose,
    onMenuOpen: onMenuOpen
  }, React.createElement(PlainButton, {
    className: classNames('bcs-AnnotationActivityMenu', className),
    isDisabled: isDisabled,
    "data-testid": "annotation-activity-actions-menu",
    type: "button"
  }, React.createElement(IconEllipsis, {
    color: bdlGray50,
    height: 16,
    width: 16
  })), React.createElement(Menu, menuProps, canResolve && isResolved && React.createElement(MenuItem, {
    className: "bcs-AnnotationActivityMenu-unresolveAnnotation",
    "data-resin-itemid": id,
    "data-resin-target": ACTIVITY_TARGETS.ANNOTATION_OPTIONS_UNRESOLVE,
    "data-testid": "unresolve-annotation-activity",
    onClick: function onClick() {
      return onStatusChange(COMMENT_STATUS_OPEN);
    }
  }, React.createElement(X16, null), React.createElement(FormattedMessage, messages.annotationActivityUnresolveMenuItem)), canResolve && !isResolved && React.createElement(MenuItem, {
    "data-resin-itemid": id,
    "data-resin-target": ACTIVITY_TARGETS.ANNOTATION_OPTIONS_RESOLVE,
    "data-testid": "resolve-annotation-activity",
    onClick: function onClick() {
      return onStatusChange(COMMENT_STATUS_RESOLVED);
    }
  }, React.createElement(Checkmark16, null), React.createElement(FormattedMessage, messages.annotationActivityResolveMenuItem)), canEdit && React.createElement(MenuItem, {
    "data-resin-itemid": id,
    "data-resin-target": ACTIVITY_TARGETS.ANNOTATION_OPTIONS_EDIT,
    "data-testid": "edit-annotation-activity",
    onClick: onEdit
  }, React.createElement(Pencil16, null), React.createElement(FormattedMessage, messages.annotationActivityEditMenuItem)), canDelete && React.createElement(MenuItem, {
    "data-resin-itemid": id,
    "data-resin-target": ACTIVITY_TARGETS.ANNOTATION_OPTIONS_DELETE,
    "data-testid": "delete-annotation-activity",
    onClick: onDelete
  }, React.createElement(Trash16, null), React.createElement(FormattedMessage, messages.annotationActivityDeleteMenuItem))));
};

export default AnnotationActivityMenu;
//# sourceMappingURL=AnnotationActivityMenu.js.map