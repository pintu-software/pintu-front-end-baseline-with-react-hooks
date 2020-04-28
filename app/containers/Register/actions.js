/*
 *
 * Register actions
 *
 */

import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  RESET_ERROR_MESSAGE,
} from './constants';

export function createUser(payload) {
  return {
    type: CREATE_USER,
    payload,
  };
}

export function createUserSuccess(payload) {
  return {
    type: CREATE_USER_SUCCESS,
    payload,
  };
}

export function createUserFailed(payload) {
  return {
    type: CREATE_USER_FAILED,
    payload,
  };
}

export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE,
  };
}
