import * as React from 'react';
import Badge from './Badge';
import notes from './Badge.stories.md';
import { BadgeType } from './types';
export var regular = function regular() {
  return React.createElement(Badge, null, "Default Badge");
};
export var info = function info() {
  return React.createElement(Badge, {
    type: BadgeType.INFO
  }, "Info Badge");
};
export var warning = function warning() {
  return React.createElement(Badge, {
    type: BadgeType.WARNING
  }, "Warning Badge");
};
export var highlight = function highlight() {
  return React.createElement(Badge, {
    type: BadgeType.HIGHLIGHT
  }, "Highlight Badge");
};
export var error = function error() {
  return React.createElement(Badge, {
    type: BadgeType.ERROR
  }, "Error Badge");
};
export var alert = function alert() {
  return React.createElement(Badge, {
    type: BadgeType.ALERT
  }, "Alert Badge");
};
export var success = function success() {
  return React.createElement(Badge, {
    type: BadgeType.SUCCESS
  }, "Success Badge");
};
export default {
  title: 'Components|Badges/Badge',
  component: Badge,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Badge.stories.js.map