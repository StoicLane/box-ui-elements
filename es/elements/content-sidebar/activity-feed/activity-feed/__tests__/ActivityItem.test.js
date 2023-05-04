function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        hasNewThreadedReplies | isHoverable\n        ", "              | ", "\n        ", "               | ", "\n        ", "              | ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import { shallow } from 'enzyme';
import ActivityItem from '../ActivityItem';
describe('src/elements/content-sidebar/activity-feed/activity-feed/ActivityItem', function () {
  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return shallow(React.createElement(ActivityItem, props, "Test"));
  };

  test('should compile its default class and its className prop value', function () {
    var className = 'bcs-Test';
    var wrapper = getWrapper({
      className: className
    });
    expect(wrapper.hasClass('bcs-ActivityItem')).toBe(true);
    expect(wrapper.hasClass(className)).toBe(true);
  });
  test.each([true, false])('should compile its className with isFocused equal to %s', function (isFocused) {
    expect(getWrapper({
      isFocused: isFocused
    }).hasClass('bcs-is-focused')).toBe(isFocused);
  });
  test('should compile its className with isHoverable if isHoverable is true and hasNewThreadedReplies is true', function () {
    var wrapper = getWrapper({
      isHoverable: true,
      hasNewThreadedReplies: true
    });
    expect(wrapper.hasClass('bcs-is-hoverable')).toBe(true);
  });
  test.each(_templateObject(), false, false, true, false, false, true)("should not compile its className with isHoverable if isHoverable is $isHoverable and hasNewThreadedReplies is $hasNewThreadedReplies", function (_ref) {
    var hasNewThreadedReplies = _ref.hasNewThreadedReplies,
        isHoverable = _ref.isHoverable;
    var wrapper = getWrapper({
      isHoverable: isHoverable,
      hasNewThreadedReplies: hasNewThreadedReplies
    });
    expect(wrapper.hasClass('bcs-is-hoverable')).toBe(false);
  });
});