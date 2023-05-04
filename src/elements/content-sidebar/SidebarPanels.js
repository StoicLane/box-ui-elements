/**
 * @flow
 * @file Content Sidebar Panels component
 * @author Box
 */

import flow from 'lodash/flow';
import * as React from 'react';
import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';
import type { BoxItem, User } from '../../common/types/core';
import {
    ORIGIN_ACTIVITY_SIDEBAR,
    ORIGIN_DETAILS_SIDEBAR,
    ORIGIN_METADATA_SIDEBAR,
    ORIGIN_SKILLS_SIDEBAR,
    SIDEBAR_VIEW_ACTIVITY,
    SIDEBAR_VIEW_DETAILS,
    SIDEBAR_VIEW_METADATA,
    SIDEBAR_VIEW_SKILLS,
} from '../../constants';
import { withAnnotatorContext } from '../common/annotator-context';
import { withAPIContext } from '../common/api-context';
import type { Errors } from '../common/flowTypes';
import { withRouterAndRef } from '../common/routing';
import type { ActivitySidebarProps } from './ActivitySidebar';
import type { DetailsSidebarProps } from './DetailsSidebar';
import type { MetadataSidebarProps } from './MetadataSidebar';
import SidebarUtils from './SidebarUtils';
import type { VersionsSidebarProps } from './versions';
import withSidebarAnnotations from './withSidebarAnnotations';

type Props = {
    activitySidebarProps: ActivitySidebarProps,
    currentUser?: User,
    currentUserError?: Errors,
    detailsSidebarProps: DetailsSidebarProps,
    elementId: string,
    file: BoxItem,
    fileId: string,
    getPreview: Function,
    getViewer: Function,
    hasActivity: boolean,
    hasDetails: boolean,
    hasMetadata: boolean,
    hasSkills: boolean,
    hasVersions: boolean,
    isOpen: boolean,
    metadataSidebarProps: MetadataSidebarProps,
    onAnnotationSelect?: Function,
    onVersionChange?: Function,
    onVersionHistoryClick?: Function,
    versionsSidebarProps: VersionsSidebarProps,
};

type State = {
    isInitialized: boolean,
};

type ElementRefType = {
    current: null | Object,
};

// TODO: place into code splitting logic
const BASE_EVENT_NAME = '_JS_LOADING';
const MARK_NAME_JS_LOADING_DETAILS = `${ORIGIN_DETAILS_SIDEBAR}${BASE_EVENT_NAME}`;
const MARK_NAME_JS_LOADING_ACTIVITY = `${ORIGIN_ACTIVITY_SIDEBAR}${BASE_EVENT_NAME}`;
const MARK_NAME_JS_LOADING_SKILLS = `${ORIGIN_SKILLS_SIDEBAR}${BASE_EVENT_NAME}`;
const MARK_NAME_JS_LOADING_METADATA = `${ORIGIN_METADATA_SIDEBAR}${BASE_EVENT_NAME}`;
// const MARK_NAME_JS_LOADING_VERSIONS = `${ORIGIN_VERSIONS_SIDEBAR}${BASE_EVENT_NAME}`;

const URL_TO_FEED_ITEM_TYPE = { annotations: 'annotation', comments: 'comment', tasks: 'task' };

const LoadableDetailsSidebar = SidebarUtils.getAsyncSidebarContent(SIDEBAR_VIEW_DETAILS, MARK_NAME_JS_LOADING_DETAILS);
const LoadableActivitySidebar = SidebarUtils.getAsyncSidebarContent(
    SIDEBAR_VIEW_ACTIVITY,
    MARK_NAME_JS_LOADING_ACTIVITY,
);
const LoadableSkillsSidebar = SidebarUtils.getAsyncSidebarContent(SIDEBAR_VIEW_SKILLS, MARK_NAME_JS_LOADING_SKILLS);
const LoadableMetadataSidebar = SidebarUtils.getAsyncSidebarContent(
    SIDEBAR_VIEW_METADATA,
    MARK_NAME_JS_LOADING_METADATA,
);
// const LoadableVersionsSidebar = SidebarUtils.getAsyncSidebarContent(
//     SIDEBAR_VIEW_VERSIONS,
//     MARK_NAME_JS_LOADING_VERSIONS,
// );

class SidebarPanels extends React.Component<Props, State> {
    activitySidebar: ElementRefType = React.createRef();

    detailsSidebar: ElementRefType = React.createRef();

    metadataSidebar: ElementRefType = React.createRef();

    state: State = { isInitialized: false };

    versionsSidebar: ElementRefType = React.createRef();

    componentDidMount() {
        this.setState({ isInitialized: true });
    }

    /**
     * Refreshes the contents of the active sidebar
     * @returns {void}
     */
    refresh(shouldRefreshCache: boolean = true): void {
        const { current: activitySidebar } = this.activitySidebar;
        const { current: detailsSidebar } = this.detailsSidebar;
        const { current: metadataSidebar } = this.metadataSidebar;
        const { current: versionsSidebar } = this.versionsSidebar;

        if (activitySidebar) {
            activitySidebar.refresh(shouldRefreshCache);
        }

        if (detailsSidebar) {
            detailsSidebar.refresh();
        }

        if (metadataSidebar) {
            metadataSidebar.refresh();
        }

        if (versionsSidebar) {
            versionsSidebar.refresh();
        }
    }

