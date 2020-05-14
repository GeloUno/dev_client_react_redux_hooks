import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../../action/posts';
import ItemPost from './Item.Post';
import Spinner from './../Layout/Spinner';
import FormCommentPost from './Form.Comment.Post';
import ItemCommentPost from './Item.Comment.Post';


const Post = ({ match, posts: { post, loading }, getPost }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return (
    <Fragment>
      {loading || post === null || post === '' ? (
        <Spinner />
      ) : (
        <Fragment>
          <ItemPost post={post} showButtons={false} />
          <FormCommentPost postId={post._id} />
          {post.comments.map(comment =>{
           return <ItemCommentPost key={comment.id} comment={comment}/>
          })}
        </Fragment>
      )}
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  posts: state.posts
});
export default connect(
  mapStateToProps,
  { getPost }
)(Post);
