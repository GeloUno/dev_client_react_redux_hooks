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
