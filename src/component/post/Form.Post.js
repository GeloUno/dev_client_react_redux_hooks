import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../action/posts';

const FormPost = ({ auth,addPost }) => {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addPost({text});
    setText('');
  };

  return (
    <Fragment>
      <form className="form my-1" onSubmit={e => onSubmit(e)}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={e => onChange(e)}
        ></textarea>
        <input
          type="submit"
          disabled={text.length > 10 ? false : true}
          className="btn btn-dark my-1"
        />
      </form>
    </Fragment>
  );
};

FormPost.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { addPost }
)(FormPost);
