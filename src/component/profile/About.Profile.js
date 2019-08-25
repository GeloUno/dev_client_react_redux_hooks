import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const AboutProfile = ({
  profile,
  profile: {
    profile: {
      skills,
      bio,
      user: { name },
      experience,
      education
    }
  }
}) => {
  return (
    <Fragment>
      <div className="profile-about bg-light p-2">
        <h2 className="text-primary">{name&&(name.trim())}'s Bio</h2>
        {bio && <p>{bio}</p>}
        <div className="line"></div>
        <h2 className="text-primary">Skill Set</h2>
        <div className="skills">
          {skills &&
            skills.map((skill, index) => {
              return (
                <div key={index} className="p-1">
                  <i className="fa fa-check"></i> {skill}
                </div>
              );
            })}
        </div>
      </div>
      {experience && (
        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          {experience.map((exp, index) => {
            return (
              <div key={index}>
                <h3 className="text-dark">{exp.company}</h3>
                <p>
                  <Moment format='DD/MM/YYYY'>{exp.from}</Moment>-
                  
                  {exp.to&&(<Moment format='DD/MM/YYYYM'>{exp.to}</Moment>)}
                </p>
                <p>
                  <strong>Position: </strong>
                  {exp.title}
                </p>
                <p>
                  <strong>Description: </strong>Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dignissimos placeat, dolorum
                  ullam ipsam, sapiente suscipit dicta eius velit amet
                  aspernatur asperiores modi quidem expedita fugit.
                </p>
              </div>
            );
          })}
        </div>
      )}
      {education && (
        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          {education.map((edu, index) => {
            return (
              <div key={index}>
                <h3>{edu.school}</h3>
                <p>
                  {<Moment format='DD/MM/YYYY'>{edu.from}</Moment> } - 
                  
                  {edu.to&&(<Moment format='DD/MM/YYYY'>{edu.to}</Moment>)}
                </p>
                <p>
                  <strong> Degree: </strong>{edu.degree}
                </p>
                <p>
                  <strong>Field Of Study: </strong>{edu.fieldofstudy}
                </p>
                <p>
                  <strong>Description: </strong>Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dignissimos placeat, dolorum
                  ullam ipsam, sapiente suscipit dicta eius velit amet
                  aspernatur asperiores modi quidem expedita fugit.
                </p>
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

AboutProfile.propTypes = {
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps)(AboutProfile);
