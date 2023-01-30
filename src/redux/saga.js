import { all, fork } from 'redux-saga/effects';

// Sagas
import authSaga from './stores/auth/saga';

export default function* root() {
  yield all([fork(authSaga)]);
}
