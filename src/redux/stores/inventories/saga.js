import { put, call, takeLatest } from 'redux-saga/effects';

// Redux
import { setResponse } from '../../stores/app/actions';

// Utils
import request from '../../../utilities/request';

// Constants
import { PAGINATE, CREATE, EDIT, UPDATE, DESTROY, GET_PDF } from './constants';

function* paginate(action) {
  const {
    cb,
    payload: { page }
  } = action;
  const url = `inventories?currentPage=${page}`;
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
  const url = `inventories`;
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
  const url = `inventories/${id}`;
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
  const url = `inventories/${id}`;
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
  const url = `inventories/${id}`;
  const requestOptions = { method: 'DELETE' };

  try {
    const response = yield call(request, url, requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

function* getPdf(action) {
  const {
    cb,
    payload: { sendEmail }
  } = action;
  const url = `inventories?action=getPdf&sendEmail=${sendEmail}`;
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
  yield takeLatest(GET_PDF, getPdf);
}
