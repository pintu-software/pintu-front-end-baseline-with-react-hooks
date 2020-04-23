/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the LoginPage container!',
  },
  loginTo: {
    id: `${scope}.loginTo`,
    defaultMessage: 'Login to',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
});
