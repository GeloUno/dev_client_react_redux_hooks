import axios from 'axios';
import { setAlert } from './alert';
import { PROFILE_ERROR, PROFILE_GET } from './types';

export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me/');
    dispatch({
      type: PROFILE_GET,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status
      }
    });
  }
};
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  const config = {
    headre: {
      'Content-Type': 'aplication/json'
    }
  };
  try {
    const res = await axios.post('/api/profile',formData, config);
   
    dispatch({
      type: PROFILE_GET,
      payload: res.data
    });
    dispatch(setAlert(edit === true ? 'Profile Updated' : 'Profile Created'));
    
      history.push('/dashboard');
    
  } catch (error) {
    
    const err = error.response.data.errors;
    
    if (err) {
      err.forEach(er => {
        dispatch(setAlert(er.msg, 'danger'));
      });
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.data.msg,
        status: error.response.status
      }
    });
  }
};
