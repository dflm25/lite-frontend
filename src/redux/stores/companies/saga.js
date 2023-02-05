import { put, call, takeLatest } from 'redux-saga/effects';

// Redux
import { setResponse } from '../../stores/app/actions';

// Utils
import request from '../../../utilities/request';

// Constants
import { PAGINATE, CREATE, EDIT, UPDATE, DESTROY, GET_ALL } from './constants';

function* paginate(action) {
  const {
    cb,
    payload: { page }
  } = action;
  const url = `companies?currentPage=${page}`;
  const requestOptions = { method: 'GET' };

  try {
    const response = yield call(request, url, requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

function* create(action) {
  const { cb, payload } = action;
  const url = `companies`;
  const requestOptions = { method: 'POST', body: JSON.stringify(payload) };

  try {
    const response = yield call(request, url, requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

function* edit(action) {
  const {
    cb,
    payload: { id }
  } = action;
  const url = `companies/${id}`;
  const requestOptions = { method: 'GET' };

  try {
    const response = yield call(request, url, requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

function* update(action) {
  const {
    cb,
    payload: { id, ...data }
  } = action;
  const url = `companies/${id}`;
  const requestOptions = { method: 'PUT', body: JSON.stringify(data) };

  try {
    const response = yield call(request, url, requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

function* destroy(action) {
  const {
    cb,
    payload: { id }
  } = action;
  const url = `companies/${id}`;
  const requestOptions = { method: 'DELETE' };

  try {
    const response = yield call(request, url, requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

function* getAll(action) {
  const { cb } = action;
  const url = `companies?action=getAll`;
  const requestOptions = { method: 'GET' };

  try {
    const response = yield call(request, url, requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

/**
 * Declare all component sagas
 */

export default function* rootSaga() {
  yield takeLatest(PAGINATE, paginate);
  yield takeLatest(CREATE, create);
  yield takeLatest(EDIT, edit);
  yield takeLatest(UPDATE, update);
  yield takeLatest(DESTROY, destroy);
  yield takeLatest(GET_ALL, getAll);
}
