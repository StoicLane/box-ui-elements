function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import AnnotationThreadCreate from '../AnnotationThreadCreate';
jest.mock('react-intl', function () {
  return jest.requireActual('react-intl');
});
jest.mock('../../comment-form', function () {
  return function (props) {
    return React.createElement("div", null, props.isOpen && React.createElement("div", null, React.createElement("button", {
      type: "button",
      onClick: props.onCancel
    }, "Cancel"), React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return props.createComment({
          text: 'example message'
        });
      }
    }, "Post")));
  };
});
describe('elements/content-sidebar/activity-feed/annotation-thread/AnnotationThreadCreate', function () {
  var getDefaultProps = function getDefaultProps() {
    return {
      currentUser: {
        id: 'user_id'
      },
      onFormCancel: jest.fn(),
      onFormSubmit: jest.fn()
    };
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
    return render(React.createElement(AnnotationThreadCreate, _extends({}, getDefaultProps(), props)), {
      wrapper: IntlWrapper
    });
  };

  test('Should render correctly', function () {
    var _getWrapper = getWrapper(),
        container = _getWrapper.container,
        getByText = _getWrapper.getByText;

    expect(getByText('Cancel')).toBeInTheDocument();
    expect(container.getElementsByClassName('AnnotationThreadCreate-is-pending')).toHaveLength(0);
  });
  test('Should render correctly with pending state', function () {
    var _getWrapper2 = getWrapper({
      isPending: true
    }),
        getByTestId = _getWrapper2.getByTestId;

    expect(getByTestId('annotation-create')).toHaveClass('is-pending');
  });
  test('Should call onFormSubmit on create', function () {
    var onFormSubmit = jest.fn();

    var _getWrapper3 = getWrapper({
      onFormSubmit: onFormSubmit
    }),
        getByText = _getWrapper3.getByText;

    fireEvent.click(getByText('Post'));
    expect(onFormSubmit).toBeCalledWith('example message');
  });
  test('Should call onFormCancel on cancel', function () {
    var onFormCancel = jest.fn();

    var _getWrapper4 = getWrapper({
      onFormCancel: onFormCancel
    }),
        getByText = _getWrapper4.getByText;

    fireEvent.click(getByText('Cancel'));
    expect(onFormCancel).toBeCalled();
  });
});
import PropTypes from "prop-types";