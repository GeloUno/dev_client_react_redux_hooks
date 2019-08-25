import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfilesById } from '../../action/profile';
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router-dom';
import HeadProfile from './Head.Profile';
import AboutProfile from './About.Profile';

const Profile = ({
  match,
  getProfilesById,
  profile: { profile, loading },
  auth
}) => {
  useEffect(() => {
    getProfilesById(match.params.id);
  }, [getProfilesById,match.params.id]);

  return (
    <Fragment>
      <h2>Test</h2>
      {profile !== null && loading === false ? (
        <Fragment>
          <h2>{profile.user.name}</h2>
          <Link to="/profiles" className="btn btn-light">
            Go To Profile
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
            <div className="profile-grid my-1">
            <HeadProfile profile={profile}/>
            <AboutProfile profile={profile}/>
            </div>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfilesById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getProfilesById }
)(Profile);
