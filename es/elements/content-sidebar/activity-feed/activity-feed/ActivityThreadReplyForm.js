function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PlainButton from '../../../../components/plain-button';
import ArrowArcRight from '../../../../icon/fill/ArrowArcRight';
import CommentForm from '../comment-form';
import messages from './messages';
import './ActivityThreadReplyForm.scss';

function ActivityThreadReplyForm(_ref) {
  var mentionSelectorContacts = _ref.mentionSelectorContacts,
      getMentionWithQuery = _ref.getMentionWithQuery,
      isDisabled = _ref.isDisabled,
      onFocus = _ref.onFocus,
      onHide = _ref.onHide,
      onReplyCreate = _ref.onReplyCreate,
      onShow = _ref.onShow,
      intl = _ref.intl;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showReplyForm = _React$useState2[0],
      setShowReplyForm = _React$useState2[1];

  var placeholder = intl.formatMessage(messages.replyInThread);

  var showForm = function showForm() {
    setShowReplyForm(true);
    onShow();
  };

  var hideForm = function hideForm() {
    setShowReplyForm(false);
    onHide();
  };

  return showReplyForm ? React.createElement(CommentForm, {
    className: "bcs-ActivityThreadReplyForm-comment",
    isOpen: true,
    isEditing: true,
    showTip: false // $FlowFixMe user is needed for showing an avatar, we don't need that here
    ,
    user: {},
    getAvatarUrl: function getAvatarUrl() {
      return Promise.resolve();
    },
    onCancel: hideForm,
    onFocus: onFocus,
    createComment: function createComment(_ref2) {
      var text = _ref2.text;
      onReplyCreate(text);
      hideForm();
    },
    mentionSelectorContacts: mentionSelectorContacts,
    getMentionWithQuery: getMentionWithQuery,
    placeholder: placeholder
  }) : React.createElement(PlainButton, {
    className: "bcs-ActivityThreadReplyForm-toggle",
    onClick: showForm,
    type: "button",
    isDisabled: isDisabled
  }, React.createElement(ArrowArcRight, {
    className: "bcs-ActivityThreadReplyForm-arrow"
  }), React.createElement(FormattedMessage, messages.reply));
}

export default injectIntl(ActivityThreadReplyForm);
//# sourceMappingURL=ActivityThreadReplyForm.js.map