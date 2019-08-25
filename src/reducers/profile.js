import {
  PROFILE_GET,
  PROFILE_ERROR,
  PROFILE_CLEAR,
  PROFILE_EXPERIENCE_UPDEATE,
  PROFILE_EDUCATION_UPDEATE,
  PROFILE_EDUCATION_DELETE,
  PROFILE_EXPERIENCE_DELETE,
  PROFILES_GET_ALL
} from '../action/types';

const initialState = {
  profile: null,
  profiles: [],
  repo: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_GET:
    case PROFILE_EXPERIENCE_UPDEATE:
    case PROFILE_EDUCATION_UPDEATE:
    case PROFILE_EDUCATION_DELETE:
    case PROFILE_EXPERIENCE_DELETE:
      return {
        ...state,
        profile: payload,
        loading: false,
        error: null
      };
    case PROFILES_GET_ALL:
      return {
        ...state,
        profiles: payload,
        lading: false,
        error: null
      };
    case PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        loading: false,
        error: payload
      };
    case PROFILE_CLEAR:
      return {
        ...state,
        profile: null,
        loading: false,
        repos: [],
        error: null
      };

    default:
      return state;
  }
}
