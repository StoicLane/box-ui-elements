function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Helper for the box threadedComments API
 * @author Box
 */
import MarkerBasedApi from './MarkerBasedAPI';
import { PERMISSION_CAN_COMMENT, PERMISSION_CAN_DELETE, PERMISSION_CAN_EDIT, ERROR_CODE_CREATE_COMMENT, ERROR_CODE_UPDATE_COMMENT, ERROR_CODE_DELETE_COMMENT, ERROR_CODE_FETCH_COMMENT, ERROR_CODE_FETCH_COMMENTS, PERMISSION_CAN_RESOLVE, ERROR_CODE_FETCH_REPLIES, ERROR_CODE_CREATE_REPLY } from '../constants';
import { formatComment } from './utils';

var ThreadedComments =
/*#__PURE__*/
function (_MarkerBasedApi) {
  _inherits(ThreadedComments, _MarkerBasedApi);

  function ThreadedComments() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ThreadedComments);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ThreadedComments)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "successHandler", function (data) {
      if (_this.isDestroyed() || typeof _this.successCallback !== 'function') {
        return;
      } // There is no response data when deleting a comment


      if (!data) {
        _this.successCallback();

        return;
      } // We don't have entries when updating/creating a comment


      if (!data.entries) {
        _this.successCallback(formatComment(data));

        return;
      }

      var comments = data.entries.map(formatComment);

      _this.successCallback(_objectSpread({}, data, {
        entries: comments
      }));
    });

    return _this;
  }

  _createClass(ThreadedComments, [{
    key: "getUrl",

    /**
     * API URL for comments
     *
     * @param {string} [fileId]
     * @return {string} base url for comments
     */
    value: function getUrl(fileId) {
      return "".concat(this.getBaseApiUrl(), "/undoc/comments").concat(fileId ? "?file_id=".concat(fileId) : '');
    }
    /**
     * API URL for specific comment
     *
     * @param {string} [commentId]
     * @return {string} base url for specific comment
     */

  }, {
    key: "getUrlForId",
    value: function getUrlForId(commentId) {
      return "".concat(this.getUrl(), "/").concat(commentId);
    }
    /**
     * API URL for specific comment
     *
     * @param {string} commentId
     * @param {string} [fileId]
     * @return {string}  base url for specific comment replies
     */

  }, {
    key: "getUrlWithRepliesForId",
    value: function getUrlWithRepliesForId(commentId, fileId) {
      return "".concat(this.getUrlForId(commentId), "/replies").concat(fileId ? "?file_id=".concat(fileId) : '');
    }
    /**
     * Formats the threaded comments api response to usable data
     * @param {Object} data the api response data
     */

  }, {
    key: "createComment",

    /**
     * API for creating a comment on a file
     *
     * @param {BoxItem} file - File object for which we are creating a comment
     * @param {string} message - Comment message
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {void}
     */
    value: function createComment(_ref) {
      var file = _ref.file,
          message = _ref.message,
          successCallback = _ref.successCallback,
          errorCallback = _ref.errorCallback;
      this.errorCode = ERROR_CODE_CREATE_COMMENT;
      var id = file.id,
          permissions = file.permissions;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_COMMENT, permissions, id);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.post({
        id: id,
        url: this.getUrl(id),
        data: {
          data: {
            message: message
          }
        },
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
    /**
     * API for updating a comment
     *
     * @param {string} fileId - File id for which we are updating a comment
     * @param {string} commentId - Comment to be edited
     * @param {FeedItemStatus} status - Comment status
     * @param {string} message - Comment message
     * @param {BoxCommentPermission} permissions - The known permissions of the comment we're updating
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {void}
     */

  }, {
    key: "updateComment",
    value: function updateComment(_ref2) {
      var fileId = _ref2.fileId,
          commentId = _ref2.commentId,
          status = _ref2.status,
          message = _ref2.message,
          permissions = _ref2.permissions,
          successCallback = _ref2.successCallback,
          errorCallback = _ref2.errorCallback;
      this.errorCode = ERROR_CODE_UPDATE_COMMENT;

      if (message) {
        try {
          this.checkApiCallValidity(PERMISSION_CAN_EDIT, permissions, fileId);
        } catch (e) {
          errorCallback(e, this.errorCode);
          return;
        }
      }

      if (status) {
        try {
          this.checkApiCallValidity(PERMISSION_CAN_RESOLVE, permissions, fileId);
        } catch (e) {
          errorCallback(e, this.errorCode);
          return;
        }
      }

      var requestData = {
        data: {
          status: status,
          message: message
        }
      };
      this.put({
        id: fileId,
        url: this.getUrlForId(commentId),
        data: requestData,
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
    /**
     * API for deleting a comment or reply
     *
     * @param {string} fileId - Id of an object for which we are deleting a comment
     * @param {string} commentId - Id of the comment we are deleting
     * @param {BoxCommentPermission} permissions - The known permissions of the comment we're deleting
     * @param {Function} successCallback - Success callback
     * @param {Function} errorCallback - Error callback
     * @return {void}
     */

  }, {
    key: "deleteComment",
    value: function deleteComment(_ref3) {
      var fileId = _ref3.fileId,
          commentId = _ref3.commentId,
          permissions = _ref3.permissions,
          successCallback = _ref3.successCallback,
          errorCallback = _ref3.errorCallback;
      this.errorCode = ERROR_CODE_DELETE_COMMENT;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_DELETE, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.delete({
        id: fileId,
        url: this.getUrlForId(commentId),
        successCallback: successCallback,
        errorCallback: errorCallback
      });
    }
    /**
     * API for fetching comment
     *
     * @param {string} commentId - comment id
     * @param {string} fileId - the file id
     * @param {BoxItemPermission} permissions - the permissions for the file
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @returns {void}
     */

  }, {
    key: "getComment",
    value: function getComment(_ref4) {
      var commentId = _ref4.commentId,
          errorCallback = _ref4.errorCallback,
          fileId = _ref4.fileId,
          permissions = _ref4.permissions,
          successCallback = _ref4.successCallback;
      this.errorCode = ERROR_CODE_FETCH_COMMENT;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_COMMENT, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.get({
        id: fileId,
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrlForId(commentId)
      });
    }
    /**
     * API for fetching comments
     *
     * @param {string} fileId - the file id
     * @param {BoxItemPermission} permissions - the permissions for the file
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @param {array} fields - the fields to fetch
     * @param {string} marker the marker from the start to start fetching at
     * @param {number} limit - the number of items to fetch
     * @param {boolean} shouldFetchAll - true if should get all the pages before calling the sucessCallback
     * @param {number} repliesCount - number of replies to return, by deafult all replies all returned
     *  @returns {void}
     */

  }, {
    key: "getComments",
    value: function getComments(_ref5) {
      var fileId = _ref5.fileId,
          permissions = _ref5.permissions,
          successCallback = _ref5.successCallback,
          errorCallback = _ref5.errorCallback,
          marker = _ref5.marker,
          limit = _ref5.limit,
          shouldFetchAll = _ref5.shouldFetchAll,
          repliesCount = _ref5.repliesCount;
      this.errorCode = ERROR_CODE_FETCH_COMMENTS;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_COMMENT, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.markerGet({
        id: fileId,
        successCallback: successCallback,
        errorCallback: errorCallback,
        marker: marker,
        limit: limit,
        requestData: _objectSpread({}, repliesCount ? {
          replies_count: repliesCount
        } : null),
        shouldFetchAll: shouldFetchAll
      });
    }
    /**
     * @param {string} fileId - the file id
     * @param {string} commentId - id of a Comment
     * @param {BoxItemPermission} permissions - The known permissions of the comment
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     */

  }, {
    key: "getCommentReplies",
    value: function getCommentReplies(_ref6) {
      var fileId = _ref6.fileId,
          commentId = _ref6.commentId,
          permissions = _ref6.permissions,
          successCallback = _ref6.successCallback,
          errorCallback = _ref6.errorCallback;
      this.errorCode = ERROR_CODE_FETCH_REPLIES;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_COMMENT, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.get({
        id: fileId,
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrlWithRepliesForId(commentId)
      });
    }
    /**
     * @param {string} fileId - the file id
     * @param {string} commentId - id of a Comment for which we createing Reply
     * @param {BoxItemPermission} permissions - The known permissions of the comment
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @param {string} message - message of the Reply
     */

  }, {
    key: "createCommentReply",
    value: function createCommentReply(_ref7) {
      var fileId = _ref7.fileId,
          commentId = _ref7.commentId,
          permissions = _ref7.permissions,
          successCallback = _ref7.successCallback,
          errorCallback = _ref7.errorCallback,
          message = _ref7.message;
      this.errorCode = ERROR_CODE_CREATE_REPLY;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_COMMENT, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.post({
        id: fileId,
        data: {
          data: {
            message: message
          }
        },
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrlWithRepliesForId(commentId, fileId)
      });
    }
  }]);

  return ThreadedComments;
}(MarkerBasedApi);

export default ThreadedComments;
//# sourceMappingURL=ThreadedComments.js.map