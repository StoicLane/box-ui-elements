function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            securityControls                                            | expectedMessages                                                      | description\n            ", "                                                       | ", "                                                                 | ", "\n            ", "                                      | ", " | ", "\n            ", "                  | ", "                                                                 | ", "\n            ", "                | ", "                                 | ", "\n            ", "            | ", "                                 | ", "\n            ", "            | ", "                                    | ", "\n            ", "          | ", "                                     | ", "\n            ", "      | ", "                                     | ", "\n            ", "     | ", "                                | ", "\n            ", " | ", "                                | ", "\n            ", "                   | ", "                                        | ", "\n            ", "               | ", "                                        | ", "\n            ", "                     | ", "                                       | ", "\n            ", "                          | ", "                                            | ", "\n            ", "                         | ", "                                    | ", "\n            ", "                     | ", "                                    | ", "\n            ", "                              | ", "                                         | ", "\n            ", "                          | ", "                                         | ", "\n            ", "                                | ", "                                        | ", "\n            ", "                   | ", "                                            | ", "\n            ", "                                       | ", "                                            | ", "\n            ", "                                   | ", "                                            | ", "\n            ", "                                         | ", "                                           | ", "\n            ", "                                              | ", "                                                | ", "\n            ", "                                        | ", "                                       | ", "\n            ", "                                   | ", "                                               | ", "\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import messages from '../messages';
import appRestrictionsMessageMap from '../appRestrictionsMessageMap';
import downloadRestrictionsMessageMap from '../downloadRestrictionsMessageMap';
import { getShortSecurityControlsMessage, getFullSecurityControlsMessages } from '../utils';
import { APP_RESTRICTION_MESSAGE_TYPE, DOWNLOAD_CONTROL, LIST_ACCESS_LEVEL, MANAGED_USERS_ACCESS_LEVEL, SHARED_LINK_ACCESS_LEVEL } from '../../constants';
var DEFAULT = APP_RESTRICTION_MESSAGE_TYPE.DEFAULT,
    WITH_APP_LIST = APP_RESTRICTION_MESSAGE_TYPE.WITH_APP_LIST,
    WITH_OVERFLOWN_APP_LIST = APP_RESTRICTION_MESSAGE_TYPE.WITH_OVERFLOWN_APP_LIST;
var DESKTOP = DOWNLOAD_CONTROL.DESKTOP,
    MOBILE = DOWNLOAD_CONTROL.MOBILE,
    WEB = DOWNLOAD_CONTROL.WEB;
var BLOCK = LIST_ACCESS_LEVEL.BLOCK,
    WHITELIST = LIST_ACCESS_LEVEL.WHITELIST,
    BLACKLIST = LIST_ACCESS_LEVEL.BLACKLIST;
var OWNERS_AND_COOWNERS = MANAGED_USERS_ACCESS_LEVEL.OWNERS_AND_COOWNERS,
    OWNERS_COOWNERS_AND_EDITORS = MANAGED_USERS_ACCESS_LEVEL.OWNERS_COOWNERS_AND_EDITORS;
var COLLAB_ONLY = SHARED_LINK_ACCESS_LEVEL.COLLAB_ONLY,
    COLLAB_AND_COMPANY_ONLY = SHARED_LINK_ACCESS_LEVEL.COLLAB_AND_COMPANY_ONLY,
    PUBLIC = SHARED_LINK_ACCESS_LEVEL.PUBLIC;
