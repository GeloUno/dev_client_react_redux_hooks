import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../action/profile';

const Experience = ({ experience, deleteExperience }) => {
  const exper =
    experience &&
    experience.map(exp => (
      <tbody key={exp._id}>
        <tr>
          <td>{exp.company}</td>
          <td className="hiden-sm">{exp.title}</td>
          <td>
            <Moment format="YYYY/MM/DD">{exp.from}</Moment>
          </td>
          <td>
            {' '}
            {exp.to === '' ? (
              'Now'
            ) : (
              <Moment format="YYYY/MM/DD">{exp.to}</Moment>
            )}
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => deleteExperience(exp._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    ));
  return (
    <Fragment>
      {experience.length === 0 ? (
        <Fragment>
          <h2>You not have experience</h2>
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="my-2">Experience</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th className="hiden-sm">Title</th>
                <th className="">Years</th>
                <th className="">Years</th>

                <th />
              </tr>
            </thead>
            {exper}
          </table>
        </Fragment>
      )}
      ;
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  experience: state.profile.profile.experience
});

export default connect(
  mapStateToProps,
  { deleteExperience }
)(Experience);
