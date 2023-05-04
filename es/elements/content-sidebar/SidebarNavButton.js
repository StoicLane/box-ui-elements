/**
 * 
 * @file Preview sidebar nav button component
 * @author Box
 */
import * as React from 'react';
import { useMatch } from 'react-router-dom';
import Tooltip from '../../components/tooltip/Tooltip';
import NavButton from '../common/nav-button';
import './SidebarNavButton.scss';
var SidebarNavButton = React.forwardRef(function (props, ref) {
  var dataResinTarget = props['data-resin-target'],
      dataTestId = props['data-testid'],
      children = props.children,
      _props$elementId = props.elementId,
      elementId = _props$elementId === void 0 ? '' : _props$elementId,
      isOpen = props.isOpen,
      sidebarView = props.sidebarView,
      tooltip = props.tooltip;
  var sidebarPath = "/vault/".concat(sidebarView);
  var match = useMatch(sidebarPath);
  var isMatch = !!match;

  var isActive = function isActive() {
    return isMatch && !!isOpen;
  };

  var isActiveValue = isActive();
  var isExactMatch = isMatch && (match === null || match === void 0 ? void 0 : match.isExact);
  var id = "".concat(elementId).concat(elementId === '' ? '' : '_').concat(sidebarView);
  return React.createElement(Tooltip, {
    position: "middle-left",
    text: tooltip,
    isTabbable: false
  }, React.createElement(NavButton, {
    activeClassName: "bcs-is-selected",
    "aria-selected": isActiveValue,
    "aria-controls": "".concat(id, "-content"),
    "aria-label": tooltip,
    className: "bcs-NavButton",
    "data-resin-target": dataResinTarget,
    "data-testid": dataTestId,
    getDOMRef: ref,
    id: id,
    isActive: isActive,
    replace: isExactMatch,
    role: "tab",
    tabIndex: isActiveValue ? '0' : '-1',
    to: {
      pathname: sidebarPath,
      state: {
        open: true
      }
    },
    type: "button"
  }, children));
});
export default SidebarNavButton;
//# sourceMappingURL=SidebarNavButton.js.map