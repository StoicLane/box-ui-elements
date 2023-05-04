/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom'; // Custom hook to get history from React Router v6

export default function useHistory() {
  var location = useLocation();
  var navigate = useNavigate();
  return {
    push: function push(to, state) {
      return navigate(to, {
        state: state
      });
    },
    replace: function replace(to, state) {
      return navigate(to, {
        state: state,
        replace: true
      });
    },
    go: navigate,
    location: location
  };
}
//# sourceMappingURL=useHistory.js.map