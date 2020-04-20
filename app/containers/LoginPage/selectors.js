import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

const makeSelectForm = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.form,
  );

export { selectLoginPageDomain, makeSelectForm };
