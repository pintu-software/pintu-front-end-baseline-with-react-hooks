/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESET_ERROR_MESSAGE,
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
