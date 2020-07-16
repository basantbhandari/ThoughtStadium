import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  return (
    <div className='card'>
      <div className=' card white-text purple center '>
        <h3>Leave your feeling</h3>
      </div>

      <div className='center commentform'>
        <form
          className='col s12'
          onSubmit={e => {
            e.preventDefault();
            addComment(postId, { text });
            setText('');
          }}
        >
          <div class='row '>
            <div class='input-field col s12 '>
              <textarea
                id='textarea1'
                class='materialize-textarea'
                name='text'
                cols='30'
                rows='5'
                value={text}
                onChange={e => setText(e.target.value)}
                required
              ></textarea>
              <label for='textarea1'>Create a Thought</label>
            </div>
          </div>
          <button
            class='btn-large waves-effect waves-light '
            type='submit'
            name='action'
          >
            Submit
            <i class='material-icons right'>send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
