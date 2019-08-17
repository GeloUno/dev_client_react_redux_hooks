import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../action/profile';

const Education = ({ education, deleteEducation }) => {
  return (
    <Fragment>
      {education.length === 0 ? (
        <Fragment>
          <h2>You not have education</h2>
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="my-2">Education</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Education</th>
                <th className="hiden-sm">Title</th>
                <th className="hiden-sm">Years</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {education &&
                education.map(edu => (
                  <tr key={edu._id}>
                    <td>{edu.school}</td>
                    <td className="hiden-sm">{edu.degree}</td>
                    <td>
                      <Moment format="YYYY/MM/DD">{edu.from}</Moment>
                    </td>
                    <td>
                      {' '}
                      {edu.to === null ? (
                        'Now'
                      ) : (
                        <Moment format="YYYY/MM/DD">{edu.to}</Moment>
                      )}
                    </td>
                    <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteEducation(edu._id)}
                    >
                      Delete
                    </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Fragment>
      )}
      ;
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  education: state.profile.profile.education
});

export default connect(
  mapStateToProps,
  { deleteEducation }
)(Education);
