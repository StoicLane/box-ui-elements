function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import noop from 'lodash/noop';
import { IntlProvider } from 'react-intl';
import localize from '../../../../../../test/support/i18n';
import messages from '../messages';
import ActivityThreadReplyForm from '../ActivityThreadReplyForm.js';
jest.mock('react-intl', function () {
  return jest.requireActual('react-intl');
});
describe('src/elements/content-sidebar/activity-feed/activity-feed/ActivityThreadReplyForm', function () {
  var Wrapper = function Wrapper(_ref) {
    var children = _ref.children;
    return React.createElement(IntlProvider, {
      locale: "en"
    }, children);
  };

  Wrapper.propTypes = {
    children: function children() {
      return (typeof (React.ReactNode == null ? {} : React.ReactNode) === "function" ? PropTypes.instanceOf(React.ReactNode == null ? {} : React.ReactNode) : PropTypes.any).apply(this, arguments);
    }
  };

  var renderComponent = function renderComponent(props) {
    return render(React.createElement(ActivityThreadReplyForm, _extends({
      onReplyCreate: noop,
      onHide: jest.fn(),
      onShow: jest.fn()
    }, props)), {
      wrapper: Wrapper
    });
  };

  test('should disable Reply button if isDisabled property is true', function () {
    var onShow = jest.fn();
    renderComponent({
      isDisabled: true,
      onShow: onShow
    });
    var replyButton = screen.getByRole('button', {
      name: localize(messages.reply.id)
    });
    expect(replyButton).toHaveAttribute('aria-disabled', 'true');
    fireEvent.click(replyButton);
    expect(onShow).not.toBeCalled();
  });
  test('should show reply form and should call onShow prop when clicked on Reply button', function () {
    var onShow = jest.fn();
    renderComponent({
      onShow: onShow
    });
    var replyButton = screen.getByRole('button', {
      name: localize(messages.reply.id)
    });
    expect(screen.queryByTestId('bcs-CommentForm-body')).not.toBeInTheDocument();
    fireEvent.click(replyButton);
    expect(screen.getByTestId('bcs-CommentForm-body')).toBeInTheDocument();
    expect(screen.getByText(localize(messages.replyInThread.id))).toBeInTheDocument();
    expect(onShow).toBeCalled();
  });
  test('should hide opened reply form and should call onHide prop when clicked on Cancel button', function () {
    var onHide = jest.fn();
    renderComponent({
      onHide: onHide
    });
    var replyButton = screen.getByRole('button', {
      name: localize(messages.reply.id)
    });
    fireEvent.click(replyButton);
    expect(screen.getByTestId('bcs-CommentForm-body')).toBeInTheDocument();
    var cancel = screen.getByRole('button', {
      name: 'Cancel'
    });
    fireEvent.click(cancel);
    expect(screen.queryByTestId('bcs-CommentForm-body')).not.toBeInTheDocument();
    expect(onHide).toBeCalled();
  });
});
import PropTypes from "prop-types";