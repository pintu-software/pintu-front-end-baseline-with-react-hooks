import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.login || initialState;

const makeSelectLoginPage = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate,
  );

const makeSelectIsAuthUser = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.isAuthUser,
  );

export { selectLoginPageDomain, makeSelectLoginPage, makeSelectIsAuthUser };
