import { POSTS_GET, POSTS_GET_ERROR, POST_ADD,POST_DELETE, POST_GET, POST_COMMENT_ADD } from '../action/types';
import { POST_GET_ERROR } from './../action/types';


const initialState = {
  posts: [],
  post: '',
  loading: true,
  error: null
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case POST_ADD:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
        error: null
      };
    case POST_DELETE:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false,
        error: null
      };
    case POSTS_GET:
      return {
        ...state,
        posts: payload,
        post:null,
        loading: false,
        error: null
      };
    case POST_GET:
      return {
        ...state,
        post: payload,
        loading: false,
        error: null
      };
    case POST_COMMENT_ADD:
      return {
        ...state,
        post:{...state.post, comments:payload},
        loading: false,
        error: null
      };
    case POSTS_GET_ERROR:
    case POST_GET_ERROR:
      return {
        ...state,
        posts: [],
        error: payload,
        loading: false
      };
    default: {   
      return state;
    }
  }
}
