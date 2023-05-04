function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        repliesShownCount | repliesTotalCount\n        ", "              | ", "\n        ", "              | ", "\n        ", "              | ", "\n        ", "              | ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        repliesShownCount | repliesTotalCount\n        ", "              | ", "\n        ", "              | ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { IntlProvider } from 'react-intl';
import { fireEvent, render, screen } from '@testing-library/react';
import RepliesToggle from '../RepliesToggle';
jest.mock('react-intl', function () {
  return _objectSpread({}, jest.requireActual('react-intl'));
});
var showReplies = jest.fn();
var hideReplies = jest.fn();
var shownCount = 1;
var totalCount = 9;

var getWrapper = function getWrapper(props) {
  return render(React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(RepliesToggle, _extends({
    id: "123",
    isRepliesLoading: false,
    onShowReplies: showReplies,
    onHideReplies: hideReplies,
    repliesShownCount: shownCount,
    repliesTotalCount: totalCount
  }, props))));
};

describe('elements/content-sidebar/ActivityFeed/comment/RepliesToggle', function () {
  test('should correctly render show toggle', function () {
    var countDifference = totalCount - 1;
    getWrapper();
    expect(screen.getByText("See ".concat(countDifference, " replies"))).toBeVisible();
    expect(screen.queryByText('Hide replies')).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("See ".concat(countDifference, " replies")));
    expect(showReplies).toBeCalledTimes(1);
    expect(hideReplies).not.toBeCalled();
  });
  test.each(_templateObject(), 3, 3, 3, 2)("Should correctly render hide toggle when shown count is $repliesShownCount and total count is $repliesTotalCount", function (_ref) {
    var repliesShownCount = _ref.repliesShownCount,
        repliesTotalCount = _ref.repliesTotalCount;
    getWrapper({
      repliesShownCount: repliesShownCount,
      repliesTotalCount: repliesTotalCount
    });
    expect(screen.getByText('Hide replies')).toBeVisible();
    expect(screen.queryByText("See ".concat(repliesTotalCount - 1, " replies"))).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Hide replies"));
    expect(hideReplies).toBeCalledTimes(1);
    expect(hideReplies).toBeCalledWith(repliesShownCount - 1);
    expect(showReplies).not.toBeCalled();
  });
  test.each(_templateObject2(), 3, 1, 3, 0, 1, 0, 1, 1)("Should not render toggle when shown count is $repliesShownCount and total count is $repliesTotalCount", function (_ref2) {
    var repliesShownCount = _ref2.repliesShownCount,
        repliesTotalCount = _ref2.repliesTotalCount;
    getWrapper({
      repliesShownCount: repliesShownCount,
      repliesTotalCount: repliesTotalCount
    });
    expect(screen.queryByText("Hide replies")).not.toBeInTheDocument();
    expect(screen.queryByText("See ".concat(repliesTotalCount, " replies"))).not.toBeInTheDocument();
  });
});