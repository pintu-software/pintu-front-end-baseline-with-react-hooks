import { takeLatest, put } from 'redux-saga/effects';
import { requestLoginSuccess, requestLoginFailed } from './actions';
import { LOGIN } from './constants';

export function* requestLogin({ payload }) {
  try {
    if (payload.email === 'info@pintu.dk' && payload.password === 'Pintu123!') {
      yield put(requestLoginSuccess());
    } else {
      const errMessage = {
        status: 403,
        message: 'Invalid email/password entered',
      };
      yield put(requestLoginFailed(errMessage));
    }
  } catch (err) {
    yield put(requestLoginFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount

  yield takeLatest(LOGIN, requestLogin);
}
