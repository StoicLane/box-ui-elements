import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import Button from '../button';
import IconHelp from '../../icons/general/IconHelp'; // @ts-ignore JS import

import TextInput from '../text-input';
import PlainButton from '../plain-button';
import PrimaryButton from '../primary-button'; // @ts-ignore JS import

import TextArea from '../text-area'; // @ts-ignore JS import

import { Flyout, Overlay } from '.';
import notes from './Flyout.stories.md';
export var Basic = function Basic() {
  var positions = {
    'bottom-center': 'bottom-center',
    'bottom-left': 'bottom-left',
    'bottom-right': 'bottom-right',
    'middle-left': 'middle-left',
    'middle-right': 'middle-right',
    'top-center': 'top-left',
    'top-left': 'top-left',
    'top-right': 'top-right'
  };
  var position = select('Position', positions, 'bottom-center');
  return React.createElement("div", {
    style: {
      marginTop: 200,
      marginLeft: 200
    }
  }, React.createElement(Flyout, {
    closeOnClickOutside: false,
    position: position
  }, React.createElement(Button, null, "Nothing to see here"), React.createElement(Overlay, null, React.createElement("div", {
    className: "accessible-overlay-content"
  }, React.createElement("p", null, "Try hitting the Tab key."), React.createElement("p", null, "Now try click outside, go ahead."), React.createElement("br", null), React.createElement("p", null, React.createElement("i", null, "You are not going anywhere."))))));
};
export var OpenOnHover = function OpenOnHover() {
  return React.createElement("div", {
    style: {
      marginTop: 200,
      marginLeft: 200
    }
  }, React.createElement(Flyout, {
    openOnHover: true
  }, React.createElement(Button, null, "Open on Hover"), React.createElement(Overlay, null, React.createElement("div", {
    className: "accessible-overlay-content"
  }, React.createElement("h1", null, "Some text"), React.createElement("p", null, "Some more text"), React.createElement("br", null), React.createElement("a", {
    href: "https://google.com"
  }, "Go to Google?")))));
};
export var Complex = function Complex() {
  return React.createElement("div", {
    style: {
      marginTop: 200,
      marginLeft: 200
    }
  }, React.createElement(Flyout, {
    className: "amsterdam-survey-overlay",
    offset: "0 0"
  }, React.createElement(PlainButton, {
    className: "amsterdam-survey-button"
  }, React.createElement(IconHelp, null)), React.createElement(Overlay, null, React.createElement("div", null, React.createElement(TextArea, {
    name: "textarea",
    label: "Provide Feedback"
  })), React.createElement("div", null, React.createElement(TextInput, {
    name: "email",
    label: "Email Address",
    placeholder: "user@example.com",
    type: "email"
  })), React.createElement("div", {
    className: "icon-menu-container"
  }, React.createElement(PrimaryButton, null, "Submit"), React.createElement(Button, null, "Close")))));
};
export default {
  title: 'Components|Flyout',
  component: Flyout,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=Flyout.stories.js.map