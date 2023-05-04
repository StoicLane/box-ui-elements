function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n            fileVersionId | annotationId | expectedPath\n            ", "  | ", " | ", "\n            ", "  | ", "      | ", "\n            ", "      | ", " | ", "\n            ", "      | ", "      | ", "\n            ", "      | ", "     | ", "\n        "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n            annotationId | fileVersionId | expectedAnnotationId | expectedFileVersionId\n            ", "      | ", "      | ", "              | ", "\n            ", "     | ", "      | ", "             | ", "\n        "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n            status            | expectedAction\n            ", " | ", "\n            ", " | ", "\n        "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n            status            | expectedAction\n            ", " | ", "\n            ", " | ", "\n        "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n            status            | expectedAction\n            ", " | ", "\n            ", " | ", "\n        "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n            status            | expectedAction\n            ", " | ", "\n            ", " | ", "\n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n            status            | expectedAction\n            ", " | ", "\n            ", " | ", "\n        "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n            status            | annotation        | error        | expectedAction         | expectedAnnotation | expectedError\n            ", " | ", " | ", " | ", " | ", "  | ", "\n            ", " | ", " | ", " | ", "   | ", "  | ", "\n            ", "   | ", " | ", " | ", "   | ", "  | ", "\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            isStartEvent | expectedEvent\n            ", " | ", "\n            ", "     | ", "\n            ", "      | ", "\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            isStartEvent | expectedEvent\n            ", " | ", "\n            ", "     | ", "\n            ", "      | ", "\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            isStartEvent | expectedEvent\n            ", " | ", "\n            ", "     | ", "\n            ", "      | ", "\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            isStartEvent | expectedEvent\n            ", " | ", "\n            ", "     | ", "\n            ", "      | ", "\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            isStartEvent | expectedEvent\n            ", " | ", "\n            ", "     | ", "\n            ", "      | ", "\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Action, AnnotatorContext, withAnnotations, Status } from '../index';
describe('elements/common/annotator-context/withAnnotations', function () {
  var defaults = {
    className: 'foo',
    onAnnotator: jest.fn(),
    onError: jest.fn(),
    onPreviewDestroy: jest.fn()
  };

  var MockComponent = function MockComponent(props) {
    return React.createElement("div", props);
  };

  var WrappedComponent = withAnnotations(MockComponent);

  var getWrapper = function getWrapper() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return shallow(React.createElement(WrappedComponent, _extends({}, defaults, props)));
  };

  var getContextProvider = function getContextProvider(wrapper) {
    return wrapper.find(AnnotatorContext.Provider);
  };

  var mockAnnotator = {};
  beforeEach(function () {
    mockAnnotator = {
      addListener: jest.fn(),
      emit: jest.fn(),
      removeAllListeners: jest.fn(),
      removeListener: jest.fn()
    };
  });
  describe('constructor', function () {
    test('should parse the history location pathname to initialize state with activeAnnotationId', function () {
      var history = createMemoryHistory({
        initialEntries: ['/activity/annotations/123/456']
      });
      var wrapper = getWrapper({
        history: history,
        location: history.location
      });
      expect(wrapper.state('activeAnnotationId')).toBe('456');
    });
    test('should not initialize state with activeAnnotationId if history path does not match deeplink schema', function () {
      var history = createMemoryHistory({
        initialEntries: ['/activity/annotations/456']
      });
      var wrapper = getWrapper({
        history: history,
        location: history.location
      });
      expect(wrapper.state('activeAnnotationId')).toBe(null);
    });
  });
  test('should pass onAnnotator and onPreviewDestroy as props on the wrapped component', function () {
    var wrapper = getWrapper();
    var wrappedComponent = wrapper.find(MockComponent);
    expect(wrappedComponent.exists()).toBeTruthy();
    expect(wrappedComponent.props().onAnnotator).toBeTruthy();
    expect(wrappedComponent.props().onPreviewDestroy).toBeTruthy();
  });
  test('should pass the context on to the AnnotatorContext.Provider', function () {
    var wrapper = getWrapper();
    var instance = wrapper.instance();
    var contextProvider = getContextProvider(wrapper);
    expect(contextProvider.exists()).toBeTruthy();
    expect(contextProvider.prop('value').emitActiveAnnotationChangeEvent).toEqual(instance.emitActiveAnnotationChangeEvent);
    expect(contextProvider.prop('value').emitAnnotationRemoveEvent).toEqual(instance.emitAnnotationRemoveEvent);
    expect(contextProvider.prop('value').emitAnnotationReplyCreateEvent).toEqual(instance.emitAnnotationReplyCreateEvent);
    expect(contextProvider.prop('value').emitAnnotationReplyDeleteEvent).toEqual(instance.emitAnnotationReplyDeleteEvent);
    expect(contextProvider.prop('value').emitAnnotationReplyUpdateEvent).toEqual(instance.emitAnnotationReplyUpdateEvent);
    expect(contextProvider.prop('value').emitAnnotationUpdateEvent).toEqual(instance.emitAnnotationUpdateEvent);
    expect(contextProvider.prop('value').getAnnotationsMatchPath).toEqual(instance.getMatchPath);
    expect(contextProvider.prop('value').getAnnotationsPath).toEqual(instance.getAnnotationsPath);
    expect(contextProvider.prop('value').state).toEqual({
      action: null,
      activeAnnotationFileVersionId: null,
      activeAnnotationId: null,
      annotation: null,
      annotationReply: null,
      error: null,
      meta: null
    });
  });
  describe('emitActiveAnnotationChangeEvent', function () {
    test('should call annotator emit on action', function () {
      var wrapper = getWrapper();
      var instance = wrapper.instance(); // Set the annotator on the withAnnotations instance

      instance.handleAnnotator(mockAnnotator);
      instance.emitActiveAnnotationChangeEvent('123');
      expect(mockAnnotator.emit).toBeCalled();
      expect(mockAnnotator.emit).toBeCalledWith('annotations_active_set', '123');
    });
  });
  describe('emitAnnotationRemoveEvent', function () {
    test.each(_templateObject(), undefined, 'annotations_remove', false, 'annotations_remove', true, 'annotations_remove_start')('given isStartEvent = $isStartEvent should call annotator emit with event = $expectedEvent', function (_ref) {
      var isStartEvent = _ref.isStartEvent,
          expectedEvent = _ref.expectedEvent;
      var wrapper = getWrapper();
      var instance = wrapper.instance();
      instance.handleAnnotator(mockAnnotator);
      instance.emitAnnotationRemoveEvent('123', isStartEvent);
      expect(mockAnnotator.emit).toBeCalledWith(expectedEvent, '123');
    });
  });
  describe('emitAnnotationUpdateEvent', function () {
    test.each(_templateObject2(), undefined, 'sidebar.annotations_update', false, 'sidebar.annotations_update', true, 'sidebar.annotations_update_start')('given isStartEvent = $isStartEvent should call annotator emit with event = $expectedEvent', function (_ref2) {
      var isStartEvent = _ref2.isStartEvent,
          expectedEvent = _ref2.expectedEvent;
      var wrapper = getWrapper();
      var instance = wrapper.instance();
      var annotation = {
        id: '123',
        status: 'resolved'
      };
      instance.handleAnnotator(mockAnnotator);
      instance.emitAnnotationUpdateEvent(annotation, isStartEvent);
      expect(mockAnnotator.emit).toBeCalledWith(expectedEvent, annotation);
    });
  });
  describe('emitAnnotationReplyCreateEvent', function () {
    test.each(_templateObject3(), undefined, 'sidebar.annotations_reply_create', false, 'sidebar.annotations_reply_create', true, 'sidebar.annotations_reply_create_start')('given isStartEvent = $isStartEvent should call annotator emit with event = $expectedEvent', function (_ref3) {
      var isStartEvent = _ref3.isStartEvent,
          expectedEvent = _ref3.expectedEvent;
      var wrapper = getWrapper();
      var instance = wrapper.instance();
      var annotationId = '123';
      var reply = {
        tagged_message: 'abc'
      };
      var requestId = 'comment_123';
      instance.handleAnnotator(mockAnnotator);
      instance.emitAnnotationReplyCreateEvent(reply, requestId, annotationId, isStartEvent);
      expect(mockAnnotator.emit).toBeCalledWith(expectedEvent, {
        annotationId: annotationId,
        reply: reply,
        requestId: requestId
      });
    });
  });
  describe('emitAnnotationReplyDeleteEvent', function () {
    test.each(_templateObject4(), undefined, 'sidebar.annotations_reply_delete', false, 'sidebar.annotations_reply_delete', true, 'sidebar.annotations_reply_delete_start')('given isStartEvent = $isStartEvent should call annotator emit with event = $expectedEvent', function (_ref4) {
      var isStartEvent = _ref4.isStartEvent,
          expectedEvent = _ref4.expectedEvent;
      var wrapper = getWrapper();
      var instance = wrapper.instance();
      var annotationId = '123';
      var replyId = '456';
      instance.handleAnnotator(mockAnnotator);
      instance.emitAnnotationReplyDeleteEvent(replyId, annotationId, isStartEvent);
      expect(mockAnnotator.emit).toBeCalledWith(expectedEvent, {
        annotationId: annotationId,
        id: replyId
      });
    });
  });
  describe('emitAnnotationReplyUpdateEvent', function () {
    test.each(_templateObject5(), undefined, 'sidebar.annotations_reply_update', false, 'sidebar.annotations_reply_update', true, 'sidebar.annotations_reply_update_start')('given isStartEvent = $isStartEvent should call annotator emit with event = $expectedEvent', function (_ref5) {
      var isStartEvent = _ref5.isStartEvent,
          expectedEvent = _ref5.expectedEvent;
      var wrapper = getWrapper();
      var instance = wrapper.instance();
      var annotationId = '123';
      var reply = {
        id: '456',
        tagged_message: 'resolved'
      };
      instance.handleAnnotator(mockAnnotator);
      instance.emitAnnotationReplyUpdateEvent(reply, annotationId, isStartEvent);
      expect(mockAnnotator.emit).toBeCalledWith(expectedEvent, {
        annotationId: annotationId,
        reply: reply
      });
    });
  });
  describe('handleAnnotationCreate()', function () {
    var mockAnnotation = {
      foo: 'bar'
    };
    var mockError = new Error('boo');
    test.each(_templateObject6(), Status.PENDING, mockAnnotation, undefined, Action.CREATE_START, mockAnnotation, null, Status.SUCCESS, mockAnnotation, undefined, Action.CREATE_END, mockAnnotation, null, Status.ERROR, mockAnnotation, mockError, Action.CREATE_END, mockAnnotation, mockError)('should update the context provider value if $status status received', function (_ref6) {
      var status = _ref6.status,
          annotation = _ref6.annotation,
          error = _ref6.error,
          expectedAction = _ref6.expectedAction,
          expectedAnnotation = _ref6.expectedAnnotation,
          expectedError = _ref6.expectedError;
      var wrapper = getWrapper();
      var eventData = {
        annotation: annotation,
        meta: {
          status: status,
          requestId: '123'
        },
        error: error
      };
      wrapper.instance().handleAnnotationCreate(eventData);
      var contextProvider = getContextProvider(wrapper);
      expect(contextProvider.exists()).toBeTruthy();
      expect(contextProvider.prop('value').state).toEqual({
        action: expectedAction,
        activeAnnotationFileVersionId: null,
        activeAnnotationId: null,
        annotation: expectedAnnotation,
        annotationReply: null,
        error: expectedError,
        meta: {
          status: status,
          requestId: '123'
        }
      });
    });
    test('should invoke the onError prop if provided', function () {
      var onError = jest.fn();
      var wrapper = getWrapper({
        onError: onError
      });
      wrapper.instance().handleAnnotationCreate({
        error: mockError,
        meta: {
          requestId: '123',
          status: Status.ERROR
        }
      });
      expect(onError).toHaveBeenCalledWith(mockError, 'create_annotation_error', {
        showNotification: true
      });
    });
  });
  describe('handleAnnotationDelete()', function () {
    test.each(_templateObject7(), Status.PENDING, Action.DELETE_START, Status.SUCCESS, Action.DELETE_END)('should update the context provider value if $status status received', function (_ref7) {
      var status = _ref7.status,
          expectedAction = _ref7.expectedAction;
      var wrapper = getWrapper();
      var annotation = {
        id: '123'
      };
      var eventData = {
        annotation: annotation,
        meta: {
          status: status
        }
      };
      wrapper.instance().handleAnnotationDelete(eventData);
      var contextProvider = getContextProvider(wrapper);
      expect(contextProvider.exists()).toBeTruthy();
      expect(contextProvider.prop('value').state).toEqual({
        action: expectedAction,
        activeAnnotationFileVersionId: null,
        activeAnnotationId: null,
        annotation: annotation,
        annotationReply: null,
        error: null,
        meta: {
          status: status
        }
      });
    });
  });
  describe('handleAnnotationUpdate()', function () {
    test.each(_templateObject8(), Status.PENDING, Action.UPDATE_START, Status.SUCCESS, Action.UPDATE_END)('should update the context provider value if $status status received', function (_ref8) {
      var status = _ref8.status,
          expectedAction = _ref8.expectedAction;
      var wrapper = getWrapper();
      var annotation = {
        id: '123',
        status: 'resolved'
      };
      var eventData = {
        annotation: annotation,
        meta: {
          status: status
        }
      };
      wrapper.instance().handleAnnotationUpdate(eventData);
      var contextProvider = getContextProvider(wrapper);
      expect(contextProvider.exists()).toBeTruthy();
      expect(contextProvider.prop('value').state).toEqual({
        action: expectedAction,
        activeAnnotationFileVersionId: null,
        activeAnnotationId: null,
        annotation: annotation,
        annotationReply: null,
        error: null,
        meta: {
          status: status
        }
      });
    });
  });
  describe('handleAnnotationReplyCreate()', function () {
    test.each(_templateObject9(), Status.PENDING, Action.REPLY_CREATE_START, Status.SUCCESS, Action.REPLY_CREATE_END)('should update the context provider value if $status status received', function (_ref9) {
      var status = _ref9.status,
          expectedAction = _ref9.expectedAction;
      var wrapper = getWrapper();
      var annotation = {
        id: '123',
        status: 'resolved'
      };
      var annotationReply = {
        tagged_message: 'abc'
      };
      var requestId = 'comment_123';
      var eventData = {
        annotation: annotation,
        annotationReply: annotationReply,
        meta: {
          status: status,
          requestId: requestId
        }
      };
      wrapper.instance().handleAnnotationReplyCreate(eventData);
      var contextProvider = getContextProvider(wrapper);
      expect(contextProvider.exists()).toBeTruthy();
      expect(contextProvider.prop('value').state).toEqual({
        action: expectedAction,
        activeAnnotationFileVersionId: null,
        activeAnnotationId: null,
        annotation: annotation,
        annotationReply: annotationReply,
        error: null,
        meta: {
          status: status,
          requestId: requestId
        }
      });
    });
  });
  describe('handleAnnotationReplyUpdate()', function () {
    test.each(_templateObject10(), Status.PENDING, Action.REPLY_UPDATE_START, Status.SUCCESS, Action.REPLY_UPDATE_END)('should update the context provider value if $status status received', function (_ref10) {
      var status = _ref10.status,
          expectedAction = _ref10.expectedAction;
      var wrapper = getWrapper();
      var annotation = {
        id: '123',
        status: 'resolved'
      };
      var annotationReply = {
        id: '123',
        tagged_message: 'abc'
      };
      var eventData = {
        annotation: annotation,
        annotationReply: annotationReply,
        meta: {
          status: status
        }
      };
      wrapper.instance().handleAnnotationReplyUpdate(eventData);
      var contextProvider = getContextProvider(wrapper);
      expect(contextProvider.exists()).toBeTruthy();
      expect(contextProvider.prop('value').state).toEqual({
        action: expectedAction,
        activeAnnotationFileVersionId: null,
        activeAnnotationId: null,
        annotation: annotation,
        annotationReply: annotationReply,
        error: null,
        meta: {
          status: status
        }
      });
    });
  });
  describe('handleAnnotationReplyDelete()', function () {
    test.each(_templateObject11(), Status.PENDING, Action.REPLY_DELETE_START, Status.SUCCESS, Action.REPLY_DELETE_END)('should update the context provider value if $status status received', function (_ref11) {
      var status = _ref11.status,
          expectedAction = _ref11.expectedAction;
      var wrapper = getWrapper();
      var annotation = {
        id: '123'
      };
      var annotationReply = {
        id: '123'
      };
      var eventData = {
        annotation: annotation,
        annotationReply: annotationReply,
        meta: {
          status: status
        }
      };
      wrapper.instance().handleAnnotationReplyDelete(eventData);
      var contextProvider = getContextProvider(wrapper);
      expect(contextProvider.exists()).toBeTruthy();
      expect(contextProvider.prop('value').state).toEqual({
        action: expectedAction,
        activeAnnotationFileVersionId: null,
        activeAnnotationId: null,
        annotation: annotation,
        annotationReply: annotationReply,
        error: null,
        meta: {
          status: status
        }
      });
    });
  });
  describe('handleActiveChange()', function () {
    test.each(_templateObject12(), null, '456', null, '456', '123', '456', '123', '456')('should update activeAnnotationId state to reflect value $annotationId', function (_ref12) {
      var annotationId = _ref12.annotationId,
          fileVersionId = _ref12.fileVersionId,
          expectedAnnotationId = _ref12.expectedAnnotationId,
          expectedFileVersionId = _ref12.expectedFileVersionId;
      var wrapper = getWrapper();
      wrapper.instance().handleActiveChange({
        annotationId: annotationId,
        fileVersionId: fileVersionId
      });
      var contextProvider = getContextProvider(wrapper);
      var _contextProvider$prop = contextProvider.prop('value').state,
          activeAnnotationFileVersionId = _contextProvider$prop.activeAnnotationFileVersionId,
          activeAnnotationId = _contextProvider$prop.activeAnnotationId;
      expect(contextProvider.exists()).toBeTruthy();
      expect(activeAnnotationFileVersionId).toEqual(expectedFileVersionId);
      expect(activeAnnotationId).toEqual(expectedAnnotationId);
    });
  });
  describe('handleAnnotationFetchError()', function () {
    test('should call onError', function () {
      var instance = getWrapper().instance();
      var mockError = new Error();
      instance.handleAnnotationFetchError({
        error: mockError
      });
      expect(defaults.onError).toHaveBeenCalledWith(mockError, 'fetch_annotations_error', {
        showNotification: true
      });
    });
  });
  describe('handlePreviewDestroy()', function () {
    test('should reset state and annotator', function () {
      var wrapper = getWrapper();
      wrapper.instance().handleAnnotator(mockAnnotator);
      wrapper.setState({
        activeAnnotationId: '123',
        activeAnnotationFileVersionId: '456'
      });
      wrapper.instance().handlePreviewDestroy();
      expect(wrapper.state()).toEqual({
        action: null,
        activeAnnotationFileVersionId: null,
        activeAnnotationId: null,
        annotation: null,
        annotationReply: null,
        error: null,
        meta: null
      });
    });
    test('should not reset state if called with false', function () {
      var wrapper = getWrapper();
      wrapper.instance().handleAnnotator(mockAnnotator);
      wrapper.setState({
        activeAnnotationId: '123',
        activeAnnotationFileVersionId: '456'
      });
      wrapper.instance().handlePreviewDestroy(false);
      expect(wrapper.state('activeAnnotationId')).toBe('123');
      expect(wrapper.state('activeAnnotationFileVersionId')).toBe('456');
    });
    test.each([true, false])('should remove all annotator event listeners', function (shouldReset) {
      var wrapper = getWrapper();
      var instance = wrapper.instance();
      instance.handleAnnotator(mockAnnotator);
      instance.handlePreviewDestroy(shouldReset);
      expect(mockAnnotator.removeListener).toBeCalledWith('annotations_active_change', instance.handleActiveChange);
      expect(mockAnnotator.removeListener).toBeCalledWith('annotations_create', instance.handleAnnotationCreate);
      expect(mockAnnotator.removeListener).toBeCalledWith('annotations_fetch_error', instance.handleAnnotationFetchError);
    });
  });
  describe('getAnnotationsPath()', function () {
    test.each(_templateObject13(), undefined, undefined, '/activity', undefined, null, '/activity', '123', undefined, '/activity/annotations/123', '123', null, '/activity/annotations/123', '123', '456', '/activity/annotations/123/456')('should return $expectedPath', function (_ref13) {
      var fileVersionId = _ref13.fileVersionId,
          annotationId = _ref13.annotationId,
          expectedPath = _ref13.expectedPath;
      var wrapper = getWrapper();
      var instance = wrapper.instance();
      expect(instance.getAnnotationsPath(fileVersionId, annotationId)).toBe(expectedPath);
    });
  });
});