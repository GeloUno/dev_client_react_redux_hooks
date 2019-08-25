import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProfiles } from './../../action/profile';
import Spinner from './../Layout/Spinner';
import ItemProfiles from './Item.Profiles';

const Profiles = ({ getAllProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primry">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdeveloper">connect developer</i>
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map(prof => (
                <ItemProfiles key={prof._id} profile={prof} />
              ))
            ) : (
              <h4>Profile not found</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getAllProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStatToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStatToProps,
  { getAllProfiles }
)(Profiles);
