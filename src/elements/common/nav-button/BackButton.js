/**
 * @flow
 * @file Back Button component
 * @author Box
 */

import classNames from 'classnames';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate, type Location } from 'react-router-dom';
import PlainButton from '../../../components/plain-button';
import IconNavigateLeft from '../../../icons/general/IconNavigateLeft';
import messages from '../messages';
import './BackButton.scss';

type Props = {
    className?: string,
    to?: Location,
};

const BackButton = ({ className, to, ...rest }: Props) => {
    const navigate = useNavigate();
    return (
        <PlainButton
            className={classNames('bdl-BackButton', className)}
            onClick={() => (to ? navigate(to) : navigate(-1))}
            type="button"
            {...rest}
        >
            <IconNavigateLeft height={24} width={24} />
            <span className="accessibility-hidden">
                <FormattedMessage {...messages.back} />
            </span>
        </PlainButton>
    );
};

export default BackButton;
