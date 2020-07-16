import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfilesItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => (
  <div className='mycontainer'>
    <div className='box'>
      <img src={avatar} alt='pp' className='myimage' />
      <div className='card center cyan white-text textContainer'>
        <h2>{name}</h2>
        <p>
          {status}
          {company && <span> at {company}</span>}
        </p>
        <p>{location && <span>at {location}</span>}</p>

        <div>
          <ul className='row'>
            {skills.slice(0, 4).map((skill, index) => (
              <li key={index} className='skill-item'>
                <i className='fas fa-check'></i>
                {skill}
              </li>
            ))}
          </ul>

          <Link
            to={`/profile/${_id}`}
            className='btn-large purple darken-3  white-text '
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  </div>
);

ProfilesItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfilesItem;
