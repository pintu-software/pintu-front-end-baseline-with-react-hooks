/*
 * LoginPage Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESET_ERROR_MESSAGE,
  LOGOUT,
} from './constants';

export function requestLogin(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function requestLoginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function requestLoginFailed(payload) {
  return {
    type: LOGIN_FAILED,
    payload,
  };
}

export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE,
  };
}

export function requestLogout(payload) {
  return {
    type: LOGOUT,
    payload,
  };
}
