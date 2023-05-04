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

import merge from 'lodash/merge';
import { ERROR_CODE_CREATE_ANNOTATION, ERROR_CODE_CREATE_REPLY, ERROR_CODE_DELETE_ANNOTATION, ERROR_CODE_EDIT_ANNOTATION, ERROR_CODE_FETCH_ANNOTATION, ERROR_CODE_FETCH_ANNOTATIONS, ERROR_CODE_FETCH_REPLIES, PERMISSION_CAN_CREATE_ANNOTATIONS, PERMISSION_CAN_DELETE, PERMISSION_CAN_EDIT, PERMISSION_CAN_VIEW_ANNOTATIONS, PERMISSION_CAN_RESOLVE } from '../constants';
import MarkerBasedApi from './MarkerBasedAPI';
import { formatComment } from './utils';

var Annotations =
/*#__PURE__*/
function (_MarkerBasedApi) {
  _inherits(Annotations, _MarkerBasedApi);

  function Annotations() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Annotations);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Annotations)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "successHandler", function (data) {
      if (_this.isDestroyed() || typeof _this.successCallback !== 'function') {
        return;
      } // There is no response data when deleting an annotation


      if (!data) {
        _this.successCallback();

        return;
      } // We don't have entries when updating/creating an annotation


      if (!data.entries) {
        // Check if the response is a comment (result of createAnnotationReply)
        if (data.type && data.type === 'comment') {
          _this.successCallback(formatComment(data));

          return;
        }

        _this.successCallback(_this.formatReplies(data));

        return;
      } // Check if the response is the replies of an annotation (result of getAnnotationReplies)


      if (data.entries.length && data.entries[0].type === 'comment') {
        var replies = data.entries.map(formatComment);

        _this.successCallback(_objectSpread({}, data, {
          entries: replies
        }));

        return;
      }

      var annotations = data.entries.map(_this.formatReplies);

      _this.successCallback(_objectSpread({}, data, {
        entries: annotations
      }));
    });

    return _this;
  }

  _createClass(Annotations, [{
    key: "formatReplies",

    /**
     * Formats annotation replies' comment data for use in components.
     *
     * @param {Annotation} annotation - An individual annotation entry from the API
     * @return {Annotation} Updated annotation
     */
    value: function formatReplies(annotation) {
      if (!annotation.replies || !annotation.replies.length) {
        return annotation;
      }

      return _objectSpread({}, annotation, {
        replies: annotation.replies.map(formatComment)
      });
    }
    /**
     * Formats the annotations api response to usable data
     * @param {Object} data the api response data
     */

  }, {
    key: "getUrl",
    value: function getUrl() {
      return "".concat(this.getBaseApiUrl(), "/undoc/annotations");
    }
  }, {
    key: "getUrlForId",
    value: function getUrlForId(annotationId) {
      return "".concat(this.getUrl(), "/").concat(annotationId);
    }
  }, {
    key: "getUrlWithRepliesForId",
    value: function getUrlWithRepliesForId(annotationId) {
      return "".concat(this.getUrlForId(annotationId), "/replies");
    }
  }, {
    key: "createAnnotation",
    value: function createAnnotation(fileId, fileVersionId, payload, permissions, successCallback, errorCallback) {
      this.errorCode = ERROR_CODE_CREATE_ANNOTATION;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_CREATE_ANNOTATIONS, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      var defaults = {
        description: {
          type: 'reply'
        },
        file_version: {
          id: fileVersionId,
          type: 'file_version'
        }
      };
      this.post({
        id: fileId,
        data: {
          data: merge(defaults, payload)
        },
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrl()
      });
    }
  }, {
    key: "updateAnnotation",
    value: function updateAnnotation(fileId, annotationId, permissions, payload, successCallback, errorCallback) {
      this.errorCode = ERROR_CODE_EDIT_ANNOTATION;
      var message = payload.message,
          status = payload.status;

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

      this.put({
        id: fileId,
        data: {
          data: {
            description: message ? {
              message: message
            } : undefined,
            status: status
          }
        },
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrlForId(annotationId)
      });
    }
  }, {
    key: "deleteAnnotation",
    value: function deleteAnnotation(fileId, annotationId, permissions, successCallback, errorCallback) {
      this.errorCode = ERROR_CODE_DELETE_ANNOTATION;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_DELETE, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.delete({
        id: fileId,
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrlForId(annotationId)
      });
    }
  }, {
    key: "getAnnotation",
    value: function getAnnotation(fileId, annotationId, permissions, successCallback, errorCallback, shouldFetchReplies) {
      this.errorCode = ERROR_CODE_FETCH_ANNOTATION;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_VIEW_ANNOTATIONS, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      var requestData = shouldFetchReplies ? {
        params: {
          fields: 'replies'
        }
      } : undefined;
      this.get({
        id: fileId,
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrlForId(annotationId),
        requestData: requestData
      });
    }
  }, {
    key: "getAnnotations",
    value: function getAnnotations(fileId, fileVersionId, permissions, successCallback, errorCallback, limit, shouldFetchAll, shouldFetchReplies) {
      this.errorCode = ERROR_CODE_FETCH_ANNOTATIONS;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_VIEW_ANNOTATIONS, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      var requestData = _objectSpread({
        file_id: fileId,
        file_version_id: fileVersionId
      }, shouldFetchReplies ? {
        fields: 'replies'
      } : null);

      this.markerGet({
        id: fileId,
        errorCallback: errorCallback,
        limit: limit,
        requestData: requestData,
        shouldFetchAll: shouldFetchAll,
        successCallback: successCallback
      });
    }
  }, {
    key: "getAnnotationReplies",
    value: function getAnnotationReplies(fileId, annotationId, permissions, successCallback, errorCallback) {
      this.errorCode = ERROR_CODE_FETCH_REPLIES;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_VIEW_ANNOTATIONS, permissions, fileId);
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.get({
        id: fileId,
        errorCallback: errorCallback,
        successCallback: successCallback,
        url: this.getUrlWithRepliesForId(annotationId)
      });
    }
  }, {
    key: "createAnnotationReply",
    value: function createAnnotationReply(fileId, annotationId, permissions, message, successCallback, errorCallback) {
      this.errorCode = ERROR_CODE_CREATE_REPLY;

      try {
        this.checkApiCallValidity(PERMISSION_CAN_CREATE_ANNOTATIONS, permissions, fileId);
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
        url: "".concat(this.getUrlWithRepliesForId(annotationId), "?file_id=").concat(fileId)
      });
    }
  }]);

  return Annotations;
}(MarkerBasedApi);

export { Annotations as default };
//# sourceMappingURL=Annotations.js.map