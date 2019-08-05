import { REGISTER_SUCCESS, REGISTER_FAIL } from './../action/types';

const initState = {
  token: sessionStorage.getItem('token'),
  isAutenicated: null,
  loading: true,
  user: null
};

export default function(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      sessionStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAutenicated: true,
        loading: false,
        user: payload.user
      };
    case REGISTER_FAIL:
      sessionStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAutenicated: null,
        user: null
      };
    default:
      return state;
  }
}
