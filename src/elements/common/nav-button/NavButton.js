/**
 * @flow
 * @file Nav Button component intended to mimic React Router's NavLink component for non-anchor elements
 * @author Box
 */

import classNames from 'classnames';
import * as React from 'react';
import type { Location, Match } from 'react-router-dom';
import { useLocation, useNavigate, useMatch } from 'react-router-dom';
import PlainButton from '../../../components/plain-button';
import { isLeftClick } from '../../../utils/dom';

type Props = {
    activeClassName?: string,
    children: React.Node,
    className?: string,
    component?: React.ComponentType<any>,
    exact?: boolean,
    isActive?: (match: Match, location: Location) => ?boolean,
    onClick?: (event: SyntheticEvent<>) => void,
    replace?: boolean,
    strict?: boolean,
    to: string | Location,
};

const NavButton = React.forwardRef<Props, React.Ref<any>>((props: Props, ref: React.Ref<any>) => {
    const {
        activeClassName = 'bdl-is-active',
        children,
        className = 'bdl-NavButton',
        component: Component = PlainButton,
        exact,
        isActive,
        onClick,
        replace,
        strict,
        to,
        ...rest
    } = props;

    const path = typeof to === 'object' ? to.pathname : to;
    const navigate = useNavigate();
    const location = useLocation();
    const match = useMatch(path);
    const isExactMatch = !exact || location.pathname === path;

    const isActiveValue = isActive ? isActive(match, location) : match && isExactMatch;

    const handleClick = event => {
        if (onClick) {
            onClick(event);
        }

        if (!event.defaultPrevented && isLeftClick(event)) {
            console.log('navbutton', to)
            navigate(typeof to === 'object' ? to.pathname : to, {
                state: typeof to === 'object' ? to.state : {},
                replace,
            });
        }
    };

    return (
        <Component
            className={classNames(className, { [activeClassName]: isActiveValue })}
            onClick={handleClick}
            ref={ref}
            {...rest}
        >
            {children}
        </Component>
    );
});

export default NavButton;
