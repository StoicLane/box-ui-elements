function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        filterOptions                           | title\n        ", "                              | ", "\n        ", "                      | ", "\n        ", "                  | ", "\n        ", "          | ", "\n        ", " | ", "\n        ", "                     | ", "\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        expected      | option                   | initialOption            | initialType\n        ", "      | ", "        | ", " | ", "\n        ", "     | ", " | ", "        | ", "\n        ", " | ", "   | ", "        | ", "\n        ", "     | ", "               | ", "        | ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        feedItemType  | option\n        ", "      | ", "\n        ", "     | ", "\n        ", " | ", "\n        ", "     | ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { IntlProvider } from 'react-intl';
import { render, screen, fireEvent } from '@testing-library/react';
import ActivitySidebarFilter from '../ActivitySidebarFilter';
jest.mock('react-intl', function () {
  return _objectSpread({}, jest.requireActual('react-intl'), {
    FormattedMessage: function FormattedMessage(_ref) {
      var defaultMessage = _ref.defaultMessage;
      return React.createElement("span", null, defaultMessage);
    }
  });
});
var onFeedItemTypeClick = jest.fn();
var availableActivityFilterOptions = ['all', 'open', 'resolved', 'tasks'];

var Wrapper = function Wrapper(_ref2) {
  var children = _ref2.children;
  return React.createElement(IntlProvider, {
    locale: "en"
  }, children);
};

Wrapper.propTypes = {
  children: function children() {
    return (typeof (React.ReactNode == null ? {} : React.ReactNode) === "function" ? PropTypes.instanceOf(React.ReactNode == null ? {} : React.ReactNode) : PropTypes.any).apply(this, arguments);
  }
};

var renderWithWrapper = function renderWithWrapper(activityFilterOptions, feedItemType) {
  return render(React.createElement(ActivitySidebarFilter, {
    activityFilterOptions: activityFilterOptions,
    feedItemType: feedItemType,
    onFeedItemTypeClick: onFeedItemTypeClick
  }), {
    wrapper: Wrapper
  });
};

describe('elements/content-sidebar/ActivitySidebarFilter', function () {
  test.each(_templateObject(), 'all', 'All Activity', 'open', 'Unresolved Comments', 'resolved', 'Resolved Comments', 'task', 'Tasks')('should render "$option" as the selected status when feedItemType prop is equal to $feedItemType', function (_ref3) {
    var feedItemType = _ref3.feedItemType,
        option = _ref3.option;
    renderWithWrapper(availableActivityFilterOptions, feedItemType);
    expect(screen.getByText(option)).toBeVisible();
  });
  test.each(_templateObject2(), 'all', 'All Activity', 'Unresolved Comments', 'open', 'open', 'Unresolved Comments', 'All Activity', undefined, 'resolved', 'Resolved Comments', 'All Activity', undefined, 'task', 'Tasks', 'All Activity', undefined)('onFeedItemStatusClick should be called with $expected when clicked on $option',
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref5) {
      var initialOption, option, initialType, expected, dropdownBtn;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              initialOption = _ref5.initialOption, option = _ref5.option, initialType = _ref5.initialType, expected = _ref5.expected;
              renderWithWrapper(availableActivityFilterOptions, initialType);
              dropdownBtn = screen.getByText(initialOption);
              fireEvent.click(dropdownBtn);
              _context.t0 = fireEvent;
              _context.next = 7;
              return screen.findByText(option);

            case 7:
              _context.t1 = _context.sent;

              _context.t0.click.call(_context.t0, _context.t1);

              expect(onFeedItemTypeClick).toBeCalledWith(expected);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  test.each(_templateObject3(), ['all'], 'All Comments', ['all', 'open'], 'All Comments', ['all', 'resolved'], 'All Comments', ['all', 'open', 'resolved'], 'All Comments', ['all', 'open', 'resolved', 'tasks'], 'All Activity', ['all', 'tasks'], 'All Activity')('should render $title as the title for the all selection when $filterOptions is passed as the activityFilterOptions prop',
  /*#__PURE__*/
  function () {
    var _ref6 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(_ref7) {
      var filterOptions, title;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              filterOptions = _ref7.filterOptions, title = _ref7.title;
              renderWithWrapper(filterOptions, undefined);
              expect(screen.getByText(title)).toBeVisible();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
});
import PropTypes from "prop-types";