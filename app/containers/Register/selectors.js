import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the register state domain
 */

const selectRegisterDomain = state => state.register || initialState;

const makeSelectRegister = () =>
  createSelector(
    selectRegisterDomain,
    substate => substate,
  );

const makeSelectRegisterApiStatus = () =>
  createSelector(
    selectRegisterDomain,
    substate => substate.api,
  );

export default makeSelectRegister;
export { selectRegisterDomain, makeSelectRegisterApiStatus };
