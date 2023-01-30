import { SET_LOADING, SET_RESPONSE, SET_USER } from './constants';

const initialState = {
  loading: false,
  error: false,
  user: false
};

const Global = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload.loading
      };
    case SET_USER:
      return {
        ...state,
        user: payload.user
      };
    case SET_RESPONSE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default Global;
