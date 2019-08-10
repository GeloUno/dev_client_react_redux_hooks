import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from './../../action/profile';
import Spinner from './../Layout/Spinner';
import { PROFILE_ERROR } from './../../action/types';
import { Link } from 'react-router-dom';
import ActionDashboard from './Action.Dashboard';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large textPrimary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" />
        Welcome {user && user.name}
      </p>
      {profile === null ? (
        <Fragment>
          <p> You have not profile</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      ) : (
        <ActionDashboard />
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = status => ({
  auth: status.auth,
  profile: status.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
