function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 
 * @file Annotation Thread Container
 * @author Box
 */
import React from 'react';
import debounce from 'lodash/debounce';
import classNames from 'classnames';
import { IntlProvider } from 'react-intl';
import AnnotationThreadContent from './AnnotationThreadContent';
import AnnotationThreadCreate from './AnnotationThreadCreate';
import useAnnotationThread from './useAnnotationThread';
import API from '../../../../api/APIFactory';
import { DEFAULT_COLLAB_DEBOUNCE, DEFAULT_HOSTNAME_API } from '../../../../constants';
import './AnnotationThread.scss';

var AnnotationThread = function AnnotationThread(_ref) {
  var annotationId = _ref.annotationId,
      _ref$apiHost = _ref.apiHost,
      apiHost = _ref$apiHost === void 0 ? DEFAULT_HOSTNAME_API : _ref$apiHost,
      cache = _ref.cache,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      clientName = _ref.clientName,
      currentUser = _ref.currentUser,
      eventEmitter = _ref.eventEmitter,
      file = _ref.file,
      getUserProfileUrl = _ref.getUserProfileUrl,
      handleCancel = _ref.handleCancel,
      language = _ref.language,
      messages = _ref.messages,
      onAnnotationCreate = _ref.onAnnotationCreate,
      onError = _ref.onError,
      target = _ref.target,
      token = _ref.token;

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mentionSelectorContacts = _React$useState2[0],
      setMentionSelectorContacts = _React$useState2[1];

  var api = new API({
    apiHost: apiHost,
    cache: cache,
    clientName: clientName,
    language: language,
    token: token
  });

  var _useAnnotationThread = useAnnotationThread({
    api: api,
    annotationId: annotationId,
    currentUser: currentUser,
    errorCallback: onError,
    eventEmitter: eventEmitter,
    file: file,
    onAnnotationCreate: onAnnotationCreate,
    target: target
  }),
      annotation = _useAnnotationThread.annotation,
      replies = _useAnnotationThread.replies,
      isLoading = _useAnnotationThread.isLoading,
      error = _useAnnotationThread.error,
      _useAnnotationThread$ = _useAnnotationThread.annotationActions,
      handleAnnotationCreate = _useAnnotationThread$.handleAnnotationCreate,
      handleAnnotationDelete = _useAnnotationThread$.handleAnnotationDelete,
      handleAnnotationEdit = _useAnnotationThread$.handleAnnotationEdit,
      handleAnnotationStatusChange = _useAnnotationThread$.handleAnnotationStatusChange,
      _useAnnotationThread$2 = _useAnnotationThread.repliesActions,
      handleReplyEdit = _useAnnotationThread$2.handleReplyEdit,
      handleReplyCreate = _useAnnotationThread$2.handleReplyCreate,
      handleReplyDelete = _useAnnotationThread$2.handleReplyDelete;

  var getAvatarUrl =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(userId) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", api.getUsersAPI(false).getAvatarUrlWithAccessToken(userId, file.id));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAvatarUrl(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var getMentionContactsSuccessCallback = function getMentionContactsSuccessCallback(_ref3) {
    var entries = _ref3.entries;
    setMentionSelectorContacts(entries);
  };

  var getMentionWithQuery = debounce(function (searchStr) {
    api.getFileCollaboratorsAPI(false).getCollaboratorsWithQuery(file.id, getMentionContactsSuccessCallback, onError, searchStr);
  }, DEFAULT_COLLAB_DEBOUNCE);
  return React.createElement("div", {
    className: classNames('AnnotationThread', className),
    "data-testid": "annotation-thread"
  }, React.createElement(IntlProvider, {
    locale: language,
    messages: messages
  }, !annotationId ? React.createElement(AnnotationThreadCreate, {
    currentUser: currentUser,
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    isPending: isLoading,
    mentionSelectorContacts: mentionSelectorContacts,
    onFormCancel: handleCancel,
    onFormSubmit: handleAnnotationCreate
  }) : React.createElement(AnnotationThreadContent, {
    annotation: annotation,
    currentUser: currentUser,
    error: error,
    getAvatarUrl: getAvatarUrl,
    getMentionWithQuery: getMentionWithQuery,
    getUserProfileUrl: getUserProfileUrl,
    isLoading: isLoading,
    mentionSelectorContacts: mentionSelectorContacts,
    onAnnotationDelete: handleAnnotationDelete,
    onAnnotationEdit: handleAnnotationEdit,
    onAnnotationStatusChange: handleAnnotationStatusChange,
    onReplyCreate: handleReplyCreate,
    onReplyDelete: handleReplyDelete,
    onReplyEdit: handleReplyEdit,
    replies: replies
  })));
};

export default AnnotationThread;
//# sourceMappingURL=AnnotationThread.js.map