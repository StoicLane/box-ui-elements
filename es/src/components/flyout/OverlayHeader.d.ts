import * as React from 'react';
import './OverlayHeader.scss';
export interface OverlayHeaderProps {
    /** Components to render in the header */
    children?: React.ReactNode;
    /** Set className to the overlay header */
    className?: string;
}
declare const OverlayHeader: ({ children, className }: OverlayHeaderProps) => JSX.Element;
export default OverlayHeader;
