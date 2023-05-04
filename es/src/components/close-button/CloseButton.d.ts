import './CloseButton.scss';
export interface CloseButtonProps {
    /** Custom class for the close button */
    className?: string;
    /** onClick handler for the close button */
    onClick?: Function;
}
declare const CloseButton: ({ className, onClick }: CloseButtonProps) => JSX.Element;
export default CloseButton;
