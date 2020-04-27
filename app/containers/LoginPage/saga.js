import { takeLatest, put } from 'redux-saga/effects';
import { requestLoginSuccess, requestLoginFailed } from './actions';
import { LOGIN } from './constants';

export function* requestLogin({ payload }) {
  try {
    if (payload.email === 'info@pintu.dk' && payload.password === 'Pintu123!') {
      yield put(requestLoginSuccess());
    }

    const errMessage = {
      status: 403,
      message: 'Invalid email/password entered',
    };
    yield put(requestLoginFailed(errMessage));
  } catch (err) {
    yield put(requestLoginFailed(err));
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN, requestLogin);
}
