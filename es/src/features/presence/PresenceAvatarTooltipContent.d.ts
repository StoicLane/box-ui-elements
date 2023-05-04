import { WrappedComponentProps } from 'react-intl';
import './PresenceAvatarTooltipContent.scss';
export declare type Props = {
    name: string;
    interactedAt: number;
    interactionType: string;
    isActive?: boolean;
} & WrappedComponentProps;
declare function PresenceAvatarTooltipContent({ name, interactedAt, interactionType, intl, isActive }: Props): JSX.Element;
export { PresenceAvatarTooltipContent as PresenceAvatarTooltipContentComponent };
declare const _default;
export default _default;
