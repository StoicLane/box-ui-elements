function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import AnnotatorContext from './AnnotatorContext';
export default function withAnnotatorContext(WrappedComponent) {
  return React.forwardRef(function (props, ref) {
    return React.createElement(AnnotatorContext.Consumer, null, function (_ref) {
      var emitActiveAnnotationChangeEvent = _ref.emitActiveAnnotationChangeEvent,
          emitAnnotationRemoveEvent = _ref.emitAnnotationRemoveEvent,
          emitAnnotationReplyCreateEvent = _ref.emitAnnotationReplyCreateEvent,
          emitAnnotationReplyDeleteEvent = _ref.emitAnnotationReplyDeleteEvent,
          emitAnnotationReplyUpdateEvent = _ref.emitAnnotationReplyUpdateEvent,
          emitAnnotationUpdateEvent = _ref.emitAnnotationUpdateEvent,
          getAnnotationsMatchPath = _ref.getAnnotationsMatchPath,
          getAnnotationsPath = _ref.getAnnotationsPath,
          state = _ref.state;
      return React.createElement(WrappedComponent, _extends({
        ref: ref
      }, props, {
        annotatorState: state,
        emitActiveAnnotationChangeEvent: emitActiveAnnotationChangeEvent,
        emitAnnotationRemoveEvent: emitAnnotationRemoveEvent,
        emitAnnotationReplyCreateEvent: emitAnnotationReplyCreateEvent,
        emitAnnotationReplyDeleteEvent: emitAnnotationReplyDeleteEvent,
        emitAnnotationReplyUpdateEvent: emitAnnotationReplyUpdateEvent,
        emitAnnotationUpdateEvent: emitAnnotationUpdateEvent,
        getAnnotationsMatchPath: getAnnotationsMatchPath,
        getAnnotationsPath: getAnnotationsPath
      }));
    });
  });
}
//# sourceMappingURL=withAnnotatorContext.js.map