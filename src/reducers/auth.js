import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOAD,
  USER_ERROR,
  USER_FAIL,
  USER_LOGIN,
  USER_LOGOUT
} from './../action/types';

const initState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOAD:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
    case USER_LOGIN:          
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        user: payload.user
      };
    case REGISTER_FAIL:
    case USER_ERROR:
    case USER_FAIL:
    case USER_LOGOUT:
          localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        user: null
      };
    default:
      return state;
  }
}
