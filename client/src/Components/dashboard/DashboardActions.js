import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = props => {
  return (
    <div className='card-panel teal lighten-2 center'>
      <Link
        to='/edit-profile'
        className='btn btn-large dashboardbtnitem purple accent-4 waves-effect waves-light'
      >
        <i className='fas fa-user-circle purple accent-4'></i> Edit Profile
      </Link>
      <Link
        to='/add-experience'
        className='btn btn-large dashboardbtnitem purple accent-4 waves-effect waves-light'
      >
        <i className='fab fa-black-tie purple accent-4'></i> Add Event
      </Link>
      <Link
        to='/add-education'
        className='btn btn-large dashboardbtnitem purple accent-4 waves-effect waves-light'
      >
        <i className='fas fa-graduation-cap purple accent-4'></i> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