    render() {
        const {
            activitySidebarProps,
            currentUser,
            currentUserError,
            detailsSidebarProps,
            elementId,
            file,
            fileId,
            getPreview,
            getViewer,
            hasActivity,
            hasDetails,
            hasMetadata,
            hasSkills,
            hasVersions,
            isOpen,
            metadataSidebarProps,
            onAnnotationSelect,
            onVersionChange,
            onVersionHistoryClick,
        }: // versionsSidebarProps,
        Props = this.props;

        const { isInitialized } = this.state;

        if (!isOpen || (!hasActivity && !hasDetails && !hasMetadata && !hasSkills && !hasVersions)) {
            return null;
        }

        return (
            <Routes>
                <Route
                    path="/"
                    element={
                        <RedirectHandler
                            hasSkills={hasSkills}
                            hasActivity={hasActivity}
                            hasDetails={hasDetails}
                            hasMetadata={hasMetadata}
                            hasVersions={hasVersions}
                        />
                    }
                />
                {hasSkills && (
                    <Route
                        path={`/${SIDEBAR_VIEW_SKILLS}`}
                        element={
                            <LoadableSkillsSidebar
                                elementId={elementId}
                                key={file.id}
                                file={file}
                                getPreview={getPreview}
                                getViewer={getViewer}
                                hasSidebarInitialized={isInitialized}
                                startMarkName={MARK_NAME_JS_LOADING_SKILLS}
                            />
                        }
                    />
                )}
                {/* This handles both the default activity sidebar and the activity sidebar with a
                comment or task deeplink.  */}
                {hasActivity &&
                    [
                        `/${SIDEBAR_VIEW_ACTIVITY}`,
                        `/${SIDEBAR_VIEW_ACTIVITY}/:activeFeedEntryType(annotations)/:fileVersionId/:activeFeedEntryId?`,
                        `/${SIDEBAR_VIEW_ACTIVITY}/:activeFeedEntryType(comments|tasks)/:activeFeedEntryId?`,
                    ].map(path => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <ActivitySidebarWrapper
                                    elementId={elementId}
                                    currentUser={currentUser}
                                    currentUserError={currentUserError}
                                    file={file}
                                    hasSidebarInitialized={isInitialized}
                                    onAnnotationSelect={onAnnotationSelect}
                                    onVersionChange={onVersionChange}
                                    onVersionHistoryClick={onVersionHistoryClick}
                                    activitySidebarRef={this.activitySidebar}
                                    startMarkName={MARK_NAME_JS_LOADING_ACTIVITY}
                                    {...activitySidebarProps}
                                />
                            }
                        />
                    ))}
                {hasDetails && (
                    <Route
                        path={`/${SIDEBAR_VIEW_DETAILS}`}
                        element={
                            <LoadableDetailsSidebar
                                elementId={elementId}
                                fileId={fileId}
                                hasSidebarInitialized={isInitialized}
                                key={fileId}
                                hasVersions={hasVersions}
                                onVersionHistoryClick={onVersionHistoryClick}
                                ref={this.detailsSidebar}
                                startMarkName={MARK_NAME_JS_LOADING_DETAILS}
                                {...detailsSidebarProps}
                            />
                        }
                    />
                )}
                {hasMetadata && (
                    <Route
                        path={`/${SIDEBAR_VIEW_METADATA}`}
                        element={
                            <LoadableMetadataSidebar
                                elementId={elementId}
                                fileId={fileId}
                                hasSidebarInitialized={isInitialized}
                                ref={this.metadataSidebar}
                                startMarkName={MARK_NAME_JS_LOADING_METADATA}
                                {...metadataSidebarProps}
                            />
                        }
                    />
                )}
                {/* {hasVersions && (
                    <Route
                        path="/:sidebar(activity|details)/versions/:versionId?"
                        element={({ match }) => (
                            <LoadableVersionsSidebar
                                fileId={fileId}
                                hasSidebarInitialized={isInitialized}
                                key={fileId}
                                onVersionChange={onVersionChange}
                                parentName={match.params.sidebar}
                                ref={this.versionsSidebar}
                                versionId={match.params.versionId}
                                {...versionsSidebarProps}
                            />
                        )}
                    />
                )} */}
            </Routes>
        );
    }
}

function RedirectHandler({ hasSkills, hasActivity, hasDetails, hasMetadata }: any) {
    let redirect = '';

    if (hasSkills) {
        redirect = `${SIDEBAR_VIEW_SKILLS}`;
    } else if (hasActivity) {
        redirect = `${SIDEBAR_VIEW_ACTIVITY}`;
    } else if (hasDetails) {
        redirect = `${SIDEBAR_VIEW_DETAILS}`;
    } else if (hasMetadata) {
        redirect = `${SIDEBAR_VIEW_METADATA}`;
    }

    console.log('redirecting?', redirect);
    if (redirect) {
        return <Navigate to={`/vault/${redirect}`} />;
    }

    return <Outlet />;
}

function ActivitySidebarWrapper(props) {
    const { activeFeedEntryType: matchEntryType, activeFeedEntryId } = useParams();
    const activeFeedEntryType = matchEntryType ? URL_TO_FEED_ITEM_TYPE[matchEntryType] : undefined;

    return (
        <LoadableActivitySidebar
            {...props}
            activeFeedEntryId={activeFeedEntryId}
            activeFeedEntryType={activeFeedEntryId && activeFeedEntryType}
        />
    );
}

export { SidebarPanels as SidebarPanelsComponent };
export default flow([withSidebarAnnotations, withAPIContext, withAnnotatorContext, withRouterAndRef])(SidebarPanels);
