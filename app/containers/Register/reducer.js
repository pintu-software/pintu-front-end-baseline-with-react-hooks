/*
 *
 * Register reducer
 *
 */
import produce from 'immer';
import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  RESET_ERROR_MESSAGE,
} from './constants';

export const initialState = {
  api: {
    loading: false,
    error: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CREATE_USER:
        draft.api.loading = true;
        break;
      case CREATE_USER_SUCCESS:
        draft.api.loading = false;
        draft.api.error = false;
        break;
      case CREATE_USER_FAILED:
        draft.api.loading = false;
        draft.api.error = action.payload;
        break;
      case RESET_ERROR_MESSAGE:
        draft.api.loading = false;
        draft.api.error = false;
        break;
    }
  });

export default registerReducer;
