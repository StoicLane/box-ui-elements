import React from 'react';
import { ElementsXhrError, ErrorContextProps } from '../../../common/types/api';
import { Errors } from '../flowTypes';
import { User } from '../../../common/types/core';
export declare type WithCurrentUserProps = {
    currentUser?: User;
    currentUserError?: Errors;
} & ErrorContextProps;
export declare type ComponentWithCurrentUser = {
    errorCallback: (error: ElementsXhrError, code: string, contextInfo: Object) => void;
    fetchCurrentUser: (user?: User, shouldDestroy?: boolean) => void;
    fetchCurrentUserErrorCallback: (e: ElementsXhrError, code: string) => Errors;
    fetchCurrentUserSuccessCallback: (currentUser: User) => void;
};
export declare type CurrentUserState = {
    currentUser?: User;
    currentUserError?: Errors;
};
export declare type WithCurrentUserComponent<P> = React.ComponentClass<P & WithCurrentUserProps>;
export default function withCurrentUser<P extends object>(WrappedComponent: React.ComponentType<P & WithCurrentUserProps>): WithCurrentUserComponent<P>;
