import axios from 'axios';
import { setAlert } from './alert';
import {
  PROFILE_ERROR,
  PROFILE_GET,
  PROFILE_EXPERIENCE_UPDEATE,
  PROFILE_EDUCATION_UPDEATE,
  PROFILE_EDUCATION_DELETE,
  PROFILE_EXPERIENCE_DELETE,
  PROFILES_GET_ALL,
  PROFILE_CLEAR
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
console.log(err);

    if (err) {
      err.map(er => {
        dispatch(setAlert(er.message, 'danger'));
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
    const res = await axios.delete(`/api/profile/experience/${id}`, config);

    dispatch({
      type: PROFILE_EXPERIENCE_DELETE,
      payload: res.data
    });
    dispatch(setAlert('Experience Delete'));

    // history.push('/dashboard');
  } catch (error) {
   
    const err = error.response.data.error.errors;

    if (err) {      
        dispatch(setAlert(err.msg, 'danger'));
      };
    

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
    
    
    const res = await axios.put('/api/profile/education',formData, config);

    dispatch({
      type: PROFILE_EDUCATION_UPDEATE,
      payload: res.data
    });
    dispatch(setAlert('Profile Education Updated'));

    history.push('/dashboard');
  } catch (error) {
  
    if (error.response.data.error.errors) {
      const err = error.response.data.error.errors;
      err.forEach(er => {
        console.log(er);        
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
    const res = await axios.delete(`/api/profile/education/${id}`, config);

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

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

export const getAllProfiles = () => async dispatch => {
  try {
  dispatch({
    type: PROFILE_CLEAR,
    payload: null
  });
  const config = {
    headre: {
      'Content-Type': 'aplication/json'
    }
  };
    const res = await axios.get('/api/profile', config);
    dispatch({
      type: PROFILES_GET_ALL,
      payload: res.data
    });
  } catch (error) {
    dispatch(setAlert(error, 'danger'));
  }
};

export const getProfilesById = (user_id) => async dispatch => {
  try {
  dispatch({
    type: PROFILE_CLEAR,
    payload: null
  });
  const config = {
    headre: {
      'Content-Type': 'aplication/json'
    }
  };
    const res = await axios.get(`/api/profile/user/${user_id}`, config);
        
    dispatch({
      type: PROFILE_GET,
      payload: res.data
    });
  } catch (error) {
    dispatch(setAlert(error, 'danger'));
  }
};
