import { all, put, call, takeLatest } from 'redux-saga/effects';

// Redux
import { setResponse, setUser } from '../../stores/app/actions';

// Utils
import request from '../../../utilities/request';
import { setStorage } from '../../../utilities/storage';

// Constants
import { AUTH_LOGIN } from '../../stores/auth/constants';

function* login(action) {
  const { cb, payload } = action;
  const requestOptions = { method: 'POST', body: JSON.stringify(payload) };

  try {
    const response = yield call(request, 'auth/login', requestOptions);
    yield call(setStorage, 'session', JSON.stringify(response));
    yield put(setUser(response));
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

/**
 * Declare all component sagas
 */

export default function* rootSaga() {
  yield all([takeLatest(AUTH_LOGIN, login)]);
  //
}
