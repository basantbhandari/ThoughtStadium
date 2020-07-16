import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);
  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <Fragment>
      <div className='center deep-orange editProfileHeader '>
        <h1>Add Your Education</h1>
        <p>
          <i className='fas fa-code-branch'></i>Add any school or seminar you
          attanded
        </p>
      </div>

      <div className='card-panel white'>
        <form
          onSubmit={e => {
            e.preventDefault();
            addEducation(formData, history);
          }}
        >
          <div className='input-field col s12'>
            <input
              type='text'
              placeholder='* school or seminar'
              name='school'
              value={school}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              placeholder='* Degree or Certificate'
              name='degree'
              value={degree}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              placeholder='Field of study'
              name='fieldofstudy'
              value={fieldofstudy}
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
              placeholder='Learning experience'
              value={description}
              onChange={e => onChange(e)}
            ></textarea>
          </div>

          <div className='card-panel pink '>
            <div class='row'>
              <div class='col s6'>
                <div class='pink center'>
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
                <div class='pink center'>
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
