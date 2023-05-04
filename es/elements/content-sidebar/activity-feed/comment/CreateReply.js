import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import noop from 'lodash/noop';
import ArrowArcRight from '../../../../icon/fill/ArrowArcRight';
import PlainButton from '../../../../components/plain-button';
import CommentForm from '../comment-form';
import messages from './messages';
import './CreateReply.scss';

var CreateReply = function CreateReply(_ref) {
  var mentionSelectorContacts = _ref.mentionSelectorContacts,
      getMentionWithQuery = _ref.getMentionWithQuery,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      intl = _ref.intl,
      _ref$onFocus = _ref.onFocus,
      onFocus = _ref$onFocus === void 0 ? noop : _ref$onFocus,
      onCancel = _ref.onCancel,
      onSubmit = _ref.onSubmit,
      onClick = _ref.onClick,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? intl.formatMessage(messages.replyInThread) : _ref$placeholder,
      showReplyForm = _ref.showReplyForm;

  var handleSubmit = function handleSubmit(_ref2) {
    var text = _ref2.text;
    onSubmit(text);
  };

  return React.createElement("div", {
    className: "bcs-CreateReply"
  }, showReplyForm && !isDisabled ? React.createElement(CommentForm, {
    className: "bcs-CreateReply-form",
    isOpen: true,
    isEditing: true,
    showTip: false,
    onCancel: onCancel,
    onFocus: onFocus,
    createComment: handleSubmit,
    mentionSelectorContacts: mentionSelectorContacts,
    getMentionWithQuery: getMentionWithQuery,
    placeholder: placeholder
  }) : React.createElement(PlainButton, {
    className: "bcs-CreateReply-toggle",
    onClick: onClick,
    type: "button",
    isDisabled: isDisabled
  }, React.createElement(ArrowArcRight, {
    className: "bcs-CreateReply-arrow"
  }), React.createElement(FormattedMessage, messages.reply)));
};

export default injectIntl(CreateReply);
//# sourceMappingURL=CreateReply.js.map