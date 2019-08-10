import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ActionDashboard = () => {
  return (
    <Fragment>
      <div className="dash-buttons">
        <Link to="/edit-profile" className="btn btn-light">
          <i className="fas fa-user-circle text-primary" />{' '}Profile
        </Link>
        <Link to="/edit-experience" className="btn btn-light">
          <i className="fab fa-black-tie text-primary" />{' '}Experience
        </Link>
        <Link to="/edit-education" className="btn btn-light">
          <i className="fas fa-graduation-cap text-primary" />{' '}Education
        </Link>
      </div>
    </Fragment>
  );
};

export default ActionDashboard;
