import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

const makeSelectLoginAction = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.api,
  );

export { selectLoginPageDomain, makeSelectLoginAction };
