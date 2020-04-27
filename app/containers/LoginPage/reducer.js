/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from './constants';

export const initialState = {
  api: {
    loading: false,
    error: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.api.loading = true;
        break;
      case LOGIN_SUCCESS:
        draft.api.loading = false;
        draft.api.error = null;
        break;
      case LOGIN_FAILED:
        draft.api.loading = false;
        draft.api.error = action.payload;
        break;
    }
  });

export default loginPageReducer;
