import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { userLogout } from '../../action/auth';

const NavBar = ({ auth: {isAuthenticated}, userLogout }) => {
  const authLink = (
    <ul>
      <li>
        <a href="#!" onClick={userLogout}>
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hiden-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLink = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> DevConnector
        </Link>
      </h1>

      {<Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>}
    </nav>
  );
};

NavBar.propTypes = {
  userLogout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { userLogout }
)(NavBar);
