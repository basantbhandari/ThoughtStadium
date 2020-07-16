import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <div className='center deep-orange editProfileHeader '>
        <h1>Create Your Profile</h1>
        <p>
          <i className='fas fa-user'></i> Let's get some information to make
          your profile stand out
        </p>
      </div>

      <form onSubmit={e => onSubmit(e)}>
        <div className='card-panel'>
          <div className='input-field col s12'>
            <select name='status' value={status} onChange={e => onChange(e)}>
              <option value='0'>* Select Professional Status</option>
              <option value='Developer'>Developer</option>
              <option value='Junior Developer'>Junior Developer</option>
              <option value='Senior Developer'>Senior Developer</option>
              <option value='Manager'>Manager</option>
              <option value='Student or Learning'>Student or Learning</option>
              <option value='Instructor'>Instructor or Teacher</option>
              <option value='Intern'>Intern</option>
              <option value='Other'>Other</option>
            </select>
            <small className='form-text'>
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className='input-field col s12 contmy'>
            <input
              type='text'
              placeholder='Company'
              name='company'
              value={company}
              onChange={e => onChange(e)}
            />
            <small>Could be your own company or one you work for</small>
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              placeholder='Website'
              name='website'
              value={website}
              onChange={e => onChange(e)}
            />
            <small>Could be your own or a company website</small>
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
              onChange={e => onChange(e)}
            />
            <small>City and state suggested (eg. kathmandu, Nepal)</small>
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              placeholder='* Skills'
              name='skills'
              value={skills}
              onChange={e => onChange(e)}
            />
            <small>
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              placeholder='Github Username'
              name='githubusername'
              value={githubusername}
              onChange={e => onChange(e)}
            />
            <small>
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div className='input-field col s12'>
            <textarea
              className='materialize-textarea'
              rows='10'
              cols='60'
              placeholder='A short bio of yourself'
              data-length='120'
              name='bio'
              value={bio}
              onChange={e => onChange(e)}
            ></textarea>
            <small>Tell us a little about yourself</small>
          </div>
          <div className='card-panel teal lighten-2'>
            <div>
              <button
                onClick={() => toggleSocialInputs(!displaySocialInputs)}
                type='button'
                className='btn btn-light green white-text'
              >
                Add Social Network Links
              </button>
            </div>
            {displaySocialInputs && (
              <div className='card panel socialmedia'>
                <div class='row card panel green z-depth-2 '>
                  <div class='col s1 center'>
                    <i className='fab fa-twitter fa-2x iconmg white circle'></i>
                  </div>
                  <div class='col s11 center blue'>
                    <input
                      type='text'
                      placeholder='Twitter URL'
                      name='twitter'
                      value={twitter}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>

                <div class='row card panel green z-depth-2 '>
                  <div class='col s1 center'>
                    <i className='fab fa-facebook fa-2x iconmg white circle'></i>
                  </div>
                  <div class='col s11 center blue'>
                    <input
                      type='text'
                      placeholder='Facebook URL'
                      name='facebook'
                      value={facebook}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>

                <div class='row card panel green  z-depth-2'>
                  <div class='col s1 center'>
                    <i className='fab fa-youtube fa-2x iconmg white circle'></i>
                  </div>
                  <div class='col s11 center blue'>
                    <input
                      type='text'
                      placeholder='YouTube URL'
                      name='youtube'
                      value={youtube}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>

                <div class='row card panel green z-depth-2 '>
                  <div class='col s1 center'>
                    <i className='fab fa-linkedin fa-2x iconmg white circle'></i>
                  </div>
                  <div class='col s11 center blue'>
                    <input
                      type='text'
                      placeholder='Linkedin URL'
                      name='linkedin'
                      value={linkedin}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>

                <div class='row card panel green z-depth-2 '>
                  <div class='col s1 center'>
                    <i className='fab fa-instagram fa-2x iconmg white circle'></i>
                  </div>
                  <div class='col s11 center blue'>
                    <input
                      type='text'
                      placeholder='Instagram URL'
                      name='instagram'
                      value={instagram}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='card-panel red '>
          <div class='row'>
            <div class='col s6'>
              <div class='red center'>
                <button
                  class='btn-flat waves-effect btn-large waves-light white-text'
                  type='submit'
                  name='action'
                >
                  Submit
                </button>
              </div>
            </div>
            <div class='col s6'>
              <div class='red center'>
                <Link
                  className=' btn-flat btn-large waves-effect waves-light white-text  '
                  to='/dashboard'
                >
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
