import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllPost } from '../../action/posts';
import { connect } from 'react-redux';
import ItemPost from './Item.Post';
import Spinner from '../Layout/Spinner';
import FormPost from './Form.Post';

const Posts = ({ posts: { posts, loading }, getAllPost }) => {
  useEffect(() => {
    getAllPost();
  }, [getAllPost]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Posts</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Welcome to the community!
        </p>

        <div className="post-form">
          <div className="bg-primary p">
            <h3>Say Something...</h3>
          </div>
          <FormPost/>
          {posts && posts.length > 0 ? (
            posts.map((post, index) => {
              return <ItemPost  key={index} post={post}/>;
            })
          ) : (
            <h3>no posts</h3>
          )}
        </div>
      </section>
    </Fragment>
  );
};

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
  getAllPost:PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  posts: state.posts

});
export default connect(
  mapStateToProps,
  { getAllPost }
)(Posts);
