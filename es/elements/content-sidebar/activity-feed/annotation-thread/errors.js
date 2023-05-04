var _annotationErrors, _commentsErrors;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { ERROR_CODE_CREATE_REPLY, ERROR_CODE_DELETE_ANNOTATION, ERROR_CODE_DELETE_COMMENT, ERROR_CODE_EDIT_ANNOTATION, ERROR_CODE_FETCH_ANNOTATION, ERROR_CODE_UPDATE_COMMENT } from '../../../../constants';
import apiMessages from '../../../../api/messages';
import commonMessages from '../../../common/messages';
import messages from './messages';
var annotationErrors = (_annotationErrors = {}, _defineProperty(_annotationErrors, ERROR_CODE_FETCH_ANNOTATION, messages.errorFetchAnnotation), _defineProperty(_annotationErrors, ERROR_CODE_EDIT_ANNOTATION, messages.errorEditAnnotation), _defineProperty(_annotationErrors, ERROR_CODE_DELETE_ANNOTATION, messages.errorDeleteAnnotation), _defineProperty(_annotationErrors, "default", commonMessages.error), _annotationErrors);
var commentsErrors = (_commentsErrors = {}, _defineProperty(_commentsErrors, ERROR_CODE_UPDATE_COMMENT, apiMessages.commentUpdateErrorMessage), _defineProperty(_commentsErrors, ERROR_CODE_CREATE_REPLY, apiMessages.commentCreateErrorMessage), _defineProperty(_commentsErrors, ERROR_CODE_DELETE_COMMENT, apiMessages.commentDeleteErrorMessage), _defineProperty(_commentsErrors, "default", commonMessages.error), _commentsErrors);
export { annotationErrors, commentsErrors };
//# sourceMappingURL=errors.js.map