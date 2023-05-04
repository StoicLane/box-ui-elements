import { shallow } from 'enzyme';
import React from 'react';
import PreviewTitleBodyTwoButtonsModalTemplate from '../PreviewTitleBodyTwoButtonsModalTemplate';
describe('features/in-app-messenger/contextual/templates/PreviewTitleBodyTwoButtonsModalTemplate', function () {
  var onAction = jest.fn();
  var paramsConfigs = {
    all: {
      params: {
        body: 'body',
        button1: {
          label: 'button1',
          actions: ['actions1']
        },
        button2: {
          label: 'button2',
          actions: ['actions2']
        },
        fileUpload: {
          fileId: '1234',
          sharedLinkUrl: 'https://shared-link.com'
        },
        templateID: 'preview-title-body-two-buttons-modal-template',
        title: 'title'
      }
    },
    missingButton2: {
      params: {
        body: 'body',
        button1: {
          label: 'button1',
          actions: ['actions1']
        },
        footnote: 'footnote',
        fileUpload: {
          fileId: '1234',
          sharedLinkUrl: 'https://shared-link.com'
        },
        templateID: 'image-title-body-two-buttons-modal-template',
        title: 'title'
      }
    }
  };

  var getWrapper = function getWrapper(params) {
    return shallow(React.createElement(PreviewTitleBodyTwoButtonsModalTemplate, {
      onAction: onAction,
      params: params
    }));
  };

  beforeEach(function () {});
  afterEach(function () {
    jest.resetAllMocks();
  });
  describe.each([paramsConfigs.all, paramsConfigs.missingButton2])('%o', function (_ref) {
    var params = _ref.params;
    test('renders correctly', function () {
      var wrapper = getWrapper(params);
      expect(wrapper.find('.bdl-PreviewTitleBodyTwoButtonsModalTemplate').length).toEqual(1);
      expect(wrapper.find('.bdl-PreviewTitleBodyTwoButtonsModalTemplate-title').length).toEqual(1);
      expect(wrapper.find('.bdl-PreviewTitleBodyTwoButtonsModalTemplate-body').length).toEqual(1);
      expect(wrapper.find('.bdl-PreviewTitleBodyTwoButtonsModalTemplate-previewContainer').length).toEqual(1);
      expect(wrapper.find('PrimaryButton').length).toEqual(1);
    });
  });

  function checkClickElement(findElement, expectCalled) {
    var element = findElement(getWrapper(paramsConfigs.all.params));
    element.simulate('click');

    if (expectCalled) {
      var _expect;

      expect(onAction).toHaveBeenCalledTimes(1);

      for (var _len = arguments.length, expectCalledWith = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        expectCalledWith[_key - 2] = arguments[_key];
      }

      (_expect = expect(onAction)).toHaveBeenCalledWith.apply(_expect, expectCalledWith);
    } else {
      expect(onAction).toHaveBeenCalledTimes(0);
    }
  }

  test('should call onAction(button1.actions) if button1 is clicked', function () {
    return checkClickElement(function (wrapper) {
      return wrapper.find('PrimaryButton');
    }, true, ['actions1']);
  });
  test('should call onAction(button2.actions) if button2 is clicked', function () {
    return checkClickElement(function (wrapper) {
      return wrapper.find('Button');
    }, true, ['actions2']);
  });
  test('should not call onAction if clicked else where', function () {
    return checkClickElement(function (wrapper) {
      return wrapper.find('.bdl-PreviewTitleBodyTwoButtonsModalTemplate-contentContainer');
    }, false);
  });
});