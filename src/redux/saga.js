import { all, fork } from 'redux-saga/effects';

// Sagas
import authSaga from './stores/auth/saga';
import companySaga from './stores/companies/saga';
import inventorySaga from './stores/inventories/saga';

export default function* root() {
  yield all([fork(authSaga), fork(companySaga), fork(inventorySaga)]);
}
