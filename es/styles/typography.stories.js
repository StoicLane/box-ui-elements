import * as React from 'react';
import './typography.stories.scss';
export var lato = function lato() {
  return React.createElement("div", {
    className: "typography"
  }, React.createElement("div", {
    className: "heading"
  }, React.createElement("h1", null, "Lato 2.0")), React.createElement("div", {
    className: "weights"
  }, React.createElement("div", {
    className: "regular"
  }, React.createElement("div", {
    className: "preview"
  }, "Aa"), React.createElement("div", {
    className: "weight"
  }, "Regular")), React.createElement("div", {
    className: "bold"
  }, React.createElement("div", {
    className: "preview"
  }, "Aa"), React.createElement("div", {
    className: "weight"
  }, "Bold"))));
};
export var heading = function heading() {
  return React.createElement("div", {
    className: "typography"
  }, React.createElement("div", {
    className: "heading"
  }, React.createElement("label", null, "H1"), React.createElement("h1", null, "Project Symphony")), React.createElement("div", {
    className: "heading"
  }, React.createElement("label", null, "H2"), React.createElement("h2", null, "Project Symphony")), React.createElement("div", {
    className: "heading"
  }, React.createElement("label", null, "H3"), React.createElement("h3", null, "Project Symphony")), React.createElement("div", {
    className: "heading"
  }, React.createElement("label", null, "H4"), React.createElement("h4", null, "Project Symphony")), React.createElement("div", {
    className: "heading"
  }, React.createElement("label", null, "H5"), React.createElement("h5", null, "Project Symphony")), React.createElement("div", {
    className: "heading"
  }, React.createElement("label", null, "H6"), React.createElement("h6", null, "Project Symphony")));
};
export var text = function text() {
  return React.createElement("div", {
    className: "typography"
  }, React.createElement("div", null, React.createElement("label", null, "BODY"), React.createElement("span", {
    className: "body"
  }, "Project Symphony")), React.createElement("div", null, React.createElement("label", null, "INPUT LABEL"), React.createElement("span", {
    className: "input-label"
  }, "Project Symphony")), React.createElement("div", null, React.createElement("label", null, "INPUT TEXT"), React.createElement("span", {
    className: "input-text"
  }, "Project Symphony")));
};
export default {
  title: 'Theming|Typography'
};
//# sourceMappingURL=typography.stories.js.map