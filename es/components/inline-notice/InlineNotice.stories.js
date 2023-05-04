import * as React from 'react';
import InlineNotice from './InlineNotice';
import notes from './InlineNotice.stories.md';
export var withoutTitle = function withoutTitle() {
  return React.createElement("div", null, React.createElement(InlineNotice, {
    type: "warning"
  }, "This is a ", React.createElement("strong", null, "warning"), " notice. You might want to pay attention to this."), React.createElement(InlineNotice, {
    type: "error"
  }, "This is an ", React.createElement("strong", null, "error"), " notice. You really want to pay attention to this."), React.createElement(InlineNotice, {
    type: "success"
  }, "This is a ", React.createElement("strong", null, "success"), " notice. You ought to feel really good about this."), React.createElement(InlineNotice, {
    type: "info"
  }, "This is an ", React.createElement("strong", null, "info"), " notice. You should get some context from this."), React.createElement(InlineNotice, {
    type: "generic"
  }, "This is an ", React.createElement("strong", null, "generic"), " notice. You will just want to see this."));
};
export var withTitle = function withTitle() {
  return React.createElement("div", null, React.createElement(InlineNotice, {
    type: "warning",
    title: "Warning Title"
  }, "This is a warning notice. You might want to pay attention to this."), React.createElement(InlineNotice, {
    type: "error",
    title: "Error Title"
  }, "This is an error notice. You really want to pay attention to this."), React.createElement(InlineNotice, {
    type: "success",
    title: "Success Title"
  }, "This is a success notice. You ought to feel really good about this."), React.createElement(InlineNotice, {
    type: "info",
    title: "Info Title"
  }, "This is an info notice. You should get some context from this."), React.createElement(InlineNotice, {
    type: "generic",
    title: "Generic Title"
  }, "This is a generic notice. You will just want to notice this."));
};
export default {
  title: 'Components|InlineNotice',
  component: InlineNotice,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=InlineNotice.stories.js.map