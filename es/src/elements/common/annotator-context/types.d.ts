import { Location } from 'history';
import { match } from 'react-router-dom';
export declare const CREATE = "create";
export declare enum Action {
    CREATE_START = "create_start",
    CREATE_END = "create_end",
    DELETE_START = "delete_start",
    DELETE_END = "delete_end",
    SET_ACTIVE = "set_active",
    UPDATE_START = "update_start",
    UPDATE_END = "update_end",
    REPLY_CREATE_START = "reply_create_start",
    REPLY_CREATE_END = "reply_create_end",
    REPLY_DELETE_START = "reply_delete_start",
    REPLY_DELETE_END = "reply_delete_end",
    REPLY_UPDATE_START = "reply_update_start",
    REPLY_UPDATE_END = "reply_update_end"
}
export interface Annotator {
    addListener: (event: string | symbol, listener: (...args: any[]) => void) => void;
    emit: (event: string | symbol, ...args: any[]) => void;
    removeAllListeners: () => void;
    removeListener: (event: string | symbol, listener: (...args: any[]) => void) => void;
}
export interface AnnotatorState {
    activeAnnotationFileVersionId?: string | null;
    activeAnnotationId?: string | null;
    annotation?: {
        id?: string;
    } | null;
    annotationReply?: {
        id?: string;
    } | null;
    action?: Action | null;
    error?: Error | null;
    meta?: Metadata | null;
    origin?: string;
}
export declare type GetMatchPath = (location?: Location) => match<MatchParams> | null;
export interface AnnotatorContext {
    emitActiveAnnotationChangeEvent?: (id: string) => void;
    emitAnnotationRemoveEvent?: (id: string, isStartEvent?: boolean) => void;
    emitAnnotationReplyCreateEvent?: (reply: Object, requestId: string, annotationId: string, isStartEvent?: boolean) => void;
    emitAnnotationReplyDeleteEvent?: (id: string, annotationId: string, isStartEvent?: boolean) => void;
    emitAnnotationReplyUpdateEvent?: (reply: Object, annotationId: string, isStartEvent?: boolean) => void;
    emitAnnotationUpdateEvent?: (annotation: Object, isStartEvent?: boolean) => void;
    getAnnotationsMatchPath: GetMatchPath;
    getAnnotationsPath: (fileVersionId?: string, annotationId?: string) => string;
    state: AnnotatorState;
}
export declare enum Status {
    ERROR = "error",
    PENDING = "pending",
    SUCCESS = "success"
}
export declare type MatchParams = {
    annotationId?: string;
    fileVersionId?: string;
};
export interface Metadata {
    requestId?: string;
    status: Status;
}
export interface AnnotationActionEvent {
    annotation?: Object;
    annotationReply?: Object;
    error?: Error;
    meta: Metadata;
}
