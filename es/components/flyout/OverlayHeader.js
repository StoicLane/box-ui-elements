import * as React from 'react';
import classNames from 'classnames';
import CloseButton from '../close-button/CloseButton'; // @ts-ignore flow

import FlyoutContext from './FlyoutContext';
import './OverlayHeader.scss';

var OverlayHeader = function OverlayHeader(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var handleClick = function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
  };

  var _React$useContext = React.useContext(FlyoutContext),
      closeOverlay = _React$useContext.closeOverlay;

  return React.createElement("div", {
    className: classNames('bdl-OverlayHeader', className),
    "data-testid": "bdl-OverlayHeader",
    onClick: handleClick,
    role: "presentation"
  }, React.createElement("div", {
    className: "bdl-OverlayHeader-content"
  }, children), React.createElement(CloseButton, {
    onClick: closeOverlay
  }));
};

export default OverlayHeader;
//# sourceMappingURL=OverlayHeader.js.map