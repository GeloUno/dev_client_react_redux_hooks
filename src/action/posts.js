import {
  POSTS_GET_ERROR,
  POSTS_GET,
  POST_ADD,
  POST_DELETE,
  POST_GET,
  POST_GET_ERROR,
  POST_COMMENT_ADD,
} from './types';
import axios from 'axios';

export const getAllPost = () => async (dispach) => {
  try {
    const res = await axios.get('api/post');
    //  console.log(res.data[0]);

    dispach({
      type: POSTS_GET,
      payload: res.data[0],
    });
  } catch (error) {
    console.log(error.respon);

    dispach({
      type: POSTS_GET_ERROR,
      payload: error,
    });
  }
};
export const getPost = (id) => async (dispach) => {
  try {
    const res = await axios.get(`/api/post/${id}`);

    dispach({
      type: POST_GET,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.respon);

    dispach({
      type: POST_GET_ERROR,
      payload: error,
    });
  }
};
export const addPost = (text) => async (dispach) => {
  const config = {
    header: {
      'Content-Type': 'aplication/json',
    },
  };
  try {
    const res = await axios.post('api/post', text, config);
    // console.log(res.data);

    dispach({
      type: POST_ADD,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.data);
  }
};

export const deletePost = (id) => async (dispach) => {
  // console.log('DELETE POST TRY '+ id);
  try {
    await axios.delete(`api/post/${id}`);
    dispach({
      type: POST_DELETE,
      payload: id,
    });
  } catch (error) {
    console.log('error delete post');
    console.log(error);
  }
};

export const addCommentPost = (text, id) => async (dispach) => {
  const config = {
    header: {
      'Content-Type': 'aplication/json',
    },
  };
  console.log('text');
  console.log(text);
  try {
    const res = await axios.post(`/api/post/comments/${id}`, text, config);
    console.log(res.data.comments);

    dispach({
      type: POST_COMMENT_ADD,
      payload: res.data.comments,
    });
  } catch (error) {
    console.log(error.data);
  }
};
