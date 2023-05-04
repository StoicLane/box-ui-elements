import * as React from 'react';
import ReadableTime from './ReadableTime';
import notes from './ReadableTime.stories.md';
var MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
var MILLISECONDS_PER_DAY = MILLISECONDS_PER_HOUR * 24;
var MILLISECONDS_PER_WEEK = MILLISECONDS_PER_DAY * 7;
export var relativeTimestamps = function relativeTimestamps() {
  return React.createElement("div", null, React.createElement("div", null, React.createElement(ReadableTime, {
    timestamp: Date.now() - MILLISECONDS_PER_HOUR + 30 * 60 * 1000,
    relativeThreshold: MILLISECONDS_PER_HOUR
  })), React.createElement("div", null, React.createElement(ReadableTime, {
    timestamp: Date.now() - 2 * MILLISECONDS_PER_HOUR,
    relativeThreshold: MILLISECONDS_PER_HOUR
  })), React.createElement("div", null, React.createElement(ReadableTime, {
    timestamp: Date.now() - MILLISECONDS_PER_DAY,
    relativeThreshold: MILLISECONDS_PER_HOUR
  })));
};
export var dateWithoutTime = function dateWithoutTime() {
  return React.createElement(ReadableTime, {
    timestamp: Date.now() - MILLISECONDS_PER_WEEK,
    relativeThreshold: MILLISECONDS_PER_HOUR
  });
};
export var dateWithTime = function dateWithTime() {
  return React.createElement(ReadableTime, {
    timestamp: Date.now() - MILLISECONDS_PER_WEEK,
    relativeThreshold: MILLISECONDS_PER_HOUR,
    alwaysShowTime: true
  });
};
export var dateInTheFutureWhenNotAllowed = function dateInTheFutureWhenNotAllowed() {
  return React.createElement(ReadableTime, {
    timestamp: Date.now() + 70 * MILLISECONDS_PER_DAY,
    relativeThreshold: MILLISECONDS_PER_HOUR,
    allowFutureTimestamps: false
  });
};
export default {
  title: 'Components|ReadableTime',
  component: ReadableTime,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=ReadableTime.stories.js.map