import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='container'>
      <div className='center '>
        <h1 class='siteName'>Thought Stadium</h1>
        <div class='card-panel  lime landingCard'>
          <h4 class='white-text flow-text '>
            A new way to share Idea, Thought, Quartation and your feeling to the
            world that might change the way we living.
          </h4>
        </div>
      </div>

      <div className='center '>
        <a
          href='/register'
          class='waves-effect waves-light btn-large orange darken-3 landingbtn'
        >
          Sign Up
        </a>
        <a
          href='/login'
          class='waves-effect waves-light btn-large orange darken-3 landingbtn'
        >
          Login
        </a>
      </div>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStatesToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStatesToProps)(Landing);
