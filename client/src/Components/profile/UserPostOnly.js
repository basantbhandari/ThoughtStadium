import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';

const UserPostOnly = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
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
            Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
          </p>
          {showActions && (
            <Fragment>
              <button
                onClick={e => addLike(_id)}
                type='button'
                className='btn btn-m'
              >
                <i className='fas fa-thumbs-up'> </i>
                {likes.length > 0 && <span>{likes.length}</span>}
              </button>
              <button
                onClick={e => removeLike(_id)}
                type='button'
                className='btn btn-m'
              >
                <i className='fas fa-thumbs-down'> </i>
              </button>
              <Link to={`/post/${_id}`} className='btn btn-m'>
                Discussion
                {comments.length >= 0 && (
                  <span className='comment-count'>{comments.length}</span>
                )}
              </Link>
              {!auth.loading && user === auth.user._id && (
                <button
                  onClick={e => deletePost(_id)}
                  type='button'
                  className='btn btn-m red'
                >
                  <i className='fas fa-times'></i>
                </button>
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

UserPostOnly.defaultProps = {
  showActions: true,
};

UserPostOnly.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  UserPostOnly
);
