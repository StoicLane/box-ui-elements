/* eslint-disable react/prop-types */
import React from 'react';
import { matchPath, useLocation, useNavigate, useParams } from 'react-router-dom';

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

// withRouter HOC for React Router v6 that sends history and match similar to v5
export default function withRouter(Wrapped) {
    return function WithRouter(props) {
        const history = useHistory();
        const location = useLocation();
        const params = useParams();
        const match = matchPath({ path: location.pathname }, location.pathname);

        return <Wrapped {...props} history={history} match={match} params={params} location={location} />;
    };
}
