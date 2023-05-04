// @flow
import * as React from 'react';
import { matchPath, useLocation, useParams } from 'react-router-dom';
import useHistory from './useHistory';

// Basically a workaround for the fact that react-router's withRouter cannot forward ref's through
// functional components. Use this instead to gain the benefits of withRouter but also ref forwarding
export default function withRouterAndRef(Wrapped: React.ComponentType<any>) {
    const WithRouterAndRef = React.forwardRef<Object, React.Ref<any>>((props, ref) => {
        const history = useHistory();
        const location = useLocation();
        const params = useParams();
        const match = matchPath({ path: location.path }, location.pathname);

        return <Wrapped ref={ref} history={history} match={match} params={params} location={location} {...props} />;
    });
    const name = Wrapped.displayName || Wrapped.name || 'Component';
    WithRouterAndRef.displayName = `withRouterAndRef(${name})`;
    return WithRouterAndRef;
}
