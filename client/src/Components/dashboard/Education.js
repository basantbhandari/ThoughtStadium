import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        {' '}
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </td>
      <div
        className='btn right waves-effect waves-light red darken-2'
        onClick={() => deleteEducation(edu._id)}
      >
        delete
      </div>
    </tr>
  ));

  return (
    <div className='card-panel teal lighten-2'>
      <h2 className='btn btn-large white  black-text'>Education Credentials</h2>
      <table className='striped highlight centered responsive-table'>
        <tHead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th />
          </tr>
        </tHead>
        <tbody>{educations}</tbody>
      </table>
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
