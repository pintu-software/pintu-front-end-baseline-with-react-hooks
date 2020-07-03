/*
 * Seo Messages
 *
 * This contains all the text for the Seo component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Seo';

export default defineMessages({
  defaultTitle: {
    id: `${scope}.defaultTitle`,
    defaultMessage: 'App',
  },
  webAppName: {
    id: `${scope}.webAppName`,
    defaultMessage: 'Pintu Software Baseline',
  },
  defaultDescription: {
    id: `${scope}.defaultDescription`,
    defaultMessage: 'Awesomeness starts here !',
  },
});
