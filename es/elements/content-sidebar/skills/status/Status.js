/**
 * 
 * @file Status Skill Card component
 * @author Box
 */
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../../../common/messages';
import { SKILLS_ERROR_EXTERNAL_AUTH, SKILLS_ERROR_BILLING, SKILLS_ERROR_UNKNOWN, SKILLS_ERROR_INVOCATIONS, SKILLS_ERROR_FILE_PROCESSING, SKILLS_ERROR_INVALID_FILE_SIZE, SKILLS_ERROR_INVALID_FILE_FORMAT, SKILLS_STATUS_PENDING, SKILLS_STATUS_INVOKED } from '../../../../constants';

var Status = function Status(_ref) {
  var card = _ref.card;
  var _card$status = card.status,
      status = _card$status === void 0 ? {} : _card$status;
  var code = status.code,
      message = status.message;
  var localizedMessage = messages.skillUnknownError;

  switch (code) {
    case SKILLS_ERROR_INVALID_FILE_SIZE:
      localizedMessage = messages.skillInvalidFileSizeError;
      break;

    case SKILLS_ERROR_INVALID_FILE_FORMAT:
      localizedMessage = messages.skillInvalidFileExtensionError;
      break;

    case SKILLS_ERROR_EXTERNAL_AUTH:
    case SKILLS_ERROR_BILLING:
    case SKILLS_ERROR_INVOCATIONS:
    case SKILLS_ERROR_UNKNOWN:
      localizedMessage = messages.skillUnknownError;
      break;

    case SKILLS_ERROR_FILE_PROCESSING:
      localizedMessage = messages.skillFileProcessingError;
      break;

    case SKILLS_STATUS_PENDING:
      localizedMessage = messages.skillPendingStatus;
      break;

    case SKILLS_STATUS_INVOKED:
      localizedMessage = messages.skillInvokedStatus;
      break;

    default:
      if (message) {
        return message;
      }

  }

  return React.createElement(FormattedMessage, localizedMessage);
};

export default Status;
//# sourceMappingURL=Status.js.map