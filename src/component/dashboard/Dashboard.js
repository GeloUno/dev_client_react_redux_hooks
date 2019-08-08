import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from './../../action/profile';
import Spinner from './../Layout/Spinner';

const Dashboard = ({
  getCurrentProfile,
  auth,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? <Spinner /> : <Fragment >Test</Fragment>;
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
