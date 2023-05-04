import React from 'react';
import classNames from 'classnames';
import CommentForm from '../comment-form';
import './AnnotationThreadCreate.scss';

var AnnotationThreadCreate = function AnnotationThreadCreate(_ref) {
  var currentUser = _ref.currentUser,
      getAvatarUrl = _ref.getAvatarUrl,
      getMentionWithQuery = _ref.getMentionWithQuery,
      isPending = _ref.isPending,
      mentionSelectorContacts = _ref.mentionSelectorContacts,
      onFormCancel = _ref.onFormCancel,
      onFormSubmit = _ref.onFormSubmit;

  var handleSubmit = function handleSubmit(_ref2) {
    var text = _ref2.text;
    onFormSubmit(text);
  };

  return React.createElement("div", {
    className: classNames('AnnotationThreadCreate', {
      'is-pending': isPending
    }),
    "data-testid": "annotation-create"
  }, React.createElement(CommentForm, {
    className: "AnnotationThreadCreate-editor",
    createComment: handleSubmit,
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    isOpen: true,
    mentionSelectorContacts: mentionSelectorContacts,
    onCancel: onFormCancel,
    user: currentUser
  }));
};

export default AnnotationThreadCreate;
//# sourceMappingURL=AnnotationThreadCreate.js.map