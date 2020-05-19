import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOAD,
  USER_ERROR,
  USER_LOGIN,
  USER_FAIL,
  USER_LOGOUT,
  PROFILE_CLEAR,
} from './types';
import { setAlert } from './alert';
import setAuthToken from './../utils/token';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    try {
      setAuthToken(localStorage.token);
      const res = await axios.get('/api/auth');
      dispatch({
        type: USER_LOAD,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
      });
    }
  } else {
    dispatch({
      type: USER_ERROR,
    });
  }
};
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((element) => dispatch(setAlert(element.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((element) => dispatch(setAlert(element.msg, 'danger')));
    }
    dispatch({
      type: USER_FAIL,
    });
  }
};
export const userLogout = () => (dispatch) => {
  dispatch({
    type: PROFILE_CLEAR,
  });
  dispatch({
    type: USER_LOGOUT,
  });
};
