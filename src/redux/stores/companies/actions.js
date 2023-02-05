import { PAGINATE, CREATE, EDIT, UPDATE, DESTROY, GET_ALL } from './constants';

export const paginate = (payload, cb) => ({
  type: PAGINATE,
  payload,
  cb
});

export const create = (payload, cb) => ({
  type: CREATE,
  payload,
  cb
});

export const edit = (payload, cb) => ({
  type: EDIT,
  payload,
  cb
});

export const update = (payload, cb) => ({
  type: UPDATE,
  payload,
  cb
});

export const destroy = (payload, cb) => ({
  type: DESTROY,
  payload,
  cb
});

export const getAll = (cb) => ({
  type: GET_ALL,
  cb
});
