import { Location } from 'history';
import * as React from 'react';
import { Action, AnnotationActionEvent, Annotator, GetMatchPath } from './types';
export declare type ActiveChangeEvent = {
    annotationId: string | null;
    fileVersionId: string;
};
export declare type ActiveChangeEventHandler = (event: ActiveChangeEvent) => void;
export declare type ComponentWithAnnotations = {
    emitActiveAnnotationChangeEvent: (id: string | null) => void;
    emitAnnotationRemoveEvent: (id: string, isStartEvent?: boolean) => void;
    emitAnnotationReplyCreateEvent: (reply: Object, requestId: string, annotationId: string, isStartEvent?: boolean) => void;
    emitAnnotationReplyDeleteEvent: (id: string, annotationId: string, isStartEvent?: boolean) => void;
    emitAnnotationReplyUpdateEvent: (reply: Object, annotationId: string, isStartEvent?: boolean) => void;
    emitAnnotationUpdateEvent: (annotation: Object, isStartEvent?: boolean) => void;
    getAction: (eventData: AnnotationActionEvent) => Action;
    getAnnotationsPath: (fileVersionId?: string, annotationId?: string | null) => string;
    getMatchPath: GetMatchPath;
    handleActiveChange: ActiveChangeEventHandler;
    handleAnnotationChangeEvent: (id: string | null) => void;
    handleAnnotationCreate: (eventData: AnnotationActionEvent) => void;
    handleAnnotationDelete: (eventData: AnnotationActionEvent) => void;
    handleAnnotationFetchError: ({ error }: {
        error: Error;
    }) => void;
    handleAnnotationReplyCreate: (eventData: AnnotationActionEvent) => void;
    handleAnnotationReplyDelete: (eventData: AnnotationActionEvent) => void;
    handleAnnotationReplyUpdate: (eventData: AnnotationActionEvent) => void;
    handleAnnotationUpdate: (eventData: AnnotationActionEvent) => void;
    handleAnnotator: (annotator: Annotator) => void;
    handlePreviewDestroy: (shouldReset?: boolean) => void;
};
export declare type WithAnnotationsProps = {
    location?: Location;
    onAnnotator: (annotator: Annotator) => void;
    onError?: (error: Error, code: string, contextInfo?: Record<string, unknown>) => void;
    onPreviewDestroy: (shouldReset?: boolean) => void;
};
export declare type WithAnnotationsComponent<P> = React.ComponentClass<P & WithAnnotationsProps>;
export default function withAnnotations<P extends object>(WrappedComponent: React.ComponentType<P>): WithAnnotationsComponent<P>;
