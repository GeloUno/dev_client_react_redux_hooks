import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Moment } from 'react-moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from './../../action/posts';

const ItemPost = ({
  auth,
  post: { name, date, text, user, like, comments, _id },
  deletePost,
  showButtons
}) => {
  const onCklickDeletPost = id => {
    deletePost(id);
    console.log(id);
  };

  return (
    <Fragment>
      <div className="posts">
        <div className="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${user}`}>
              <img
                className="round-img"
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                alt=""
              />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p className="my-1">{text}</p>
            <p className="post-date">Posted on:{date}</p>

            <button type="button" className="btn btn-light">
              <i className="fas fa-thumbs-up"></i>
              <span>{like && like.length}</span>
            </button>
            {showButtons && (
              <Fragment>
                <Link to={`/post/${_id}`} className="btn btn-primary">
                  Discussion{' '}
                  <span className="comment-count">
                    {comments && comments.length}
                  </span>
                </Link>
                {!auth.loading && auth.user._id === user && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onCklickDeletPost(_id)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
ItemPost.defaultProps = {
  showButtons: true
};

ItemPost.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  showButtons: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost }
)(ItemPost);
