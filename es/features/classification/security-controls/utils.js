function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import getProp from 'lodash/get';
import isNil from 'lodash/isNil';
import appRestrictionsMessageMap from './appRestrictionsMessageMap';
import downloadRestrictionsMessageMap from './downloadRestrictionsMessageMap';
import messages from './messages';
import { ACCESS_POLICY_RESTRICTION, APP_RESTRICTION_MESSAGE_TYPE, DOWNLOAD_CONTROL, LIST_ACCESS_LEVEL, SHARED_LINK_ACCESS_LEVEL } from '../constants';
var APP = ACCESS_POLICY_RESTRICTION.APP,
    BOX_SIGN_REQUEST = ACCESS_POLICY_RESTRICTION.BOX_SIGN_REQUEST,
    DOWNLOAD = ACCESS_POLICY_RESTRICTION.DOWNLOAD,
    EXTERNAL_COLLAB = ACCESS_POLICY_RESTRICTION.EXTERNAL_COLLAB,
    SHARED_LINK = ACCESS_POLICY_RESTRICTION.SHARED_LINK,
    WATERMARK = ACCESS_POLICY_RESTRICTION.WATERMARK;
var DEFAULT = APP_RESTRICTION_MESSAGE_TYPE.DEFAULT,
    WITH_APP_LIST = APP_RESTRICTION_MESSAGE_TYPE.WITH_APP_LIST,
    WITH_OVERFLOWN_APP_LIST = APP_RESTRICTION_MESSAGE_TYPE.WITH_OVERFLOWN_APP_LIST;
var DESKTOP = DOWNLOAD_CONTROL.DESKTOP,
    MOBILE = DOWNLOAD_CONTROL.MOBILE,
    WEB = DOWNLOAD_CONTROL.WEB;
var BLOCK = LIST_ACCESS_LEVEL.BLOCK,
    WHITELIST = LIST_ACCESS_LEVEL.WHITELIST,
    BLACKLIST = LIST_ACCESS_LEVEL.BLACKLIST;
var COLLAB_ONLY = SHARED_LINK_ACCESS_LEVEL.COLLAB_ONLY,
    COLLAB_AND_COMPANY_ONLY = SHARED_LINK_ACCESS_LEVEL.COLLAB_AND_COMPANY_ONLY,
    PUBLIC = SHARED_LINK_ACCESS_LEVEL.PUBLIC;

var getShortSecurityControlsMessage = function getShortSecurityControlsMessage(controls) {
  var items = [];
  var app = controls.app,
      boxSignRequest = controls.boxSignRequest,
      download = controls.download,
      externalCollab = controls.externalCollab,
      sharedLink = controls.sharedLink,
      watermark = controls.watermark; // Shared link and external collab restrictions are grouped
  // together as generic "sharing" restrictions

  var sharing = sharedLink && sharedLink.accessLevel !== PUBLIC || externalCollab; // 4 restriction combinations

  if (sharing && download && app && boxSignRequest) {
    items.push({
      message: messages.shortSharingDownloadAppSign
    });
  } // 3 restriction combinations
  else if (sharing && download && app) {
      items.push({
        message: messages.shortSharingDownloadApp
      });
    } else if (download && app && boxSignRequest) {
      items.push({
        message: messages.shortDownloadAppSign
      });
    } else if (sharing && app && boxSignRequest) {
      items.push({
        message: messages.shortSharingAppSign
      });
    } else if (sharing && download && boxSignRequest) {
      items.push({
        message: messages.shortSharingDownloadSign
      });
    } // 2 restriction combinations
    else if (sharing && boxSignRequest) {
        items.push({
          message: messages.shortSharingSign
        });
      } else if (download && boxSignRequest) {
        items.push({
          message: messages.shortDownloadSign
        });
      } else if (app && boxSignRequest) {
        items.push({
          message: messages.shortAppSign
        });
      } else if (sharing && download) {
        items.push({
          message: messages.shortSharingDownload
        });
      } else if (sharing && app) {
        items.push({
          message: messages.shortSharingApp
        });
      } else if (download && app) {
        items.push({
          message: messages.shortDownloadApp
        });
      } // 1 restriction combinations
      else if (boxSignRequest) {
          items.push({
            message: messages.shortSign
          });
        } else if (sharing) {
          items.push({
            message: messages.shortSharing
          });
        } else if (download) {
          items.push({
            message: messages.shortDownload
          });
        } else if (app) {
          items.push({
            message: messages.shortApp
          });
        }

  if (watermark) {
    items.push({
      message: messages.shortWatermarking
    });
  }

  return items;
};

var getSharedLinkMessages = function getSharedLinkMessages(controls) {
  var items = [];
  var accessLevel = getProp(controls, "".concat(SHARED_LINK, ".accessLevel"));

  switch (accessLevel) {
    case COLLAB_ONLY:
      items.push({
        message: messages.sharingCollabOnly
      });
      break;

    case COLLAB_AND_COMPANY_ONLY:
      items.push({
        message: messages.sharingCollabAndCompanyOnly
      });
      break;

    default:
      // no-op
      break;
  }

  return items;
};

