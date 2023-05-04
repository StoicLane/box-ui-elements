function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Utils for the box APIs
 * @author Box
 */

/**
 * Formats comment data (including replies) for use in components.
 *
 * @param {Comment} comment - An individual comment entry from the API
 * @return {Comment} Updated comment
 */
export var formatComment = function formatComment(comment) {
  var formattedComment = _objectSpread({}, comment, {
    tagged_message: comment.message
  });

  if (comment.replies && comment.replies.length) {
    formattedComment.replies = comment.replies.map(formatComment);
  }

  return formattedComment;
};
export default {
  formatComment: formatComment
};
//# sourceMappingURL=utils.js.map