import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <div className='card'>
    <div class='row'>
      <div class='col s2 center'>
        <div class='imgcontainer'>
          <Link to={`/profile/${user}`}>
            <img src={avatar} alt='pp' className='profileImg' />
            <p className='user_name'>{name}</p>
          </Link>
        </div>
      </div>
      <div class='col s10 card-content'>
        <p>{text}</p>
        <p className='post-date'>
          commented on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>

        {!auth.loading && user === auth.user._id && (
          <button
            onClick={e => deleteComment(postId, _id)}
            type='button'
            className='btn red right'
          >
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
