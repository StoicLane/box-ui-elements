function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import Column from '@box/react-virtualized/dist/commonjs/Table/Column';
import ContentExplorer from '../content-explorer';
import { Modal } from '../../../components/modal';
import './ContentExplorerModal.scss';

var ContentExplorerModal = function ContentExplorerModal(_ref) {
  var _ref$breadcrumbProps = _ref.breadcrumbProps,
      breadcrumbProps = _ref$breadcrumbProps === void 0 ? {} : _ref$breadcrumbProps,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      customInput = _ref.customInput,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '' : _ref$description,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$isResponsive = _ref.isResponsive,
      isResponsive = _ref$isResponsive === void 0 ? false : _ref$isResponsive,
      onRequestClose = _ref.onRequestClose,
      onSelectedClick = _ref.onSelectedClick,
      onSelectItem = _ref.onSelectItem,
      rest = _objectWithoutProperties(_ref, ["breadcrumbProps", "className", "customInput", "title", "description", "isOpen", "isResponsive", "onRequestClose", "onSelectedClick", "onSelectItem"]);

  return React.createElement(Modal, {
    title: title,
    className: classNames('content-explorer-modal', className, {
      'bdl-ContentExplorerModal--responsive': isResponsive
    }),
    isOpen: isOpen,
    onRequestClose: onRequestClose
  }, description, React.createElement(ContentExplorer, _extends({
    breadcrumbProps: breadcrumbProps,
    customInput: customInput,
    isResponsive: isResponsive,
    onCancelButtonClick: onRequestClose,
    onSelectedClick: onSelectedClick,
    onSelectItem: onSelectItem,
    listWidth: 560,
    listHeight: 285
  }, rest)));
};

export default ContentExplorerModal;
//# sourceMappingURL=ContentExplorerModal.js.map