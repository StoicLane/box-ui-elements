/* eslint-disable */
import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import NavSidebar from './NavSidebar';
import NavListCollapseHeader from './NavListCollapseHeader';
import NavList from './NavList';
import Link from '../link/Link';
import notes from './NavSidebar.stories.md';
export var notCollapsible = function notCollapsible() {
  return React.createElement(NavSidebar, {
    "data-resin-component": "leftnav"
  }, React.createElement(NavList, null, React.createElement(Link, null, "Item 1-1"), React.createElement(Link, null, "Item 1-2")), React.createElement(NavList, {
    heading: "Item 2"
  }, React.createElement(Link, null, "Item 2-1"), React.createElement(Link, null, "Item 2-2"), React.createElement(Link, null, "Item 2-3")));
};
export var collapsible = function collapsible() {
  return React.createElement(NavSidebar, {
    "data-resin-component": "leftnav"
  }, React.createElement(NavList, {
    heading: React.createElement(NavListCollapseHeader, {
      onToggleCollapse: action('onToggleCollapse called')
    }, "Collapse or Expand"),
    className: "is-collapsible",
    collapsed: boolean('collapsed', false)
  }, React.createElement(Link, null, "Item 1-1"), React.createElement(Link, null, "Item 1-2")), React.createElement(NavList, {
    heading: "Item 2"
  }, React.createElement(Link, null, "Item 2-1"), React.createElement(Link, null, "Item 2-2"), React.createElement(Link, null, "Item 2-3")));
};
export default {
  title: 'Components|NavSidebar',
  component: NavSidebar,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=NavSidebar.stories.js.map