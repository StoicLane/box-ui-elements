function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import AnnotationActivityLink from '../annotations/AnnotationActivityLink';
import annotationsMessages from '../annotations/messages';

var AnnotationActivityLinkProvider = function AnnotationActivityLinkProvider(_ref) {
  var isCurrentVersion = _ref.isCurrentVersion,
      item = _ref.item,
      onSelect = _ref.onSelect;
  var file_version = item.file_version,
      id = item.id,
      target = item.target;
  var isFileVersionUnavailable = file_version === null;
  var linkMessage = isCurrentVersion ? annotationsMessages.annotationActivityPageItem : annotationsMessages.annotationActivityVersionLink;
  var linkValue = isCurrentVersion ? target === null || target === void 0 ? void 0 : target.location.value : file_version === null || file_version === void 0 ? void 0 : file_version.version_number;
  var activityLinkMessage = isFileVersionUnavailable ? annotationsMessages.annotationActivityVersionUnavailable : _objectSpread({}, linkMessage, {
    values: {
      number: linkValue
    }
  });

  var handleSelect = function handleSelect() {
    return onSelect(item);
  };

  return React.createElement(AnnotationActivityLink, {
    className: "bcs-AnnotationActivity-link",
    "data-resin-target": "annotationLink",
    id: id,
    isDisabled: isFileVersionUnavailable,
    message: activityLinkMessage,
    onClick: handleSelect
  });
};

export default AnnotationActivityLinkProvider;
//# sourceMappingURL=AnnotationActivityLinkProvider.js.map