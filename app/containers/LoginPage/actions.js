/*
 *
 * LoginPage actions
 *
 */

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from './constants';

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
