import { PROFILE_GET, PROFILE_ERROR } from '../action/types';

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
      return {
        ...state,
        profile: payload,
        loading: false,
        error: null
      };
    case PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
}
