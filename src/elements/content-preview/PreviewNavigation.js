/**
 * @flow
 * @file Preview Navigation
 * @author Box
 */

import * as React from 'react';
import { useIntl } from 'react-intl';
import { Route, Routes, useMatch, useNavigate } from 'react-router-dom';
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

const PreviewNavigation = ({ collection = [], currentIndex, onNavigateLeft, onNavigateRight }: Props) => {
    const hasLeftNavigation = collection.length > 1 && currentIndex > 0 && currentIndex < collection.length;
    const hasRightNavigation = collection.length > 1 && currentIndex > -1 && currentIndex < collection.length - 1;

    if (!hasLeftNavigation && !hasRightNavigation) {
        return null;
    }

    return (
        <Routes>
            <Route
                path="/:activeTab/:deeplink"
                element={
                    <PreviewNavigationComponent
                        onNavigateLeft={onNavigateLeft}
                        onNavigateRight={onNavigateRight}
                        hasLeftNavigation={hasLeftNavigation}
                        hasRightNavigation={hasRightNavigation}
                    />
                }
            />
            <Route
                path="/"
                element={
                    <PreviewNavigationComponent
                        onNavigateLeft={onNavigateLeft}
                        onNavigateRight={onNavigateRight}
                        hasLeftNavigation={hasLeftNavigation}
                        hasRightNavigation={hasRightNavigation}
                    />
                }
            />
        </Routes>
    );
};

function PreviewNavigationComponent({ hasLeftNavigation, hasRightNavigation, onNavigateLeft, onNavigateRight }: any) {
    const match = useMatch('/:activeTab/:deeplink') || {};
    const navigate = useNavigate();
    const intl = useIntl();

    return (
        <>
            {hasLeftNavigation && (
                <PlainButton
                    className="bcpr-navigate-left"
                    onClick={() => {
                        if (match.params.deeplink) {
                            navigate(`/${match.params.activeTab}`);
                        }
                        onNavigateLeft();
                    }}
                    title={intl.formatMessage(messages.previousFile)}
                    type="button"
                >
                    <IconNavigateLeft />
                </PlainButton>
            )}
            {hasRightNavigation && (
                <PlainButton
                    className="bcpr-navigate-right"
                    onClick={() => {
                        if (match.params.deeplink) {
                            navigate(`/${match.params.activeTab}`);
                        }
                        onNavigateRight();
                    }}
                    title={intl.formatMessage(messages.nextFile)}
                    type="button"
                >
                    <IconNavigateRight />
                </PlainButton>
            )}
        </>
    );
}

export { PreviewNavigation as PreviewNavigationComponent };
export default PreviewNavigation;
