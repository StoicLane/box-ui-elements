import React from 'react';
import { IntlShape } from 'react-intl';
import { PlainButtonProps } from '../../components/plain-button';
import './SidebarNavSignButton.scss';
export declare type Props = PlainButtonProps & {
    blockedReason?: string;
    intl: IntlShape;
    status?: string;
    targetingApi?: {
        canShow: boolean;
        onClose: () => void;
        onComplete: () => void;
        onShow: () => void;
    };
};
export declare const PlaceholderTooltip: ({ children }: {
    children: React.ReactNode;
}) => React.ReactNode;
export declare function SidebarNavSignButton({ blockedReason, intl, status, targetingApi, ...rest }: Props): JSX.Element;
declare const _default;
export default _default;
