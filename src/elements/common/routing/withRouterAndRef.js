// @flow
import * as React from 'react';
import { matchPath, useMatch, useLocation, useNavigate, useParams } from 'react-router-dom';


// Custom hook to get history from React Router v6
function useHistory() {
    const location = useLocation();
    const navigate = useNavigate();

    return {
        push: (to, state) => navigate(to, { state }),
        replace: (to, state) => navigate(to, { state, replace: true }),
        go: navigate,
        location,
    };
}

// Basically a workaround for the fact that react-router's withRouter cannot forward ref's through
// functional components. Use this instead to gain the benefits of withRouter but also ref forwarding
export default function withRouterAndRef(Wrapped: React.ComponentType<any>) {
    const WithRouterAndRef = React.forwardRef<Object, React.Ref<any>>((props, ref) => {
        const history = useHistory();
        const location = useLocation();
        const params = useParams();
        const match = matchPath({ path: props.path || '' }, location.pathname);

        return (
            <Wrapped
                ref={ref}
                history={history} match={match} params={params} location={location}
                {...props}
            />
        );
    });
    const name = Wrapped.displayName || Wrapped.name || 'Component';
    WithRouterAndRef.displayName = `withRouterAndRef(${name})`;
    return WithRouterAndRef;
}
