function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        hasFiles | isDisabled\n        ", "  | ", "\n        ", " | ", "\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        hasFiles | isDisabled\n        ", "  | ", "\n        ", " | ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        hasFiles | isDone   | isDisabled\n        ", "  | ", " | ", "\n        ", " | ", "  | ", "\n        ", " | ", " | ", "\n        ", "  | ", "  | ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import noop from 'lodash/noop';
import Button from '../../../components/button/Button';
import Footer from '../Footer';
import PrimaryButton from '../../../components/primary-button/PrimaryButton';
describe('elements/content-uploader/Footer', function () {
  var defaultProps = {
    fileLimit: 10,
    hasFiles: false,
    isDone: false,
    isLoading: false,
    onCancel: noop,
    onUpload: noop
  };

  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return shallow(React.createElement(Footer, _extends({}, defaultProps, props)));
  };

  test.each(_templateObject(), true, false, false, false, true, true, false, false, true, true, true, true)('cancel button disabled props should be $isDisabled when hasFiles is $hasFiles and isDone is $isDone', function (_ref) {
    var hasFiles = _ref.hasFiles,
        isDone = _ref.isDone,
        isDisabled = _ref.isDisabled;
    var wrapper = getWrapper({
      hasFiles: hasFiles,
      isDone: isDone
    });
    var closeButton = wrapper.find(Button);
    expect(closeButton.prop('disabled')).toBe(isDisabled);
    expect(closeButton.prop('isDisabled')).toBe(isDisabled);
  });
  test.each(_templateObject2(), true, false, false, true)('upload button disabled props should be $isDisabled when hasFiles is $hasFiles', function (_ref2) {
    var hasFiles = _ref2.hasFiles,
        isDisabled = _ref2.isDisabled;
    var wrapper = getWrapper({
      hasFiles: hasFiles
    });
    var uploadButton = wrapper.find(PrimaryButton);
    expect(uploadButton.prop('disabled')).toBe(isDisabled);
    expect(uploadButton.prop('isDisabled')).toBe(isDisabled);
  });
  test.each(_templateObject3(), true, true, false, false)('close button disabled props should be $isDisabled when hasFiles is $hasFiles', function (_ref3) {
    var hasFiles = _ref3.hasFiles,
        isDisabled = _ref3.isDisabled;
    var wrapper = getWrapper({
      hasFiles: hasFiles,
      onClose: noop
    });
    var closeButton = wrapper.find(Button).at(0);
    expect(closeButton.prop('disabled')).toBe(isDisabled);
    expect(closeButton.prop('isDisabled')).toBe(isDisabled);
  });
});