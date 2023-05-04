/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom';

// Custom hook to get history from React Router v6
export default function useHistory() {
    const location = useLocation();
    const navigate = useNavigate();

    return {
        push: (to, state) => navigate(to, { state }),
        replace: (to, state) => navigate(to, { state, replace: true }),
        go: navigate,
        location,
    };
}
