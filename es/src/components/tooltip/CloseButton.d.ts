import * as React from 'react';
import { IntlShape } from 'react-intl';
declare type Props = {
    intl: IntlShape;
    onClick: (event: React.SyntheticEvent<HTMLButtonElement, Event>) => void;
};
declare const CloseButton: ({ intl, onClick }: Props) => JSX.Element;
export { CloseButton as CloseButtonBase };
declare const _default;
export default _default;
