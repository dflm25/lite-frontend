import { AUTH_CHECK, AUTH_LOGIN, AUTH_LOGOUT } from './constants';

export const authLogin = (payload, cb) => ({
  type: AUTH_LOGIN,
  payload,
  cb
});

export const authLogout = () => ({
  type: AUTH_LOGOUT
});

export const authCheck = () => ({
  type: AUTH_CHECK
});
