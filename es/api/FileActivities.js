function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 
 * @file Helper for the box File Activity API
 * @author Box
 */
import Base from './Base';
import { ERROR_CODE_FETCH_ACTIVITY, FILE_ACTIVITY_TYPE_ANNOTATION, FILE_ACTIVITY_TYPE_COMMENT, PERMISSION_CAN_COMMENT, PERMISSION_CAN_VIEW_ANNOTATIONS } from '../constants';
// We only show the latest reply in the UI
var REPLY_LIMIT = 1;

var getFileActivityQueryParams = function getFileActivityQueryParams(fileID) {
  var activityTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var shouldShowReplies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var baseEndpoint = "/file_activities?file_id=".concat(fileID);
  var hasActivityTypes = !!activityTypes && !!activityTypes.length;
  var enableReplies = shouldShowReplies ? 'true' : 'false';
  var enabledRepliesQueryParam = "&enable_replies=".concat(enableReplies, "&reply_limit=").concat(REPLY_LIMIT);
  var activityTypeQueryParam = hasActivityTypes ? "&activity_types=".concat(activityTypes.join()) : '';
  return "".concat(baseEndpoint).concat(activityTypeQueryParam).concat(enabledRepliesQueryParam);
};

var FileActivities =
/*#__PURE__*/
function (_Base) {
  _inherits(FileActivities, _Base);

  function FileActivities() {
    _classCallCheck(this, FileActivities);

    return _possibleConstructorReturn(this, _getPrototypeOf(FileActivities).apply(this, arguments));
  }

  _createClass(FileActivities, [{
    key: "getFilteredUrl",

    /**
     * API URL for filtered file activities
     *
     * @param {string} [id] - a box file id
     * @param {Array<FileActivityTypes>} activityTypes - optional. Array of File Activity types to filter by, returns all Activity Types if omitted.
     * @param {boolean} shouldShowReplies - optional. Specify if replies should be included in the response
     * @return {string} base url for files
     */
    value: function getFilteredUrl(id, activityTypes, shouldShowReplies) {
      return "".concat(this.getBaseApiUrl()).concat(getFileActivityQueryParams(id, activityTypes, shouldShowReplies));
    }
    /**
     * API for fetching file activities
     *
     * @param {Array<FileActivityTypes>} activityTypes - optional. Array of File Activity types to filter by, returns all Activity Types if omitted.
     * @param {Function} errorCallback - the error callback
     * @param {string} fileId - the file id
     * @param {BoxItemPermission} permissions - the permissions for the file
     * @param {number} repliesCount - number of replies to return, by default all replies are returned
     * @param {boolean} shouldShowReplies - specify if replies should be included in the response
     * @param {Function} successCallback - the success callback
     * @returns {void}
     */

  }, {
    key: "getActivities",
    value: function getActivities(_ref) {
      var activityTypes = _ref.activityTypes,
          errorCallback = _ref.errorCallback,
          fileID = _ref.fileID,
          permissions = _ref.permissions,
          repliesCount = _ref.repliesCount,
          shouldShowReplies = _ref.shouldShowReplies,
          successCallback = _ref.successCallback;
      this.errorCode = ERROR_CODE_FETCH_ACTIVITY;

      try {
        if (!fileID) {
          throw new Error('Missing file id!');
        }

        if (activityTypes.includes(FILE_ACTIVITY_TYPE_COMMENT)) {
          this.checkApiCallValidity(PERMISSION_CAN_COMMENT, permissions, fileID);
        }

        if (activityTypes.includes(FILE_ACTIVITY_TYPE_ANNOTATION)) {
          this.checkApiCallValidity(PERMISSION_CAN_VIEW_ANNOTATIONS, permissions, fileID);
        }
      } catch (e) {
        errorCallback(e, this.errorCode);
        return;
      }

      this.get({
        id: fileID,
        successCallback: successCallback,
        errorCallback: errorCallback,
        requestData: _objectSpread({}, repliesCount ? {
          replies_count: repliesCount
        } : null),
        url: this.getFilteredUrl(fileID, activityTypes, shouldShowReplies)
      });
    }
  }]);

  return FileActivities;
}(Base);

export default FileActivities;
//# sourceMappingURL=FileActivities.js.map