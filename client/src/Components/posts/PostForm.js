import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className='center'>
      <div className='card-panel gray'>
        <div class='row'>
          <form class='col s12'>
            <div class='row'>
              <div class='input-field col s12'>
                <i class='material-icons prefix'>mode_edit</i>
                <textarea
                  id='icon_prefix2'
                  class='materialize-textarea'
                  name='text'
                  value={text}
                  onChange={e => setText(e.target.value)}
                  required
                ></textarea>
                <label for='icon_prefix2'>Create a post</label>
              </div>
            </div>
            <button
              class='btn waves-effect waves-light'
              type='submit'
              name='action'
            >
              Submit
              <i class='material-icons right'>send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
