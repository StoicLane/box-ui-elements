import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { number } from '@storybook/addon-knobs';
import SecurityCloudGame from '../SecurityCloudGame';
import notes from './SecurityCloudGame.stories.md';
export var Basic = function Basic() {
  return React.createElement(IntlProvider, {
    locale: "en"
  }, React.createElement(SecurityCloudGame, {
    height: number('height', 500),
    width: number('width', 500)
  }));
};
export default {
  title: 'Features|SecurityCloudGame',
  component: SecurityCloudGame,
  parameters: {
    notes: notes
  }
};
//# sourceMappingURL=SecurityCloudGame.stories.js.map