function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        status\n        ", "\n        ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import { render, screen } from '@testing-library/react';
import ActivityStatus from '../ActivityStatus';
describe('elements/content-sidebar/activity-feed/common/activity-status/ActivityStatus', function () {
  test.each(_templateObject(), undefined, 'open')('should not render when status prop is: $status', function (_ref) {
    var status = _ref.status;
    render(React.createElement(ActivityStatus, {
      status: status
    }));
    expect(screen.queryByTestId('bcs-ActivityStatus')).not.toBeInTheDocument();
  });
  test('should render when status prop is: resolved', function () {
    render(React.createElement(ActivityStatus, {
      status: "resolved"
    }));
    expect(screen.queryByTestId('bcs-ActivityStatus')).toBeInTheDocument();
  });
});