var getWatermarkingMessages = function getWatermarkingMessages(controls) {
  var items = [];
  var isWatermarkEnabled = getProp(controls, "".concat(WATERMARK, ".enabled"), false);

  if (isWatermarkEnabled) {
    items.push({
      message: messages.watermarkingApplied
    });
  }

  return items;
};

var getExternalCollabMessages = function getExternalCollabMessages(controls) {
  var items = [];
  var accessLevel = getProp(controls, "".concat(EXTERNAL_COLLAB, ".accessLevel"));

  switch (accessLevel) {
    case BLOCK:
      items.push({
        message: messages.externalCollabBlock
      });
      break;

    case WHITELIST:
    case BLACKLIST:
      items.push({
        message: messages.externalCollabDomainList
      });
      break;

    default:
      // no-op
      break;
  }

  return items;
};

var getAppDownloadMessages = function getAppDownloadMessages(controls, maxAppCount) {
  var items = [];
  var accessLevel = getProp(controls, "".concat(APP, ".accessLevel"));

  switch (accessLevel) {
    case BLOCK:
      items.push({
        message: messages.appDownloadRestricted
      });
      break;

    case WHITELIST:
    case BLACKLIST:
      {
        var apps = getProp(controls, "".concat(APP, ".apps"), []);
        maxAppCount = isNil(maxAppCount) ? apps.length : maxAppCount;
        var appsToDisplay = apps.slice(0, maxAppCount);
        var remainingAppCount = apps.slice(maxAppCount).length;
        var appNames = appsToDisplay.map(function (_ref) {
          var displayText = _ref.displayText;
          return displayText;
        }).join(', ');

        if (remainingAppCount) {
          var appsList = apps.map(function (_ref2) {
            var displayText = _ref2.displayText;
            return displayText;
          }).join(', ');
          items.push({
            message: _objectSpread({}, appRestrictionsMessageMap[accessLevel][WITH_OVERFLOWN_APP_LIST], {
              values: {
                appNames: appNames,
                remainingAppCount: remainingAppCount
              }
            }),
            tooltipMessage: _objectSpread({}, messages.allAppNames, {
              values: {
                appsList: appsList
              }
            })
          });
        } else {
          // Display list of apps if available, otherwise use generic
          // app restriction copy
          var messageType = apps.length ? WITH_APP_LIST : DEFAULT;
          items.push({
            message: _objectSpread({}, appRestrictionsMessageMap[accessLevel][messageType], {
              values: {
                appNames: appNames
              }
            })
          });
        }

        break;
      }

    default:
      // no-op
      break;
  }

  return items;
};

var getDownloadMessages = function getDownloadMessages(controls) {
  var _downloadRestrictions;

  var items = [];

  var _getProp = getProp(controls, DOWNLOAD, {}),
      web = _getProp.web,
      mobile = _getProp.mobile,
      desktop = _getProp.desktop;

  var downloadRestrictions = (_downloadRestrictions = {}, _defineProperty(_downloadRestrictions, WEB, {
    platform: WEB,
    restrictions: web
  }), _defineProperty(_downloadRestrictions, MOBILE, {
    platform: MOBILE,
    restrictions: mobile
  }), _defineProperty(_downloadRestrictions, DESKTOP, {
    platform: DESKTOP,
    restrictions: desktop
  }), _downloadRestrictions);
  Object.keys(downloadRestrictions).forEach(function (platformKey) {
    var _downloadRestrictions2 = downloadRestrictions[platformKey],
        platform = _downloadRestrictions2.platform,
        restrictions = _downloadRestrictions2.restrictions;

    if (!restrictions) {
      return;
    }

    var restrictExternalUsers = restrictions.restrictExternalUsers,
        restrictManagedUsers = restrictions.restrictManagedUsers;

    if (restrictManagedUsers && restrictExternalUsers) {
      items.push({
        message: downloadRestrictionsMessageMap[platform].externalRestricted[restrictManagedUsers]
      });
    } else if (restrictManagedUsers) {
      items.push({
        message: downloadRestrictionsMessageMap[platform].externalAllowed[restrictManagedUsers]
      });
    } else if (restrictExternalUsers) {
      items.push({
        message: downloadRestrictionsMessageMap[platform].externalRestricted.default
      });
    }
  });
  return items;
};

var getBoxSignRequestMessages = function getBoxSignRequestMessages(controls) {
  var isBoxSignRequestRestrictionEnabled = getProp(controls, "".concat(BOX_SIGN_REQUEST, ".enabled"), false);
  var items = isBoxSignRequestRestrictionEnabled ? [{
    message: messages.boxSignRequestRestricted
  }] : [];
  return items;
};

var getFullSecurityControlsMessages = function getFullSecurityControlsMessages(controls, maxAppCount) {
  var items = [].concat(_toConsumableArray(getSharedLinkMessages(controls)), _toConsumableArray(getExternalCollabMessages(controls)), _toConsumableArray(getDownloadMessages(controls)), _toConsumableArray(getAppDownloadMessages(controls, maxAppCount)), _toConsumableArray(getWatermarkingMessages(controls)), _toConsumableArray(getBoxSignRequestMessages(controls)));
  return items;
};

export { getShortSecurityControlsMessage, getFullSecurityControlsMessages };
//# sourceMappingURL=utils.js.map