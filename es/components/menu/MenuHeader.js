function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import classNames from 'classnames';
import CloseButton from '../close-button';
import MenuContext from './MenuContext';
import './MenuHeader.scss';

var MenuHeader = function MenuHeader(_ref) {
  var className = _ref.className,
      children = _ref.children,
      subtitle = _ref.subtitle,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, ["className", "children", "subtitle", "title"]);

  var _React$useContext = React.useContext(MenuContext),
      closeMenu = _React$useContext.closeMenu;

  return React.createElement("div", _extends({
    className: classNames('bdl-MenuHeader', className),
    "data-testid": "bdl-MenuHeader",
    role: "presentation"
  }, rest), React.createElement("div", {
    className: "bdl-MenuHeader-content"
  }, React.createElement("div", {
    className: "bdl-MenuHeader-title-container"
  }, title && React.createElement("div", {
    className: "bdl-MenuHeader-title"
  }, title), subtitle && React.createElement("div", {
    className: "bdl-MenuHeader-subtitle"
  }, subtitle)), children), React.createElement(CloseButton, {
    className: "bdl-MenuHeader-close-button",
    onClick: closeMenu
  }));
};

export default MenuHeader;
//# sourceMappingURL=MenuHeader.js.map