import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('password do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };
  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='row'>
      <div className='col s12 14 offset-14'>
        <div className='card'>
          <div className='card-action amber darken-3 white-text'>
            <i className='fas fa-user'></i>
            <h3 className='center'>Create Your Account</h3>
          </div>
          <div className='card-content'>
            <div className='form-field'>
              <form onSubmit={e => onSubmit(e)}>
                <div className='input-field col s12 loginFormField'>
                  <i className='fas fa-signature prefix'></i>
                  <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={e => onChange(e)}
                    class='validate'
                  />
                  <label htmlFor='username'>username</label>
                </div>

                <div className='input-field col s12 loginFormField'>
                  <i className='fas fa-envelope-square prefix'></i>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                    class='validate'
                  />
                  <label htmlFor='email'>Email Address</label>
                </div>
                <p class='center'>
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email.
                </p>

                <div className='input-field col s12 loginFormField'>
                  <i className='fas fa-key prefix'></i>

                  <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}
                    class='validate'
                  />
                  <label htmlFor='Password'>Password</label>
                </div>

                <div className='input-field col s12 loginFormField'>
                  <i className='fas fa-key prefix'></i>

                  <input
                    type='password'
                    name='password2'
                    value={password2}
                    onChange={e => onChange(e)}
                    class='validate'
                  />
                  <label htmlFor='Password'>Confirm Password</label>
                </div>

                <div className='center-align'>
                  <button
                    class='btn waves-effect waves-light amber btn-large '
                    type='submit'
                    name='action'
                  >
                    Submit
                    <i class='material-icons right'>send</i>
                  </button>
                </div>
              </form>
              <h5 className='loginBtn'>
                Already have an account? <a href='/login'>Sign In</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.prototype = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
