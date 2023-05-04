function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { render } from '@testing-library/react';
import React from 'react';
import { IntlProvider } from 'react-intl';
import AnnotationThread from '../AnnotationThread';
jest.mock('react-intl', function () {
  return jest.requireActual('react-intl');
});
jest.mock('../AnnotationThreadContent', function () {
  return function () {
    return React.createElement("div", {
      "data-testid": "annotation-content"
    });
  };
});
jest.mock('../AnnotationThreadCreate', function () {
  return function () {
    return React.createElement("div", {
      "data-testid": "annotation-create"
    });
  };
});
jest.mock('../useAnnotationThread');
describe('elements/content-sidebar/activity-feed/annotation-thread/AnnotationThread', function () {
  var file = {
    id: 'fileId',
    file_version: {
      id: '123'
    },
    permissions: {
      can_view_annotations: true,
      can_annotate: true
    }
  };

  var IntlWrapper = function IntlWrapper(_ref) {
    var children = _ref.children;
    return React.createElement(IntlProvider, {
      locale: "en"
    }, children);
  };

  IntlWrapper.propTypes = {
    children: function children() {
      return (typeof (React.ReactNode == null ? {} : React.ReactNode) === "function" ? PropTypes.instanceOf(React.ReactNode == null ? {} : React.ReactNode) : PropTypes.any).apply(this, arguments);
    }
  };

  var getWrapper = function getWrapper(props) {
    return render(React.createElement(AnnotationThread, _extends({
      file: file
    }, props)), {
      wrapper: IntlWrapper
    });
  };

  test('should render AnnotationThreadCreate if annotationId is undefined',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _getWrapper, queryByTestId;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getWrapper = getWrapper(), queryByTestId = _getWrapper.queryByTestId;
            expect(queryByTestId('annotation-create')).toBeInTheDocument();
            expect(queryByTestId('annotation-content')).toBeNull();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('should render AnnotationThreadContent if annotationId is defined', function () {
    var _getWrapper2 = getWrapper({
      annotationId: '1'
    }),
        queryByTestId = _getWrapper2.queryByTestId;

    expect(queryByTestId('annotation-content')).toBeInTheDocument();
    expect(queryByTestId('annotation-create')).toBeNull();
  });
});
import PropTypes from "prop-types";