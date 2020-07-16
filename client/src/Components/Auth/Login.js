import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='row'>
      <div className='col s12 14 offset-14'>
        <div className='card'>
          <div className='card-action purple accent-4 white-text'>
            <i className='fas fa-user'></i>
            <h3 className='center'>Sign in to Your Account</h3>
          </div>
          <div className='card-content'>
            <div className='form-field'>
              <form onSubmit={e => onSubmit(e)}>
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
                <div className='center-align'>
                  <button
                    class='btn waves-effect waves-light lime btn-large '
                    type='submit'
                    name='action'
                  >
                    Submit
                    <i class='material-icons right'>send</i>
                  </button>
                </div>
              </form>
              <h5 className='loginBtn'>
                Don't have an account? <a href='/register'>Sign Up</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
