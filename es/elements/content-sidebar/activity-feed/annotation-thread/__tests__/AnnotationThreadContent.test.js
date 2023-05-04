function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import AnnotationThreadContent from '../AnnotationThreadContent';
import { annotation as mockAnnotation, user } from '../../../../../__mocks__/annotations';
import commonMessages from '../../../../common/messages';
import messages from '../messages';
jest.mock('react-intl', function () {
  return jest.requireActual('react-intl');
});
describe('elements/content-sidebar/activity-feed/annotation-thread/AnnotationThreadContent', function () {
  var defaultProps = {
    annotation: mockAnnotation,
    isLoading: false,
    replies: []
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
    return render(React.createElement(AnnotationThreadContent, _extends({}, defaultProps, props)), {
      wrapper: IntlWrapper
    });
  };

  test('Should render properly', function () {
    var _getWrapper = getWrapper(),
        getByText = _getWrapper.getByText,
        queryByTestId = _getWrapper.queryByTestId;

    expect(getByText(mockAnnotation.description.message)).toBeInTheDocument();
    expect(getByText(mockAnnotation.created_by.name)).toBeInTheDocument();
    expect(queryByTestId('annotation-loading')).not.toBeInTheDocument();
  });
  test('Should call getAvatarUrl with creator id',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var getAvatarUrl;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getAvatarUrl = jest.fn(function () {
              return Promise.resolve();
            });
            getWrapper({
              getAvatarUrl: getAvatarUrl
            });
            expect(getAvatarUrl).toBeCalledWith(user.id);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('Should render loading state properly', function () {
    var annotation = undefined;
    var isLoading = true;

    var _getWrapper2 = getWrapper({
      annotation: annotation,
      isLoading: isLoading
    }),
        getByTestId = _getWrapper2.getByTestId;

    expect(getByTestId('annotation-loading')).toBeInTheDocument();
  });
  test('Should render error state properly', function () {
    var annotation = undefined;
    var error = {
      title: commonMessages.errorOccured,
      message: messages.errorFetchAnnotation
    };

    var _getWrapper3 = getWrapper({
      annotation: annotation,
      error: error
    }),
        queryByText = _getWrapper3.queryByText,
        getByText = _getWrapper3.getByText;

    expect(getByText(commonMessages.errorOccured.defaultMessage)).toBeInTheDocument();
    expect(queryByText(messages.errorFetchAnnotation.defaultMessage)).toBeInTheDocument();
  });
});
import PropTypes from "prop-types";