/**
 * 
 * @file Input element for folder/file upload
 * @author Box
 */
import * as React from 'react';

var UploadInput = function UploadInput(_ref) {
  var handleChange = _ref.handleChange,
      inputLabel = _ref.inputLabel,
      _ref$inputLabelClass = _ref.inputLabelClass,
      inputLabelClass = _ref$inputLabelClass === void 0 ? '' : _ref$inputLabelClass,
      _ref$isFolderUpload = _ref.isFolderUpload,
      isFolderUpload = _ref$isFolderUpload === void 0 ? false : _ref$isFolderUpload,
      _ref$isMultiple = _ref.isMultiple,
      isMultiple = _ref$isMultiple === void 0 ? true : _ref$isMultiple;
  var inputRef = React.useRef(null);

  var onKeyDown = function onKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      if (inputRef.current) {
        inputRef.current.click();
      }
    }
  };

  return inputLabel ? React.createElement("label", {
    className: inputLabelClass,
    onKeyDown: onKeyDown,
    tabIndex: 0
  }, inputLabel, React.createElement("input", {
    ref: inputRef,
    directory: isFolderUpload ? '' : undefined,
    multiple: isMultiple,
    onChange: handleChange,
    type: "file",
    webkitdirectory: isFolderUpload ? '' : undefined
  })) : null;
};

export default UploadInput;
//# sourceMappingURL=UploadInput.js.map