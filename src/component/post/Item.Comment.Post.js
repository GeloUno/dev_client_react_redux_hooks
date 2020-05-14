import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ItemCommentPost = ({ comment: { text, date, user } }) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div className="m-1">
        {text} dodał {user} w dniu {date}
      </div>
    </div>
  );
};

ItemCommentPost.propTypes = {};

export default connect(null)(ItemCommentPost);
