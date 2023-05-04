function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/prop-types */
import React from 'react';
import { matchPath, useLocation, useParams } from 'react-router-dom';
import useHistory from './useHistory'; // withRouter HOC for React Router v6 that sends history and match similar to v5

export default function withRouter(Wrapped) {
  return function WithRouter(props) {
    var history = useHistory();
    var location = useLocation();
    var params = useParams();
    var match = matchPath({
      path: location.pathname
    }, location.pathname);
    return React.createElement(Wrapped, _extends({}, props, {
      history: history,
      match: match,
      params: params,
      location: location
    }));
  };
}
//# sourceMappingURL=withRouter.js.map