import './ProgressBar.scss';
export interface ProgressBarProps {
    className?: string;
    /** A number between 0 and 100 inclusive representing the width percentage */
    progress?: number;
}
declare const ProgressBar: ({ className, progress }: ProgressBarProps) => JSX.Element;
export default ProgressBar;
