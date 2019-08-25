import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HeadProfile = ({
  profile: {
    profile: {
      user: { name, email },
      location,
      company,
      website,
      status,
      social
    }
  },
  profile
}) => {
  return (
    <Fragment>
      <div className="profile-top bg-primary p-2">
        <h1 className="large">{name}</h1>
        <p className="lead">
          {company && (
            <span>
              {status} at {company}
            </span>
          )}
        </p>
        <p>{location && <span>{location}</span>}</p>
        <div className="icons my-1">
          {website && (
            <a
              target="_blank"
              href={'https://' + website.trim()}
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe fa-2x" />
            </a>
          )}

          {social && social.facebook && (
            <a
              href={'https://' + social.facebook.trim()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x" />
            </a>
          )}
          {social && social.youtube && (
            <a
              href={'https://' + social.youtube.trim()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube fa-2x" />
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
};

HeadProfile.propTypes = {
  profile: PropTypes.object.isRequired
};
const mapStatToProps = state => ({
  profile: state.profile
});
export default connect(mapStatToProps)(HeadProfile);
