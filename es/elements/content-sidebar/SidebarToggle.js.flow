/**
 * @flow strict
 * @file Sidebar Toggle component
 * @author Box
 */

import * as React from 'react';
import { type RouterHistory } from 'react-router-dom';
import SidebarToggleButton from '../../components/sidebar-toggle-button/SidebarToggleButton';
import { SIDEBAR_NAV_TARGETS } from '../common/interactionTargets';
import { withRouter } from '../common/routing';

type Props = {
    history: RouterHistory,
    isOpen?: boolean,
    location?: any,
};

const SidebarToggle = ({ history, location, isOpen }: Props) => {
    return (
        <SidebarToggleButton
            data-resin-target={SIDEBAR_NAV_TARGETS.TOGGLE}
            data-testid="sidebartoggle"
            // $FlowFixMe
            isOpen={isOpen}
            onClick={event => {
                event.preventDefault();
                history.replace(location.pathname, { open: !isOpen });
            }}
        />
    );
};

export { SidebarToggle as SidebarToggleComponent };
export default withRouter(SidebarToggle);
