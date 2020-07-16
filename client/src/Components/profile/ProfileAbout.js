import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <div className='card green center white-text'>
    {bio && (
      <Fragment>
        <h2 className='orange'>{name.trim().split(' ')[0]}'s Bio</h2>
        <p className='flow-text'>{bio}</p>
        <div className='line'></div>
      </Fragment>
    )}

    <h2 className='pink'>Skill Set</h2>
    <div className='skillsContainer'>
      {skills.map((skill, index) => (
        <div key={index} className='skill-item'>
          <i className='fas fa-check '></i>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
