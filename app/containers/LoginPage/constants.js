/*
 * LoginPage constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const PREFIX = 'app/LoginPage';
export const LOGIN = `${PREFIX}/LOGIN`;
export const LOGIN_SUCCESS = `${PREFIX}/LOGIN_SUCCESS`;
export const LOGIN_FAILED = `${PREFIX}/LOGIN_FAILED`;
export const RESET_ERROR_MESSAGE = `${PREFIX}/RESET_ERROR_MESSAGE`;
export const LOGOUT = `${PREFIX}/LOGOUT`;
