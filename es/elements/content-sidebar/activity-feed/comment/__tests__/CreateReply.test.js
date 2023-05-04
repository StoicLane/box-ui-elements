function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { IntlProvider } from 'react-intl';
import { fireEvent, render, screen } from '@testing-library/react';
import { ContentState, EditorState } from 'draft-js';
import CreateReply from '../CreateReply';
import localize from '../../../../../../test/support/i18n';
import messages from '../messages';
jest.mock('react-intl', function () {
  return _objectSpread({}, jest.requireActual('react-intl'), {
    FormattedMessage: function FormattedMessage(_ref) {
      var defaultMessage = _ref.defaultMessage;
      return React.createElement("span", null, defaultMessage);
    }
  });
});
var onCancel = jest.fn();
var onFocus = jest.fn();
var onSubmit = jest.fn();
var onClick = jest.fn();
var replyInThreadMessage = localize(messages.replyInThread.id);
var replyMessage = localize(messages.reply.id);

var getWrapper = function getWrapper(props) {
  return render(React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(CreateReply, _extends({
    isDisabled: false,
    onCancel: onCancel,
    onFocus: onFocus,
    onSubmit: onSubmit,
    onClick: onClick,
    showReplyForm: false
  }, props))));
};

describe('elements/content-sidebar/ActivityFeed/comment/CreateReply', function () {
  afterEach(function () {
    jest.restoreAllMocks();
  });
  test('should correctly render CreateReply button', function () {
    getWrapper();
    expect(screen.getByText(replyMessage)).toBeVisible();
    expect(screen.queryByText(replyInThreadMessage)).not.toBeInTheDocument();
  });
  test('should correctly render CreateReply form with default placeholder', function () {
    getWrapper({
      showReplyForm: true
    });
    expect(screen.getByText(replyInThreadMessage)).toBeVisible();
    expect(screen.queryByText(replyMessage)).not.toBeInTheDocument();
  });
  test('should correctly render CreateReply form with a passed in placeholder', function () {
    getWrapper({
      showReplyForm: true,
      placeholder: 'Reply to Task'
    });
    expect(screen.getByText('Reply to Task')).toBeVisible();
    expect(screen.queryByText(replyInThreadMessage)).not.toBeInTheDocument();
    expect(screen.queryByText(replyMessage)).not.toBeInTheDocument();
  });
  test('should disable Reply button if isDisabled property is true', function () {
    getWrapper({
      isDisabled: true
    });
    var replyButton = screen.getByRole('button', {
      name: replyMessage
    });
    expect(replyButton).toHaveAttribute('aria-disabled', 'true');
    fireEvent.click(replyButton);
    expect(onClick).not.toBeCalled();
  });
  test('should call onClick when reply button is clicked', function () {
    getWrapper();
    fireEvent.click(screen.getByText(replyMessage));
    expect(onClick).toBeCalledTimes(1);
    expect(onSubmit).not.toBeCalled();
    expect(onFocus).not.toBeCalled();
    expect(onCancel).not.toBeCalled();
  });
  test('should not show form when isDisabled property is true', function () {
    getWrapper({
      showReplyForm: true,
      isDisabled: true
    });
    var replyButton = screen.getByRole('button', {
      name: replyMessage
    });
    expect(screen.queryByText(replyInThreadMessage)).not.toBeInTheDocument();
    expect(replyButton).toHaveAttribute('aria-disabled', 'true');
    fireEvent.click(replyButton);
    expect(onClick).not.toBeCalled();
  });
  test('should call onCancel when form cancel is clicked', function () {
    getWrapper({
      showReplyForm: true
    });
    fireEvent.click(screen.getByText('Cancel'));
    expect(onCancel).toBeCalledTimes(1);
    expect(onSubmit).not.toBeCalled();
    expect(onFocus).not.toBeCalled();
    expect(onClick).not.toBeCalled();
  });
  test('should call onSubmit when reply is posted', function () {
    // Mock DraftJS editor and intercept onChange since DraftJS doesn't have a value setter
    var draftjs = require('draft-js');

    draftjs.Editor = jest.fn(function (props) {
      var modifiedOnchange = function modifiedOnchange(e) {
        var text = e.target.value;
        var content = ContentState.createFromText(text);
        props.onChange(EditorState.createWithContent(content));
      };

      return React.createElement("input", {
        className: "editor",
        onChange: function onChange(e) {
          return modifiedOnchange(e);
        }
      });
    });
    getWrapper({
      showReplyForm: true
    });
    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'Batman'
      }
    });
    fireEvent.click(screen.getByText('Post'));
    expect(onSubmit).toBeCalledTimes(1);
    expect(onSubmit).toBeCalledWith('Batman');
  });
});