/**
 * @flow
 * @file Preview Navigation
 * @author Box
 */

import * as React from 'react';
import { useIntl } from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';
import type { BoxItem } from '../../common/types/core';
import PlainButton from '../../components/plain-button/PlainButton';
import IconNavigateLeft from '../../icons/general/IconNavigateLeft';
import IconNavigateRight from '../../icons/general/IconNavigateRight';
import messages from '../common/messages';

type Props = {
    collection: Array<string | BoxItem>,
    currentIndex: number,
    onNavigateLeft: Function,
    onNavigateRight: Function,
};

export const PreviewNavigation = ({ collection = [], currentIndex, onNavigateLeft, onNavigateRight }: Props) => {
    const { activeTab, deeplink } = useParams();
    const intl = useIntl();
    const navigate = useNavigate();

    const hasLeftNavigation = currentIndex > 0;
    const hasRightNavigation = currentIndex < collection.length - 1;

    if (!hasLeftNavigation && !hasRightNavigation) {
        return null;
    }

    return (
        <>
            {hasLeftNavigation && (
                <PlainButton
                    className="bcpr-navigate-left"
                    onClick={() => {
                        if (deeplink) {
                            navigate(`/vault/${activeTab}`);
                        }
                        onNavigateLeft();
                    }}
                    title={intl.formatMessage(messages.previousFile)}
                >
                    <IconNavigateLeft />
                </PlainButton>
            )}
            {hasRightNavigation && (
                <PlainButton
                    className="bcpr-navigate-right"
                    onClick={() => {
                        if (deeplink) {
                            navigate(`/vault/${activeTab}`);
                        }
                        onNavigateRight();
                    }}
                    title={intl.formatMessage(messages.nextFile)}
                >
                    <IconNavigateRight />
                </PlainButton>
            )}
        </>
    );
};

export default PreviewNavigation;
