import * as React from 'react';
import InlineError from './InlineError';
export var regular = function regular() {
  return React.createElement(InlineError, {
    title: "Something bad happened"
  }, "Username is required");
};
export default {
  title: 'Components|InlineError',
  component: InlineError
};
//# sourceMappingURL=InlineError.stories.js.map