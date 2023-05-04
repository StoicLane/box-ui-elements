/**
 * 
 * @file Sidebar Toggle component
 * @author Box
 */
import * as React from 'react';
import SidebarToggleButton from '../../components/sidebar-toggle-button/SidebarToggleButton';
import { SIDEBAR_NAV_TARGETS } from '../common/interactionTargets';
import { withRouter } from '../common/routing';

var SidebarToggle = function SidebarToggle(_ref) {
  var history = _ref.history,
      location = _ref.location,
      isOpen = _ref.isOpen;
  return React.createElement(SidebarToggleButton, {
    "data-resin-target": SIDEBAR_NAV_TARGETS.TOGGLE,
    "data-testid": "sidebartoggle" // $FlowFixMe
    ,
    isOpen: isOpen,
    onClick: function onClick(event) {
      event.preventDefault();
      history.replace(location.pathname, {
        open: !isOpen
      });
    }
  });
};

export { SidebarToggle as SidebarToggleComponent };
export default withRouter(SidebarToggle);
//# sourceMappingURL=SidebarToggle.js.map