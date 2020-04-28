import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.login || initialState;

const makeSelectLoginPage = () =>
  createSelector(
    selectLoginDomain,
    substate => substate,
  );

const makeSelectIsAuthUser = () =>
  createSelector(
    selectLoginDomain,
    substate => substate.isAuthUser,
  );

export { selectLoginDomain, makeSelectLoginPage, makeSelectIsAuthUser };
