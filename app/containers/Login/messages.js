/*
 * Login Messages
 *
 * This contains all the text for the Login container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Login';

export default defineMessages({
  loginTo: {
    id: `${scope}.loginTo`,
    defaultMessage: 'Login to',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
});