describe('features/classification/security-controls/utils', function () {
  var accessPolicy;
  var allSecurityControls = {
    sharedLink: {},
    download: {},
    externalCollab: {},
    app: {},
    watermark: {},
    boxSignRequest: {}
  };
  beforeEach(function () {
    accessPolicy = {};
  });
  describe('getShortSecurityControlsMessage()', function () {
    test.each(_templateObject(), {}, [], 'there are no restrictions', allSecurityControls, [messages.shortSharingDownloadAppSign, messages.shortWatermarking], 'all restrictions are present', {
      sharedLink: {
        accessLevel: PUBLIC
      }
    }, [], 'shared link restriction has a "public" access level', {
      sharedLink: {},
      download: {},
      app: {}
    }, [messages.shortSharingDownloadApp], 'download, app and shared link restrictions are present', {
      externalCollab: {},
      download: {},
      app: {}
    }, [messages.shortSharingDownloadApp], 'download, app and external collab restrictions are present', {
      download: {},
      app: {},
      boxSignRequest: {}
    }, [messages.shortDownloadAppSign], 'download, app and sign restrictions are present', {
      app: {},
      boxSignRequest: {},
      sharedLink: {}
    }, [messages.shortSharingAppSign], 'app, sign and shared link restrictions are present', {
      app: {},
      boxSignRequest: {},
      externalCollab: {}
    }, [messages.shortSharingAppSign], 'app, sign and external collab restrictions are present', {
      download: {},
      boxSignRequest: {},
      sharedLink: {}
    }, [messages.shortSharingDownloadSign], 'download, sign and shared link restrictions are present', {
      download: {},
      boxSignRequest: {},
      externalCollab: {}
    }, [messages.shortSharingDownloadSign], 'download, sign and external collab restrictions are present', {
      sharedLink: {},
      boxSignRequest: {}
    }, [messages.shortSharingSign], 'sign and shared link restrictions are present', {
      externalCollab: {},
      boxSignRequest: {}
    }, [messages.shortSharingSign], 'sign and external collab restrictions are present', {
      download: {},
      boxSignRequest: {}
    }, [messages.shortDownloadSign], 'download and sign restrictions are present', {
      app: {},
      boxSignRequest: {}
    }, [messages.shortAppSign], 'app and sign restrictions are present', {
      sharedLink: {},
      download: {}
    }, [messages.shortSharingDownload], 'download and shared link restrictions are present', {
      externalCollab: {},
      download: {}
    }, [messages.shortSharingDownload], 'download and external collab restrictions are present', {
      sharedLink: {},
      app: {}
    }, [messages.shortSharingApp], 'app and shared link restrictions are present', {
      externalCollab: {},
      app: {}
    }, [messages.shortSharingApp], 'app and external collab restrictions are present', {
      download: {},
      app: {}
    }, [messages.shortDownloadApp], 'app and download restrictions are present', {
      sharedLink: {},
      externalCollab: {}
    }, [messages.shortSharing], 'shared link and external collab restrictions are present', {
      sharedLink: {}
    }, [messages.shortSharing], 'shared link restrictions are present', {
      externalCollab: {}
    }, [messages.shortSharing], 'external collab restrictions are present', {
      download: {}
    }, [messages.shortDownload], 'download restrictions are present', {
      app: {}
    }, [messages.shortApp], 'app restrictions are present', {
      watermark: {}
    }, [messages.shortWatermarking], 'watermark restrictions are present', {
      boxSignRequest: {}
    }, [messages.shortSign], 'sign restrictions are present')('should return correct messages when $description', function (_ref) {
      var securityControls = _ref.securityControls,
          expectedMessages = _ref.expectedMessages;
      var expectedResult = expectedMessages.map(function (message) {
        return {
          message: message
        };
      });
      var result = getShortSecurityControlsMessage(securityControls);
      expect(result).toEqual(expectedResult);
    });
    test('should not return tooltipMessage', function () {
      accessPolicy = {
        sharedLink: {},
        download: {},
        externalCollab: {},
        app: {}
      };
      expect(getShortSecurityControlsMessage(accessPolicy)[0].tooltipMessage).toBeUndefined();
    });
  });
  describe('getFullSecurityControlsMessages()', function () {
    test('should include correct message when shared link is restricted to collaborators', function () {
      accessPolicy = {
        sharedLink: {
          accessLevel: COLLAB_ONLY
        }
      };
      expect(getFullSecurityControlsMessages(accessPolicy)).toEqual([{
        message: messages.sharingCollabOnly
      }]);
    });
    test('should include correct message when shared link is restricted to collaborators and company', function () {
      accessPolicy = {
        sharedLink: {
          accessLevel: COLLAB_AND_COMPANY_ONLY
        }
      };
      expect(getFullSecurityControlsMessages(accessPolicy)).toEqual([{
        message: messages.sharingCollabAndCompanyOnly
      }]);
    });
    test('should include correct message when watermark is applied', function () {
      accessPolicy = {
        watermark: {
          enabled: true
        }
      };
      expect(getFullSecurityControlsMessages(accessPolicy)).toEqual([{
        message: messages.watermarkingApplied
      }]);
    });
    test('should include correct message when external collab is blocked', function () {
      accessPolicy = {
        externalCollab: {
          accessLevel: BLOCK
        }
      };
      expect(getFullSecurityControlsMessages(accessPolicy)).toEqual([{
        message: messages.externalCollabBlock
      }]);
    });
    test.each([WHITELIST, BLACKLIST])('should include correct message when external collab is restricted to %s', function (listType) {
      accessPolicy = {
        externalCollab: {
          accessLevel: listType
        }
      };
      expect(getFullSecurityControlsMessages(accessPolicy)).toEqual([{
        message: messages.externalCollabDomainList
      }]);
    });
    test('should include correct message when app download is blocked', function () {
      accessPolicy = {
        app: {
          accessLevel: BLOCK
        }
      };
      expect(getFullSecurityControlsMessages(accessPolicy)).toEqual([{
        message: messages.appDownloadRestricted
      }]);
    });
    test.each([WHITELIST, BLACKLIST])('should include correct message when app download is restricted by %s and apps list is not provided', function (listType) {
      accessPolicy = {
        app: {
          accessLevel: listType,
          apps: []
        }
      };
      var expectedMessage = appRestrictionsMessageMap[listType][DEFAULT];
      expect(expectedMessage).toBeTruthy();
      expect(getFullSecurityControlsMessages(accessPolicy, 3)).toEqual([{
        message: _objectSpread({}, expectedMessage, {
          values: {
            appNames: ''
          }
        })
      }]);
    });
    test.each([WHITELIST, BLACKLIST])('should include correct message when app download is restricted by %s and apps are less than maxAppCount', function (listType) {
      accessPolicy = {
        app: {
          accessLevel: listType,
          apps: [{
            displayText: 'a'
          }, {
            displayText: 'b'
          }, {
            displayText: 'c'
          }]
        }
      };
      var expectedMessage = appRestrictionsMessageMap[listType][WITH_APP_LIST];
      expect(expectedMessage).toBeTruthy();
      expect(getFullSecurityControlsMessages(accessPolicy, 3)).toEqual([{
        message: _objectSpread({}, expectedMessage, {
          values: {
            appNames: 'a, b, c'
          }
        })
      }]);
    });
    test.each([WHITELIST, BLACKLIST])('should include correct message and tooltipMessage when app download is restricted by %s and apps are maxAppCount or more', function (listType) {
      accessPolicy = {
        app: {
          accessLevel: listType,
          apps: [{
            displayText: 'a'
          }, {
            displayText: 'b'
          }, {
            displayText: 'c'
          }, {
            displayText: 'd'
          }, {
            displayText: 'e'
          }]
        }
      };
      var expectedMessage = appRestrictionsMessageMap[listType][WITH_OVERFLOWN_APP_LIST];
      expect(expectedMessage).toBeTruthy();
      expect(getFullSecurityControlsMessages(accessPolicy, 3)).toEqual([{
        message: _objectSpread({}, expectedMessage, {
          values: {
            appNames: 'a, b, c',
            remainingAppCount: 2
          }
        }),
        tooltipMessage: _objectSpread({}, messages.allAppNames, {
          values: {
            appsList: 'a, b, c, d, e'
          }
        })
      }]);
    });
    test('should include correct message when Box Sign requests are restricted', function () {
      accessPolicy = {
        boxSignRequest: {
          enabled: true
        }
      };
      expect(getFullSecurityControlsMessages(accessPolicy)).toEqual([{
        message: messages.boxSignRequestRestricted
      }]);
    });
    describe.each([DESKTOP, MOBILE, WEB])('%s download restriction', function (platform) {
      test.each([OWNERS_AND_COOWNERS, OWNERS_COOWNERS_AND_EDITORS])('should include correct message when both external and "%s" managed users are restricted', function (managedUsersCombo) {
        accessPolicy.download = _defineProperty({}, platform, {
          restrictManagedUsers: managedUsersCombo,
          restrictExternalUsers: true
        });
        expect(getFullSecurityControlsMessages(accessPolicy)).toEqual([{
          message: downloadRestrictionsMessageMap[platform].externalRestricted[managedUsersCombo]
        }]);
      });
      test.each([OWNERS_AND_COOWNERS, OWNERS_COOWNERS_AND_EDITORS])('should include correct message when "%s" managed users are restricted', function (managedUsersCombo) {
        accessPolicy.download = _defineProperty({}, platform, {
          restrictManagedUsers: managedUsersCombo,
          restrictExternalUsers: false
        });
        expect(getFullSecurityControlsMessages(accessPolicy)).toEqual([{
          message: downloadRestrictionsMessageMap[platform].externalAllowed[managedUsersCombo]
        }]);
      });
      test('should include correct message when external users are restricted', function () {
        accessPolicy.download = _defineProperty({}, platform, {
          restrictExternalUsers: true
        });
        expect(getFullSecurityControlsMessages(accessPolicy)).toEqual([{
          message: downloadRestrictionsMessageMap[platform].externalRestricted.default
        }]);
      });
    });
  });
});