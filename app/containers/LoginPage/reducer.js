/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { CHANGE_EMAIL } from './constants';

export const initialState = {
  form: {
    email: '',
    password: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_EMAIL:
        draft.form.email = action.email;
        break;
    }
  });

export default loginPageReducer;
