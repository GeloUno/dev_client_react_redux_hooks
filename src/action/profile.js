import axios from 'axios';
import { setAlert } from './alert';
import {
  PROFILE_ERROR,
  PROFILE_GET,
  PROFILE_EXPERIENCE_UPDEATE,
  PROFILE_EDUCATION_UPDEATE,
  PROFILE_EDUCATION_DELETE,
  PROFILE_EXPERIENCE_DELETE
} from './types';

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
    const res = await axios.post('/api/profile', formData, config);

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
export const addExperience = (formData, history) => async dispatch => {
  const config = {
    headre: {
      'Content-Type': 'aplication/json'
    }
  };
  try {
    const res = await axios.put('/api/profile/experience', formData, config);

    dispatch({
      type: PROFILE_EXPERIENCE_UPDEATE,
      payload: res.data
    });
    dispatch(setAlert('Profile Experience Updated'));

    history.push('/dashboard');
  } catch (error) {
    const err = error.response.data.error.errors;

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
export const deleteExperience = id => async dispatch => {
  const config = {
    headre: {
      'Content-Type': 'aplication/json'
    }
  };
  try {
    const res = await axios.delete('/api/profile/experience/' + id, config);

    dispatch({
      type: PROFILE_EXPERIENCE_DELETE,
      payload: res.data
    });
    dispatch(setAlert('Experience Delete'));

    // history.push('/dashboard');
  } catch (error) {
    console.log(error.response);
    const err = error.response.data.error.errors;

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
export const addEducation = (formData, history) => async dispatch => {
  const config = {
    headre: {
      'Content-Type': 'aplication/json'
    }
  };
  try {
    const res = await axios.put('/api/profile/education', formData, config);

    dispatch({
      type: PROFILE_EDUCATION_UPDEATE,
      payload: res.data
    });
    dispatch(setAlert('Profile Education Updated'));

    history.push('/dashboard');
  } catch (error) {
    const err = error.response.data.error.errors;

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
export const deleteEducation = id => async dispatch => {
  const config = {
    headre: {
      'Content-Type': 'aplication/json'
    }
  };
  try {
    const res = await axios.delete('/api/profile/education/' + id, config);

    dispatch({
      type: PROFILE_EDUCATION_DELETE,
      payload: res.data
    });
    dispatch(setAlert('Experience Delete'));

    // history.push('/dashboard');
  } catch (error) {
    if (error.response.status) {
      console.log(error.response);

     dispatch(setAlert(error.response.statusText, 'danger'));
    }
    const e = error.response.data.error.errors;
    console.log(e);

    if (error.response.data.error.errors) {
      dispatch(setAlert(error.response.data.error.errors, 'danger'));
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
