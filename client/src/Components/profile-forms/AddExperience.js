import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);
  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <Fragment>
      <div className='center deep-orange editProfileHeader '>
        <h1>Add An Event</h1>
        <p>
          <i className='fas fa-code-branch'></i> Add any moment that you have
          had in the past you want to share
        </p>
      </div>

      <div className='card-panel white'>
        <form
          onSubmit={e => {
            e.preventDefault();
            addExperience(formData, history);
          }}
        >
          <div className='input-field col s12'>
            <input
              type='text'
              placeholder='* Moment Title'
              name='title'
              value={title}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              placeholder='* Scene'
              name='company'
              value={company}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='input-field col s12'>
            <p>From Date</p>
            <input
              type='text'
              class='datepicker purple accent-2'
              name='from'
              value={from}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <p>
              <label>
                <input
                  type='checkbox'
                  class='filled-in'
                  name='current'
                  value={current}
                  checked={current}
                  onChange={e => {
                    setFormData({ ...formData, current: !current });
                    toggleDisabled(!toDateDisabled);
                  }}
                />
                <span>Still happning</span>
              </label>
            </p>
          </div>
          <div className='input-field col s12'>
            <p>To Date</p>
            <input
              type='text'
              class='datepicker purple accent-2'
              name='to'
              value={to}
              onChange={e => onChange(e)}
              disabled={toDateDisabled ? 'disabled' : ''}
            />
          </div>

          <div className='input-field col s12'>
            <textarea
              name='description'
              className='materialize-textarea'
              cols='30'
              rows='5'
              placeholder='Moment Description'
              value={description}
              onChange={e => onChange(e)}
            ></textarea>
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
                    <i class='material-icons right'>send</i>
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
      </div>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
